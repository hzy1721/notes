# 字符串方法

`String` 有一些方法接收正则表达式。

## search

```js
search(regexp);
```

- `regexp`：
  - `RegExp` 对象或拥有 `Symbol.search` 方法的对象
  - 否则通过 `new RegExp(regexp)` 转为 `RegExp` 对象

返回结果：

- 匹配成功：匹配结果的开始索引
- 无匹配：返回 `-1`

## match

```js
match(regexp);
```

- `regexp`：
  - `RegExp` 对象或拥有 `Symbol.match` 方法的对象
  - 否则通过 `new RegExp(regexp)` 转为 `RegExp` 对象
  - `undefined` 返回 `['']`，等价于 `match(/(?:)/)`

返回结果：

- 有修饰符 `g`：返回所有匹配结果的数组，不包括捕获组
- 没有修饰符 `g`：返回第一个匹配结果的数组 `res` 和捕获组
  - 与 `RegExp.prototype.exec` 的返回结果相同
- 无匹配项：返回 `null`

## matchAll

```js
matchAll(regexp);
```

- `regexp`：
  - `RegExp` 对象或拥有 `Symbol.match` 方法的对象
    - 必须设置 `g` 修饰符，否则 `TypeError`
  - 否则通过 `new RegExp(regexp, 'g')` 转为 `RegExp` 对象

返回结果：

- 可迭代对象，元素是单个匹配结果的数组 `res` 和相应捕获组
  - `res[0]`：匹配结果
  - `res.index`：匹配位置
  - `res.input`：原字符串

## replace

```js
replace(pattern, replacement);
```

- `pattern`：
  - 字符串或拥有 `Symbol.replace` 方法的对象 (比如 `RegExp`)
  - 否则转为字符串
- `replacement`：
  - 字符串：用于代替匹配结果，支持一些转义序列 (如下表)
  - 函数：每次匹配成功时调用，返回值作为替换结果 (函数接收的参数如下)

| 转义序列  | 含义                   |
| --------- | ---------------------- |
| `$&`      | 匹配项                 |
| `` $` ``  | 匹配项之前的字符串     |
| `$'`      | 匹配项之后的字符串     |
| `$n`      | 第 n 个捕获组          |
| `$<name>` | 名称为 `name` 的捕获组 |
| `$$`      | 字符 `$`               |

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

- `match`：匹配结果，类似 `$&`
- `p1, p2, …, pN`：捕获组
- `offset`：匹配结果的开始索引
- `string`：原字符串
- `groups`：命名捕获组

## replaceAll

```js
replaceAll(pattern, replacement);
```

- `pattern`：
  - 字符串或拥有 `Symbol.replace` 方法的对象 (比如 `RegExp`)
  - 否则转为字符串
  - 正则必须有 `g` 修饰符，否则 `TypeError`
- `replacement`：
  - 字符串：用于代替匹配结果，支持一些转义序列
  - 函数：每次匹配成功时调用，返回值作为替换结果

## split

```js
split(separator);
split(separator, limit);
```

- `separator`：
  - 字符串或拥有 `Symbol.split` 方法的对象 (比如 `RegExp`)
  - `undefined` 返回包含字符串的单元素数组
- `limit`：
  - 返回结果的最多数量，多出的部分会被忽略

返回结果：

- 字符串数组，在 `separator` 出现的地方进行分割
