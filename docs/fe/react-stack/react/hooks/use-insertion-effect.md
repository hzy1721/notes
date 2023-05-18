# useInsertionEffect

React 更新 DOM 之前触发的 effect，通常用于插入动态 CSS。

```js
useInsertionEffect(setup, dependencies?)
```

参数/返回值：同 `useEffect`

警告：

- 不能在 `useInsertionEffect` 内更新状态
- 触发时 DOM 还未更新，ref 也没设置

用途：

- CSS-in-JS 库动态插入 `<style>`
  - 相比渲染时插入：
    - React 渲染是非阻塞的，渲染过程中每一帧浏览器都会重新计算样式，严重影响性能
  - 相比 `useLayoutEffect` 和 `useEffect`：
    - 确保其他 effect 触发时是最新的样式，否则会导致 effect 内的布局计算出现错误

```js
useInsertionEffect(() => {
  document.head.appendChild(styleElement);
});
```
