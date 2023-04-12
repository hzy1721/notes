# 拷贝

支持类型：

- 7 种基本类型
- 数组、普通对象、`Arguments`、`Date`、`RegExp`、`Map`、`Set`

不支持类型：

- `Error`、`WeakMap`
- 其他类型

## clone

```js
const clone = value => baseClone(value);
```

## cloneDeep

```js
const cloneDeep = value => baseClone(value, true);
```

## baseClone

```js
const baseClone = (value, isDeep = false, object, map = new Map()) => {
  // 值类型直接返回
  if (!isObject(value)) {
    return value;
  }

  const isFunc = typeof value === 'function';
  const tag = getTag(value);

  // 没必要拷贝函数，完全可以共享
  // 函数和不可拷贝类型：单值返回空对象，作为对象属性返回原值
  if (isFunc || !cloneable[tag]) {
    return object ? value : {};
  }

  let result = undefined;
  const isArr = Array.isArray(value);

  if (isArr) {
    // 初始化空数组
    result = initCloneArray(value);
    // 浅拷贝直接复制元素
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else if (tag === objectTag || tag === argsTag) {
    // 初始化空对象
    result = initCloneObject(value);
    // 浅拷贝直接复制属性
    if (!isDeep) {
      return Object.assign(result, value);
    }
  } else {
    // 初始化其他类型
    result = initCloneByTag(value, tag);
  }

  // 检查循环引用
  const cached = map.get(value);
  if (cached) {
    return cached;
  }
  map.set(value, result);

  if (tag === dateTag || tag === regexpTag) {
    return result;
  }

  // Map/Set 浅拷贝的 value 对象也会创建一份新的，也就是多拷贝一层
  // Map 复制元素
  if (tag === mapTag) {
    value.forEach((subValue, key) => {
      result.set(key, baseClone(subValue, isDeep, value, map));
    });
    return result;
  }

  // Set 复制元素
  if (tag === setTag) {
    value.forEach(subValue => {
      result.add(baseClone(subValue, isDeep, value, map));
    });
    return result;
  }

  // 统一处理数组/类数组/对象
  let props = undefined;
  if (isArr) {
    props = value;
  } else {
    if (isArrayLike(value)) {
      props = arrayLikeKeys(value);
    } else {
      props = Object.keys(value);
    }
    props.push(...getSymbols(value));
  }

  props.forEach((subValue, key) => {
    // 数组是遍历元素，类数组/对象是遍历 key，所以多一步转换
    if (!isArr) {
      key = subValue;
      subValue = value[key];
    }
    result[key] = baseClone(subValue, isDeep, value, map);
  });

  return result;
};
```

## isObject

```js
const isObject = value =>
  (typeof value === 'object' && value !== null) ||
  typeof value === 'function';
```

## getTag

```js
const getTag = value => Object.prototype.toString.call(value);
```

## tag 常量

```js
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';
const dateTag = '[object Date]';
const regexpTag = '[object RegExp]';
const mapTag = '[object Map]';
const setTag = '[object Set]';

const errorTag = '[object Error]';
const weakMapTag = '[object WeakMap]';

const cloneable = {};
cloneable[arrayTag] =
  cloneable[objectTag] =
  cloneable[argsTag] =
  cloneable[dateTag] =
  cloneable[regexpTag] =
  cloneable[mapTag] =
  cloneable[setTag] =
    true;
cloneable[errorTag] = cloneable[weakMapTag] = false;
```

## initCloneArray

```js
const initCloneArray = array => {
  const { length } = array;
  const result = new array.constructor(length);
  return result;
};
```

## copyArray

```js
const copyArray = (source, array) => {
  const { length } = source;
  for (let i = 0; i < length; ++i) {
    array[i] = source[i];
  }
  return array;
};
```

## initCloneObject

```js
const initCloneObject = object => {
  return Object.create(Object.getPrototypeOf(object));
};
```

## initCloneByTag

```js
const initCloneByTag = (object, tag) => {
  const Ctor = object.constructor;
  switch (tag) {
    case dateTag:
      return new Ctor(+object);
    case regexpTag:
      return new Ctor(object);
    case mapTag:
      return new Ctor();
    case setTag:
      return new Ctor();
  }
};
```

## isArrayLike

```js
const isLength = value =>
  typeof value === 'number' &&
  value >= 0 &&
  value % 1 === 0 &&
  value <= Number.MAX_SAFE_INTEGER;

const isArrayLike = value => isObject(value) && isLength(value.length);
```

## arrayLikeKeys

```js
const arrayLikeKeys = value => {
  const { length } = value;
  const result = new Array(length);
  for (let i = 0; i < length; ++i) {
    result[i] = String(i);
  }
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      result.push(key);
    }
  }
  return result;
};
```

## getSymbols

```js
const getSymbols = object =>
  Object.getOwnPropertySymbols(object).filter(symbol =>
    Object.prototype.propertyIsEnumerable.call(object, symbol)
  );
```
