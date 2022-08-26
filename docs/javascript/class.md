# class

`class` 是现代 JS 创建自定义类型的方式。

语法：

```js
class MyClass {
  property1 = value1;
  constructor() { ... }
  get property2() { ... }
  set property2() { ... }
  method1() { ... }
  method2() { ... }
  ...
}
```

然后可以使用 `new MyClass()` 创建对象，会调用 `constructor` 函数。

本质：

- 创建一个名为 `MyClass` 的函数，参数和函数体来自 `constructor`
- 在函数体内设置类属性，比如 `property1`
- 把方法设置在原型对象 `MyClass.prototype` 上

与构造函数的区别：

- 内部属性 `[[IsClassConstructor]]` 的值为 `true`
  - JS 会在很多地方用到这个属性，来区分 class 和构造函数
    - 必须使用 `new` 调用，直接调用会报错
    - `toString()` 的输出以 `class` 开头
- 类方法不可枚举
  - `enumerable: false`
- 类总是使用 `use strict`

类似于函数，类声明也可以作为匿名或命名表达式，包括函数的参数和返回值。

如果把类方法使用箭头函数声明为类属性，可以避免丢失 `this` 的问题。

```js
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  };
}
```
