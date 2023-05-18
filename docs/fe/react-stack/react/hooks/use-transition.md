# useTransition

更新状态时不阻塞 UI。

```js
const [isPending, startTransition] = useTransition();
```

返回值：

- `isPending`：是否有进行中的 transition
- `startTransition`：标记状态更新为 transition

```js
startTransition(scope);
```

参数：

- `scope`：包含立即执行的同步 `setState` 语句，React 会把这些状态更新标记为 transition

## transition

- 标记为 transition 的状态更新可以被其他状态更新中断，其他状态更新完毕后再重新开始 transition 的更新
- 如果有多个 transition 同时进行，React 会合并这些更新，未来版本可能移除该特性
- transition 不会触发 `<Suspense>` 的 `fallback`
- transition 不支持 `<input>` 文本的更新，因为这种操作必须是同步的
  - 可以声明两个状态，一个同步更新，另一个使用 transition 且与应用其他逻辑连接
  - 可以只声明一个状态，然后用 `useDeferredValue` 声明并使用一个推迟更新的状态

## 用途

- 在低端设备上保持 UI 的可响应性
  - 比如用户点击某个 tab 耗时很长，想要切换到另一个 tab
    - 使用 transition 可以立即开始切换到另一个 tab
    - 不使用 transition 需要等待前一个 tab 渲染完成后再切换到下一个
- 路由库的页面导航推荐使用 transition
  - 方便用户随意切换页面
  - 避免出现 loading 界面
