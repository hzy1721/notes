# this

对象中的函数属性称为**方法**，在方法中可能会访问对象的其他属性，需要用到 `this` 关键字。

`this` 表示调用方法的对象，比如 `user.sayHi()` 中 `sayHi` 方法内部访问到的 `this` 就是 `user` 对象。

## 普通函数

- `this` 也适用于非对象属性的普通函数
- 直接调用普通函数时，`this` 的值是 `undefined`
- 非严格模式下 `this` 的值是全局对象 (浏览器中是 `window`)。

## 运行时计算

函数的 `this` 是在**运行时动态计算**出来的，与声明时所处的对象无关。

```js
const user = {
  sayHi() {
    console.log(this);
  },
};
user.sayHi(); // user

const sayHello = user.sayHi;
sayHello(); // undefined 或 window
```

## call/apply

`call` 和 `apply` 允许以指定的 `this` 调用一个函数。

```js
func.call(context, ...args);
func.apply(context, args);
```

- `context` 是指定的 `this`
- `call` 使用任意数量的参数列表
- `apply` 使用参数的类数组对象

## bind

`bind` 将 `this` 和函数参数绑定为固定值。

```js
const bound = func.bind(context, [arg1], [arg2], ...);
```

`context` 将作为 `bound` 每次调用时的 `this`。

### 偏函数

- `bind` 也可以绑定 `func` 的前若干个参数，生成偏函数 `bound`
- 调用 `bound` 时只需要传入剩余的参数
- 基于完整参数的函数可以创建多个固定部分参数的实用偏函数

```js
function mul(a, b) {
  return a * b;
}
const double = mul.bind(null, 2); // double(x) 返回 2x
console.log(double(3)); // 6
```

## 箭头函数

ES6 引入的箭头函数与 `function` 函数不同。箭头函数内部的 `this` 与调用自己的对象无关，而是与外层 `this` 相同。

```js
const user = {
  sayHi() {
    const arrow = () => console.log(this);
    arrow();
  },
};
user.sayHi(); // user
```

箭头函数的这种特性能让我们更方便地传入回调函数。如果想在 `function` 函数内访问外层 `this`，就需要让回调函数接收一个额外的 `thisArg` 参数。

```js
// Array.prototype.forEach
forEach(callbackFn);
forEach(callbackFn, thisArg);
```

直接访问 `this` 报错：

```js
const group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  showList() {
    this.students.forEach(function (student) {
      console.log(this.title + ': ' + student);
    });
  },
};
group.showList();
// 严格模式: Error: Cannot read property 'title' of undefined
// 非严格模式: undefined: John/Pete/Alice
```

传入 `thisArg`：

```js
showList() {
  this.students.forEach(function (student) {
    console.log(this.title + ': ' + student);
  }, this);
},
```

使用箭头函数直接访问 `this`：

```js
showList() {
  this.students.forEach(student =>
    console.log(this.title + ': ' + student)
  );
},
```
