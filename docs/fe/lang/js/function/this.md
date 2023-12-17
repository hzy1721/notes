# this

函数内的 `this` 指向调用当前函数的对象，通过 `this` 可以访问对象的其他属性。

如果直接调用函数而不使用任何对象，函数内的 `this` 在严格模式下是 `undefined`，非严格模式下是全局对象 (浏览器 `window`、Node `global`)。

```js
function sayHi() {
  console.log(`Hi from ${this?.name}`);
}

const user = { name: 'hzy', sayHi };
user.sayHi(); // Hi from hzy
sayHi(); // Hi from undefined
```

## call/apply

以指定 `this` 调用函数，区别是 `call` 接收参数列表，`apply` 接收参数的类数组对象。

```js
func.call(context, ...args);
func.apply(context, args);
```

## bind

固定函数的 `this` 和可选的若干参数。用于绑定 `this` 或创建偏函数。

```js
const bound = func.bind(context, [arg1], [arg2], ...);
```

不管以什么样的对象调用 `bound`，函数内访问到的 `this` 始终是 `context`。

## 箭头函数

箭头函数内的 `this` 始终为声明时的外部 `this`。

这种特性能让我们更方便地编写回调函数，在回调函数内部直接访问外部的 `this`。

```js
const group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  showList() {
    this.students.forEach(student =>
      console.log(this.title + ': ' + student)
    );
  },
};

group.showList();
```

箭头函数出现前，如果想让回调函数以指定的 `this` 调用、而不是直接调用，需要传入 `thisArg` 参数。

```js
// Array.prototype.forEach
forEach(callbackFn);
forEach(callbackFn, thisArg);
```

传入 `thisArg`：

```js
showList() {
  this.students.forEach(function (student) {
    console.log(this.title + ': ' + student);
  }, this);
},
```
