# 渲染

## 虚拟 DOM

使用 JS 对象表示 UI 元素的数据，与真实 DOM 保持同步。

真实 DOM 的元素对应于虚拟 DOM 的 `VNode`。

```js
const vnode = {
  type: 'div',
  props: {
    id: 'hello'
  },
  children: [
    /* 更多 vnode */
  ]
}
```