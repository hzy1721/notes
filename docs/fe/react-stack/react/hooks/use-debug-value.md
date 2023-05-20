# useDebugValue

给自定义 hook 添加 React DevTools 的 label。默认显示状态值。

```js
useDebugValue(value, format?)
```

参数：

- `value`：label 内容
- `format`：格式化函数，参数是 `value`，返回格式化后的内容

用途：

- 给共享库的复杂 hook 添加 label 信息，便于调试
