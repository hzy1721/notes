# 响应式数组

## 重写数组方法

```js
const arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(method => {
  const originMethod = Array.prototype[method];
  arrayInstrumentations[method] = function (...args) {
    // this 是代理对象，先在代理对象中查找，将结果存储到 res 中
    let res = originMethod.apply(this, args);
    if (res === false || res === -1) {
      // res 为 false 说明没找到，通过 this.raw 拿到原始数组，再去其中查找，并更新 res 值
      res = originMethod.apply(this.raw, args);
    }
    // 返回最终结果
    return res;
  };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(method => {
  // 取得原始 push 方法
  const originMethod = Array.prototype[method];
  // 重写
  arrayInstrumentations[method] = function (...args) {
    // 在调用原始方法之前，禁止追踪
    shouldTrack = false;
    // push 方法的默认行为
    const res = originMethod.apply(this, args);
    // 在调用原始方法之后，恢复原来的行为，即允许追踪
    shouldTrack = true;
    return res;
  };
});
```
