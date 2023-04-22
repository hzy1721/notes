# 优先级

有 3 种方式使用 CSS：

- 内联：`<p style="..."></p>`
- 外链：`<link ref="stylesheet" href="style.css">`
- 嵌入：`<style> ... </style>`

优先级从高到低：

- `!important`：优先级最高，可以覆盖其他所有样式
- 内联样式：优先级高于选择器样式
- 外链和嵌入样式：计算特异性 (specificity) 确定优先级

## 特异性

根据描述元素的具体程度，将 7 种选择器分为 4 类：

1. **ID**
   - ID 选择器
2. **CLASS**
   - 类选择器
   - 伪类选择器
   - 属性选择器
3. **TYPE**
   - 标签选择器
   - 伪元素选择器
4. No value
   - 通配选择器 `*`
   - 伪类选择器 `where()`

|      | ID  | CLASS | TYPE | No value |
| ---- | --- | ----- | ---- | -------- |
| 权重 | 100 | 10    | 1    | 0        |

多个选择器组合，不考虑组合方式，只计算个数。

特异性：分别计算 ID、CLASS、TYPE 三类选择器的个数，乘上对应的权重再相加。