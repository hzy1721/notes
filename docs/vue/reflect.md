# Reflect

`Reflect` 使直接调用内部方法成为可能，静态方法是内部方法的最小包装。

| 操作                | `Reflect` 调用                      | 内部方法        |
| :------------------ | :---------------------------------- | :-------------- |
| `obj[prop]`         | `Reflect.get(obj, prop)`            | `[[Get]]`       |
| `obj[prop] = value` | `Reflect.set(obj, prop, value)`     | `[[Set]]`       |
| `delete obj[prop]`  | `Reflect.deleteProperty(obj, prop)` | `[[Delete]]`    |
| `new F(value)`      | `Reflect.construct(F, value)`       | `[[Construct]]` |
| ...                 | ...                                 | ...             |

对于每个可以被 `Proxy` 捕获的内部方法，`Reflect` 都有一个对应方法，名称和参数与捕获函数相同。可以使用 `Reflect` 把操作转发给原始对象，从而简化 `Proxy` 的编写。

```js
let user = {
  name: "John",
};
user = new Proxy(user, {
  get(target, prop, receiver) {
    alert(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, val, receiver) {
    alert(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver);
  },
});
```

对于函数，我们可以使用 `call/apply` 指定函数执行时的 `this`。对于访问器属性，只能通过 `Reflect.get/set` 中的 `receiver` 参数来指定 `this`。
