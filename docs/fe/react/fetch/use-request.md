# useRequest

useRequest 是 ahooks 提供的网络请求 hook，也是这个库最知名的 hook。

## 安装

```sh
npm i ahooks
```

## 基本用法

自动请求：

```js
// 传入一个返回 Promise 的函数，hook 执行时自动发起请求
const { data, error, loading, mutate } = useRequest(getUsername);
```

- data: resolve 结果，请求失败为 undefined
- error: reject 结果，请求成功为 undefined
- loading: 是否正在执行请求

手动请求：

```js
// 不会自动请求，手动调用 run 函数发起请求
const { loading, run, runAsync } = useRequest(getUsername, {
  manual: true,
});
```

- run: 发起请求的同步函数，内部会自动捕获异常，在 onError 中处理
- runAsync：返回 Promise 的异步函数，需要自己处理异常

其他解构项：

- refresh：用上一次请求的参数重新发起请求
- refreshAsync：异步版本
- mutate：直接修改 data，类似 setState，尽快给用户反馈，而不是等请求完成后再更新页面
- cancel：忽略请求结果，用于组件卸载、上次请求还没完成又发起了新的请求
- params：当前调用请求函数的参数列表

## 配置项

自动/手动请求：

- manual：是否手动请求
- ready：是否准备好请求了，为 false 永远不会执行请求

生命周期：

- onBefore：请求之前
- onSuccess：请求成功
- onError：请求失败
- onFinally：请求完成

请求参数：

- defaultParams：调用请求函数的默认参数

延迟 loading：

- loadingDelay：延迟 loading 变为 true 的时间
  - 如果请求时间很短，就没必要展示 loading，可以避免页面闪烁

轮询：

- pollingInterval：定期执行请求，通过 cancel 停止轮询，通过 run/runAsync 启动轮询
- pollingErrorRetryCount：轮询错误重试次数
- pollingWhenHidden：页面不在可视范围内时是否停止轮询

自定义依赖：

- refreshDeps：依赖列表，依赖变化时自动调用 refresh，可用于代替 useEffect
- refreshDepsAction：依赖变化时的自定义行为

屏幕聚焦重新请求：

- refreshOnWindowFocus：是否在屏幕聚焦时重新请求
  - 监听 focus 和 visibilitychange
- focusTimespan：重新请求的间隔，默认 5000 ms

防抖：

- debounceWait：防抖间隔
- debounceLeading：是否在延迟开始前调用，默认 false
- debounceTrailing：是否在延迟结束后调用，默认 true
- debounceMaxWait：允许延迟的最多次数

节流：

- throttleWait：节流间隔
- throttleLeading：是否在间隔开始前调用，默认 true
- throttleTrailing：是否在间隔结束后调用，默认 true

缓存：

- cacheKey：缓存当前请求的数据（data、params），如果 key 不变化，就优先返回缓存数据，同时在后台发送新请求
  - 全局共享：每个 cacheKey 同时只会有一个请求，请求成功后所有内容都会随之同步
  - clearCache 函数：清除指定 cacheKey 的缓存数据
    - 支持字符串或字符串数组
    - 参数为空表示清除全部缓存
- staleTime：过期时间，该时间内请求缓存数据不会发起新请求
- cacheTime：缓存时间，超过该时间删除缓存
- setCache：自定义写入缓存逻辑，比如存储到 localStorage、IndexedDB
- getCache：自定义读取缓存逻辑

错误重试：

- retryCount：请求失败重试次数
