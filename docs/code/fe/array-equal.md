# 比较数组完全相同

## 考虑顺序

```js
const arrayEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  const n = arr1.length;
  for (let i = 0; i < n; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
```

## 不考虑顺序

```js
const arrayEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  const map1 = arr1.reduce(
    (map, ele) => map.set(ele, (map.get(ele) ?? 0) + 1),
    new Map()
  );
  const map2 = arr2.reduce(
    (map, ele) => map.set(ele, (map.get(ele) ?? 0) + 1),
    new Map()
  );
  for (const [ele, cnt] of map1) {
    if (cnt !== map2.get(ele)) {
      return false;
    }
  }
  return true;
};
```
