# 构造函数

类和对象是 OOP 的核心概念，类是相同类型对象的抽象，类封装对象创建的代码，实现代码复用。JavaScript 通过构造函数和 `new` 操作符实现相同类型对象的创建。

比如，可以使用 `new Object()` 创建一个空对象，其中 `new` 是一种操作符、`Object` 是一个构造函数。除了 `Object`，JS 还提供了 `Array`、`Set`、`Map` 等内置构造函数。开发者也可以自定义构造函数，相当于创建一个新的类型，从而避免重复书写字面量。

## 构造函数

构造函数是用于创建同一类型对象的函数，有以下 2 个约定：
- 首字母大写，表示这是一种类型
- 只能通过 `new` 操作符执行

函数体内访问到的 `this` 表示正在创建的对象，可以在函数体内为对象设置属性。

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
```

## new 操作符

使用 `new` 操作符执行一个构造函数 `F` 时，执行以下操作：
- 创建一个空对象并分配给 `this`
- 如果 `F.prototype` 是一个对象，则把空对象的原型设置为 `F.prototype`
- 执行构造函数的函数体
- 根据函数体内是否有返回语句以及返回值的类型，确定最终的返回值，默认返回 `this` 的值

```js
const user = new User("Jack");
console.log(user); // { name: "Jack", isAdmin: false }
```

构造函数的本质就是一个普通函数，结合 `new` 操作符的功能实现同一类型对象的创建。`new` 操作可以应用于任何函数 (除箭头函数)，都会执行以上的步骤。

## return

如果构造函数提供了 `return` 语句：
- 返回的是 `Object`：返回该对象，而不是 `this`
- 返回的是原始类型：忽略该 `return` 语句，依旧返回 `this`

通常不提供 `return` 语句，而是返回 `this`。

## new.target

部分构造函数既可以结合 `new` 操作符执行，也可以直接调用，比如 `Date`。`new Date()` 返回当前时间的 `Date` 对象，而 `Date()` 返回当前时间的字符串表示，等价于 `new Date().toString()`。

使用 `new.target` 可以区分使用 `new` 调用和直接调用：
- `new` 调用：当前构造函数
- 直接调用：`undefined`

```js
function User() {
  console.log(new.target);
}

User(); // undefined
new User(); // User
```

让构造函数以两种方式都能使用有以下优缺点：
- 构造函数的使用更加灵活，提供更多功能，程序不容易报错
- 忽略 `new` 不那么直观，降低代码可读性
- 缺少 `new` 的编程错误更不容易被发现，导致不符合预期的程序行为

通常只允许构造函数以 `new` 的方式使用，很少允许直接调用。

## class

尽管 `new` 和构造函数**创建对象**的语法足够直观、与其他语言类似，但是**声明类**使用的构造函数与其他 OOP 语言差别较大，增加了学习成本。ES6 引入了类的概念和 `class` 语法，使类的定义更加清晰易读、更接近于传统 OOP 的声明方式。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

`class` 声明的类型同样使用 `new` 来创建实例。`class` 可以看作构造函数的语法糖，`class` 能够实现的绝大部分功能，使用构造函数也能实现。