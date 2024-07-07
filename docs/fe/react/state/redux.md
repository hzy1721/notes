# Redux

Redux 是一个前端状态管理库，不局限于 UI 库，使用时需要相关 UI 库的绑定，比如 React Redux，而 Vue 社区的主流是 Vuex、Pinia，主要是 React 社区在用。

Redux Toolkit 是官方提供的 Redux 工具库，包含了各种实用函数和最佳实践。

## 安装

```sh
npm i @reduxjs/toolkit react-redux
```

浏览器扩展：Redux DevTools

## 概念

- store：每个 store 就是一个共享的响应式对象，对属性的修改会触发相关组件重新渲染
- action：描述对 store 修改的对象，通过 dispatch 完成修改
- reducer：接收 action 为参数的函数，返回修改后的新 store

## Redux Core

Redux 本身，只包括最核心的 API，大部分代码需要自己写，比如数组拼接、对象扩展。

- `createStore`：创建 store
- `combineReducers`：把多个 slice 的 reducer 合并为一个 reducer
- `applyMiddleware`：把多个中间件合并为一个 store enhancer
- `compose`：把多个 store enhancer 合并为一个 store enhancer

## Redux Toolkit

直接使用 Redux 需要写很多模板代码，不仅麻烦而且容易出错，Redux Toolkit 封装了 Redux 的最佳实践，简化了 Redux 的使用。

- `configureStore`：创建 store，包括合并 reducer、添加 thunk 中间件、设置 Redux DevTools 等
- `createSlice`：用 Immer 语法写 reducer，避免了拼接和扩展，自动创建生成 action 的函数和 action 类型，与 TS 集成更好
- RTK Query：数据请求和缓存方案

## 基本用法

```js
// 创建 slice
const counterSlice = createSlice({
  // store 名称
  name: 'counter',
  // 状态字段和初始值
  initialState: {
    value: 0,
  },
  // reducer 函数，每个函数对应一个 action
  reducers: {
    incremented: (state) => {
      // 内部调用 Immer 不直接修改原对象，而是返回新对象
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

// 解构出返回 action 对象的函数
export const { incremented, decremented } = counterSlice.actions;

// 创建 store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// 订阅状态的变化
store.subscribe(() => console.log(store.getState()));

// dispatch 对 store 的修改
store.dispatch(incremented());
store.dispatch(decremented());
```
