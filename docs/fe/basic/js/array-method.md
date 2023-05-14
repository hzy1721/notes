# 数组方法

## 删除元素

```js
splice(start[, deleteCount, elem1, ..., elemN]);
```

## 拍平

```js
flat(depth);
```

- `depth`：拍平层数，默认是 1

### 手写数组拍平

递归

```js
const flatArray = (array, depth = 1) => {
  if (depth <= 0) {
    return array;
  }
  const res = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      res.push(...flatArray(item, depth - 1));
    } else {
      res.push(item);
    }
  });
  return res;
};
```

迭代

```js
const flatArray = (array, depth = 1) => {
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
};
```

## 切片

返回 `[start, end)` 范围内元素组成的新数组，不会修改旧数组，支持负索引。

`start` 默认是 0，`end` 默认是数组末尾。

```js
arr.slice([start], [end]);
```
