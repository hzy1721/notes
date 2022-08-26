# 响应式实现

## 响应式数据

```js
// 全局变量保存对象属性的依赖集合
const bucket = new WeakMap();
const ITERATE_KEY = Symbol();

const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key, receiver) {
    // 把副作用函数添加到 target[key] 的依赖集合中
    track(target, key);
    // 返回属性值
    return Reflect.get(target, key, receiver);
  },
  has(target, key) {
    track(target, key);
    return Reflect.has(target, key);
  },
  ownKeys(target) {
    // 将副作用函数与 ITERATE_KEY 关联
    track(target, ITERATE_KEY);
    return Reflect.ownKeys(target);
  },
  // 拦截设置操作
  set(target, key, newVal, receiver) {
    // 设置属性值
    const res = Reflect.set(target, key, newVal, receiver);
    // 把副作用函数从依赖集合中取出并执行
    trigger(target, key);
    return res;
  },
});

function track(target, key) {
  // 没有 activeEffect，直接 return
  if (!activeEffect) {
    return;
  }
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

function trigger(target, key) {
  // 取出 target 对应的 Map
  const depsMap = bucket.get(target);
  // 不存在直接 return
  if (!depsMap) {
    return;
  }
  // 取出 target[key] 对应的 Set
  const effects = depsMap.get(key);
  // 取出与 ITERATE_KEY 相关联的副作用函数
  const iterateEffects = depsMap.get(ITERATE_KEY);

  // 新建一个集合保存需要执行的副作用函数，避免无限递归循环
  const effectsToRun = new Set();
  // 将与 key 相关联的副作用函数添加到 effectsToRun
  effects &&
    effects.forEach((effectFn) => {
      // 如果与当前正在执行的副作用函数相同，则不触发执行
      if (effectFn !== activeEffect) {
        effectsToRun.add(effectFn);
      }
    });
  // 将与 ITERATE_KEY 相关联的副作用函数也添加到 effectsToRun
  iterateEffects &&
    iterateEffects.forEach((effectFn) => {
      if (effectFn !== activeEffect) {
        effectsToRun.add(effectFn);
      }
    });
  
  effectsToRun.forEach((effectFn) => {
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

## 注册副作用函数

```js
// 全局变量保存当前激活的副作用函数
let activeEffect;
// 副作用函数栈，实现 effect 嵌套
const effectStack = [];

function effect(fn, options = {}) {
  const effectFn = () => {
    // 调用 cleanup 完成清除工作，实现分支切换
    cleanup(effectFn);
    // 调用 effect 注册副作用函数时，把副作用函数赋值给 activeEffect
    activeEffect = effectFn;
    // 调用副作用函数前把当前副作用函数压入栈中
    effectStack.push(effectFn);
    // 将 fn 的执行结果保存到 res 中
    const res = fn();
    // 当前副作用函数执行完毕后，把当前副作用函数弹出栈
    effectStack.pop();
    // 并把 activeEffect 还原为之前的值
    activeEffect = effectStack[effectStack.length - 1];
    // 将 res 作为 effectFn 的返回值，实现懒计算
    return res;
  };
  // 把 options 挂载到 effectFn 上
  effectFn.options = options;
  // 存储所有与副作用函数相关的依赖集合
  effectFn.deps = [];
  // 只有非 lazy 的时候才执行
  if (!options.lazy) {
    // 执行副作用函数
    effectFn();
  }
  // 将副作用函数作为返回值返回
  return effectFn;
}

function cleanup(effectFn) {
  // 遍历 effectFn.deps 数组
  for (let i = 0; i < effectFn.deps.length; ++i) {
    // deps 是依赖集合
    const deps = effectFn.deps;
    // 把 effectFn 从依赖集合中移除
    deps.delete(effectFn);
  }
  // 最后需要重置 effectFn.deps 数组
  effectFn.deps.length = 0;
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
    jobQueue.forEach((job) => job());
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

## reactive 和 ref

```js
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      trigger(target, key);
      target[key] = value;
    },
  });
}

function ref(value) {
  const refObject = {
    get value() {
      track(refObject, "value");
      return value;
    },
    set value(newValue) {
      trigger(refObject, "value");
      value = newValue;
    },
  };
  return refObject;
}
```
