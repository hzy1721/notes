# 数组

JS 中的数组类型是 `Array`。

## 本质

数组属于对象类型，数组元素就是 key 为 number 的属性。JS 通过一些语法规定和引擎优化来让数组对象表现得像其他语言中的数组一样。

- 枚举对象属性时，会优先枚举非负整数的字符串属性，并按照数值从小到大的顺序
- JS 引擎尽量把数组元素连续存储

## length

`length` 本质上是数组的最大数字索引 + 1，会随着属性的变化而自动更新。

设为一个很大的值，会更新 `length` 为最大索引 + 1，但不会填充中间的元素 (`undefined`)。

减小 `length` 的值，会删除长度之外的元素，不可逆。

```js
arr[123] = 0;
console.log(arr.length); // 124
arr.length = 2;
console.log(arr); // [1, 2]
arr.length = 0; // 清空数组
```

## 创建数组

```js
const arr1 = [1, 2, 3]; // [1, 2, 3]
const arr2 = new Array(1, 2, 3); // [1, 2, 3]
const arr3 = new Array(4); // { length: 4 }
arr3[0]; // undefined
```

## 访问元素

```js
arr[0];
arr.at(-1);
```

## 修改元素

```js
arr[0] = 1;
```

## 栈队操作

```js
arr.push(4, 5, 6);
const last = arr.pop();
const first = arr.shift();
arr.unshift(4, 5, 6);
```

`push` 和 `pop` 会比较快，只需要修改最后一个元素和 `length`。

`shift` 和 `unshift` 会比较慢，还需要移动剩余元素。

## splice

```js
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

## 搜索元素

```js
let result = arr.find(function(item, index, array) {
  // 如果返回 true，则返回 item 并停止迭代
  // 没有搜索到，则返回 undefined
});
let result = arr.findIndex(function(item, index, array) {
  // 如果返回 true，则返回 index 并停止迭代
  // 没有搜索到，则返回 -1
});
let result = arr.findLastIndex(function(item, index, array) {
  // 从右向左搜索
});
```

## 过滤元素

```js
let results = arr.filter(function(item, index, array) {
  // 如果 true item 被 push 到 results，迭代继续
  // 如果什么都没找到，则返回空数组
});
```

## 遍历

```js
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

for (let el of arr) {
  console.log(el);
}
```

`for...in` 也可以实现数组遍历，但会遍历额外的属性，需要手动筛选，而且速度比其他 2 种方法慢 10-100 倍，尽管仍然很快，但要尽量避免使用。

`forEach` 在每个元素上运行一次回调函数。

```js
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

## 切片

数组切片，不包括 `end`，支持负索引。

```js
arr.slice([start], [end])
```

## 拼接

拼接数组或值。如果是数组或包含 `Symbol.isConcatSpreadable` 属性的对象，拼接所有属性，否则拼接这个值。

```js
arr.concat(arg1, arg2...)
```

## map/reduce

map 修改每个数组元素的值。

```js
let result = arr.map(function(item, index, array) {
  // 返回结果作为元素的新值
})
```

reduce 根据所有元素的值计算一个最终值。reduceRight 从右向左遍历。

```js
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

## 排序

```js
sort()
sort((a, b) => { /* … */ } )
```

默认转换为字符串，按照字符的 Unicode 值排序。需要自己提供比较函数。

```js
function compare(a, b) {
  if (a > b) return 1;  // 如果第一个值比第二个值大
  if (a == b) return 0; // 如果两个值相等
  if (a < b) return -1; // 如果第一个值比第二个值小
}
```

## 翻转

```js
arr.reverse();
```

## split/join

把字符串按照指定分隔符分成 token 数组，然后用另一种分隔符连接成字符串。

```js
let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', '); // ['Bilbo', 'Gandalf', 'Nazgul']
let str = arr.join(';');     // Bilbo;Gandalf;Nazgul
```

## 判断数组类型

```js
Array.isArray(arr) // true
```
