# iframe

`<iframe>` (inline frame) 用于把另一个 HTML 页面嵌入到当前页面。

每个 `<iframe>` 都有自己的浏览上下文 (browsing context)。

常用属性：

- `src`：嵌入 HTML 页面的 URL
- `width`：宽度，以像素为单位，默认 300
- `height`：高度，以像素为单位，默认 150
- `allow`：允许访问的权限，比如地理位置、摄像头等
- `name`：iframe 的唯一名称

iframe 通信：

- `window.postMessage(message, targetOrigin[, transfer])`
- 监听 `message` 事件

### MessageEvent

<img src="./assets/MessageEvent.png" width="50%" />

属性：

- `data`：消息携带的数据
- `origin`：消息发送方的源
- `lastEventID`：事件的唯一 ID
- `source`：发送方窗口的引用
