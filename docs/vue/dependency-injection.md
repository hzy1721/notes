# 依赖注入

祖先组件 -> 后代组件

## provide

```ts
function provide<T>(key: InjectionKey<T> | string, value: T): void;
```

- `key`：字符串或 Symbol 类型
- `value`：任意类型

```js
// 提供静态值
provide('foo', 'bar');

// 提供响应式的值
const count = ref(0);
provide('count', count);

// 提供时将 Symbol 作为 key
provide(fooSymbol, count);

// 应用层面提供依赖
app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!');
```

## inject

```ts
// 没有默认值
function inject<T>(key: InjectionKey<T> | string): T | undefined;

// 带有默认值
function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T;

// 使用工厂函数
function inject<T>(
  key: InjectionKey<T> | string,
  defaultValue: () => T,
  treatDefaultAsFactory: true
): T;
```

- `key`：注入名，就近匹配
- `defaultValue`：没找到 key 时返回的默认值，可以是一个值或一个工厂函数
- `treatDefaultAsFactory`：如果默认值本身就是函数，设为 false

```js
// 注入值的默认方式
const foo = inject('foo');

// 注入响应式的值
const count = inject('count');

// 通过 Symbol 类型的 key 注入
const foo2 = inject(fooSymbol);

// 注入一个值，若为空则使用提供的默认值
const bar = inject('foo', 'default value');

// 注入一个值，若为空则使用提供的工厂函数
const baz = inject('foo', () => new Map());

// 注入时为了表明提供的默认值是个函数，需要传入第三个参数
const fn = inject('function', () => {}, false);
```
