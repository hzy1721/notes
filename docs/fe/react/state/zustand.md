# Zustand

## 创建 store

每个 store 是一个自定义 hook，通过 `create` 创建，`set` 函数是修改状态的唯一手段。

```js
const useStore = create(set => ({
  // 状态，支持所有类型
  bears: 0,
  // 传入函数，参数是旧状态，基于旧状态修改状态
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  // 直接传入新状态，与旧状态合并
  removeAllBears: () => set({ bears: 0 }),
}));
```

## 使用 store

在组件中调用 store 返回需要的状态和更新函数。

```jsx
function BearCounter() {
  const bears = useStore(state => state.bears);
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const increasePopulation = useStore(state => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```
