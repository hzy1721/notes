# 调试

## 主进程

Electron 窗口的 DevTools 只能调试渲染进程的 JS 代码，无法调试主进程代码。

调试主进程需要在启动 Electron 时加上 `--inspect` 或 `--inspect-brk` 参数，然后用外部调试器访问，比如 `chrome://inspect`、VSCode。

- `--inspect=[port]`：监听 V8 调试协议消息，默认端口 9229
- `--inspect-brk=[port]`：类似 `--inspect`，但在第一行代码断点

## 渲染进程

Electron 窗口的 DevTools 即可。

```ts
win.webContents.openDevTools();
```

## DevTools 扩展

可以为 Electron 内置的 Chromium 安装 DevTools 扩展，方便主流框架和库的调试。

自动安装：[electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer)
