# 继承

父类属性可以分为 2 类：

- 自有属性：在构造函数内设置的属性
- 继承属性：`SuperType.prototype` 以及相应的原型链

## class extends

ES6 引入的类语法。

```js
class SubType extends SuperType { ... }
```

<img src="./assets/class-extends.png" width="70%" />

- 数据属性：在子类 constructor 中执行父类 constructor
- 访问器属性和实例方法：`Rabbit.prototype.[[Prototype]]` 设置为 `Animal.prototype`
- 静态属性和静态方法：`Rabbit.[[Prototype]]` 设置为 `Animal`

## 继承实例属性

在子类构造函数内部使用当前 `this` 调用父类构造函数，从而把父类的实例属性设置到子类上。

```js
function SubType() {
  SuperType.call(this);
}
```

## 继承原型链

把子类构造函数的原型的原型设置为父类构造函数的原型。

```js
Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
```

## 完整继承

组合上述两种方法，就可以实现每个子类对象都有父类实例属性的一份拷贝，并且能够访问到父类的原型链。

```js
function SubType() {
  SuperType.call(this);
}
Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
```

## 临时继承

如果想临时创建一个对象继承自另一个对象，可以手动设置对象的原型。

```js
Object.create(proto);
```

- 如果创建多个对象继承同一个对象，继承的属性是共享的

## 多继承

每个对象只能有一个原型，如果想从多个父类继承，可以把其他父类的属性复制到子类的原型上。

```js
SubType.prototype = Object.create(SuperType.prototype);
Object.assign(
  SubType.prototype,
  OtherSuperType.prototype,
  AnotherSuperType.prototype
);
```
