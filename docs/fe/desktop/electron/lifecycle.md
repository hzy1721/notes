# 生命周期

主进程的 `app` 模块负责管理生命周期。

```ts
const { app } = require('electron');

app.on('ready', () => {
  // 应用初始化
});
```

常用的生命周期事件：

- will-finish-launching：完成基本启动
- ready：完成初始化
  - 创建浏览器窗口、应用菜单、应用快捷键等
- window-all-closed：所有窗口都关闭
  - 在 Windows 和 Linux 上退出应用
- before-quit：应用退出前
- will-quit：应用即将退出
  - 解绑快捷键等
- quit：应用退出时
