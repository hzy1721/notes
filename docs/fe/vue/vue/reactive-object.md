# 对象响应式方案

## 全局变量

```js
// 全局变量保存对象属性的依赖集合
const bucket = new WeakMap();
// 追踪和触发 for...in 遍历的 key
const ITERATE_KEY = Symbol();
// 操作类型
const TriggerType = {
  SET: 'SET',
  ADD: 'ADD',
  DELETE: 'DELETE',
};
// 避免循环创建 reactive
const reactiveMap = new Map();
// 是否进行追踪。默认值为 true，即允许追踪
let shouldTrack = true;
const MAP_KEY_ITERATE_KEY = Symbol();
```

## reactive 实现

```js
function reactive(obj) {
  const existProxy = reactiveMap.get(obj);
  if (existProxy) return existProxy;
  const proxy = createReactive(obj);
  reactiveMap.set(obj, proxy);
  return proxy;
}

function shallowReactive(obj) {
  return createReactive(obj, true);
}

function readonly(obj) {
  return createReactive(obj, false, true);
}

function shallowReadonly(obj) {
  return createReactive(obj, true, true);
}

function createReactive(obj, isShallow = false, isReadonly = false) {
  return new Proxy(data, {
    // 拦截读取操作
    get(target, key, receiver) {
      // 代理对象可以通过 raw 属性访问原始数据
      if (key === 'raw') {
        return target;
      }
      // 如果操作的目标对象是数组，并且 key 存在于 arrayInstrumentations 上，
      // 那么返回定义在 arrayInstrumentations 上的值
      if (Array.isArray(target) && arrayInstrumentations.hasOwnProperty(key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      // 非只读并且 key 的类型不是 Symbol 才需要建立响应联系
      if (!isReadonly && typeof key !== 'symbol') {
        // 把副作用函数添加到 target[key] 的依赖集合中
        track(target, key);
      }
      // 得到原始值结果
      const res = Reflect.get(target, key, receiver);
      // 如果是浅响应，则直接返回原始值
      if (isShallow) {
        return res;
      }
      if (typeof res === 'object' && res !== null) {
        // 如果数据为只读，则调用 readonly 对值进行包装
        return isReadonly ? readonly(res) : reactive(res);
      }
      // 返回 res
      return res;
    },
    has(target, key) {
      track(target, key);
      return Reflect.has(target, key);
    },
    ownKeys(target) {
      // 如果操作目标 target 是数组，则使用 length 属性作为 key 并建立响应联系
      track(target, Array.isArray(target) ? 'length' : ITERATE_KEY);
      return Reflect.ownKeys(target);
    },
    // 拦截设置操作
    set(target, key, newVal, receiver) {
      // 如果是只读的，则打印警告信息并返回
      if (isReadonly) {
        console.warn(`属性 ${key} 是只读的`);
        return true;
      }
      // 先获取旧值
      const oldVal = target[key];
      // 如果属性不存在，说明是在添加属性，否则是设置已有属性
      const type = Array.isArray(target)
        ? // 如果代理目标是数组，则检测被设置的索引值是否小于数组长度
          // 如果是，则视作 SET 操作，否则是 ADD 操作
          Number(key) < target.length
          ? TriggerType.SET
          : TriggerType.ADD
        : Object.prototype.hasOwnProperty.call(target, key)
        ? TriggerType.SET
        : TriggerType.ADD;
      // 设置属性值
      const res = Reflect.set(target, key, newVal, receiver);
      // target === receiver.raw 说明 receiver 就是 target 的代理对象
      if (target === receiver.raw) {
        // 比较新值与旧值，只有当它们不全等，并且不都是 NaN 的时候才触发响应
        if (oldVal !== newVal && (oldVal === oldVal || newVal === newVal)) {
          // 把副作用函数从依赖集合中取出并执行
          trigger(target, key, type, newVal);
        }
      }
      return res;
    },
    deleteProperty(target, key) {
      // 如果是只读的，则打印警告信息并返回
      if (isReadonly) {
        console.warn(`属性 ${key} 是只读的`);
        return true;
      }
      // 检查被操作的属性是否是对象自己的属性
      const hasKey = Object.prototype.hasOwnProperty.call(target, key);
      // 使用 Reflect.deleteProperty 完成属性的删除
      const res = Reflect.deleteProperty(target, key);
      if (hasKey && res) {
        // 只有当被删除的属性是对象自己的属性并且成功删除时，才触发更新
        trigger(target, key, TriggerType.DELETE);
      }
      return res;
    },
  });
}
```

## track 函数

```js
function track(target, key) {
  // 没有 activeEffect，直接 return
  if (!activeEffect || !shouldTrack) return;
  // 取出 target 对应的 Map
  let depsMap = bucket.get(target);
  // 不存在就新建一个 Map
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }
  // 取出 target[key] 对应的 Set
  let deps = depsMap.get(key);
  // 不存在就新建一个 Set
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }
  // 把当前激活的副作用函数添加到依赖集合 deps 中
  deps.add(activeEffect);
  // 把当前副作用函数所在的依赖集合添加到 activeEffect.deps 数组中
  activeEffect.deps.push(deps);
}
```

## trigger 函数

```js
function trigger(target, key, type, newVal) {
  // 取出 target 对应的 Map
  const depsMap = bucket.get(target);
  // 不存在直接 return
  if (!depsMap) return;
  // 取出 target[key] 对应的 Set
  const effects = depsMap.get(key);
  // 新建一个集合保存需要执行的副作用函数，避免无限递归循环
  const effectsToRun = new Set();
  // 将与 key 相关联的副作用函数添加到 effectsToRun
  effects &&
    effects.forEach(effectFn => {
      // 如果与当前正在执行的副作用函数相同，则不触发执行
      if (effectFn !== activeEffect) {
        effectsToRun.add(effectFn);
      }
    });

  // 当操作类型为 ADD 或 DELETE 时，需要触发与 ITERATE_KEY 相关联的副作用函数重新执行
  if (
    type === TriggerType.ADD ||
    type === TriggerType.DELETE ||
    // 如果操作类型是 SET，并且目标对象是 Map 类型的数据，
    // 也应该触发那些与 ITERATE_KEY 相关联的副作用函数重新执行
    (type === TriggerType.SET &&
      Object.prototype.toString.call(target) === '[object Map]')
  ) {
    // 取出与 ITERATE_KEY 相关联的副作用函数
    const iterateEffects = depsMap.get(ITERATE_KEY);
    // 将与 ITERATE_KEY 相关联的副作用函数也添加到 effectsToRun
    iterateEffects &&
      iterateEffects.forEach(effectFn => {
        if (effectFn !== activeEffect) {
          effectsToRun.add(effectFn);
        }
      });
  }

  if (
    // 操作类型为 ADD 或 DELETE
    (type === TriggerType.ADD || type === TriggerType.DELETE) &&
    // 并且是 Map 类型的数据
    Object.prototype.toString.call(target) === '[object Map]'
  ) {
    // 则取出那些与 MAP_KEY_ITERATE_KEY 相关联的副作用函数并执行
    const iterateEffects = depsMap.get(MAP_KEY_ITERATE_KEY);
    iterateEffects &&
      iterateEffects.forEach(effectFn => {
        if (effectFn !== activeEffect) {
          effectsToRun.add(effectFn);
        }
      });
  }

  if (type === TriggerType.ADD && Array.isArray(target)) {
    // 当操作类型为 ADD 并且目标对象是数组时，应该取出并执行那些与 length 属性相关联的副作用函数
    // 取出与 length 相关联的副作用函数
    const lengthEffects = depsMap.get('length');
    // 将这些副作用函数添加到 effectsToRun 中，待执行
    lengthEffects &&
      lengthEffects.forEach(effectFn => {
        if (effectFn !== activeEffect) {
          effectsToRun.add(effectFn);
        }
      });
  }

  // 如果操作目标是数组，并且修改了数组的 length 属性
  if (Array.isArray(target) && key === 'length') {
    // 对于索引大于或等于新的 length 值的元素，
    // 需要把所有相关联的副作用函数取出并添加到 effectsToRun 中待执行
    depsMap.forEach((effects, key) => {
      if (key >= newVal) {
        effects.forEach(effectFn => {
          if (effectFn !== activeEffect) {
            effectsToRun.add(effectFn);
          }
        });
      }
    });
  }

  effectsToRun.forEach(effectFn => {
    // 如果副作用函数存在调度器，则调用该调度器，并将副作用函数作为参数传递
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn);
    } else {
      // 否则直接执行副作用函数
      effectFn();
    }
  });
}
```

## 连续多次修改只更新一次

```js
// 定义一个任务队列
const jobQueue = new Set();
// 使用 Promise.resolve() 创建一个 promise 实例，用于将一个任务添加到微任务队列
const p = Promise.resolve();

// 代表是否正在刷新队列
let isFlushing = false;
function flushJob() {
  // 如果队列正在刷新，则什么都不做
  if (isFlushing) {
    return;
  }
  // 设置为 true，代表正在刷新
  isFlushing = true;
  // 在微任务队列中刷新 jobQueue 队列
  p.then(() => {
    jobQueue.forEach(job => job());
  }).finally(() => {
    // 结束后重置 isFlushing
    isFlushing = false;
  });
}

effect(
  () => {
    console.log(obj.foo);
  },
  {
    scheduler(fn) {
      // 每次调度时，将副作用函数添加到 jobQueue 队列中
      jobQueue.add(fn);
      // 调用 flushJob 刷新队列
      flushJob();
    },
  }
);
```
