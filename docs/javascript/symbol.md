# Symbol

Symbol 表示唯一的标识符。每个 Symbol 类型的值都是唯一的。

## 创建 Symbol

```js
const id = Symbol([desc]);
```

- `desc`：描述字符串，只是方便调试，并不代表使用相同的 desc 创建出的 Symbol 相同
  - 使用 `id.description` 访问描述字符串

## toString()

避免引起混乱，Symbol 不会自动转为字符串，需要显式调用 `toString()` 方法。

```js
const id = Symbol("id");
alert(id.toString()); // Symbol(id)
```

## 隐藏符号属性

由于每个 Symbol 值都是唯一的，外界除了遍历所有 Symbol 属性外，很难直接覆盖一个已有的 Symbol 属性，因为外界很难拿到属性名。

在 `for...in`、`Object.keys()` 中只会列出字符串属性，不会列出符号属性。

可以使用 `Object.getOwnPropertySymbols()` 列出所有 Symbol 自有属性，或使用 `Reflect.ownKeys()` 列出所有自有属性 (包括字符串和 Symbol)。

## 全局 Symbol

如果需要每个字符串对应一个 Symbol，可以使用全局注册的 Symbol。

```js
const id = Symbol.for(key);
```

- `key`：描述字符串，但是全局 Symbol 的一个描述字符串对应一个 Symbol

使用相同的 `key` 总会返回相同的 Symbol，第一次调用时创建，后续调用返回相同的值。

也可以根据 Symbol 返回 key：

```js
const key = Symbol.keyFor(id);
```

## 系统 Symbol

内建对象也大量使用了 Symbol 作为属性名，避免属性被覆盖。

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- ...
