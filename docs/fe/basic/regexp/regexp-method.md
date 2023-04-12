# RegExp 方法

## test

```js
test(str);
```

- `str`：
  - 搜索的字符串，其他类型会被转为字符串

返回结果：

- 匹配成功：`true`
- 无匹配：`false`

## exec

```js
exec(str);
```

- `str`：
  - 搜索的字符串，其他类型会被转为字符串

返回结果：

- 匹配成功：第一个匹配结果的数组和捕获组，更新 `lastIndex`
  - `res[0]`：匹配结果
  - `res[1...N]`：捕获组
  - `res.index`：匹配位置
  - `res.input`：原字符串
  - `res.groups`：命名捕获组
- 无匹配：返回 `null`，设置 `lastIndex` 为 `0`
