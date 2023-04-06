# isPrototype

是否为原型。

```js
const objectProto = Object.prototype;

function isPrototype(value) {
  const Ctor = value && value.constructor;
  const proto =
    (typeof Ctor === 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}
```
