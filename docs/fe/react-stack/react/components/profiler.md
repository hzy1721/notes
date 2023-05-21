# Profiler

测量组件树的渲染性能。

```jsx
<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>
```

prop：

- `id`：组件树的 ID
- `onRender`：组件树内组件每次渲染时触发，参数为渲染的性能信息

警告：

- `<Profiler>` 有额外的性能开销，生产环境默认关闭，需要修改打包配置手动开启

onRender：

```js
function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // Aggregate or log render timings...
}
```

- `id`：组件树 ID
- `phase`：组件生命周期阶段，有 3 种取值
  - `'mount'`：第一次渲染挂载
  - `'update'`：后续渲染更新
  - `'nested-update'`：
- `actualDuration`：组件树更新耗时 (ms)
  - 通常第一次渲染耗时最长，后续只需要重新渲染部分组件，耗时会少很多
- `baseDuraction`：整个组件树渲染耗时的估计值 (ms)
  - 累加所有组件最近一次的渲染耗时，作为耗时的上界
  - 与 `actualDuration` 比较，观察缓存是否有效果
- `startTime`：渲染开始的时间戳
- `endTime`：渲染结束的时间戳 (commit)
  - 同一批 commit 的组件树们 `endTime` 相同
