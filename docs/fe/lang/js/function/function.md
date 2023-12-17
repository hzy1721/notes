# Function

函数类型的构造函数，每个函数都是一个 Function 对象。

## 构造函数

```js
new Function();
```

- 动态创建函数
- 与 `eval()` 一样有安全风险
- 只能在全局作用域

## 自有属性

- `length`
  - 形式参数的数量
- `name`
  - 函数名
- `prototype`
  - 原型对象，用于 `new`
  - `prototype.constructor` 等于函数自身

## 原型方法

- `apply(this, args)`
  - 用指定 this 和参数调用函数
- `bind(this, ...args)`
  - 绑定函数的 this 和任意数量的参数
- `call(this, ...args)`
  - 用指定 this 和参数调用函数
- `toString()`
  - 函数源码
- `[@@hasInstance]()`
  - 判断对象是否为 Function 实例，用于 `instanceof`
