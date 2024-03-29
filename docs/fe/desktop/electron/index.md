# 概述

Electron 组合了 Chromium 和 Node，允许用前端和 Node 技术栈开发 PC 端应用。

支持三种系统：`win32` (Windows)、`linux` (Linux)、`darwin` (macOS)。

## 前端 v.s. 原生

|            | 前端   | PC 端原生 |
| ---------- | ------ | --------- |
| 开发者人数 | 🌟🌟🌟 | 🌟        |
| 开发效率   | 🌟🌟🌟 | 🌟🌟      |
| 运行效率   | 🌟🌟   | 🌟🌟🌟    |
| 用户体验   | 🌟🌟   | 🌟🌟🌟    |

## 使用场景

如果不极致追求用户体验和运行效率，可以考虑使用 Electron。

1. 已经有 Web 应用，拓展 PC 端吸引更多用户
   - Figma、GitHub、Notion
2. toB、toD 应用
   - 编辑器：VSCode
   - 办公 IM：钉钉、飞书
   - 接口测试：Postman、Insomnia
   - 终端：Tabby

## 组成部分

1. `main.js`：主脚本
   - 管理主进程
2. `preload.js`：预加载脚本
   - 在渲染进程运行前执行
   - 能够访问 DOM 和部分 Node API
3. 显示的内容
   - 远程 URL
   - 本地资源
     - HTML/CSS/JS

## 安装

挂代理，设置好 `http_proxy` 和 `https_proxy`。

```sh
export ELECTRON_GET_USE_PROXY=true
npm i -D electron
```
