# arrayEach

可以中途退出的 `forEach`。

```js
function arrayEach(array, iteratee) {
  let index = -1;
  const length = array.length;

  while (++index < length) {
    // 函数返回 false 即可停止遍历
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
```
