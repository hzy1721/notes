# Hooks

Hook 是 React 16.8 新增的特性，提供了一系列 `use` 开头的函数，使开发者能在函数组件内保存状态 (state) 和触发副作用 (effect)。函数组件 + Hook 的写法解决了类组件的一些缺点，正逐渐成为 React 的主流写法。

React 内置了常用的 Hook，包括 `useState`、`useEffect`、`useContext` 等。开发者也可以基于内置 Hook 编写自己的自定义 Hook，抽取不同组件之间的共同状态逻辑。

## Hook 规则

Hook 的使用十分简洁方便，但是为了让 React 正确识别 Hook，需要遵循以下 2 条规则：

- 只在最顶层使用 Hook，确保每次渲染时都以相同的顺序调用 Hook
  - 函数组件或自定义 Hook 的顶层作用域
  - 不能在条件判断、循环体、嵌套函数内调用 Hook
- 只在函数组件和自定义 Hook 中调用 Hook，不能在普通函数中使用 Hook
  - 确保组件的状态逻辑清晰可读

## useState

使用 `useState` 声明一个状态变量，传入初始值，返回状态变量与修改状态值的 setter 函数。初始值可以是任意类型，包括原始类型和对象。通过解构语法为返回的变量和 setter 函数声明合适的名称。

```js
const [count, setCount] = useState(0);
```

然后就可以访问和修改状态的值。

```js
return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
);
```

可以在一个函数中多次调用 `useState`，每次返回的状态变量都是独立的。

## useEffect

使用 `useEffect` 执行副作用操作，包括访问 DOM、获取数据、建立订阅等，通过返回的函数可以进行一些后处理，比如取消订阅、取消定时器等。

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
});

useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return function cleanup() {
    ChatAPI.unsubscribeFromFriendStatus(
      props.friend.id,
      handleStatusChange
    );
  };
});
```

随着 state 的更新，组件也会重新执行并渲染，`useEffect` 会在组件第一次挂载和每次更新时执行。如果有返回的清理函数，清理函数会在每次更新和组件最终卸载时执行。组件更新时，先执行清理函数，后重新执行 `useEffect`。

每次组件更新都清理并重新执行 `useEffect` 有时是不必要的，会带来额外的性能开销，可以在第二个参数指定一个 state 数组，只有当数组中的 state 发生变化时才重新执行。

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新

useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(
      props.friend.id,
      handleStatusChange
    );
  };
}, [props.friend.id]); // 仅在 props.friend.id 发生变化时，重新订阅
```

## 自定义 Hook

React 内置的 Hook 提供了最基本的抽象，开发者可以将公共的组件状态逻辑提取到一个自定义 Hook 函数中，实现更好的代码复用，并且使用 Hook 能够把属于同一功能的代码组合到一个函数中，而不是分散在多个生命周期函数中。

```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
  return isOnline;
}
```

`useFriendStatus` 传入一个好友的 ID，内部保存该好友的在线状态，通过外部 API 订阅好友在线状态的变化，当状态变化时更新内部 state 的值，最后把这个 state 返回。

外部组件可以使用这个自定义 Hook 监听指定好友的在线状态，并确保好友的状态变化时，返回值能够及时更新。避免在多个需要相同功能的组件中存储相同的状态、编写相同的订阅代码，实现了状态、逻辑的统一复用。
