# PWA 概述

渐进式 Web 应用 (Progressive Web App, PWA)：强化原生体验的 Web 应用。

<img src="./assets/pwa.png" style="zoom: 35%" />

额外功能：

- 本地安装
  - 从浏览器或应用商店安装
    - Google Play
    - App Store
    - Microsoft Store
  - 在屏幕上有独立 icon，方便访问
- 离线缓存
- 后台更新
- 推送通知
- 全屏显示
- 与原生应用联动，比如分享照片、文件、链接

相关技术：

- Manifest：必备，安装的配置文件
- Service Worker：必备，提供离线缓存、后台更新等能力
- Web Push Notifications：推送通知
- Background Sync：联网后执行操作

兼容性：

- PC 端浏览器：
  - Chrome、Edge 支持 macOS、Windows、Linux、Chromebooks
  - Firefox、Safari 不支持任何操作系统
- 移动端浏览器：
  - 安卓支持 Chrome、Edge、Firefox、Opera、Samsung
  - iOS 16.3 前只支持 Safari，16.4 后支持 Safari、Chrome、Edge、Firefox、Orion
