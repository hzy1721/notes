# MessagePort

Electron 扩展了 MessagePort，使其能用于主进程和渲染进程间的通信。

- main <-> renderer
- renderer <-> renderer

| 进程     | Port            | Channel            |
| -------- | --------------- | ------------------ |
| main     | MessagePort     | MessageChannel     |
| renderer | MessagePortMain | MessageChannelMain |

1. 主进程或渲染进程创建 MessagePort
2. 通过 `ipcRenderer.postMessage` 或 `webContents.postMessage` 传递给另一方

## close 事件

新增 close 事件，当其中一方关闭 MessagePort，另一方会收到 close 事件。

```js
// main
port.on('close', handleChannelClose);
// renderer
port.addEventListener('close', handleChannelClose);
port.onclose(handleChannelClose);
```
