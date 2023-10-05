# 防抖节流

浏览器部分事件触发频率很高，往往事件处理函数只需要较低的执行频率，因此在函数内部通过定时器控制执行时机。

有 2 种执行模式，每种模式有 `leading/trailing` 2 种实现方式：

- 防抖 (debounce)
  - `leading`：第一次触发执行一次，后续触发间隔小于阈值不执行
  - `trailing`：第一次触发不执行，直到空闲时间大于阈值执行一次
- 节流 (throttle)
  - `leading`：第一次触发执行一次，距离上次执行的间隔小于阈值不执行
  - `trailing`：第一次触发不执行，一个阈值时间后执行一次，中间触发忽略

## 防抖

- `leading`

  - 定时器设置为：阈值时间后定时器设为 `null`
  - 如果定时器为 `null`，说明定时器到期、间隔足够长，则执行一次
  - 每次调用都销毁、重新创建定时器

```js
function debounce(func, wait = 0) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
    }, wait);
  };
}
```

- `trailing`
  - 定时器设置为：阈值时间后执行一次
  - 每次调用都销毁、重新创建定时器
  - 如果间隔足够长，则定时器到期、执行了一次；否则定时器还没到期就被重置

```js
function debounce(func, wait = 0) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
```

应用：

- `input`
- `resize`

## 节流

- `leading`

  - 定时器设置为：阈值时间后定时器设为 `null`
  - 如果定时器为 `null`，说明定时器到期、间隔足够长，可以执行一次

```js
function throttle(func, wait = 0) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  };
}
```

- `trailing`
  - 定时器设置为：阈值时间后执行一次并把定时器设为 `null`
  - 如果定时器为 `null`，说明距离上次创建定时器间隔足够长，可以再次创建

```js
function throttle(func, wait = 0) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
```

应用：

- `scroll`
- `input`

## requestAnimationFrame

- 相当于 `throttle(func, 16)`，精确度更高
- Lodash 的实现采用了该函数
- 适用于元素重绘操作，比如动画

## Lodash

```js
_.debounce(func, (wait = 0), [(options = {})]);
_.throttle(func, (wait = 0), [(options = {})]);
```
