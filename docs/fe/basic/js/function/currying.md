# 柯里化

柯里化 (Currying) 把函数 `f(a, b, c)` 转换为 `f(a)(b)(c)`。

通过柯里化可以方便地创建偏函数 (Partial function)。

一种柯里化的实现 (函数参数个数确定)：

```ts
function curry(fn: Function): Function {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...rest) {
      return curried.apply(this, args.concat(rest));
    };
  };
}
```

可以使用 lodash 库的 `_.curry` 函数：

```js
log(new Date(), 'DEBUG', 'some debug'); // log(a, b, c)

log = _.curry(log);
log(new Date())('DEBUG')('some debug'); // log(a)(b)(c)

let logNow = log(new Date());
logNow('INFO', 'message'); // [HH:mm] INFO message
let debugNow = logNow('DEBUG');
debugNow('message'); // [HH:mm] DEBUG message
```
