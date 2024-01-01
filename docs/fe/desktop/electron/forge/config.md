# 配置文件

Electron Forge 配置对象有 2 种写法：

- `forge.config.js` module.exports 导出
- `package.json` config.forge 字段
  - 配置对象
  - 配置文件的相对路径

```js
// 所有字段都是可选的
module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [],
  publishers: [],
  plugins: [],
  hooks: {},
  buildIdentifier: 'my-build',
};
```
