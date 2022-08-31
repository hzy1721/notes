# 手写 class 继承

```js
// class SubType extends SuperType

function SuperType() {
  // ...
}

function SubType(arg1, arg2, arg3) {
  const _this = SuperType(arg1, arg2);
  // SuperType.call(this, arg1, arg2);
  _this.foo = "bar";
  _this.sayHi = function () {
    alert("hi");
  };
  return _this;
}

Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
Object.setPrototypeOf(SubType, SuperType);
```
