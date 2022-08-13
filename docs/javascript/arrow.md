# 箭头函数

ES6 引入的一种定义函数的新方式，有以下优点：
- 用箭头 `=>` 代替 `function` 关键字，语法更简洁
- 只有一个参数可以省略圆括号，函数体只有一条语句可以省略花括号，简化了回调函数的写法

## 没有 this

普通函数调用时的 `this` 指向调用该函数的对象，而箭头函数调用时的 `this` 始终为函数**定义时**所在函数的 `this`，即使箭头函数被传入另一个函数在内部调用。

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