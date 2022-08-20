# Map

`Map` 表示键值对的集合，`Object` 也是键值对的集合，但 key 只能是字符串或 Symbol 类型，`Map` 的 key 可以是任何类型。

API：

- `new Map(iterable)`：使用键值对的可迭代对象创建 Map
  - 把对象转换为 Map：`new Map(Object.entries(obj))`
  - 把 Map 转换为对象：`Object.fromEntries(map)`
- `map.set(key, value)`：设置键值对，返回 map 本身
- `map.get(key)`：读取键值对，key 不存在返回 `undefined`
- `map.has(key)`：键值对是否存在
- `map.delete(key)`：删除键值对
- `map.clear()`：清空 map
- `map.size`：键值对个数

遍历 Map：

- `map.forEach((value, key, map) => { ... })`
- `map.keys()`：所有键的可迭代对象
- `map.values()`：所有值的可迭代对象
- `map.entries()`：所有键值对的可迭代对象，`for...of` 默认使用

### WeakMap

`WeakMap` 与 `Map` 有两个区别：

- key 只能是对象
- key 对象都是弱引用，垃圾回收不考虑 WeakMap 对 key 对象的引用

适合记录对象的相关信息，对象不被引用后，相关信息自动消失。

API：

- `new Map(iterable)`
- `map.set(key, value)`
- `map.get(key)`
- `map.has(key)`
- `map.delete(key)`
- **没有** `clear()` 和 `size`，**不可遍历**
