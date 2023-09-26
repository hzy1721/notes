# 数组方法

## push

在数组末尾添加元素。

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

```js
sort();
sort(compareFn);
```

### 返回值

原地排序后的原数组引用。

## concat

拼接多个数组，返回新数组，不改变原数组。

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

## flatMap

等价于先 `map` 后 `flat(1)`。

```js
flatMap(callbackFn);
flatMap(callbackFn, thisArg);
```
