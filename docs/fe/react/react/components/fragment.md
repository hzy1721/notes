# Fragment

空组件，把多个元素组合为一个元素。

```jsx
<>
  <OneChild />
  <AnotherChild />
</>
```

prop：

- `key`：唯一 key
  - 必须用 `<Fragment key={key}>` 而不能用 `<key={key}>`

警告：

- 在是否添加 `<></>` 之间切换可能导致状态被重置：[对照表](https://gist.github.com/clemmy/b3ef00f9507909429d8aa0d3ee4f986b)

用途：

- 组件需要返回多个元素且不想添加包裹元素
- 把多个元素赋值给变量，用于组件 prop 等场合
- 组合文本节点和组件
