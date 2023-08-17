# sessionStorage

在浏览器上保存键值对，最多 5MB，服务端无法操控。

- 作用域是标签页，不同标签页有独立的数据
- 页面刷新会保留
- 标签页关闭后删除

## API

- `getItem(key)`：按照键获取值
- `setItem(key, value)`：存储键值对
- `removeItem(key)`：删除键及其对应的值
- `clear()`：删除所有数据
- `key(index)`：获取该索引下的键名
- `length`：存储的内容的长度
