# 概述

Web Worker 允许在新的线程中执行耗时操作，避免阻塞主线程和 UI。

支持：

- JS 函数

不支持：

- 访问 DOM
- 访问 window

## 三种类型

- dedicated worker
  - 只执行一个脚本
- shared worker
  - 多个脚本共享执行，通过端口通信
- service worker
  - 提供更好的离线体验
  - 后台请求数据、推送通知

## 全局变量和函数

web worker 访问不到主线程的 window，但也有自己的全局上下文。

| worker 类型 | 全局上下文                 |
| ----------- | -------------------------- |
| dedicated   | DedicatedWorkerGlobalScope |
| shared      | SharedWorkerGlobalScope    |
| service     | ServiceWorkerGlobalScope   |

部分 API 与主线程通用：

- atob()
- btoa()
- clearInterval()
- clearTimeout()
- dump() Non-standard
- queueMicrotask()
- setInterval()
- setTimeout()
- structuredClone()
- window.requestAnimationFrame (dedicated workers only)
- window.cancelAnimationFrame (dedicated workers only)

部分 API 为 worker 独有：

- WorkerGlobalScope.importScripts() (all workers)
- DedicatedWorkerGlobalScope.postMessage (dedicated workers only)

## 支持的 Web API

MDN：https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API#supported_web_apis

## 线程间通信

1. `postMessage` 发送消息
2. 监听 `message` 事件，`event.data` 是消息数据
   - 消息采用结构化拷贝
