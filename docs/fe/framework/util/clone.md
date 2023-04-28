# 拷贝

支持类型：

- 7 种基本类型
- 数组、普通对象、`Arguments`、`Date`、`RegExp`、`Map`、`Set`

不支持类型：

- `Error`、`WeakMap`
- 其他类型

## clone

```js
function clone(value) {
  return baseClone(value);
}
```

## cloneDeep

```js
function cloneDeep(value) {
  return baseClone(value, true);
}
```

## baseClone

```js
function baseClone(value, isDeep = false, object, map = new Map()) {
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

  // 统一处理数组/对象
  let props = undefined;
  if (isArr) {
    props = value;
  } else {
    // 可枚举字符串属性
    props = Object.keys(value);
    // 可枚举 Symbol 属性
    props = props.concat(getSymbols(value));
  }

  props.forEach((subValue, key) => {
    // 数组是遍历元素，对象是遍历 key，所以多一步转换
    if (!isArr) {
      key = subValue;
      subValue = value[key];
    }
    result[key] = baseClone(subValue, isDeep, value, map);
  });

  return result;
}
```

## isObject

```js
function isObject(value) {
  const type = typeof value;
  return (type === 'object' && value !== null) || type === 'function';
}
```

## getTag

```js
function getTag(value) {
  return Object.prototype.toString.call(value);
}
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
function initCloneArray(array) {
  const { length } = array;
  const result = new array.constructor(length);
  return result;
}
```

## copyArray

```js
function copyArray(source, array) {
  const { length } = source;
  for (let i = 0; i < length; ++i) {
    array[i] = source[i];
  }
  return array;
}
```

## initCloneObject

```js
function initCloneObject(object) {
  return Object.create(Object.getPrototypeOf(object));
}
```

## initCloneByTag

```js
function initCloneByTag(object, tag) {
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
}
```

## getSymbols

```js
function getSymbols(object) {
  return Object.getOwnPropertySymbols(object).filter(symbol =>
    Object.prototype.propertyIsEnumerable.call(object, symbol)
  );
}
```
