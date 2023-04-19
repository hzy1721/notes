# Suspense

在组件加载完成之前显示替代内容。

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

- `children`：真正要渲染的内容
- `fallback`：替代内容
  - 接收任何 `ReactNode`，通常是一个轻量组件
  - 如果 `fallback` 也挂起了，会显示最近祖先 `Suspense` 的 `fallback`

目前 `<Suspense>` 只支持 2 种场景：

- 使用 `lazy` 懒加载组件代码
- 支持 `Suspense` 进行数据请求的框架，比如 `Next` 和 `Relay`
