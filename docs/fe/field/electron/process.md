# 进程模型

Electron 基于 Chromium 构建，也采用了类似的多进程架构。

单进程优缺点：

- 尽可能资源共享，额外开销小
- 隔离性差，一个页面崩溃会影响整个浏览器

Electron 进程分为 main 和 renderer 两类。

## 主进程 main

每个 Electron 应用只有 1 个主进程，是应用的入口，运行在 Node 环境。

负责：

- 管理窗口 `BrowserWindow`
- 管理渲染进程和页面 `webContents`
- 管理生命周期 `app`
- 提供原生 API
  - 菜单/对话框
  - 授权操作

不能：

- 访问和操作 DOM

## 渲染进程 renderer

每个打开的窗口对应一个渲染进程，运行在 Chromium 环境。

负责：

- 管理前端页面

不能：

- 访问 Node 环境和原生 API

### preload 脚本

在渲染进程中、页面加载之前执行，允许访问部分 Node API。

在主脚本中附加到窗口上：

```js
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js',
  },
});
```

### contextIsolation

preload 脚本与页面是隔离的，无法直接在 `window` 上设置属性。

### contextBridge

设置页面的全局变量：

```js
// preload.js
contextBridge.exposeInMainWorld('myAPI', {
  desktop: true,
});
// renderer.js
console.log(window.myAPI);
// => { desktop: true }
```

## 进程间通信

- `ipcMain`
- `ipcRenderer`

## 创建子进程

- Electron 提供了 `utilityProcess` 用于创建子进程
- 相比 Node 原生的 `child_process.fork`，能够更方便地与渲染进程通信 (通过 `MessagePort`)
- 因此在 Electron 应用中创建子进程时优先使用 `utilityProcess`

## 类型优化

Electron 包的子路径提供了更完善的类型定义。

```js
const { app } = require('electron/main');
const { shell } = require('electron/common');
```
