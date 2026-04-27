# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```sh
yarn docs:dev      # 启动开发服务器
yarn docs:build    # 生产构建
yarn docs:serve    # 预览生产构建
```

## 项目架构

这是一个 VitePress 技术文档站点。

### 内容目录结构

```
docs/
  fe/          # 前端（lang, browser, engineer, react, vue, field, security, perf, mobile, desktop, ai, test）
  server/      # 后端（java, go, python, node, storage）
  client/      # 移动端（rn, flutter, h5, miniapp, ios, android, harmony）
  basic/       # 基础
  code/        # 算法
```

每个内容区对应一个 docs 子目录，下面放 `.md` 文件。

### 侧边栏配置

侧边栏采用"内容目录 + 对应配置文件"的模式：

- 内容文件在 `docs/<section>/<topic>/`
- 侧边栏配置在 `docs/.vitepress/sidebar/<section>/<topic>.js`
- 主配置 `docs/.vitepress/config.js` 中 import 侧边栏配置，并将 URL 前缀映射到对应配置

侧边栏配置格式：
```js
export default [
  {
    text: '分组标题',
    items: [{ text: '页面标题', link: '/section/topic/subtopic/' }],
    collapsible: true,
    collapsed: true,
  },
];
```

### 新增文档页面流程

1. 在 `docs/<section>/<topic>/` 下创建 markdown 文件或子目录
2. 在 `docs/.vitepress/sidebar/<section>/<topic>.js` 中添加对应的侧边栏条目
3. 如需顶级导航入口，在 `config.js` 的 `nav` 数组中添加

### 其他

- 使用 `markdown-it-mathjax3` 渲染数学公式，MathML 自定义元素在 `customElements.js` 中配置
- 无测试框架、无 lint 配置
