# 手写 bind

```js
Function.prototype.myBind = function (thisArg, ...bindArgs) {
  if (typeof this !== "function") {
    throw new TypeError("Bind must be called on a function");
  }
  const func = this;
  return function (...args) {
    if (new.target) {
      return new func(...bindArgs.concat(args));
    }
    return func.apply(thisArg, bindArgs.concat(args));
  };
};
```
