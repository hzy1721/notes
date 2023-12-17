# 字符串方法

```js
const str = '1 2 3';
str.search(/[1-3]/g); // 0
str.match(/[1-3]/);
// ['1', index: 0, input: '1 2 3', groups: undefined]
str.match(/[1-3]/g);
// ['1', '2', '3']
Array.from(str.matchAll(/[1-3]/g));
// [
//   ['1', index: 0, input: '1 2 3', groups: undefined],
//   ['2', index: 2, input: '1 2 3', groups: undefined],
//   ['3', index: 4, input: '1 2 3', groups: undefined],
// ]
str.replace(/[1-3]/, '[$&]'); // '[1] 2 3'
str.replaceAll(/[1-3]/g, (match, index, input, groups) => {
  console.log(match, index, input, groups);
  // 1 0 1 2 3 undefined
  // 2 2 1 2 3 undefined
  // 3 4 1 2 3 undefined
  return `[${match}]`;
});
// '[1] [2] [3]'
```

## search

第一个匹配结果的起始索引。

```js
search(regexp);
```

- `regexp`：
  - `RegExp` 对象或拥有 `Symbol.search` 方法的对象
  - 否则通过 `new RegExp(regexp)` 转为 `RegExp` 对象

返回结果：匹配结果的起始索引或 `-1` (匹配失败)。

## match

```js
match(regexp);
```

- `regexp`：
  - `RegExp` 对象或拥有 `Symbol.match` 方法的对象
  - 否则通过 `new RegExp(regexp)` 转为 `RegExp` 对象
  - `undefined` 返回 `['']`，等价于 `match(/(?:)/)`

返回结果：

- 没有修饰符 `g`：与 `exec` 的结果相同
  - `res[0]`：匹配结果
  - `res[1...N]`：N 个捕获组
  - `res.index`：匹配的起始索引
  - `res.input`：原始字符串
  - `res.groups`：命名捕获组
- 有修饰符 `g`：所有匹配结果字符串的数组，相当于多次调用 `exec` 只取 `res[0]`
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

- 所有匹配结果的可迭代对象，元素是 `exec` 的返回结果
  - `res[0]`：匹配结果
  - `res[1...N]`：N 个捕获组
  - `res.index`：匹配的起始索引
  - `res.input`：原始字符串
  - `res.groups`：命名捕获组

## replace

```js
replace(pattern, replacement);
```

- `pattern`：
  - 字符串
  - 拥有 `Symbol.replace` 方法的对象，通常是 `RegExp`
  - 否则转为字符串
- `replacement`：
  - 字符串：用于代替匹配结果，支持转义序列
  - 函数：每次匹配成功时调用，返回值作为替换结果

| 转义序列  | 含义                   |
| --------- | ---------------------- |
| `$&`      | 匹配项                 |
| `` $` ``  | 匹配项之前的字符串     |
| `$'`      | 匹配项之后的字符串     |
| `$n`      | 第 n 个捕获组          |
| `$<name>` | 名称为 `name` 的捕获组 |
| `$$`      | 字符 `$`               |

```js
// 对应于 res[0]、res[1..N]、index、input、groups
function replacer(match, p1, p2, /* …, */ pN, index, input, groups) {
  return replacement;
}
```

## replaceAll

```js
replaceAll(pattern, replacement);
```

- `pattern`：
  - 字符串
  - 拥有 `Symbol.replace` 方法的对象，通常是 `RegExp`
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
