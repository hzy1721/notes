# 集合响应式方案

集合类型包括 `Set/Map` 和 `WeakSet/WeakMap`。

## 重写集合方法

```js
const mutableInstrumentations = {
  add(key) {
    // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象
    const target = this.raw;
    // 先判断值是否已经存在
    const hadKey = target.has(key);
    // 通过原始数据对象执行 add 方法添加具体的值
    const res = target.add(key);
    // 只有在值不存在的情况下，才需要触发响应
    if (!hadKey) {
      // 调用 trigger 函数触发响应，并指定操作类型为 ADD
      trigger(target, key, TriggerType.ADD);
    }
    // 返回操作结果
    return res;
  },
  delete(key) {
    const target = this.raw;
    const hadKey = target.has(key);
    const res = target.delete(key);
    // 当要删除的元素确实存在时，才触发响应
    if (hadKey) {
      trigger(target, key, TriggerType.DELETE);
    }
    return res;
  },
  get(key) {
    // 获取原始对象
    const target = this.raw;
    // 判断读取的 key 是否存在
    const hadKey = target.has(key);
    // 追踪依赖，建立响应联系
    track(target, key);
    // 如果存在，则返回结果
    if (hadKey) {
      const res = target.get(key);
      // 如果 res 仍然是可代理的数据，返回使用 reactive 包装后的响应式数据
      return typeof res === "object" && res !== null ? reactive(res) : res;
    }
  },
  set(key, value) {
    const target = this.raw;
    const hadKey = target.has(key);
    // 获取旧值
    const oldValue = target.get(key);
    // 获取原始数据，由于 value 可能是原始数据，此时 value.raw 不存在，直接使用 value
    const rawValue = value.raw || value;
    // 设置新值
    target.set(key, rawValue);
    // 如果不存在，则说明是 ADD 类型的操作，意味着新增
    if (!hadKey) {
      trigger(target, key, TriggerType.ADD);
    } else if (
      oldValue !== value ||
      (oldValue === oldValue && value === value)
    ) {
      // 如果存在，并且值变了，则是 SET 类型的操作，意味着修改
      trigger(target, key, TriggerType.SET);
    }
  },
};
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

function createReactive(obj, isShallow = false, isReadonly = false) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      // 如果读取的是 raw 属性，则返回原始数据对象 target
      if (key === "raw") return target;
      if (key === "size") {
        // 调用 track 函数建立响应联系
        track(target, ITERATE_KEY);
        // 如果读取的是 size 属性
        // 通过指定第三个参数 receiver 为原始对象 target 从而修复问题
        return Reflect.get(target, key, target);
      }
      // 返回定义在 mutableInstrumentations 对象下的方法
      return mutableInstrumentations[key];
    },
  });
}
```
