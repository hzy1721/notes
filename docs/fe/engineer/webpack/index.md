# 概述

基于 JS 的主流打包器（bundler），通过 loader 和 plugin 支持语法转译、混淆、压缩等功能。

有 2 种方式使用 webpack：

- webpack CLI：编写配置文件 webpack.config.js，执行 webpack 命令打包
- webpack API：编写自己的打包程序，调用 webpack 提供的 API

## 核心概念

- module：每个文件都是一个 module
- chunk：分为 initial 和 non-initial
  - initial：主 chunk，包括入口文件和所有依赖文件
  - non-initial：懒加载的依赖文件
- asset：输出的打包文件，每个 chunk 对应一个 asset
- chunk group：每个 entry 对应一个 chunk group

## 打包流程

从 entry 开始遍历依赖文件，通过 loader 处理为 JS 代码，每个 chunk 合并为一个 asset 文件，作为最终的打包产物，根据 output 赋予文件名放到指定目录下。

## entry

每个 entry 可以有一个或多个入口文件，项目可以有一个或多个 entry。

```js
module.exports = {
  // 一个 entry
  entry: './src/index.ts',
  entry: ['./src/index.ts', './src/index2.ts'],
  // 多个 entry
  entry: {
    index: './src/index.ts',
    app: './src/app.ts',
  },
};
```

## output

- path 指定产物目录
- filename 指定 initial chunk asset 文件名
- chunkFilename 指定 non-initial chunk asset 文件名
- 支持三种插值写法：
  - `[id]`：唯一 ID
  - `[name]`：chunk name
  - `[contenthash]`：asset md4 hash

```js
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[contenthash].js',
  },
};
```

## target

产物部署的目标环境。

- web (默认)：浏览器
- esX：指定 ES 版本，比如 es5、es2020，默认 es2015
- `node[[X].Y]`：Node，可以指定版本

## module

module 是 webpack 的一个核心概念，支持以下类型：

- ES module
- CJS module
- AMD module
- Asset module：webpack 内置的关于字体、icon 等资源文件的支持
- WASM module

支持以下引用依赖的方式：

- ES6 import
- CJS require
- AMD define/require
- CSS/Less/Sass @import
- `<img src="xxx" />`、`url('xxx')`

模块路径：

- 绝对路径
- 相对路径
- 模块路径
  - 搜索目录：resolve.modules
  - 别名：resolve.alias
  - 允许的扩展名：resolve.extensions
  - 目录：
    - 有 package.json：resolve.mainFields
    - 无 package.json：resolve.mainFiles

## loader

如何处理非 JS 的 module，比如 TS、TSX、CSS、Less 等。

loader 可以指定多个，从右向左 (从后往前) 依次执行。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
```

## plugin

拥有 apply 方法的对象，封装若干逻辑，参数是 compiler 对象，打包时被 webpack 编译器调用。

```js
module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
```
