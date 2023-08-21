# 版本变迁

## React 18.0 (2022.03)

新特性：

1. 并发渲染 (Concurrent Rendering)
   - 只对新特性开启，包括 Transition、Suspense、streaming SSR
   - 渲染是可中断的，避免耗时更新阻塞 UI
2. Transition
   - 为了区分紧急更新 (urgent) 和非紧急更新 (transition)
   - 用 startTransition 包裹不紧急的更新，可以被紧急更新打断
   - transition 被中断后，React 会丢弃已经渲染的部分，恢复后直接渲染最新的状态
   - useTransition 返回 isPending 和 startTransition，标识是否正在等待渲染
3. Suspense
   - 支持服务端和并发渲染
   - 可以在框架中使用，比如 Next/Remix/Hydrogen/Relay
4. React DOM
   - Client
     - react-dom/client
     - createRoot 代替 ReactDOM.render
     - hydrateRoot 代替 ReactDOM.hydrate
     - 新参数 onRecoverableError
   - Server
     - react-dom/server
     - 支持 streaming Suspense
     - renderToPipeableStream：Node 环境 streaming
     - renderToReadableStream：Deno/Cloudflare 环境 streaming
     - renderToString 不再推荐使用
5. 自动合并 (Auto Batching)
   - 合并多次状态更新为一次 re-render
   - 旧版本：只合并事件处理函数内的更新
   - 新版本：所有更新都会自动合并
6. StrictMode
   - 组件第一次挂载时，会额外 unmount 和 mount 一次
   - 第二次 mount 使用与第一次 mount 相同的状态
   - 为了测试未来的新功能
7. 新的 Hooks
   - useId
     - 生成 client 和 server 一致的唯一 ID
     - 主要用于组件库生成 a11y ID
   - useDeferredValue
     - deferredValue 更新导致的 re-render 可以被推迟和中断，避免阻塞 UI
   - useSyncExternalStore
     - 并发地同步外部数据源，省去了自己用 useEffect 同步数据
     - 主要用于库，而不是应用
   - useInsertionEffect
     - DOM 更新后，layout effect 执行前触发
     - 用于 css-in-js 库
   - useTransition
     - 上面提到过

## React 17.0

没有新特性，对 React 做了一些改进，有一些 breaking changes。

- 使 React 更容易升级
- 可以组合不同版本 React 输出的组件树
- 可以把 React 应用更容易地嵌入到其他技术栈的应用中

破坏性更新：

- 与浏览器行为对齐
- 移除事件池 (event pooling)

bug 修复：

- forwardRef 和 memo 不允许返回 undefined

## React 16.13

- 新 warning
  - 渲染时更新其他组件
  - style 规则冲突
  - string ref
  - React.createFactory
  - ReactDOM.unstable_createPortal
- warning 信息添加组件堆栈 (stack trace)
- bug 修复
  - 严格模式
    - shouldComponentUpdate 执行两次
    - 废弃 context API 的 warning 信息会包含组件堆栈
  - disabled 的 button 不会触发 onMouseEnter
  - ReactDOM 添加 version 导出

## React 16.8

- 支持 hooks

## React 16.7

- bug 修复

## React 16.6

- React.memo
- React.lazy
- 新 context API
