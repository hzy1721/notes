# 有序数组去重

### 手写

```js
function unique(arr) {
  if (arr.length === 0) {
    return arr;
  }
  arr = arr.sort((a, b) => a - b);
  let j = 1;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] !== arr[i - 1]) {
      arr[j++] = arr[i];
    }
  }
  return arr.slice(0, j);
}
```

### Set

```js
function unique(arr) {
  return Array.from(new Set(arr));
}
```
