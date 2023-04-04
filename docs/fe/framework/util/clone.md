# 拷贝

不同类型的拷贝方法：

- 7 种原始类型
  - 直接赋值
- 对象
  - 浅拷贝 (shallow)：只拷贝直接属性，对于属性是对象的直接赋值、不递归拷贝
    - 一层
  - 深拷贝 (deep)：递归拷贝所有对象属性
    - 所有层

## 浅拷贝

```js
const isObject = value =>
  (typeof value === 'object' && value !== null) ||
  typeof value === 'function';

const clone = source => {
  if (!isObject(source)) {
    return source;
  }
  return Object.create(
    Object.getPrototypeOf(source),
    Object.getOwnPropertyDescriptors(source)
  );
};
```

## 深拷贝

```js
const ctorTypeSet = new Set([
  '[object Date]',
  '[object Error]',
  '[object RegExp]',
]);

function cloneDeep(source, seen = new Map()) {
  if (typeof source !== 'object' || source === null) {
    return source;
  }
  if (seen.has(source)) {
    return seen.get(source);
  }
  let target;
  if (ctorTypeSet.has(Object.prototype.toString.call(source))) {
    target = new source.constructor(source);
    seen.set(source, target);
  } else if (Array.isArray(source)) {
    target = [];
    seen.set(source, target);
    for (const value of source) {
      target.push(cloneDeep(value, seen));
    }
  } else if (source instanceof Set) {
    target = new Set();
    seen.set(source, target);
    for (const key of source) {
      target.add(cloneDeep(key, seen));
    }
  } else if (source instanceof Map) {
    target = new Map();
    seen.set(source, target);
    for (const [key, value] of source) {
      target.set(key, cloneDeep(value, seen));
    }
  } else {
    target = Object.create(Object.getPrototypeOf(source));
    seen.set(source, target);
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = cloneDeep(source[key], seen);
      }
    }
  }
  return target;
}
```

## JSON.stringify

```js
const target = JSON.parse(JSON.stringify(source));
```

JSON 是 JS 的子集，只支持基础类型：

- 只支持：普通对象、数组、字符串、有限数值、`true`、`false`、`null`
- `Number`：
  - 支持普通数值
  - `NaN`、`Infinity`、`-Infinity` 序列化为 `null`
- `BigInt`：报错
- `String`：支持
- `Boolean`：支持
- `null`：支持
- `undefined`：忽略或序列化为 `null`
- `Symbol`：忽略或序列化为 `null`
- `Object`：
  - 只支持可枚举字符串数据属性，意味着无法携带类型信息
  - `Date` 对象会被序列化为 ISO 字符串，但 `JSON.parse` 无法解析回 `Date` 对象，只会保持原来的字符串类型
