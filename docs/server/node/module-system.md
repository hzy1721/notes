# Node.js 模块系统

- `CommonJS`：Node 模块规范，默认格式
  - 导入：`require`
    - 运行时动态加载：代码执行到 require 时同步加载
    - 加载缓存：同一模块后续 require 使用缓存、不重新加载
    - 条件加载：可以在条件语句中调用 require
  - 导出：`module.exports`
    - 导出值的拷贝，修改原文件的值不会更新
  - 不支持顶层 await
- `ESM`：现代化浏览器 + Node 模块规范，原生支持，推荐使用
  - 导入：`import` / `import()`
    - 编译时静态分析：构建工具可以静态分析依赖树、实现 Tree-Shaking
    - 动态导入：使用 import() 动态导入依赖、返回 Promise
  - 导出：`export`
    - 导出值的实时绑定，修改值会更新
  - 支持顶层 await
- `AMD`：浏览器异步加载，已过时
- `UMD`：库打包兼容 CJS/AMD，已过时

开发时推荐使用 ESM + TS：

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  }
}
```

打包库时输出 ESM + CJS 双格式。
