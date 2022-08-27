# 对象响应式方案

## 对象

- 访问属性：`obj.foo`
  - `[[Get]]`
- 判断是否存在 key：`key in obj`
  - `[[HasProperty]]`
- 使用 `for...in` 遍历：`for (const key in obj) { ... }`
  - `[[OwnPropertyKeys]]`
- 添加新属性或修改已有属性的值：`obj.foo = value`
  - `[[Set]]`
- 删除属性：`delete obj.foo`
  - `[[Delete]]`

## 数组

数组是一个异质对象，只有 `[[DefineOwnProperty]]` 内部方法与常规对象不同。

需要额外关注 `length` 属性。
