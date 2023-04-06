# getTag

`Object.prototype.toString` 调用结果。

```js
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
```
