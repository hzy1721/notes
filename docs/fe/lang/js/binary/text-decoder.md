# TextDecoder

`TextDecoder` 把 buffer 解码为字符串。

创建 `TextDecoder`：

```js
const decoder = new TextDecoder([label], [options]);
```

- `label`：编码格式，默认 `utf-8`
- `options`：
  - `fatal`：设为 `true` 碰到无效字符抛出异常，否则用 `\uFFFD` 替换无效字符
  - `ignoreBOM`：设为 `true` 忽略 BOM

解码：

```js
const str = decoder.decode([input], [options]);
```

- `input`：被解码的 buffer
- `options`：
  - `stream`：适用于解码流，上一个 buffer 末尾解码不完全的字节会被拼接到下一个 buffer
