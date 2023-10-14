# RegExp 方法

```js
const regexp = /[1-3]/;
const regexpGlobal = /[1-3]/g;
regexp.exec('1 2 3');
// ['1', index: 0, input: '1 2 3', groups: undefined]
regexpGlobal.exec('1 2 3');
// ['1', index: 0, input: '1 2 3', groups: undefined]
regexp.test('1 2 3'); // true
regexpGlobal.test('1 2 3'); // true
```

## exec

第一个匹配结果，获取所有匹配结果需要多次调用。

```js
exec(str);
```

返回结果：

- 匹配成功：第一个匹配结果，更新 `lastIndex`
  - `res[0]`：匹配结果
  - `res[1...N]`：N 个捕获组
  - `res.index`：匹配的起始索引
  - `res.input`：原始字符串
  - `res.groups`：命名捕获组
- 无匹配：返回 `null`，设置 `lastIndex` 为 `0`

## test

是否有一个匹配结果，返回布尔值。

```js
test(str);
```
