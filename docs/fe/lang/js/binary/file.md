# File

`File` 继承自 `Blob`，添加了文件系统相关的功能。

创建 `File`：

```js
new File(fileParts, fileName, [options])``;
```

- `fileParts`：`Blob/buffer/String` 数组
- `fileName`：文件名
- `options`：
  - `lastModified`：最后一次修改的时间戳

属性：

- `name`：文件名
- `lastModified`：最后一次修改的时间戳
