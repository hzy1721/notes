# useSyncExternalStore

订阅外部数据。

```js
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

参数：

- `subscribe`：订阅函数
  - 接收 `callback` 参数
  - 内部实现当数据变化时调用 `callback`，从而触发组件重新渲染
  - 返回 cleanup 函数，用于取消订阅
- `getSnapshot`：返回数据的快照，快照变化会导致组件重新渲染
- `getServerSnapshot`：返回数据的初始快照，用于 SSR

返回值：

- `snapshot`：数据的当前快照

警告：

- `subscribe` 的改变会导致取消和重新订阅
  - 如果使用组件内函数，会导致每次渲染都触发订阅
  - 需要使用组件外函数或 `useCallback` 缓存组件内函数
- `getSnapshot` 返回的快照不能每次都不一样，会造成无限循环
  - 比如返回一个对象字面量
- `getSnapshot` 返回的快照必须是不可变的
  - 修改快照不会导致真正的数据改变
  - 如果数据没有改变，每次调用返回的快照都相同
- 通常把外部数据的管理逻辑封装为一个自定义 hook

用途：

- 订阅外部数据 (可能随时间变化)
  - 第三方状态管理库
  - 浏览器 API
