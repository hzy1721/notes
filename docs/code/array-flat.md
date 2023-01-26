# 数组扁平化

类似于 `Array.prototype.flat(depth)`。

```js
const flatArray = (arr, depth = 1) => {
  let source = arr, target = [];
  for (let i = 0; i < depth; ++i) {
    source.forEach((ele) => {
      if (ele instanceof Array) {
        target.push(...ele);
      } else {
        target.push(ele);
      }
    });
    source = target;
    target = [];
  }
  return source;
}
```
