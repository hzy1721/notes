# useCallback

缓存函数定义，只有依赖数组变化时才重新定义函数。

- 避免**接收该函数为 prop** 的子组件 re-render

```js
const cachedFn = useCallback(fn, dependencies);
```
