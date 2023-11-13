# 进程间通信

主进程 main 负责 Node 和原生 API，渲染进程 renderer 负责前端 API，两者彼此隔离，需要通过进程间通信 (Inter-Process Communication, IPC) 来完成一些操作。

1. 开发者指定一个 channel 名
2. 使用 `ipcMain` 和 `ipcRenderer` 的方法发送、监听消息

数据传递基于 structured clone 算法，不支持函数、DOM 对象、部分 Node 和 Electron 对象。

## renderer -> main

渲染进程调用主进程的 API，没有返回值。

1. 主进程调用 `ipcMain.on` 监听消息

```js
// 第一个参数固定为 event，后面是自定义参数
function handleSetTitle(event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}
// 开发者自定义 channel 为 set-title
ipcMain.on('set-title', handleSetTitle);
```

2. preload 脚本暴露 `ipcRenderer.send` 相关方法

```js
contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: title => ipcRenderer.send('set-title', title),
});
```

3. 页面调用 preload 暴露的方法完成消息发送

```html
<body>
  Title: <input id="title" />
  <button id="btn" type="button">Set</button>
</body>
```

```js
const setButton = document.getElementById('btn');
const titleInput = document.getElementById('title');
setButton.addEventListener('click', () => {
  const title = titleInput.value;
  window.electronAPI.setTitle(title);
});
```

## renderer <-> main

渲染进程调用主进程的 API，并等待返回结果。

1. 主进程调用 `ipcMain.handle` 监听消息

```js
async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    return filePaths[0];
  }
}
ipcMain.handle('dialog:openFile', handleFileOpen);
```

2. preload 脚本暴露 `ipcRenderer.invoke` 相关方法

```js
contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
});
```

3. 页面调用 preload 暴露的方法完成消息发送

```html
<body>
  <button type="button" id="btn">Open a File</button>
  File path: <strong id="filePath"></strong>
</body>
```

```js
const btn = document.getElementById('btn');
const filePathElement = document.getElementById('filePath');
btn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});
```

## main -> renderer

主进程向指定的渲染进程发送消息，没有返回值。

主进程只有一个，渲染进程可能有多个，需要指定是哪个进程。

1. 主进程调用 `webContents.send` 发送消息

```js
const menu = Menu.buildFromTemplate([
  {
    label: app.name,
    submenu: [
      {
        click: () => mainWindow.webContents.send('update-counter', 1),
        label: 'Increment',
      },
      {
        click: () => mainWindow.webContents.send('update-counter', -1),
        label: 'Decrement',
      },
    ],
  },
]);
Menu.setApplicationMenu(menu);
```

2. preload 脚本暴露 `ipcRenderer.on` 相关方法

```js
contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateCounter: callback => ipcRenderer.on('update-counter', callback),
});
```

3. 渲染进程调用 preload 暴露的方法监听消息

```html
<body>
  Current value: <strong id="counter">0</strong>
</body>
```

```js
const counter = document.getElementById('counter');
window.electronAPI.onUpdateCounter((_event, value) => {
  const oldValue = Number(counter.innerText);
  const newValue = oldValue + value;
  counter.innerText = newValue.toString();
});
```

## main <-> renderer

不存在 `ipcMain.invoke` 方法，如果想获取渲染进程的返回值，可以通过另一个 channel 发送消息，这也是 Electron 7 之前通用的双向通信方式。

- 渲染进程调用 `event.sender.send` 发送返回值消息

```js
const counter = document.getElementById('counter');
window.electronAPI.onUpdateCounter((event, value) => {
  const oldValue = Number(counter.innerText);
  const newValue = oldValue + value;
  counter.innerText = newValue.toString();
  // channel 是 counter-value
  event.sender.send('counter-value', newValue);
});
```

- 主进程调用 `ipcMain.on` 监听返回值消息

```js
ipcMain.on('counter-value', (_event, value) => {
  console.log(value);
});
```

## renderer <-> renderer

不同渲染进程间的通信有两种方法：

1. 用主进程作为中转，由主进程转发消息
   1. 渲染进程 1 发送消息到主进程：`ipcRenderer.invoke`
   2. 主进程监听发送消息：`ipcMain.handle`
   3. 转发消息到指定渲染进程：`webContents.send`
   4. 渲染进程 2 监听消息：`ipcRenderer.on`
   5. 渲染进程 2 处理并返回结果：`event.sender.send`
   6. 主进程监听返回值消息：`ipcMain.on`
   7. 主进程从 `ipcMain.handle` 回调中返回处理结果
   8. 渲染进程 1 接收到 `ipcRenderer.invoke` 的 resolve 结果
2. 使用 `MessagePort`
