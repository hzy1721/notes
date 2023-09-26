# 伪类选择器

- 语法：`selector:pseudo-classname`
- 附加在其他选择器后，基于元素的状态应用样式
- 元素的状态不包含在 DOM 树中

## 表单伪类 (Input)

- `:checked`：单选框或多选框被选中
- `:required`：必填的表单元素
- `:optional`：非必填的表单元素

## 链接伪类 (Location)

- `:link`：没被访问过的链接
- `:visited`：已被访问的链接

## 位置伪类 (Tree-structural)

- `:root`：根元素 `<html>`
- `:nth-child(An+B)`：从一组同级的元素中选，n 从 0 开始
- `:nth-last-child(An+B)`：从后往前数
- `:first-child`：同级元素中的第一个
- `:last-child`：同级元素中的最后一个

## 用户操作 (User action)

- `:hover`：鼠标悬停
- `:active`：元素被激活，比如点击一个链接，按下不松开
- `:focus`：元素被聚焦

## :scope

当前元素范围。

- CSS 中使用：等价于 `:root`
- 查询元素的 DOM 方法中使用：匹配调用的元素
  - 比如 `querySelector`、`querySelectorAll` 等
