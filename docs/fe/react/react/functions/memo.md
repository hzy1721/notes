# memo

跳过 prop 变化导致的 re-render。

- 避免 **prop 未变化**子组件的 re-render
  - React 默认父组件 re-render 时，所有子组件都 re-render
- 通过自定义比较函数，跳过**指定情况**下的 re-render

```js
const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
```
