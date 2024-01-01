# PWA 改造流程

将一个普通的 Web 应用改造为 PWA 需要以下步骤：

1. 创建 manifest JSON 文件，在 HTML 中通过 `<link>` 引用
   - 如果是 MPA，每个页面的 HTML 都需要引用

```html
<link rel="manifest" href="manifest.json" />
```

2. 通过 HTTPS 提供应用
3. 包含一个 Service Worker 来监听 fetch 事件，提供基本的离线能力

## 自定义安装

允许应用提供自定义的安装按钮。iOS 不支持。

浏览器确认当前应用是可安装的 PWA 后，在 `window` 上触发 `beforeinstallprompt` 事件。

自定义流程：

- 监听 `beforeinstallprompt` 事件
- 调用 `preventDefault()` 取消事件的默认行为
- 添加自定义的「安装」按钮，点击后调用 `event.prompt()` 进行弹框
