# async iterable

类似 iterable，区别是 `next()` 返回的 `value` 是 Promise，可以用于 `for await...of`。

遵循 async iterable 的对象需要实现 `[Symbol.asyncIterator]` 方法，返回的迭代器对象遵循 async iterator，其拥有的 `next()` 方法返回的 `value` 是一个 Promise。
