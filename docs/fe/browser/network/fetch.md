# Fetch API

XHR 更强大、更灵活的替代品，浏览器、Node 17.5+ 原生支持。

## fetch()

## Request

## Response

## AbortController

中止 fetch 请求。

```js
let controller = undefined;

function fetchData() {
  // 创建 AbortController 实例
  controller = new AbortController();
  // signal 传入 fetch 的 options 参数
  const { signal } = controller;
  fetch('xxx', { signal }).catch(console.error);
}

setTimeout(() => {
  if (controller) {
    // 调用 abort 方法中止 fetch 请求
    // reject 一个 DOMException，名为 AbortError
    controller.abort();
  }
}, 1000);

fetchData();
```
