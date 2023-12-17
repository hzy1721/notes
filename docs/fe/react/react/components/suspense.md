# Suspense

组件加载完成之前显示替代内容。

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

参数：

- `children`：真正要渲染的内容
- `fallback`：替代内容
  - 类型是 `ReactNode`，通常比较轻量
  - 如果 `children` 渲染时挂起，会显示最近的 `fallback`
  - 如果 `fallback` 也挂起了，会显示下一个最近的 `fallback`

警告：

- 组件第一次渲染时挂起，已有的渲染会被丢弃，React 等待组件加载完毕后重新开始渲染
- 组件后续渲染时挂起也会触发 `fallback`
  - `startTransition` 和 `useDeferredValue` 例外
  - transition 标记更新操作是可中断的，通常用于框架和路由库
  - deferred value 标记状态是可以推迟更新的，通常用于应用代码
- 隐藏已显示的内容时会清除 layout effect，再次显示时重新执行

用途：

- 组件加载完成之前显示替代内容
  - 目前 `<Suspense>` 只支持 2 种场景：
    - 支持 `Suspense` 进行数据请求的框架，比如 `Next` 和 `Relay`
    - 使用 `lazy` 懒加载组件代码
  - React 官方目前还不支持能触发 `<Suspense>` 的数据请求方法
- 同时隐藏和显示多个内容
  - 被 `<Suspense>` 包裹的多个组件，只要其中一个挂起，就会显示 `fallback`
  - 只有所有组件都加载完毕，才会同时显示所有加载好的内容
- 分阶段显示内容
  - 不同组件的挂起时间不同，可以嵌套和组合多个 `<Suspense>` 来优先显示加载好的内容
  - 内层 `<Suspense>` 只要 `fallback` 不挂起，就不会影响外层其他内容的显示
