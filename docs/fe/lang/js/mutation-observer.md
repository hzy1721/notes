# MutationObserver

`MutationObserver` 观察 DOM 元素，检测到更改时触发回调。

创建：

```js
const observer = new MutationObserver(callback);
```

观察 DOM 元素：

```js
observer.observe(node, config);
```

- `config`：
  - `childList`：直接子节点
  - `subtree`：所有后代
  - `attributes`：元素属性
  - `attributeFilter`：属性名数组
  - `characterData`：`node.data`
  - `attributeOldValue`：将属性的旧值也传给回调，否则只传新值
  - `characterDataOldValue`：将 `node.data` 的旧值也传给回调，否则只传新值
