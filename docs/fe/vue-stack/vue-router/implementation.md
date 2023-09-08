# 实现原理

## hash 模式

改变 hash：

```js
window.location.hash = "/path";
```

监听 `hashchange` 事件：

```js
window.addEventListener("hashchange", function () {
  // hash改变时切换页面
});
```

## HTML5 模式

改变 URL：

```js
window.history.pushState(state, title[, url]);
window.history.replaceState(stateObj, title[, url]);
window.history.go(delta);
window.history.back();
window.history.forward();
```

监听 `popstate` 事件：

```js
window.addEventListener("popstate", function () {
  // URL改变时切换页面
});
```
