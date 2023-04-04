# TextEncoder

`TextEncoder` 把字符串编码为 buffer。只支持 `utf-8` 编码。

创建 `TextEncoder`：

```js
const encoder = new TextEncoder();
```

编码：

- `encode(str)`：返回 `Uint8Array`
- `encode(str, dest)`：编码到类型为 `Uint8Array` 的 `dest`
