# 对象

## 将对象数组转换为矩阵

```js
function isObject(value) {
  const type = typeof value;
  return (type === 'object' && value !== null) || type === 'function';
}

function jsonToMatrix(arr) {
  const m = arr.length;
  const map = new Map();
  const dfs = (value, row, name) => {
    if (!isObject(value)) {
      let data = map.get(name);
      if (!data) {
        map.set(name, (data = new Array(m).fill('')));
      }
      data[row] = value;
      return;
    }
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; ++i) {
        dfs(value[i], row, name ? `${name}.${i}` : `${i}`);
      }
      return;
    }
    for (const key of Object.keys(value)) {
      dfs(value[key], row, name ? `${name}.${key}` : `${key}`);
    }
  };
  for (let i = 0; i < m; ++i) {
    dfs(arr[i], i);
  }
  const pairs = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));
  const n = pairs.length;
  const res = new Array(m + 1).fill(0).map(() => new Array(n));
  for (let j = 0; j < n; ++j) {
    res[0][j] = pairs[j][0];
  }
  for (let i = 1; i < m + 1; ++i) {
    for (let j = 0; j < n; ++j) {
      res[i][j] = pairs[j][1][i - 1];
    }
  }
  return res;
}
```

## 将 JSON 字符串转换为对象

```js
const primitiveMap = {
  null: null,
  true: true,
  false: false,
};

function jsonPrimitive(str) {
  if (primitiveMap[str] !== undefined) {
    return primitiveMap[str];
  }
  if (!isNaN(Number(str))) {
    return Number(str);
  }
  return str.slice(1, -1);
}

function splitByComma(str) {
  const result = [];
  const { length } = str;
  let count = 0;
  let lastComma = 0;
  let inStr = false;
  for (let i = 0; i < length; ++i) {
    const c = str[i];
    if (
      (c === ',' || c === '}' || c === ']') &&
      count === 1 &&
      !inStr &&
      i - lastComma > 1
    ) {
      result.push(str.slice(lastComma + 1, i));
      lastComma = i;
    }
    if (c === '{' || c === '[') {
      count += 1;
    }
    if (c === '}' || c === ']') {
      count -= 1;
    }
    if (c === '"') {
      inStr = !inStr;
    }
  }
  return result;
}

function jsonArray(str) {
  return splitByComma(str).map(jsonParse);
}

function jsonObject(str) {
  const result = {};
  const props = splitByComma(str);
  const regexp = /^"(?<key>.+?)":(?<value>.+)$/;
  props.forEach(prop => {
    const match = prop.match(regexp);
    const key = match[1];
    const value = match[2];
    result[key] = jsonParse(value);
  });
  return result;
}

function jsonParse(str) {
  if (str[0] === '{') {
    return jsonObject(str);
  }
  if (str[0] === '[') {
    return jsonArray(str);
  }
  return jsonPrimitive(str);
}
```

## 检查是否是类的对象实例

```js
function isObject(value) {
  const type = typeof value;
  return (type === 'object' && type !== null) || type === 'function';
}

const primitiveClassFunction = {
  number: Number,
  string: String,
  boolean: Boolean,
  bigint: BigInt,
  symbol: Symbol,
};

function checkPrimitiveInstanceOf(value, classFunction) {
  const Ctor = primitiveClassFunction[typeof value];
  return (
    Ctor !== undefined &&
    (Ctor === classFunction || classFunction === Object)
  );
}

function checkIfInstanceOf(obj, classFunction) {
  if (typeof classFunction !== 'function') {
    return false;
  }
  if (!isObject(obj)) {
    return checkPrimitiveInstanceOf(obj, classFunction);
  }
  return obj instanceof classFunction;
}
```

## 完全相等的 JSON 字符串

```js
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

function getTag(value) {
  return Object.prototype.toString.call(value);
}

function areDeeplyEqual(o1, o2) {
  const tag1 = getTag(o1);
  const tag2 = getTag(o2);
  if (tag1 !== tag2) {
    return false;
  }
  if (![arrayTag, objectTag].includes(tag1)) {
    return o1 === o2;
  }
  if (tag1 === arrayTag) {
    return (
      o1.length === o2.length &&
      o1.every((_, i) => areDeeplyEqual(o1[i], o2[i]))
    );
  }
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  return (
    keys1.length === keys2.length &&
    keys1.every(key => areDeeplyEqual(o1[key], o2[key]))
  );
}
```

## 将对象转换为 JSON 字符串

```js
function isJSONObject(value) {
  return typeof value === 'object' && value !== null;
}

function jsonStringify(object) {
  if (typeof object === 'number' || typeof object === 'boolean') {
    return String(object);
  }
  if (typeof object === 'string') {
    return `"${object}"`;
  }
  if (!object) {
    return 'null';
  }
  if (Array.isArray(object)) {
    return `[${object.map(el => jsonStringify(el)).join(',')}]`;
  }
  const props = Object.keys(object).map(
    key => `"${key}":${jsonStringify(object[key])}`
  );
  return `{${props.join(',')}}`;
}
```

## 两个对象之间的差异

```js
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

function getTag(value) {
  return Object.prototype.toString.call(value);
}

function jsonValueDiff(val1, val2) {
  if (val1 === undefined || val2 === undefined) {
    return undefined;
  }
  const tag1 = getTag(val1);
  const tag2 = getTag(val2);
  if (tag1 !== tag2) {
    return [val1, val2];
  }
  if (![arrayTag, objectTag].includes(tag1)) {
    return val1 === val2 ? undefined : [val1, val2];
  }
  const result = {};
  if (tag1 === arrayTag) {
    val1.forEach((el, i) => {
      const diff = jsonValueDiff(val1[i], val2[i]);
      if (diff !== undefined) {
        result[i] = diff;
      }
    });
  }
  if (tag1 === objectTag) {
    Object.keys(val1).forEach(key => {
      const diff = jsonValueDiff(val1[key], val2[key]);
      if (diff !== undefined) {
        result[key] = diff;
      }
    });
  }
  return Object.keys(result).length ? result : undefined;
}

function objDiff(obj1, obj2) {
  return jsonValueDiff(obj1, obj2) ?? {};
}
```

## 精简对象

```js
function isObject(value) {
  return (
    (typeof value === 'object' && value !== null) ||
    typeof value === 'function'
  );
}

function compactObject(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(el => compactObject(el));
  }
  const result = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (value) {
      result[key] = compactObject(value);
    }
  });
  return result;
}
```

## 深度合并两个对象

```js
const objectTag = '[object Object]';

function getTag(value) {
  return Object.prototype.toString.call(value);
}

function deepMerge(obj1, obj2) {
  if (getTag(obj1) === objectTag && getTag(obj2) === objectTag) {
    const result = {};
    Object.keys(obj1)
      .concat(Object.keys(obj2))
      .forEach(key => {
        if (obj1[key] !== undefined && obj2[key] !== undefined) {
          result[key] = deepMerge(obj1[key], obj2[key]);
        } else {
          result[key] = obj1[key] ?? obj2[key];
        }
      });
    return result;
  }
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    const len = Math.max(obj1.length, obj2.length);
    const result = new Array(len);
    for (let i = 0; i < len; ++i) {
      if (obj1[i] !== undefined && obj2[i] !== undefined) {
        result[i] = deepMerge(obj1[i], obj2[i]);
      } else {
        result[i] = obj1[i] ?? obj2[i];
      }
    }
    return result;
  }
  return obj2;
}
```

## 将 undefined 转为 null

```js
function isJSONObject(value) {
  return typeof value === 'object' && value !== null;
}

function undefinedValueToNull(value) {
  if (value === undefined) {
    return null;
  }
  if (!isJSONObject(value)) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(undefinedValueToNull);
  }
  const result = {};
  Object.keys(value).forEach(key => {
    result[key] = undefinedValueToNull(value[key]);
  });
  return result;
}

function undefinedToNull(obj) {
  return undefinedValueToNull(obj);
}
```

## 深度对象筛选

```js
function isJSONObject(value) {
  return typeof value === 'object' && value !== null;
}

function deepFilterValue(value, fn) {
  if (!isJSONObject(value)) {
    return fn(value) ? value : undefined;
  }
  if (Array.isArray(value)) {
    const result = value
      .map(el => deepFilterValue(el, fn))
      .filter(el => el !== undefined);
    return result.length ? result : undefined;
  }
  const result = {};
  Object.keys(value).forEach(key => {
    const val = deepFilterValue(value[key], fn);
    if (val !== undefined) {
      result[key] = val;
    }
  });
  return Object.keys(result).length ? result : undefined;
}

function deepFilter(obj, fn) {
  return deepFilterValue(obj, fn);
}
```

## 使用方法链的计算器

```js
class Calculator {
  result = undefined;

  constructor(value) {
    this.result = value;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= value;
    return this;
  }

  power(value) {
    if (value === 0) {
      this.result = 1;
    } else {
      const base = this.result;
      for (let i = 1; i < Math.abs(value); ++i) {
        this.result *= base;
      }
      if (value < 0) {
        this.result = 1 / this.result;
      }
    }
    return this;
  }

  getResult() {
    return this.result;
  }
}
```

## 判断对象是否为空

```js
function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
}
```

## 从两个数组中创建对象

```js
function createObject(keysArr, valuesArr) {
  const result = {};
  const { length } = keysArr;
  for (let i = 0; i < length; ++i) {
    const key = String(keysArr[i]);
    const value = valuesArr[i];
    if (!(key in result)) {
      result[key] = value;
    }
  }
  return result;
}
```

## 对象反转

```js
function invertObject(obj) {
  const result = {};
  Object.keys(obj).forEach(val => {
    const key = String(obj[val]);
    if (!(key in result)) {
      result[key] = val;
    } else if (!Array.isArray(result[key])) {
      result[key] = [result[key], val];
    } else {
      result[key].push(val);
    }
  });
  return result;
}
```
