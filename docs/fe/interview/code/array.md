# 数组

## 手写数组拍平

- 递归

```js
function flatArray(array, depth = 1) {
  if (depth <= 0) {
    return array;
  }
  const res = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      res.push(...flatArray(item, depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}
```

- 迭代

```js
function flatArray(array, depth = 1) {
  let pre = null;
  let res = array;
  while (depth > 0) {
    pre = res;
    res = [];
    pre.forEach(item => {
      if (Array.isArray(item)) {
        res.push(...item);
      } else {
        res.push(item);
      }
    });
    depth -= 1;
  }
  return res;
}
```

## 自定义排序

左边奇数从大到小，右边偶数从小到大。

```js
arr.sort((a, b) => {
  const aIsOdd = a % 2 === 1;
  const bIsOdd = b % 2 === 1;
  if (aIsOdd && bIsOdd) {
    return b - a;
  }
  if (!aIsOdd && !bIsOdd) {
    return a - b;
  }
  return aIsOdd ? -1 : 1;
});
```

## 比较数组完全相同

### 考虑顺序

```js
const arrayEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  // 长度不同肯定不同
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 依次比较
  const n = arr1.length;
  for (let i = 0; i < n; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
```

### 不考虑顺序

```js
const arrayEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  // 长度不同肯定不同
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 计算元素出现次数
  const map1 = arr1.reduce(
    (map, ele) => map.set(ele, (map.get(ele) ?? 0) + 1),
    new Map()
  );
  const map2 = arr2.reduce(
    (map, ele) => map.set(ele, (map.get(ele) ?? 0) + 1),
    new Map()
  );
  // 比较出现次数
  for (const [ele, cnt] of map1) {
    if (cnt !== map2.get(ele)) {
      return false;
    }
  }
  return true;
};
```

## 对象访问路径值

给定对象 `obj` 和访问路径 `a.b.c`，输出对应的值。

```js
function objPathVal(obj, path) {
  return path
    .split('.')
    .reduce((prev, key) => (prev ? prev[key] : prev), obj);
}

const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};
console.log(objPathVal(obj, 'a.b')); // { c: 1 }
console.log(objPathVal(obj, 'a.c')); // undefined
console.log(objPathVal(obj, 'a.e')); // undefined
console.log(objPathVal(obj, 'a.b.c')); // 1
console.log(objPathVal(obj, 'a.b.c.d')); // undefined
```
