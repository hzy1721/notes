# TypedArray

`TypedArray` 包含 9 种类型：

- 无符号整数：
  - `Uint8/16/32Array`
  - `Uint8ClampedArray`
- 有符号整数：
  - `Int8/16/32Array`
- 浮点数：
  - `Float32/64Array`

这些类型拥有相同的属性和方法。

构造函数：

```js
new TypedArray(buffer, [byteOffset], [length]);
new TypedArray(object);
new TypedArray(typedArray);
new TypedArray(length);
new TypedArray();
```

属性：

```js
TypedArray.BYTES_PER_ELEMENT;
typedArray.length;
typedArray.buffer;
typedArray.byteLength;
```

方法：

- 大部分数组方法，不支持 `splice/concat`
- `arr.set(fromArr, [offset])`
  - 从 `offset` 开始，把 `fromArr` 的所有元素复制到 `arr`
- `arr.subarray([begin, end])`
  - 创建 `[begin, end)` 的新视图
