# 更新

## update.electronjs.org

Electron 官方针对开源项目提供的更新服务。

有以下要求：

- 只支持 macOS 和 Windows，不支持 Linux
- 有公开的 GitHub 仓库
- 产物发布到 GitHub release
- 产物已签名

配置步骤：

1. 安装 `update-electron-app`

```sh
npm i update-electron-app
```

2. 在主脚本 `main.js` 导入并执行

```js
require('update-electron-app')();
```

## autoUpdater
