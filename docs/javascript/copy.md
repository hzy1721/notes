# 对象拷贝

拷贝一个对象的**副本**是开发中常用的基本操作之一，分为浅拷贝和深拷贝。

在具体介绍拷贝算法的细节之前，首先需要明确对象有哪些内容需要拷贝：
1. 原型对象：对象从原型链中继承属性，拷贝原型就拷贝了继承属性
2. 自有属性：分为数据属性和访问器属性

## 浅拷贝 (shallow copy)

浅拷贝指的是拷贝对象的直接属性，对于类型是对象的属性不进行递归拷贝而只拷贝引用。

浅拷贝只拷贝一层，深拷贝递归拷贝所有层。

### Object.assign

```js
Object.assign(target, ...sources)
```

把若干个 `source` 的**可枚举自有属性**拷贝到 `target` 上，按照 `source` 出现的顺序进行覆盖，后面的同名参数会覆盖前面的。 

按照常规方式读写属性，**无法**拷贝访问器属性，只会将 getter 返回的值设置到 `target` 上。

### _.clone

```js
_.clone(value)
```

lodash 提供的浅拷贝函数，`value` 是被拷贝的对象，返回值是拷贝后的新对象。

拷贝对象的**可枚举自有属性**。

### 扩展语法 (spread syntax)

`ES2018` 引入，使用三个点 `...` 把对象的**自有属性**展开。

```js
function clone(source) {
  return { ...source };
}
```

不适用于**未知数量**的多个 `source`，每次循环会花费 $O(n)$ 的时间，总时间复杂度高达 $O(n^2)$。

```js
function clone(...sources) {
  let target = {};
  for (let source of sources) {
    target = { ...target, ...source };
  }
  return target;
}
```

### 手写循环

手写浅拷贝，面试会用到。

```js
function assign(target, ...sources) {
  for (let source of sources) {
    for (let key in sources) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }
}
```

## 深拷贝 (deep copy)

### _.cloneDeep

```js
_.cloneDeep(value)
```

lodash 提供的深拷贝函数，递归拷贝所有对象的**可枚举自有属性**。

### JSON.stringify

```js
const target = JSON.parse(JSON.stringify(source));
```

先把 `source` 的**可枚举自有属性**序列化为字符串，然后再反序列化为新的对象。

由于 JSON 只是 JS 的子集，不能表示所有的 JS 值，这个方法有很多局限性：
- 只支持：普通对象、数组、字符串、有限数值、`true`、`false`、`null`
- `Number` 类型中的 `NaN`、`Infinity`、`-Infinity` 会被序列化为 `null`
- `Date` 对象会被序列化为 ISO 字符串，但是 `JSON.parse` 无法解析回 `Date` 对象，只会保持原来的字符串类型
- `Function`、`RegExp`、`Error` 对象与 `undefined` 无法被序列化或恢复

### 手写递归

手写深拷贝，面试会用到。

```js
function cloneDeep(source) {
  if (typeof source !== 'object' || source === null) {
    return source;
  }
  if (source instanceof Date) {
    return new Date(source);
  }
  if (source instanceof RegExp) {
    return new RegExp(source);
  }
  const target = {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = cloneDeep(source[key]);
    }
  }
  return target;
}
```
