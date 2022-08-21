# 计算属性

```js
function computed(getter) {
  // value 用来缓存上一次计算的值
  let value;
  // 用来标识是否需要重新计算值，为 true 意味着 “脏”，需要重新计算
  let dirty = true;

  // 把 getter 作为副作用函数，创建一个 lazy 的 effect
  const effectFn = effect(getter, {
    lazy: true,
    // 在调度器中将 dirty 重置为 true
    scheduler: () => {
      if (!dirty) {
        dirty = true;
        // 当计算属性依赖的响应式数据变化时，手动调用 trigger 函数触发响应
        trigger(obj, "value");
      }
    },
  });

  const obj = {
    // 当读取 value 时才执行 effectFn
    get value() {
      // 只有 “脏” 时才计算值，并把得到的值缓存到 value 中
      if (dirty) {
        value = effectFn();
        // 将 dirty 设置为 false，下一次访问直接使用缓存到 value 中的值
        dirty = false;
      }
      // 当读取 value 时，手动调用 track 函数进行追踪
      track(obj, "value");
      return value;
    },
  };

  return obj;
}
```
