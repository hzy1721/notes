# useMemo

缓存计算结果。

```js
const cachedValue = useMemo(calculateValue, dependencies);
```

参数：

- `calculateValue`：计算函数，返回需要缓存的结果
- `dependencies`：同 `useEffect`

返回值：

- 缓存的计算结果

警告：

- 缓存会在部分情况下被清除，只用于性能优化，不要用于记住信息

用途：

- 跳过昂贵计算，比如 > 1ms
- 跳过 `memo` 子组件的重新渲染
