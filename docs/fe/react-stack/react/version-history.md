# 版本变迁

## React 18.0

- 自动合并 (auto batching)
- transition
- suspense 支持服务端
- React DOM 新 API
- 严格模式新行为
- 新 hook
  - useId
  - useTransition
  - useDeferredValue
  - useSyncExternalStore
  - useInsertionEffect

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
