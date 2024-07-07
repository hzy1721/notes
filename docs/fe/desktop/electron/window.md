# 浏览器窗口

主进程的 `BrowserWindow` 模块负责创建和管理浏览器窗口。

```ts
const { BrowserWindow } = require('electron');

const win = new BrowserWindow({ width: 800, height: 600 });
win.loadURL('https://github.com');
win.loadFile('index.html');
win.on('closed', () => {
  win = undefined;
});
win.minimize();
win.setSize({ width: 1000, height: 800 });
```

常用事件：

- closed：窗口关闭
- focus：窗口激活
- show：窗口展示
- hide：窗口隐藏
- maximize：窗口最大化
- minimize：窗口最小化
