# 数组

## 蜗牛排序

```js
Array.prototype.snail = function (rowsCount, colsCount) {
  const { length } = this;
  if (rowsCount * colsCount !== length) {
    return [];
  }
  const res = new Array(rowsCount).fill(0).map(() => new Array(colsCount));
  let k = 0;
  for (let j = 0; j < colsCount; ++j) {
    if (j % 2 === 0) {
      for (let i = 0; i < rowsCount; ++i) {
        res[i][j] = this[k++];
      }
    } else {
      for (let i = rowsCount - 1; i >= 0; --i) {
        res[i][j] = this[k++];
      }
    }
  }
  return res;
};
```

## 扁平化嵌套数组

```js
function flat(arr, n) {
  if (n <= 0) {
    return arr;
  }
  const res = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      res.push(...flat(el, n - 1));
    } else {
      res.push(el);
    }
  }
  return res;
}
```

## 分组

```js
Array.prototype.groupBy = function (fn) {
  const res = {};
  for (const el of this) {
    const key = fn(el);
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(el);
  }
  return res;
};
```

## 嵌套数组生成器

```js
function* inorderTraversal(arr) {
  for (const el of arr) {
    if (Array.isArray(el)) {
      yield* inorderTraversal(el);
    } else {
      yield el;
    }
  }
}
```

## 根据 ID 合并两个数组

```js
function join(arr1, arr2) {
  const map = new Map();
  for (const arr of [arr1, arr2]) {
    for (const { id, ...rest } of arr) {
      const obj = map.get(id) ?? {};
      map.set(id, { ...obj, ...rest });
    }
  }
  return Array.from(map)
    .map(([id, obj]) => ({ id, ...obj }))
    .sort((a, b) => a.id - b.id);
}
```

## 数组原型对象的最后一个元素

```js
Array.prototype.last = function () {
  if (!this.length) {
    return -1;
  }
  return this[this.length - 1];
};
```

## 数组归约运算

```js
function reduce(nums, fn, init) {
  let res = init;
  for (const num of nums) {
    res = fn(res, num);
  }
  return res;
}
```

## 过滤数组中的元素

```js
function filter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
}
```

## 转换数组中的每个元素

```js
function map(arr, fn) {
  const { length } = arr;
  const res = new Array(length);
  for (let i = 0; i < arr.length; ++i) {
    res[i] = fn(arr[i], i);
  }
  return res;
}
```

## 分块数组

```js
function chunk(arr, size) {
  const { length } = arr;
  const chunkCount = Math.ceil(length / size);
  const res = new Array(chunkCount).fill(0).map(() => []);
  for (let i = 0; i < length; ++i) {
    res[Math.floor(i / size)].push(arr[i]);
  }
  return res;
}
```

## 包装数组

```js
class ArrayWrapper {
  nums = [];

  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this.nums.join(',')}]`;
  }
}
```

## 排序方式

```js
function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}
```

## 数组的上界

```js
Array.prototype.upperBound = function (target) {
  const { length } = this;
  let lo = 0;
  let hi = length - 1;
  while (lo <= hi) {
    const mi = Math.floor((lo + hi) / 2);
    if (target < this[mi]) {
      hi = mi - 1;
    } else {
      lo = mi + 1;
    }
  }
  return lo > 0 && this[lo - 1] === target ? lo - 1 : -1;
};
```

## 数组原型的 forEach 方法

```js
Array.prototype.forEach = function (callback, context) {
  const { length } = this;
  for (let i = 0; i < length; ++i) {
    callback.call(context, this[i], i, this);
  }
};
```
