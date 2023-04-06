# getAllKeys

```js
/**
 * Creates an array of own enumerable property names and symbols of `object`. 自有/数据/可枚举
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  // 自有/数据/字符串/可枚举
  const result = keys(object);
  if (!Array.isArray(object)) {
    // 自有/数据/Symbol/可枚举
    result.push(...getSymbols(object));
  }
  return result;
}
```
