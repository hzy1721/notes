# setInterval

## 自定义间隔

```js
let nextId = 0;
const intervals = new Map();

function customInterval(fn, delay, period) {
  const id = nextId++;
  let timer = undefined;
  let count = 0;
  const launchTask = () => {
    timer = setTimeout(() => {
      fn();
      launchTask();
    }, delay + period * count);
    intervals.set(id, timer);
    count += 1;
  };
  launchTask();
  return id;
}

function customClearInterval(id) {
  clearTimeout(intervals.get(id));
}
```
