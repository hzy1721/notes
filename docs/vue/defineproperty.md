# Object.defineProperty

创建或修改对象上的属性，返回对象。支持指定属性特性，支持访问器属性。

```js
Object.defineProperty(obj, prop, descriptor);
```

- `obj`：目标对象
- `prop`：目标属性，字符串或 Symbol 类型
- `descriptor`：属性特性
  - `value`：默认 `undefined`
  - `writable`：默认 `false`
  - `enumerable`：默认 `false`
  - `configurable`：默认 `false`
  - `get`：访问器属性的 getter 函数
  - `set`：访问器属性的 setter 函数
