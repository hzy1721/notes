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

## 计数器

```js
function createCounter(n) {
  let cnt = n;
  return function () {
    return cnt++;
  };
}
```

## 复合函数

```js
function compose(functions) {
  return function (x) {
    let res = x;
    for (let i = functions.length - 1; i >= 0; --i) {
      res = functions[i](res);
    }
    return res;
  };
}
```

## 计数器 II

```js
function createCounter(init) {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}
```

## 只允许一次函数调用 44

```js
function once(fn) {
  let isCalled = false;
  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn.apply(this, args);
    }
  };
}
```

## 创建 Hello World 函数

```js
function createHelloWorld() {
  return function (...args) {
    return 'Hello World';
  };
}
```

## 返回传递的参数的长度

```js
function argumentsLength(...args) {
  return args.length;
}
```

## 相等还是不相等

```js
function expect(val) {
  return {
    toBe: otherVal => {
      if (val === otherVal) {
        return true;
      }
      throw 'Not Equal';
    },
    notToBe: otherVal => {
      if (val !== otherVal) {
        return true;
      }
      throw 'Equal';
    },
  };
}
```

## 执行可取消的延迟函数

```js
function cancellable(fn, args, t) {
  let isCanceled = false;
  setTimeout(() => {
    if (!isCanceled) {
      fn(...args);
    }
  }, t);
  const cancelFn = () => {
    isCanceled = true;
  };
  return cancelFn;
}
```

## 间隔取消

```js
function cancellable(fn, args, t) {
  fn(...args);
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);
  const cancelFn = () => {
    clearInterval(intervalId);
  };
  return cancelFn;
}
```

## 带有占位符的部分函数

```js
function partial(fn, args) {
  const placeholders = args
    .map((arg, i) => i)
    .filter(i => args[i] === '_');
  return function (...restArgs) {
    let j = 0;
    for (const i of placeholders) {
      args[i] = restArgs[j++];
    }
    return fn.apply(this, args.concat(restArgs.slice(j)));
  };
}
```
