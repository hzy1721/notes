# 进程模型

## 主进程 main

`main.js` 控制主进程，负责：

- 创建原生窗口
- 管理生命周期
- 进行授权操作
- 管理渲染进程

不能：

- 访问和操作 DOM

## 渲染进程 renderer

每个页面对应一个渲染进程，可以像前端应用一样访问各种 Web API。

## preload 脚本

在网页加载前执行，能够同时访问 Node API 和 DOM，通常用于向渲染进程暴露授权 API (通过 `contextBridge`)。

## 沙箱

## IPC

- `ipcMain`
- `ipcRenderer`
