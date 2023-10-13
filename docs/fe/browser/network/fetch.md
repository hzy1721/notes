# fetch

## AbortController

中止 fetch 请求 (不支持 XHR)。

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
