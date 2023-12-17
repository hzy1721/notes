# 组件与 JSX

React 应用由**组件**构成，小到一个按钮、大到一个页面都是组件，“一切皆组件”。

React 组件是一个函数，也叫做函数组件 (Function Component，FC)。

- 接收输入的数据 `props`
- 返回 JSX 表示的 UI 元素

组件名 (也就是函数名) 必须首字母大写，并且遵循驼峰命名法。

JSX 是类似 HTML 的标记语言，区别是：

- 支持像原生 HTML 元素一样书写组件元素
- 支持绑定变量值到元素内容、属性值
- 更方便的属性绑定，包括 `style`、事件处理函数 `onEvent` 等
- 语法更严格，单标签必须闭合
- 每个组件只能返回一个元素，不能是多个
- 支持空元素 `<></>`
- 浏览器不支持，需要转译为 `React.createElement`

条件渲染：与 JS 语法相同

- `condition ? <AComponent/> : <BComponent />`
- `condition && <AComponent />`

列表渲染：与 JS 语法相同

- 必须为列表元素提供唯一的 `key`，用于 React 优化渲染
  - `key` 也可以用于组件的强制重新渲染

```jsx
arr.map(record => <li key={record.id}>{record.content}</li>);
```
