# 内置函数

## setInterval

```js
const map = new Map();

function mySetInterval(func, delay) {
  const intervalId = setTimeout(setTimer, delay);
  map.set(intervalId, intervalId);
  function setTimer() {
    func();
    const timeoutId = setTimeout(() => {
      setTimer();
    }, delay);
    map.set(intervalId, timeoutId);
  }
  return intervalId;
}

function myClearInterval(id) {
  clearTimeout(map.get(id));
}
```

## bind

```js
Function.prototype.myBind = function (thisArg, ...bindArgs) {
  if (typeof this !== 'function') {
    throw new TypeError('Bind must be called on a function');
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
