# JSON

## JSON.stringify

```js
const target = JSON.parse(JSON.stringify(value));
```

JSON 是 JS 的子集，只支持基础类型：

- 只支持：普通对象、数组、字符串、有限数值、`true`、`false`、`null`
- `Number`：
  - 支持普通数值
  - `NaN`、`Infinity`、`-Infinity` 序列化为 `null`
- `BigInt`：报错
- `String`：支持
- `Boolean`：支持
- `null`：支持
- `undefined`：忽略或序列化为 `null`
- `Symbol`：忽略或序列化为 `null`
- `Object`：
  - 只支持可枚举字符串数据属性，意味着无法携带类型信息
  - `Date` 对象会被序列化为 ISO 字符串，但 `JSON.parse` 无法解析回 `Date` 对象，只会保持原来的字符串类型
