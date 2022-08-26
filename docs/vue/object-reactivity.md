# 对象响应式方案

对象的读取操作：

- 访问属性：`obj.foo`
  - `[[Get]]`
- 判断是否存在 key：`key in obj`
  - `[[HasProperty]]`
- 使用 `for...in` 遍历：`for (const key in obj) { ... }`
  - `[[OwnPropertyKeys]]`
