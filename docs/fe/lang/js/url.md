# URL

## 构造函数

```js
// 完整 URL
const url = new URL('https://example.com:8000/path/name?q=term#fragment');
// 路径 + base URL
const url = new URL('path/name?q=term#fragment', 'https://example.com:8000');
```

## 属性

![](./assets/url-prop.png)

- searchParams：URLSearchParams 对象

## URLSearchParams

构造函数：

```js
const params = new URLSearchParams();
```

方法：

- `append(name, value)`
- `delete(name)`
- `get(name)`
- `getAll(name)`
- `has(name)`
- `set(name, value)`
- `sort()`
- 可迭代

## 全局函数

URL API 标准化前的遗留函数，更推荐使用 URL 对象。

- 转义非 ASCII 字符和部分 ASCII 字符（空格）
  - 先转为 UTF-8 编码，然后每个字节替换为 %xx 转义序列
- 特殊字符：`#` `$` `&` `+` `,` `/` `:` `;` `=` `?` `@`

|                                         | 适用场景 | 特殊字符 |
| --------------------------------------- | -------- | -------- |
| `encodeURI/decodeURI`                   | 完整 URL | 不转义   |
| `encodeURIComponent/decodeURIComponent` | URL 片段 | 转义     |
