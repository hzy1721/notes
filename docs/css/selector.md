# 选择器

## ID 选择器 (ID)

- 语法：`#idname`
- 基于元素的 `id` 属性，文档中一个 id 只能对应一个元素

## 类选择器 (Class)

- 语法：`.classname`
- 基于元素的 `class` 属性，一个类名可以应用于多个元素

## 伪类选择器 (Pseudo classes)

- 语法：`selector:pseudo-classname`
- 附加在其他选择器后，基于元素的状态应用样式
- 元素的状态不包含在 DOM 树中

### 表单伪类 (Input)

- `:checked`：单选框或多选框被选中
- `:required`：必填的表单元素
- `:optional`：非必填的表单元素

### 链接伪类 (Location)

- `:link`：没被访问过的链接
- `:visited`：已被访问的链接

### 位置伪类 (Tree-structural)

- `:root`：根元素 `<html>`
- `:nth-child(An+B)`：从一组同级的元素中选，n 从 0 开始
- `:nth-last-child(An+B)`：从后往前数
- `:first-child`：同级元素中的第一个
- `:last-child`：同级元素中的最后一个

### 用户操作 (User action)

- `:hover`：鼠标悬停
- `:active`：元素被激活，比如点击一个链接，按下不松开
- `:focus`：元素被聚焦

## 属性选择器 (Attribute)

- 语法：
  - `[attr]`：属性存在
  - `[attr=value]`：属性的值为 `value`
  - `[attr~=value]`：属性是空格分隔的多个值，其中一个是 `value`
  - `[attr|=value]`：属性的值等于 `value` 或者以 `value-` 为前缀
  - `[attr^=value]`：属性的值以 `value` 为前缀
  - `[attr$=value]`：属性的值以 `value` 为后缀
  - `[attr*=value]`：属性的值包含 `value`
- 基于元素的属性应用样式，支持多种匹配方法

## 标签选择器 (Type)

- 语法：`elementname`
- 基于 HTML 标签类型应用样式

## 伪元素选择器 (Pseudo elements)

- 语法：`selector::pseudo-elementname`
- 附加在其他选择器后，匹配或添加元素的特定部分
- 伪元素也不在 DOM 中

字母顺序：

- `::after (:after)`
  - 添加元素的最后一个子元素
- `::before (:before)`
  - 添加元素的第一个子元素
- `::first-line (:first-line)`
  - 匹配块级元素的第一行

## 通配选择器 (Universal)

- 语法：`*`
- 匹配所有元素

## 组合 (Combinator)

| 语法 |   中文   |       英文       |           说明           |
| :--: | :------: | :--------------: | :----------------------: |
| ` `  |   后代   |    Descendant    |        元素的后代        |
| `>`  |  子元素  |      Child       |        直接子元素        |
| `~`  | 后面元素 | General sibling  | 同级，在后面，不要求相邻 |
| `+`  | 相邻元素 | Adjacent sibling |  同级，相邻，紧跟在后面  |

## 列表 (List)

- 语法：`selector, selector, ...`
- 多个选择器应用同一组规则
