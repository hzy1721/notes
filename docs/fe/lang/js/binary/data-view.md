# DataView

`DataView` 允许在任何位置访问任何类型的数据。

创建 `DataView`：

```js
new DataView(buffer, [byteOffset], [byteLength]);
```

属性：

- `buffer`
- `byteLength`
- `byteOffset`

方法：

- `get/setUint8/16/32`
- `get/setInt6/16/32`
- `get/setFloat32/64`
- `get/setBigUint/Int64`
