# localStorage

在浏览器上保存键值对，最多 5MB，服务端无法操控。

- 作用域是同源 (same origin)
  - 协议 (protocol) + 主机名 (host) + 端口 (port)
- 不同标签页/窗口之间共享
- 不会过期

## API

- `getItem(key)`：按照键获取值
- `setItem(key, value)`：存储键值对
- `removeItem(key)`：删除键及其对应的值
- `clear()`：删除所有数据
- `key(index)`：获取该索引下的键名
- `length`：存储的内容的长度

## 监听

同源其他标签页修改 localStorage 会触发当前标签页 window 的 storage 事件。

```js
window.addEventListener('storage', event => {});
```

事件类型为 StorageEvent，属性 (都是只读)：

- key
  - 值变化的 key
  - clear()：null
- newValue
  - 新值
  - clear() 或 removeItem(key)：null
- oldValue
  - 旧值
  - 首次 setItem(key, value)：null
- storageArea
  - localStorage 对象
- url
  - 修改值的标签页 URL
