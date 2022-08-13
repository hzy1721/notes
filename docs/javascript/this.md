# this

JavaScript 对象中的函数称为**方法**，在方法中可能需要访问对象的其他属性，就需要用到 `this` 关键字。`this` 表示调用方法的对象，比如 `user.sayHi()` 中 `sayHi` 方法内部访问到的 `this` 就是 `user` 对象。

## 普通函数

JavaScript 中的 `this` 也适用于非对象方法的普通函数，直接调用普通函数时，`this` 的值是 `undefined`，在**非严格模式**下 `this` 的值是全局对象 (浏览器中是 `window`)。

## 运行时计算

JavaScript 函数的 `this` 是在**运行时动态计算**出来的，而不是像其他语言那样，始终绑定为声明函数时的 `this`。声明函数时无法确定 `this` 的值，只有真正调用函数时才能确定。

```js
const user = {
  sayHi() {
    console.log(this);
  }
}
user.sayHi(); // user

const sayHello = user.sayHi;
sayHello(); // undefined 或 window
```

## 箭头函数

ES6 引入的箭头函数与 `function` 声明的函数不同，调用箭头函数时的 `this` 不取决于调用该函数的对象，而是与**声明**时 (不是调用) 所处上下文的 `this` 相同。

比如下面的 `arrow` 函数是直接调用的，但函数内部访问到的 `this` 并不是 `undefined` 或 `window`，而是 `sayHi` 函数调用时的 `this`，值为 `user` 对象。

`showList` 中的 `forEach` 使用了一个匿名箭头函数，该箭头函数是在 `forEach` 函数内被调用的，但是箭头函数中的 `this` 并不等于 `forEach` 调用时的 `this` —— `students`，而是等于声明时所处的 `showList` 调用时的 `this` —— `group`。

```js
const user = {
  sayHi() {
    const arrow = () => console.log(this);
    arrow();
  }
}
user.sayHi(); // user

const group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  }
};
group.showList();
// Our Group: John
// Our Group: Pete
// Our Group: Alice
```

箭头函数的这种特性能让我们更方便地声明和传递函数。很多实用函数都需要传入一个回调函数的参数 `callback`，如果使用 `function` 函数，想要在函数体内访问当前对象，就需要让实用函数接收一个额外的 `thisArg` 参数，表示实用函数内部调用 `callback` 时的 `this`，从而实现在回调函数中访问对象的属性。

比如 `Array.prototype.forEach`：
```js
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

上面的 `showList` 如果使用 `function` 函数将无法正常执行：
```js
const group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(function(student) {
      // 严格模式: Error: Cannot read property 'title' of undefined
      // 非严格模式: undefined: John/Pete/Alice
      console.log(this.title + ': ' + student)
    });
  }
};
group.showList();
```

需要手动添加当前 `this` 为 `thisArg`：
```js
const group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(function(student) {
      console.log(this.title + ': ' + student)
    }, this);
  }
};
group.showList(); // Our Group: John/Pete/Alice
```

## call/apply

为了能以指定的 `this` 调用一个函数，`Function` 提供了 2 个方法：`call` 和 `apply`。

```js
func.call(context, ...args);
func.apply(context, args);
```

`context` 是指定的 `this`，这两个函数的区别是 `call` 使用任意数量的参数列表、`apply` 使用参数的类数组对象。

## bind

还有一种方法可以指定一个函数调用时的 `this`，那就是 `Function` 提供的 `bind` 函数。

```js
const bound = func.bind(context, [arg1], [arg2], ...);
```

`context` 将作为 `bound` 每次调用时的 `this`。

```js
let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```

### 偏函数

`bind` 还可以接受若干参数，当 `bound` 每次调用时一并传入。可以实现固定 `func` 的前若干个参数，生成一个偏函数 `bound`，调用 `bound` 时只需要传入剩余的参数。基于完整参数的函数可以创建多个固定部分参数的实用偏函数。

```js
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2); // double(x) 返回 2x
console.log(double(3)); // 6
```