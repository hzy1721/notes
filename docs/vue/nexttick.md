# nextTick

更改响应式状态后，DOM 不会立即更新，而是与其他状态改变一起进行批量更新。

确保连续多次的状态改变，最终只更新一次 DOM，避免影响性能。

```ts
function nextTick(callback?: () => void): Promise<void>;
```

`nextTick` 有 2 种用法：

- 传入 `callback` 参数指定下一次 DOM 更新后执行的回调函数
- await 返回的 promise，在后面的代码中访问更新后的 DOM

```ts
interface ComponentPublicInstance {
  $nextTick(callback?: (this: ComponentPublicInstance) => void): Promise<void>;
}
```

`$nextTick` 与 `nextTick` 的唯一区别是：传递给 `$nextTick` 的回调函数会自动绑定 `this` 为当前组件实例。
