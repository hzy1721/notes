# 手撕题

## 有序数组去重

### sort

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

## 字符串中出现最多的字符(次数)

## 对象与 query param 互相转换

## 给定日期距离今天的天数
