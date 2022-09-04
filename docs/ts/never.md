# never

表示永远不会发生的类型。

- 永远不会有返回值的函数
  - 函数体内有死循环
  - 总是会抛出一个错误

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

`never` 只能赋值给 `never`。
