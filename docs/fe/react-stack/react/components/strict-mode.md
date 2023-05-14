# StrictMode

开发阶段用于发现 bug。

```jsx
<StrictMode>
  <App />
</StrictMode>
```

严格模式包括以下行为 (仅限开发阶段)：

- 每次渲染会渲染两次
  - 用于发现组件函数是非纯函数的 bug
- `useEffect` 会执行两次
  - 用于发现 cleanup 函数缺失的 bug
- 警告废弃 API 的使用
  - 用于检查是否使用了废弃 API
  - 主要包括类组件的一些 API
    - `findDOMNode`
    - `UNSAFE_` 生命周期函数
    - 旧 context 属性和函数
    - 旧字符串 ref `this.refs`
