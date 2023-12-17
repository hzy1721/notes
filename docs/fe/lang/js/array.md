# Array

## 本质

数组属于对象类型，数组元素就是 key 为 `0, 1, 2, ...` 的属性。

JS 通过语法规定和引擎优化来让数组对象表现得像其他语言中的数组一样。

- 枚举对象属性时，会优先枚举非负整数的字符串属性，并按照数值从小到大的顺序
- JS 引擎尽量把数组元素连续存储

## 字面量

直接书写数组的初始元素或空数组。

```js
const arr = [];
const arr2 = [1, 2, 3];
```

## 构造函数

```js
// 空数组
new Array();
// 只传入一个整型参数，范围在 [0, 2^32 - 1]
new Array(arrayLength);
// 其他情况作为数组的第一个元素
new Array(element1);
// 数组的多个元素
new Array(element1, element2, /* …, */ elementN);

// 可以直接作为函数调用而不使用 new
Array();
Array(arrayLength);
Array(element1);
Array(element1, element2, /* …, */ elementN);
```

## 自有属性

### length

数组长度，本质是最大数字属性 + 1，会随数组元素的变化而更新。

- 赋值不存在的元素，会更新 `length` 为最大索引 + 1，但不会填充空缺的元素
- 减小 `length` 会删除长度之外的元素

```js
arr[123] = 0;
console.log(arr.length); // 124
arr.length = 2;
console.log(arr); // [1, 2]
arr.length = 0; // 清空数组
```

## 实例方法

| 用途           | 方法             |
| -------------- | ---------------- |
| 访问元素       | `at`             |
| 拼接数组       | `concat`         |
| 复制元素       | `copyWithin`     |
| 可迭代对象     | `keys`           |
|                | `values`         |
|                | `entries`        |
| 测试数组元素   | `every`          |
|                | `some`           |
| 填充数组       | `fill`           |
| 过滤元素       | `filter`         |
| 查找元素       | `find`           |
|                | `findIndex`      |
|                | `findLast`       |
|                | `findLastIndex`  |
|                | `includes`       |
|                | `indexOf`        |
|                | `lastIndexOf`    |
| 数组拍平       | `flat`           |
|                | `flatMap`        |
| 遍历元素       | `forEach`        |
| 转换为字符串   | `join`           |
|                | `toString`       |
|                | `toLocaleString` |
| 修改元素       | `map`            |
|                | `with`           |
| 修改数组       | `splice`         |
| 栈队操作       | `push`           |
|                | `pop`            |
|                | `shift`          |
|                | `unshift`        |
| 聚合为一个结果 | `reduce`         |
|                | `reduceRight`    |
| 数组切片       | `slice`          |
| 数组排序       | `sort`           |
| 反转数组       | `reverse`        |
| 非原地版本     | `toReversed`     |
|                | `toSorted`       |
|                | `toSpliced`      |

## 静态方法

- `Array.from`
  - 可迭代对象/类数组对象的浅拷贝
- `Array.fromSync`
  - 异步可迭代对象/可迭代对象/类数组对象的浅拷贝
- `Array.isArray`
  - 判断是否为数组
- `Array.of`
  - 用元素创建数组，相比 `new Array()` 行为更单一

## 可迭代

数组是可迭代对象，key 是索引，value 是元素值。
