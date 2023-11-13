# 进程沙箱

Electron 的沙箱来源于 Chromium，每个进程只能访问 CPU 和内存，其他授权操作需要派遣任务给更高权限的进程。

## 渲染进程

Electron 的渲染进程与 Chromium 类似，无法访问 Node 和 Electron API，只能通过与主进程通信来完成相关操作。

## preload 脚本

允许访问部分 Electron 和 Node API。

- electron
  - contextBridge
  - crashReporter
  - ipcRenderer
  - nativeImage
  - webFrame
- node:events
- node:timers
- node:url
- Buffer
- process
- clearImmediate
- setImmediate

## 禁用 Electron 沙箱

```js
const win = new BrowserWindow({
  webPreferences: {
    sandbox: false,
  },
});
```

启用 `nodeIntegration` 也会禁用沙箱：

```js
const win = new BrowserWindow({
  webPreferences: {
    nodeIntegration: true,
  },
});
```

## 全局启用沙箱

```js
app.enableSandbox();
```

## 禁用 Chromium 沙箱

禁用 Chromium 所有进程的沙箱，只推荐在测试时使用。

```js
app.commandLine.appendSwitch('--no-sandbox');
```
