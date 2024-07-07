# 概述

相比 Electron 的变化：

- 去掉了内置 Chromium 而是调用系统 WebView，显著优化了包体积
- 使用比 Node 性能更好、更安全的 Rust 提供原生能力

## 安装

开发环境需要安装 Rust，生产环境不需要。

https://www.rust-lang.org/tools/install

```sh
# 查看 Rust 版本
rustc --version
# 更新 Rust
rustup update
```

## 使用

```sh
# 创建项目
npm create tauri-app@latest
```
