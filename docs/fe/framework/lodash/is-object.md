# isObject

是否为对象。

```js
function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
```
