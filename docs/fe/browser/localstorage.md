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

## useLocalStorage

```ts
import { useState, useCallback, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  /**
   * 读取一次 key 对应的值，默认返回 initialValue
   */
  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [localState, setLocalState] = useState(readValue);

  /**
   * 当前标签页修改值
   */
  const handleSetState = useCallback(
    value => {
      try {
        const nextState =
          typeof value === 'function' ? value(localState) : value;
        // 自动触发 storage 事件
        window.localStorage.setItem(key, JSON.stringify(nextState));
        // 更新状态
        setLocalState(nextState);
        // 手动触发自定义事件
        window.dispatchEvent(new Event('local-storage'));
      } catch (error) {
        console.warn(error);
      }
    },
    [key, localState]
  );

  const handleStorageChange = useCallback(
    event => {
      // 自定义 local-storage 事件 key 为 undefined
      // storage 事件只有 key 一致才更新状态，避免冗余计算
      if (event.key === key) {
        setLocalState(readValue());
      }
    },
    [readValue]
  );

  useEffect(() => {
    // 监听值变化，包括其他标签页和当前标签页
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('local-storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage', handleStorageChange);
    };
  }, []);

  return [localState, handleSetState];
}
```
