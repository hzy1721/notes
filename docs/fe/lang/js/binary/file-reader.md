# FileReader

读取 `Blob/File` 的数据。

创建：

```js
const reader = new FileReader();
```

方法：

- `readAsArrayBuffer(blob)`：读取为 `ArrayBuffer`
- `readAsText(blob, [encoding]`：读取为指定编码的字符串
- `readAsDataURL(blob)`：编码为 Base64 的 Data URL
- `abort()`：中止操作

读取事件：

| 事件        | 含义                   |
| ----------- | ---------------------- |
| `loadstart` | 开始读取               |
| `progress`  | 读取中                 |
| `abort`     | 调用了 `abort()`       |
| `load`      | 读取成功               |
| `error`     | 读取失败               |
| `loadend`   | 读取完成，无论成功失败 |

访问结果：

- `result`：读取成功的结果
- `error`：读取失败的错误

Web Worker 中可以使用同步版本 `FileReaderSync`，不会生成事件，同步返回结果。
