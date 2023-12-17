# useCallback

缓存函数定义，等价于 `useMemo` 返回函数。

```js
const cachedFn = useCallback(fn, dependencies);
```

参数：

- `fn`：被缓存的函数
- `dependencies`：`fn` 用到的所有响应式数据

返回值：

- 缓存后的 `fn` 函数

用途：

- 跳过 `memo` 子组件的重新渲染
- 自定义 hook 返回的函数最好都用 `useCallback` 包裹，方便用户优化
