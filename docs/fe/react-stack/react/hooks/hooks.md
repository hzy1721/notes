# hooks

React 16.8 引入，提供一系列 `use` 开头的函数，支持在函数组件内保存状态和触发副作用。

函数组件 + hooks 的写法解决了类组件的一些缺点，逐渐成为 React 的主流写法。

React 内置一些常用 hook，包括 `useState`、`useEffect`、`useContext` 等。

开发者也可以基于内置 hook 编写自定义 hook，提取组件的状态和逻辑。

## 限制

- 只在**最顶层**使用 hook，确保每次渲染以相同的顺序调用 hook
  - 函数组件或自定义 hook 的顶层作用域
  - 不能在条件判断、循环体、嵌套函数内调用 hook
- 只在**函数组件**和**自定义 hook** 中调用 Hook，不在普通函数中使用 hook
  - 确保组件的状态逻辑清晰可读

## 内置 hook

- 状态 hook
  - `useState`：单个状态
  - `useReducer`：复杂状态的管理，比如对象、数组
- context hook
  - `useContext`：读取 context 数据
- ref hook
  - `useRef`：记忆数据，修改不会触发重新渲染，通常用于引用 DOM 节点
  - `useImperativeHandle`：自定义组件暴露的 ref
- effect hook
  - `useEffect`：与外界系统同步
  - `useLayoutEffect`：浏览器重绘之前触发，可用于测量布局
  - `useInsertionEffect`：React 更新 DOM 之前触发，可用于插入动态 CSS
- 性能 hook
  - `useMemo`：缓存昂贵计算
  - `useCallback`：缓存函数定义
  - `useTransition`：标记状态更新可以被中断
  - `useDeferredValue`：推迟耗时的状态更新，优先更新其他状态
- 其他 hook
  - `useDebugValue`：自定义 hook 在 React DevTools 里的标签
  - `useId`：给组件分配一个唯一 ID，通常用于 a11y
  - `useSyncExternalStore`：订阅外部数据源

## 自定义 hook

通过组合其他 hook 编写面向更具体功能的 hook，实现状态、逻辑的封装和复用。

- 与内置 hook 相同，自定义 hook 的名称必须以 `use` 开头，遵循驼峰命名法
- 与组件包括 state、effect、event handler、JSX 不同，自定义 hook 只包括 state、effect
- 一个 hook 的返回值可能成为另一个 hook 的参数
- 每次编写 effect 时，可以考虑是否封装为一个自定义 hook
- 未来 React 可能会提供新的 API 代替部分 effect，到时候就只需要修改自定义 hook，而不是所有用到该 effect 的组件
