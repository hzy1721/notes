# 环境配置

RN 有两种开发方式：

- Expo：基于 Expo App 壳、开箱即用，但原生能力受限，适合新手入门、快速原型
- RN CLI：完整开发能力、支持原生模块，但配置较复杂，适合正式项目

此处只关注 RN CLI。

## RN CLI

1. 通过 `nvm` 安装 Node.js
2. 安装 `watchman` (监听文件变更)：`brew install watchman`
3. Android 环境
   1. 安装 Zulu JDK：`brew install --cask zulu@17`，配置 `JAVA_HOME`
   2. 安装 Android Studio，配置 `ANDROID_HOME`
4. iOS 环境
   1. App Store 安装 Xcode
   2. 安装命令行工具：`xcode-select --install`
   3. 安装 CocoaPods：`sudo gem install cocoapods`
5. 检查开发环境：`npx react-native doctor`
