# 脚手架概述

脚手架用于创建指定类型的新项目，使用哪种脚手架取决于项目的核心技术栈，这些核心库通常会提供相应的脚手架工具。

UI 库：

- React
  - create-react-app：已废弃
- Vue
  - create-vue

打包器：

- webpack
  - webpack-cli
- Vite
  - create-vite

前端框架：

- Next
  - create-next-app

但是第三方库提供的脚手架只包括核心库和一些基础配置，对于其他必备的工具没有做过多约定：

- CSS 方案：预处理器、Tailwind、CSS-in-JS
- 路由库
- 网络请求库
- 状态管理库
- 语法检查：eslint、stylelint、commitlint
- 打包配置与优化

尽管有 Next 这种大而全的框架，但是官方提供的脚手架配置和模板能力难以满足公司和团队复杂的定制化需求，因此需要由中台或团队维护自己的脚手架工具，保证项目结构的一致性、避免创建项目时的重复操作、提高研发效率。

## 脚手架配置关注点

- 项目类型：
  - CSR/SSR
  - 主应用/微应用/微模块
  - PC 端/移动端
- TypeScript
- UI 库：
  - React/Vue
  - 指定版本
- 打包器：
  - webpack/Vite
  - 打包优化
- CSS 方案
  - 预处理器
  - Tailwind
  - CSS-in-JS
- 路由库
- 网络请求库
- 状态管理库
- 语法检查
  - eslint
  - stylelint
  - commitlint
  - husky hook
- Git 仓库
  - .gitignore

## 脚手架运行流程

1. 创建 npm 项目
2. 复制初始文件
   - webpack.config.js
   - eslint
   - stylelint
   - prettier
   - .husky
   - .gitignore
   - src/index.ts
   - src/pages
   - src/components
3. 安装依赖
4. 初始化 Git 仓库 (可选)
