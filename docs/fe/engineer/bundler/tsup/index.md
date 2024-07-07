# tsup

基于 esbuild 封装的无配置 TS 库打包工具。

- 基于 esbuild 提供一套 TS/JS 的默认配置，简化开发者所需配置，也支持自定义配置
- 类似 SpringBoot 基于 Spring 提供一些默认配置，能够降低开发成本和门槛

```sh
tsup entry1 entry2 ... \
  --external 排除的包 \
  --noExternal 包含的包 \
  --config 配置文件 \
  --no-config

# 跳过所有 Node 包，保证不会打包依赖
tsup-node ...
```

自定义配置：

- `tsup.config.ts/js/cjs/json`
  - 注意要用 defineConfig 函数，而不是一个普通对象
  - 支持传入对象或回调函数
- `package.json` 的 `tsup` 字段
  - 普通对象即可

```ts
import { defineConfig } from 'tsup';

// 对象
export default defineConfig({
  entry: ['src/index.ts'],
});

// 回调函数
export default defineConfig((options) => {
  return {
    minify: !options.watch,
  };
});
```

```json
{
  "tsup": {
    "entry": ["src/index.ts"]
  },
  "scripts": {
    "build": "tsup"
  }
}
```
