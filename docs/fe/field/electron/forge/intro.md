# Forge

Electron 脚手架。

## 安装

```sh
npm i -D @electron-forge/cli
```

## 创建项目

```sh
npm init electron-app@latest my-app -- --template=webpack-typescript
```

模板：

- webpack
- webpack-typescript

## import 项目

```sh
npx electron-forge import
```

## scripts

```json
"scripts": {
  "start": "electron-forge start",
  "package": "electron-forge package",
  "make": "electron-forge make"
},
```

## 打包分发

```sh
npm run make
```

1. 内部执行 `electron-forge package`，把应用代码和 Electron 二进制文件打包起来，生成一个目录 `out/${app}-${platform}-${arch}`
2. 基于打包目录和 `forge.config.js` 中的 `makers` 生成最终的分发文件 `out/make/xxx`
