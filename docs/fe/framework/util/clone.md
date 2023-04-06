# 拷贝

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
    result = initCloneByTag(value, tag, isDeep);
  }

  // 检查循环引用
  const cached = map.get(value);
  if (cached) {
    return cached;
  }
  map.set(value, result);

  // TypedArray：在 initCloneByTag 已经完成拷贝，直接返回
  if (isTypedArray(value)) {
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
    assignValue(result, key, baseClone(subValue, isDeep, value, map));
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
const toString = Object.prototype.toString;

const getTag = value => toString.call(value);
```

## tag 常量

```js
const argsTag = '[object Arguments]';
const arrayTag = '[object Array]';
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const mapTag = '[object Map]';
const numberTag = '[object Number]';
const objectTag = '[object Object]';
const regexpTag = '[object RegExp]';
const setTag = '[object Set]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const weakMapTag = '[object WeakMap]';

const arrayBufferTag = '[object ArrayBuffer]';
const dataViewTag = '[object DataView]';
const float32Tag = '[object Float32Array]';
const float64Tag = '[object Float64Array]';
const int8Tag = '[object Int8Array]';
const int16Tag = '[object Int16Array]';
const int32Tag = '[object Int32Array]';
const uint8Tag = '[object Uint8Array]';
const uint8ClampedTag = '[object Uint8ClampedArray]';
const uint16Tag = '[object Uint16Array]';
const uint32Tag = '[object Uint32Array]';

const cloneableTags = {};
cloneableTags[argsTag] =
  cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] =
  cloneableTags[dataViewTag] =
  cloneableTags[boolTag] =
  cloneableTags[dateTag] =
  cloneableTags[float32Tag] =
  cloneableTags[float64Tag] =
  cloneableTags[int8Tag] =
  cloneableTags[int16Tag] =
  cloneableTags[int32Tag] =
  cloneableTags[mapTag] =
  cloneableTags[numberTag] =
  cloneableTags[objectTag] =
  cloneableTags[regexpTag] =
  cloneableTags[setTag] =
  cloneableTags[stringTag] =
  cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] =
  cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] =
  cloneableTags[uint32Tag] =
    true;
cloneableTags[errorTag] = cloneableTags[weakMapTag] = false;
```

## initCloneArray

```js
const hasOwnProperty = Object.prototype.hasOwnProperty;

const initCloneArray = array => {
  const { length } = array;
  const result = new array.constructor(length);
  // RegExp 匹配结果
  if (
    length &&
    typeof array[0] === 'string' &&
    hasOwnProperty.call(array, 'index')
  ) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
};
```

## copyArray

```js
const copyArray = (source, array) => {
  let index = -1;
  const length = source.length;

  array || (array = new Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
};
```

## initCloneObject

```js
const initCloneObject = object => {
  return typeof object.constructor === 'function' && !isPrototype(object)
    ? Object.create(Object.getPrototypeOf(object))
    : {};
};
```

## initCloneByTag

```js
const initCloneByTag = (object, tag, isDeep) => {
  const Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case mapTag:
      return new Ctor();

    case setTag:
      return new Ctor();

    case dateTag:
      return new Ctor(+object);

    case regexpTag:
      return cloneRegExp(object);
  }
};
```

## cloneArrayBuffer

```js
const cloneArrayBuffer = arrayBuffer => {
  const result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
};
```

## cloneTypedArray

```js
const cloneTypedArray = (typedArray, isDeep) => {
  const buffer = isDeep
    ? cloneArrayBuffer(typedArray.buffer)
    : typedArray.buffer;
  return new typedArray.constructor(
    buffer,
    typedArray.byteOffset,
    typedArray.length
  );
};
```

## cloneDataView

```js
const cloneDataView = (dataView, isDeep) => {
  const buffer = isDeep
    ? cloneArrayBuffer(dataView.buffer)
    : dataView.buffer;
  return new dataView.constructor(
    buffer,
    dataView.byteOffset,
    dataView.byteLength
  );
};
```

## cloneRegExp

```js
const reFlags = /\w*$/;

const cloneRegExp = regexp => {
  const result = new regexp.constructor(
    regexp.source,
    reFlags.exec(regexp)
  );
  result.lastIndex = regexp.lastIndex;
  return result;
};
```

## isTypedArray

```js
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray;

const reTypedTag =
  /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

const isTypedArray = nodeIsTypedArray
  ? value => nodeIsTypedArray(value)
  : value => isObjectLike(value) && reTypedTag.test(getTag(value));
```

## isArrayLike

```js
const MAX_SAFE_INTEGER = 9007199254740991;

const isLength = value => {
  return (
    typeof value === 'number' &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER
  );
};

const isArrayLike = value => {
  return (
    value != null && typeof value !== 'function' && isLength(value.length)
  );
};
```

## arrayLikeKeys

```js
const arrayLikeKeys = (value, inherited) => {
  const isArr = Array.isArray(value);
  const isArg = !isArr && isArguments(value);
  const isBuff = !isArr && !isArg && isBuffer(value);
  const isType = !isArr && !isArg && !isBuff && isTypedArray(value);
  const skipIndexes = isArr || isArg || isBuff || isType;
  const length = value.length;
  const result = new Array(skipIndexes ? length : 0);
  let index = skipIndexes ? -1 : length;
  while (++index < length) {
    result[index] = `${index}`;
  }
  for (const key in value) {
    if (
      (inherited || hasOwnProperty.call(value, key)) &&
      !(
        skipIndexes &&
        // Safari 9 has enumerable `arguments.length` in strict mode.
        (key === 'length' ||
          // Skip index properties.
          isIndex(key, length))
      )
    ) {
      result.push(key);
    }
  }
  return result;
};
```

## getSymbols

```js
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

const nativeGetSymbols = Object.getOwnPropertySymbols;

const getSymbols = object => {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return nativeGetSymbols(object).filter(symbol =>
    propertyIsEnumerable.call(object, symbol)
  );
};
```

## assginValue

```js
const eq = (value, other) => {
  // eq(NaN, NaN) === true
  return value === other || (value !== value && other !== other);
};

const baseAssignValue = (object, key, value) => {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true,
    });
  } else {
    object[key] = value;
  }
};

const assignValue = (object, key, value) => {
  const objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    if (value !== 0 || 1 / value === 1 / objValue) {
      baseAssignValue(object, key, value);
    }
  } else if (value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
};
```
