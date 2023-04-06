# baseClone

浅拷贝和深拷贝的真正实现函数。

```js
/**
 * The base implementation of `clone` and `cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone. 被拷贝的值
 * @param {number} bitmask The bitmask flags.
 *  1 - Deep clone 深拷贝
 *  2 - Flatten inherited properties 拷贝继承属性为自有属性
 *  4 - Clone symbols 拷贝 Symbol 属性
 * @param {Function} [customizer] The function to customize cloning. 自定义拷贝函数
 * @param {string} [key] The key of `value`. 当前 value 的 key
 * @param {Object} [object] The parent object of `value`. 当前 value 的父对象
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts. 保存已拷贝属性的栈
 * @returns {*} Returns the cloned value. 返回拷贝后的值
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  // 最终结果
  let result;
  // 是否深拷贝
  const isDeep = bitmask & CLONE_DEEP_FLAG;
  // 是否拷贝继承属性为自有属性
  const isFlat = bitmask & CLONE_FLAT_FLAG;
  // 是否拷贝 Symbol 属性
  const isFull = bitmask & CLONE_SYMBOLS_FLAG;

  // 自定义拷贝函数
  if (customizer) {
    result = object
      ? customizer(value, key, object, stack)
      : customizer(value);
  }
  // 已经算出结果直接返回
  if (result !== undefined) {
    return result;
  }

  // 值类型直接返回
  if (!isObject(value)) {
    return value;
  }

  // 是否为数组
  const isArr = Array.isArray(value);
  // 获取字符串表示
  const tag = getTag(value);
  
  // >>>>> 数组 >>>>>
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

    // >>>>> Node Buffer >>>>>
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    // >>>>> 普通对象/arguments/裸函数 >>>>>
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
      // >>>>> 函数/不可拷贝 >>>>>
      if (isFunc || !cloneableTags[tag]) {
        return object ? value : {};
      }
      // 初始化
      result = initCloneByTag(value, tag, isDeep);
    }
  }

  stack || (stack = new Stack());
  const stacked = stack.get(value);
  // 循环引用直接返回
  if (stacked) {
    return stacked;
  }
  // 保存映射
  stack.set(value, result);

  // >>>>> Map >>>>>
  if (tag == mapTag) {
    // 遍历元素
    value.forEach((subValue, key) => {
      result.set(
        key,
        baseClone(subValue, bitmask, customizer, key, value, stack)
      );
    });
    return result;
  }

  // >>>>> Set >>>>>
  if (tag == setTag) {
    // 遍历元素
    value.forEach(subValue => {
      result.add(
        baseClone(subValue, bitmask, customizer, subValue, value, stack)
      );
    });
    return result;
  }

  // >>>>> TypedArray >>>>>
  if (isTypedArray(value)) {
    // 直接返回
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
    // 赋值
    assignValue(
      result,
      key,
      baseClone(subValue, bitmask, customizer, key, value, stack)
    );
  });
  return result;
}
```

## 常量

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
```
