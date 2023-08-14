# StrictMode

开发阶段用于发现 bug。

```jsx
<StrictMode>
  <App />
</StrictMode>
```

严格模式包括以下行为 (仅限开发阶段)：

1. 渲染两次

   - 发现组件函数是非纯函数的 bug
   - 执行两次 `useEffect`
     - 发现 cleanup 函数缺失的 bug

2. 警告废弃 API

   - 主要是类组件 API
     - `findDOMNode`
     - `UNSAFE_` 生命周期函数
     - 旧 context 属性和函数
     - 旧字符串 ref `this.refs`
