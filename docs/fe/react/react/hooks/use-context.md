# useContext

传递数据给下层组件。

```js
const value = useContext(SomeContext);
```

## context

某些情况下通过 prop 传递数据会很麻烦：

- 透过多层组件传递数据给深层组件
- 多个下层组件需要相同的数据

context 可以解决这个问题：

1. 使用 `createContext` 创建一个 context，提供默认值

```js
const SomeContext = createContext(defaultValue);
```

2. 提供数据的组件内，用 `SomeContext.Provider` 包裹子元素，通过 `value` 属性提供数据

```jsx
<SomeContext.Provider value={value}>{/* 后代组件 */}</SomeContext.Provider>
```

3. 接收数据的后代组件内，用 `useContext(SomeContext)` 得到数据

```js
const value = useContext(SomeContext);
```

## 结合 reducer

对于一些复杂状态的管理会用到 reducer，context 提供了传递数据的能力，只需要传递 `useReducer` 返回的 `state` 和 `dispatch` 即可实现后代组件对复杂状态的共享读写。

类似的，对于一些简单的状态则传递 `useState` 返回的 `state` 和 `setState`。

## 用途

1. 主题切换，比如暗黑模式
2. 当前登录的用户信息
3. 当前路由信息，路由库会用到
