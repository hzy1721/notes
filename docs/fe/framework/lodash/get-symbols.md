# getSymbols

```js
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

const nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`. 自有/数据/Symbol/可枚举
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
function getSymbols(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return nativeGetSymbols(object).filter(symbol =>
    propertyIsEnumerable.call(object, symbol)
  );
}
```
