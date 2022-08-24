# 手写 setInterval

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
