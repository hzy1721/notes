# BFC/IFC

CSS 有 3 种定位方式：
- 常规流 (Normal flow)
  - BFC (Block Formatting Context，块级排版上下文)
  - IFC (Inline Formatting Context，行级排版上下文)
  - 相对定位 (Relative positioning)
  - table 排版上下文
  - flex 排版上下文
  - grid 排版上下文
- 浮动 (Floats)
- 绝对定位 (Absolute positioning)

## 块级/行级盒子

`display` 与 BFC/IFC 相关的取值：
- `block`：生成块级盒子 (block-level box)，一个盒子占一行
- `inline`：生成行级盒子 (inline-level box)，与其他行级盒子摆放在一行
  - 不能设置 `width` 和 `height`
- `inline-block`：生成行级盒子，可以设置宽高，作为一个整体不会被拆成多行
- `none`：排版时被忽略

## BFC

以下元素会创建一个 BFC：
- 根元素
- `inline-block`、浮动、绝对定位
- flex 子项和 grid 子项
- `overflow` 不是 `visible` 的块级盒子
- `display: flow-root;`

排版规则：
- 盒子从上到下排列
- 垂直 margin 合并
- BFC 内 margin 不会与外界 margin 合并
- 不会与浮动元素重叠

## IFC

只包含行级盒子的容器元素会创建一个 IFC。

排版规则：
- 盒子在一行内水平排列，一行放不下时换行显示
- `text-align` 决定一行内盒子的水平对齐
- `vertical-align` 决定一个盒子在行内的垂直对齐
- 环绕浮动元素