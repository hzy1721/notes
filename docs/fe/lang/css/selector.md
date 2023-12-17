# 选择器

| 选择器 | 英文            |
| ------ | --------------- |
| ID     | ID              |
| 类     | Class           |
| 属性   | Attribute       |
| 标签   | Type            |
| 伪元素 | Pseudo elements |
| 通配   | Universal       |
| 组合   | Combinator      |
| 列表   | List            |

## ID 选择器

- 语法：`#idname`
- 基于元素的 `id` 属性，文档中一个 id 只能对应一个元素

## 类选择器

- 语法：`.classname`
- 基于元素的 `class` 属性，一个类名可以应用于多个元素

## 属性选择器

- 语法：
  - `[attr]`：属性存在
  - `[attr=value]`：属性的值为 `value`
  - `[attr~=value]`：属性是空格分隔的多个值，其中一个是 `value`
  - `[attr|=value]`：属性的值等于 `value` 或者以 `value-` 为前缀
  - `[attr^=value]`：属性的值以 `value` 为前缀
  - `[attr$=value]`：属性的值以 `value` 为后缀
  - `[attr*=value]`：属性的值包含 `value`
- 基于元素的属性应用样式，支持多种匹配方法

## 标签选择器

- 语法：`elementname`
- 基于 HTML 标签类型应用样式

## 伪元素选择器

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

## 通配选择器

- 语法：`*`
- 匹配所有元素

## 组合

| 语法 |   中文   |       英文       |           说明           |
| :--: | :------: | :--------------: | :----------------------: |
| ` `  |   后代   |    Descendant    |        元素的后代        |
| `>`  |  子元素  |      Child       |        直接子元素        |
| `~`  | 后面元素 | General sibling  | 同级，在后面，不要求相邻 |
| `+`  | 相邻元素 | Adjacent sibling |  同级，相邻，紧跟在后面  |

## 列表

- 语法：`selector, selector, ...`
- 多个选择器应用同一组规则
