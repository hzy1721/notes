# 函数

## 记忆函数 II

```js
class CacheNode {
  result = undefined;
  children = undefined;
  constructor(result, children) {
    this.result = result;
    this.children = children ?? new Map();
  }
}

function memoize(fn) {
  const root = new CacheNode();
  return function (...args) {
    let parentNode = root;
    for (const arg of args) {
      let childNode = parentNode.children.get(arg);
      if (!childNode) {
        parentNode.children.set(arg, (childNode = new CacheNode()));
      }
      parentNode = childNode;
    }
    if (parentNode.result === undefined) {
      parentNode.result = fn.apply(this, args);
    }
    return parentNode.result;
  };
}
```

## 柯里化

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...rest) {
      return curried.apply(this, args.concat(rest));
    };
  };
}
```

## 记忆函数

```js
function memoize(fn) {
  const cachedResult = new Map();
  return function (...args) {
    const { length } = args;
    let parentMap = cachedResult;
    for (let i = 0; i < length - 1; ++i) {
      let childMap = parentMap.get(args[i]);
      if (!childMap) {
        parentMap.set(args[i], (childMap = new Map()));
      }
      parentMap = childMap;
    }
    let result = parentMap.get(args[length - 1]);
    if (result === undefined) {
      parentMap.set(args[length - 1], (result = fn(...args)));
    }
    return result;
  };
}
```

## 使用自定义上下文调用函数

```js
function generateUniqueFunctionName() {
  return `callPolyfill_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
}

Function.prototype.callPolyfill = function (context, ...args) {
  const key = generateUniqueFunctionName();
  Object.defineProperty(context, key, {
    value: this,
    configurable: true,
  });
  const res = context[key](...args);
  delete context[key];
  return res;
};
```

## 将函数绑定到上下文

```js
Function.prototype.bindPolyfill = function (obj) {
  const fn = this;
  return function (...args) {
    return fn.apply(obj, args);
  };
};
```
