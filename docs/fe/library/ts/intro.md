# 概述

TypeScript = JavaScript + 类型

- 代码检查
- 自动补全

> 仅限于开发环境，生产环境会抹掉类型

## Playground

https://www.typescriptlang.org/play

## 安装

```sh
# 项目
npm i -D typescript
# 全局
npm i -g typescript
```

## 渐进式引入

对于已有 JS 项目，可以逐步引入 TS，而不需要完全替换。

1. 在 JS 文件加入 `@ts-check` 开启 TS 检查
2. TS 可以借助 JSDoc 注释检查类型
3. 最终替换为合法的 TS 类型
