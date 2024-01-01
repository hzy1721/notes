# PC 客户端

前端的跨端方案可以分为浏览器和原生 2 部分：

- 浏览器：用于渲染页面、执行脚本，内置浏览器或调用系统浏览器
- 原生：系统 API 的 JS 绑定，如果用 Node 就不需要绑定

Electron 封装了 Chromium 和 Node，分别提供页面渲染能力和原生能力，是使用前端技术栈开发 PC 客户端的主流框架。

Tauri 不封装 Chromium，而是调用系统 WebView，大幅减小了包体积，缺点是不自带 WebView 的系统需要用户额外安装（Win10、Linux、低版本 macOS），原生能力基于 Rust 库提供 JS 绑定，没有使用 Node。
