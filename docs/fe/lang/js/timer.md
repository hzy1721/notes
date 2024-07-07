# 定时器

```js
// 延时执行
const timeoutId = setTimeout(cb, delay);
clearTimeout(timeoutId);
// 间隔执行
const intervalId = setInterval(cb, delay);
clearInterval(intervalId);
```

- 回调函数为宏任务
- delay 为最小阈值，可能晚一些，默认为 0
- id 的类型在浏览器上是 number，Node 上是对象
  - 类型不重要，只需要知道这个 id 只用于传给 clearXXX 函数
- 浏览器和 Node 都支持
