# 可迭代对象

可迭代对象是可以在 `for...of` 循环中使用的对象。

可迭代的内建对象：

- `String`
- `Array`
- `Set`
- `Map`
- `arguments`
- `TypedArray`
- `NodeList`

可以将任何对象通过添加 `[Symbol.iterator]` 方法变为可迭代对象。

## Symbol.iterator

`for...of` 循环遍历可迭代对象的关键在于对象的 `Symbol.iterator` 方法。

1. `for...of` 循环启动时，调用对象的 `Symbol.iterator` 方法，返回一个**迭代器 (iterator)**。
   - 迭代器是指拥有 `next()` 方法的对象。
   - 可选的 `return()` 方法在迭代提前退出前调用 (`break` 或出错)。
2. `for...of` 调用迭代器的 `next()` 方法获取下一个值。
   - `next()` 返回的格式为 `{ done: Boolean, value: any }`，`done: true` 表示循环结束

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

可迭代对象就是实现了 `Symbol.iterator` 方法的对象。

## 用途

- `for...of`
- 扩展 `...`
- 解构 `{ xxx } = obj` `[xxx] = arr`
- `yield*`

## 可迭代对象 v.s. 类数组对象

两者没有必然联系，前者是迭代器模式的实现，后者是对数组的模拟，有 `length` 属性但是缺少相应的原型方法。

- 可迭代对象 (Iterable)：
  - 实现了 `Symbol.iterator` 方法
- 类数组对象 (Array-like)：
  - 有索引和 `length` 属性

`Array.from()` 把可迭代对象或类数组对象转换为数组。
