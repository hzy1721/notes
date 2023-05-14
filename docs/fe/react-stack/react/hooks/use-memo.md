# useMemo

组件每次 re-render 都会重新执行函数内语句，并递归执行子组件函数，有时部分语句没必要重新执行，可以添加依赖数组或判断函数来决定是否重新渲染。

缓存函数计算结果，只有依赖数组变化时才重新计算。

- 避免**昂贵计算操作**
- 避免**接收该值为 prop** 的子组件 re-render

```js
const cachedValue = useMemo(calculateValue, dependencies);
```
