# 深拷贝

## cloneDeep

```js
const CLONE_DEEP_FLAG = 1;
const CLONE_SYMBOLS_FLAG = 4;

function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
```

## isObject

```js
function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
```

## getTag

```js
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
```

## initCloneArray

```js
const hasOwnProperty = Object.prototype.hasOwnProperty;

function initCloneArray(array) {
  const { length } = array;
  const result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (
    length &&
    typeof array[0] === 'string' &&
    hasOwnProperty.call(array, 'index')
  ) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
```

## copyArray

```js
function copyArray(source, array) {
  let index = -1;
  const length = source.length;

  array || (array = new Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
```

## isBuffer

```js
const freeGlobal =
  typeof global === 'object' &&
  global !== null &&
  global.Object === Object &&
  global;

const freeGlobalThis =
  typeof globalThis === 'object' &&
  globalThis !== null &&
  globalThis.Object == Object &&
  globalThis;

const freeSelf =
  typeof self === 'object' &&
  self !== null &&
  self.Object === Object &&
  self;

const root =
  freeGlobalThis || freeGlobal || freeSelf || Function('return this')();

const freeExports =
  typeof exports === 'object' &&
  exports !== null &&
  !exports.nodeType &&
  exports;

const freeModule =
  freeExports &&
  typeof module === 'object' &&
  module !== null &&
  !module.nodeType &&
  module;

const moduleExports = freeModule && freeModule.exports === freeExports;

const Buffer = moduleExports ? root.Buffer : undefined;

const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

const isBuffer = nativeIsBuffer || (() => false);
```

## isPrototype

```js
const objectProto = Object.prototype;

function isPrototype(value) {
  const Ctor = value && value.constructor;
  const proto =
    (typeof Ctor === 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}
```

## initCloneObject

```js
function initCloneObject(object) {
  return typeof object.constructor === 'function' && !isPrototype(object)
    ? Object.create(Object.getPrototypeOf(object))
    : {};
}
```

## assocIndexOf

```js
function assocIndexOf(array, key) {
  let { length } = array;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
```

## ListCache

```ts
class ListCache {
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries) {
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  clear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    const lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      data.splice(index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  set(key, value) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
}
```

## Stack

```ts
class Stack {
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries) {
    const data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @memberOf Stack
   */
  clear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key) {
    const data = this.__data__;
    const result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  set(key, value) {
    let data = this.__data__;
    if (data instanceof ListCache) {
      const pairs = data.__data__;
      if (pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
}
```

## baseClone

```js
const CLONE_DEEP_FLAG = 1;
const CLONE_FLAT_FLAG = 2;
const CLONE_SYMBOLS_FLAG = 4;

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

/**
 * The base implementation of `clone` and `cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {number} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  let result;
  // 深拷贝
  const isDeep = bitmask & CLONE_DEEP_FLAG;
  //
  const isFlat = bitmask & CLONE_FLAT_FLAG;
  // 是否拷贝 Symbol 类型
  const isFull = bitmask & CLONE_SYMBOLS_FLAG;

  // 有自定义拷贝函数
  if (customizer) {
    result = object
      ? customizer(value, key, object, stack)
      : customizer(value);
  }
  // 已经算出结果了：直接返回
  if (result !== undefined) {
    return result;
  }
  // 非对象类型直接返回
  if (!isObject(value)) {
    return value;
  }
  // 是否为数组
  const isArr = Array.isArray(value);
  // 获取 toStringTag
  const tag = getTag(value);
  // 是数组
  if (isArr) {
    // 创建长度相同的空数组
    result = initCloneArray(value);
    // 浅拷贝：直接复制数组元素
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    // 是否为函数
    const isFunc = typeof value === 'function';

    // 是 Buffer
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    // Object/Arguments/函数且没有父对象
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      // 创建设置好原型的空对象
      result = isFlat || isFunc ? {} : initCloneObject(value);
      // 浅拷贝
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, copyObject(value, keysIn(value), result))
          : copySymbols(value, Object.assign(result, value));
      }
    } else {
      if (isFunc || !cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  const stacked = stack.get(value);
  // 循环引用直接返回缓存的值
  if (stacked) {
    return stacked;
  }
  // 加入栈种
  stack.set(value, result);

  // Map
  if (tag == mapTag) {
    value.forEach((subValue, key) => {
      result.set(
        key,
        baseClone(subValue, bitmask, customizer, key, value, stack)
      );
    });
    return result;
  }

  // Set
  if (tag == setTag) {
    value.forEach(subValue => {
      result.add(
        baseClone(subValue, bitmask, customizer, subValue, value, stack)
      );
    });
    return result;
  }

  // TypedArray
  if (isTypedArray(value)) {
    return result;
  }

  const keysFunc = isFull
    ? isFlat
      ? getAllKeysIn
      : getAllKeys
    : isFlat
    ? keysIn
    : keys;

  const props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, (subValue, key) => {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(
      result,
      key,
      baseClone(subValue, bitmask, customizer, key, value, stack)
    );
  });
  return result;
}
```
