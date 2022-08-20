# Proxy

包装一个对象，可以拦截属性的读取和写入。

```js
let proxy = new Proxy(target, handler);
```

| 内部方法                | Handler 方法               | 何时触发                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[[Get]]`               | `get`                      | 读取属性                                                                                                                                                                                                                                                                                                                    |
| `[[Set]]`               | `set`                      | 写入属性                                                                                                                                                                                                                                                                                                                    |
| `[[HasProperty]]`       | `has`                      | `in`  操作符                                                                                                                                                                                                                                                                                                                |
| `[[Delete]]`            | `deleteProperty`           | `delete`  操作符                                                                                                                                                                                                                                                                                                            |
| `[[Call]]`              | `apply`                    | 函数调用                                                                                                                                                                                                                                                                                                                    |
| `[[Construct]]`         | `construct`                | `new`  操作符                                                                                                                                                                                                                                                                                                               |
| `[[GetPrototypeOf]]`    | `getPrototypeOf`           | [Object.getPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)                                                                                                                                                                                                |
| `[[SetPrototypeOf]]`    | `setPrototypeOf`           | [Object.setPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)                                                                                                                                                                                                |
| `[[IsExtensible]]`      | `isExtensible`             | [Object.isExtensible](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)                                                                                                                                                                                                    |
| `[[PreventExtensions]]` | `preventExtensions`        | [Object.preventExtensions](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)                                                                                                                                                                                          |
| `[[DefineOwnProperty]]` | `defineProperty`           | [Object.defineProperty](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [Object.defineProperties](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)                                                              |
| `[[GetOwnProperty]]`    | `getOwnPropertyDescriptor` | [Object.getOwnPropertyDescriptor](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), `for..in`, `Object.keys/values/entries`                                                                                                                                   |
| `[[OwnPropertyKeys]]`   | `ownKeys`                  | [Object.getOwnPropertyNames](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames), [Object.getOwnPropertySymbols](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols), `for..in`, `Object.keys/values/entries` |

## get

`get(target, property, receiver)`

- `target`：被包装的对象
- `property`：被访问的属性
- `receiver`：如果被访问属性是 getter，这个值是 `this` 对象，通常就是 proxy 对象

```js
let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 默认值
    }
  },
});
alert(numbers[1]); // 1
alert(numbers[123]); // 0（没有这个数组项）
```

## set

`set(target, property, value, receiver)`

- `target`：被包装的对象
- `property`：被设置的属性
- `value`：属性的新值
- `receiver`：如果被访问属性是 setter，这个值是 `this` 对象，通常就是 proxy 对象

写入成功返回 `true`，失败返回 `false` (会触发 `TypeError`)。

```js
let numbers = [];
numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val == "number") {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});
numbers.push(1); // 添加成功
numbers.push(2); // 添加成功
alert("Length is: " + numbers.length); // 2
numbers.push("test"); // TypeError（proxy 的 'set' 返回 false）
alert("This line is never reached (error in the line above)");
```

## proxy !== target

一个对象只严格等于它自身，所以 `proxy === target` 永远为 `false`。
