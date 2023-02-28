# Proxy

**ES6 引入**的拦截对象属性的读取和设置操作的新方法，被 Vue 3 广泛采用。

包装一个对象，可以拦截属性的读取和写入。

```js
let proxy = new Proxy(target, handler);
```

| 内部方法                | Proxy 处理函数             |
| ----------------------- | -------------------------- |
| `[[GetPrototypeOf]]`    | `getPrototypeOf`           |
| `[[SetPrototypeOf]]`    | `setPrototypeOf`           |
| `[[IsExtensible]]`      | `isExtensible`             |
| `[[PreventExtensions]]` | `preventExtensions`        |
| `[[GetOwnProperty]]`    | `getOwnPropertyDescriptor` |
| `[[DefineOwnProperty]]` | `defineProperty`           |
| `[[HasProperty]]`       | `has`                      |
| `[[Get]]`               | `get`                      |
| `[[Set]]`               | `set`                      |
| `[[Delete]]`            | `deleteProperty`           |
| `[[OwnPropertyKeys]]`   | `ownKeys`                  |
| `[[Call]]`              | `apply`                    |
| `[[Construct]]`         | `construct`                |

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
