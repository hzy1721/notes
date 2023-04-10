# 字符串方法

`String` 有一些方法接收正则表达式。

## str.match

`String.prototype.match(regexp)`

有 3 种匹配结果：

- 没有修饰符 `g`：返回包含第一个匹配结果的数组 `res`
  - `res[0]`：匹配结果
  - `res.index`：匹配位置
  - `res.input`：原字符串
- 有修饰符 `g`：返回所有匹配结果的数组 `res`
- 无匹配项：返回 `null`

## str.matchAll

## str.split

## str.search

## str.replace

`String.prototype.replace(regexp, replacement)`

`replacement` 支持特定的字符组合来插入内容：

| 字符组合  | 含义               |
| --------- | ------------------ |
| `$&`      | 匹配项             |
| `` $` ``  | 匹配项之前的字符串 |
| `$'`      | 匹配项之后的字符串 |
| `$n`      | 第 n 个分组        |
| `$<name>` | `name` 分组        |
| `$$`      | 字符 `$`           |

## str.replaceAll
