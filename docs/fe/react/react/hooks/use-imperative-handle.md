# useImperativeHandle

自定义 ref 绑定的内容。

```js
useImperativeHandle(ref, createHandle, dependencies?)
```

参数：

- `ref`：通过 `forwardRef` 拿到的 ref
- `createHandle`：返回暴露的 ref 值
- `dependencies`：`createHandle` 用到的所有响应式数据

返回值：

- `undefined`

用途：

- 不想暴露整个 DOM 节点，而是节点的部分方法
- 暴露自定义方法
