# 缓存

组件每次 re-render 都会重新执行函数内语句，并递归执行子组件函数，有时部分语句没必要重新执行，可以添加依赖数组或判断函数来决定是否重新渲染。

## useMemo

缓存函数计算结果，只有依赖数组变化时才重新计算。

- 避免**昂贵计算操作**
- 避免**接收该值为 prop** 的子组件 re-render

```js
const cachedValue = useMemo(calculateValue, dependencies);
```

## useCallback

缓存函数定义，只有依赖数组变化时才重新定义函数。

- 避免**接收该函数为 prop** 的子组件 re-render

```js
const cachedFn = useCallback(fn, dependencies);
```

## memo

跳过 prop 变化导致的 re-render。

- 避免 **prop 未变化**子组件的 re-render
  - React 默认父组件 re-render 时，所有子组件都 re-render
- 通过自定义比较函数，跳过**指定情况**下的 re-render

```js
const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
```
