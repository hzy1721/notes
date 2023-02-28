# 手写 new

```js
function checkObjectType(value) {
  return (
    (typeof value === "object" || typeof value === "function") && value !== null
  );
}

function newOperator(func, ...args) {
  if (typeof func !== "function") {
    throw new TypeError(`${func} is not a constructor`);
  }
  const proto = func.prototype;
  if (!checkObjectType(proto)) {
    proto = Object.prototype;
  }
  const obj = Object.create(proto);
  const ret = func.apply(obj, args);
  return checkObjectType(ret) ? ret : obj;
}
```
