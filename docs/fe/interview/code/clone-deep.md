# 深拷贝

支持类型：

- 7 种基本类型
- 数组
- 普通对象、`Arguments`
- `Set`、`Map`
- `Date`、`RegExp`

不支持类型：

- 其他类型

## clone

浅拷贝

```js
function clone(value) {
  return baseClone(value);
}
```

## cloneDeep

深拷贝

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

  const tag = getTag(value);

  // 不可拷贝类型：
  // - 单值返回空对象，表示拷贝失败
  // - 作为对象属性返回原值，表示不予拷贝
  if (!cloneable[tag]) {
    return object ? value : {};
  }

  // 检查循环引用
  const cached = map.get(value);
  if (cached) {
    return cached;
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
  } else if (tag === setTag) {
    // 初始化其他类型
    result = initCloneByTag(value, tag);
  }

  // 保存已拷贝的值
  map.set(value, result);

  if (tag === dateTag || tag === regexpTag) {
    return result;
  }

  // Set 复制元素
  if (tag === setTag) {
    value.forEach(subValue => {
      result.add(baseClone(subValue, isDeep, value, map));
    });
    return result;
  }

  // Map 复制元素
  if (tag === mapTag) {
    value.forEach((subValue, key) => {
      result.set(key, baseClone(subValue, isDeep, value, map));
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

## 其他

```js
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';
const dateTag = '[object Date]';
const regexpTag = '[object RegExp]';
const mapTag = '[object Map]';
const setTag = '[object Set]';

const cloneable = {};
cloneable[arrayTag] =
  cloneable[objectTag] =
  cloneable[argsTag] =
  cloneable[dateTag] =
  cloneable[regexpTag] =
  cloneable[mapTag] =
  cloneable[setTag] =
    true;

function isObject(value) {
  const type = typeof value;
  return (type === 'object' && value !== null) || type === 'function';
}

function getTag(value) {
  return Object.prototype.toString.call(value);
}
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
