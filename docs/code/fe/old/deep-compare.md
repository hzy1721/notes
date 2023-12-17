# deepCompare

```js
function isObject(value) {
  const type = typeof value;
  return (type === 'object' && value !== null) || type === 'function';
}

function getTag(value) {
  return Object.prototype.toString.call(value);
}

const mapTag = '[object Map]';
const setTag = '[object Set]';

function baseCompare(a, b, set = new Set()) {
  const aIsObject = isObject(a);
  const bIsObject = isObject(b);
  if (aIsObject !== bIsObject) {
    return false;
  }
  if (!aIsObject && !bIsObject) {
    return a === b;
  }

  const aTag = getTag(a);
  const bTag = getTag(b);
  if (aTag !== bTag) {
    return false;
  }

  if (set.has(a) || set.has(b)) {
    throw new Error('检测到循环引用');
  }
  set.add(a);
  set.add(b);

  if (aTag === mapTag) {
    if (a.size !== b.size) {
      return false;
    }
    for (const [key, value] of a) {
      if (!baseCompare(value, b.get(key), set)) {
        return false;
      }
    }
    return true;
  }

  if (aTag === setTag) {
    if (a.size !== b.size) {
      return false;
    }
    const tmpSet = new Set(b);
    for (const aValue of a) {
      let found = false;
      for (const bValue of tmpSet) {
        if (baseCompare(aValue, bValue, set)) {
          found = true;
          tmpSet.delete(bValue);
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
    return true;
  }

  const aKeys = Reflect.ownKeys(a);
  const bKeys = Reflect.ownKeys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (const key of aKeys) {
    if (!baseCompare(a[key], b[key], set)) {
      return false;
    }
  }
  return true;
}

function deepCompare(a, b) {
  return baseCompare(a, b);
}
```
