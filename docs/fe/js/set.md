# Set

`Set` 表示唯一元素的集合，重复添加相同元素只会保留一个，ES6 引入。

API：

- `new Set(iterable)`：基于可迭代对象创建集合
- `set.add(value)`：添加元素，返回 set 本身
- `set.delete(value)`：删除元素，元素存在返回 `true`，不存在返回 `false`
- `set.has(value)`：元素是否存在
- `set.clear()`：清空集合
- `set.size`：元素个数

遍历 Set：

- `set.forEach((value, valueAgain, set) => { ... })`
  - `valueAgain` 与 `value` 相同，为了与 `Map` 兼容
- `set.keys()`
  - 返回所有值的可迭代对象，`for...of` 默认使用
- `set.values()`
  - 与 `set.keys()` 相同，为了兼容 `Map`
- `set.entries()`
  - 返回 `[value, valueAgain]` 的可迭代对象

### WeakSet

`WeakSet` 与 `Set` 有两个区别：

- 元素只能是对象，不能是其他类型
- 元素都是弱引用，垃圾回收不考虑 WeakSet 对元素的引用

`WeakSet` 适合临时存放对象或者与对象相关联的信息，对象一旦不被使用，`WeakSet` 里的相关信息就会自动消失。

由于 `WeakSet` 里的元素随时有可能因为垃圾回收而消失，因此规定 `WeakSet` **不可遍历**。

API：

- `new WeakSet(iterable)`
- `weakSet.add(value)`
- `weakSet.delete(value)`
- `weakSet.has(value)`
- **没有** `clear()` 和 `size`
