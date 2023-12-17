# 安全

Electron 安全主要分为两部分：

- 前端：涉及到页面代码、第三方依赖
- Electron：涉及到 Chromium/Node/Electron 版本、主进程代码、preload 脚本

## 前端

1. 及时更新 npm 依赖版本，不要使用有安全问题的旧版本
2. 做好主流攻击手段的防御措施，包括 XSS/CSRF/SSRF/DoS/注入/中间人等
3. 始终使用加密网络协议，比如 HTTPS/WSS/FTPS、而不是 HTTP/WS/FTP

## Electron

1. 尽可能保持 Electron 为最新稳定版本
2. 不要开启 `nodeIntegration` (默认)
3. 始终开启 `contextIsolation` (默认)
4. 始终开启 Chromium 进程沙箱 (默认)
5. 显式指定权限请求的处理函数
   - Electron 默认允许页面的所有权限请求
   - 如果想严格控制权限，务必显式指定处理函数
6. 始终开启 `webSecurity` (默认)
7. 定义 CSP 策略：响应头或 `<meta>` 标签
8. 不要开启 `allowRunningInsecureContent` (默认)
9. 不要开启 `experimentalFeatures` (默认)
10. 不要使用 `enableBlinkFeatures` (默认)
11. 不要开启 `allowpopups` (默认)
12. 验证 `<webview>` 的创建选项，确保不会有影响安全的选项

```js
app.on('web-contents-created', (event, contents) => {
  contents.on('will-attach-webview', (event, webPreferences, params) => {
    // Strip away preload scripts if unused or verify their location is legitimate
    delete webPreferences.preload;
    // Disable Node.js integration
    webPreferences.nodeIntegration = false;
    // Verify URL being loaded
    if (!params.src.startsWith('https://example.com/')) {
      event.preventDefault();
    }
  });
});
```

13. 尽可能限制导航的目的 URL
14. 尽可能限制新窗口的创建
15. 不要用 `shell.openExternal` 打开未知内容
16. 主进程验证接收到的 IPC 消息是否为可信发送方

## electronegativity

https://github.com/doyensec/electronegativity

扫描 Electron 项目中是否存在影响安全的错误配置。
