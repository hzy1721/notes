# initCloneArray

创建长度、类型相同的空数组。

```js
const hasOwnProperty = Object.prototype.hasOwnProperty;

function initCloneArray(array) {
  const { length } = array;
  const result = new array.constructor(length);

  // RegExp 匹配结果
  if (
    length &&
    typeof array[0] === 'string' &&
    hasOwnProperty.call(array, 'index')
  ) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}
```
