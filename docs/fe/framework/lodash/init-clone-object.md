# initCloneObject

创建原型相同的空对象。

```js
function initCloneObject(object) {
  return typeof object.constructor === 'function' && !isPrototype(object)
    ? Object.create(Object.getPrototypeOf(object))
    : {};
}
```
