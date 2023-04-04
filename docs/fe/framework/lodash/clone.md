# clone/cloneDeep

`clone` 和 `cloneDeep` 都调用了 `baseClone`，区别是 `cloneDeep` 额外传入了 `CLONE_DEEP_FLAG`。

```js
const CLONE_DEEP_FLAG = 1;
const CLONE_SYMBOLS_FLAG = 4;

function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
```
