# 数组方法

## push

在数组末尾添加元素。

`push` 和 `pop` 会比较快，只需要修改最后一个元素和 `length`。

`shift` 和 `unshift` 会比较慢，还需要移动剩余元素。

```js
push();
push(element0);
push(element0, element1);
push(element0, element1, /* …, */ elementN);
```

### 返回值

添加元素后的数组 `length`。

## pop

删除数组末尾的元素并返回。

```js
pop();
```

### 返回值

被删除的末尾元素。

## shift

删除数组开头的元素并返回。

```js
shift();
```

### 返回值

被删除的开头元素。

## unshift

在数组开头添加元素。

```js
unshift();
unshift(element0);
unshift(element0, element1);
unshift(element0, element1, /* …, */ elementN);
```

### 返回值

添加元素后的数组 `length`。

## splice

在指定位置删除并插入元素。

```js
splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item0);
splice(start, deleteCount, item0, item1);
splice(start, deleteCount, item0, item1, /* …, */ itemN);
```

### 返回值

被删除元素的数组。

## reverse

数组元素倒序。

```js
reverse();
```

### 返回值

原地倒序后的原数组引用。

## sort

数组元素排序。

默认转换为字符串，按照字符的 Unicode 值排序。其他情况需要提供比较函数。

_ES2019_ 规定，`sort()` 的默认排序算法必须是**稳定**的，已被主流浏览器实现。

```js
sort();
sort(compareFn);
```

### 返回值

原地排序后的原数组引用。

## concat

拼接多个数组，返回新数组，不改变原数组。

如果是数组或包含 `Symbol.isConcatSpreadable` 属性的对象，拼接所有属性，否则拼接这个值。

```js
concat();
concat(value0);
concat(value0, value1);
concat(value0, value1, /* …, */ valueN);
```

### 返回值

拼接后的新数组，不改变原数组。

## slice

数组切片，返回新数组，不改变原数组，支持负索引。

```js
slice();
slice(start);
slice(start, end);
```

### 返回值

切片后的新数组，不改变原数组。

## flat

```js
flat(depth);
```

- `depth`：拍平层数，默认是 1
  - 如果想全部拉平，传入 `Infinity`

## flatMap

等价于先 `map` 后 `flat(1)`。

```js
flatMap(callbackFn);
flatMap(callbackFn, thisArg);
```

## copyWithin

```js
copyWithin(target, (start = 0), (end = this.length));
```

把 `[start, end)` 的元素复制到 `target` 开始的位置。

```js
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]
```

## group

- `group`
  - 返回对象
  - key 会转换为字符串
- `groupToMap`
  - 返回 `Map`
  - key 不做转换，可以是对象

```js
const array = [1, 2, 3, 4, 5];
array.group((num, index, array) => {
  return num % 2 === 0 ? 'even' : 'odd';
});
// { odd: [1, 3, 5], even: [2, 4] }

const odd = { odd: true };
const even = { even: true };
array.groupToMap((num, index, array) => {
  return num % 2 === 0 ? even : odd;
});
//  Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4] }
```
