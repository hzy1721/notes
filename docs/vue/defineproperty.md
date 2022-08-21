# Object.defineProperty

**ES6 之前**拦截对象属性的读取和设置操作的**唯一方法**，被 Vue 2 和 Vue 3 中的 `ref` 采用。

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
