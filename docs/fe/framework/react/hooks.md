# hooks

React 16.8 引入，提供一系列 `use` 开头的函数，支持在函数组件内保存状态和触发副作用。

函数组件 + hooks 的写法解决了类组件的一些缺点，逐渐成为 React 的主流写法。

React 内置一些常用 hook，包括 `useState`、`useEffect`、`useContext` 等。

开发者也可以基于内置 hook 编写自定义 hook，提取组件的状态和逻辑。

## 限制

hooks 有 2 条限制：

- 只在**最顶层**使用 hook，确保每次渲染以相同的顺序调用 hook
  - 函数组件或自定义 hook 的顶层作用域
  - 不能在条件判断、循环体、嵌套函数内调用 hook
- 只在**函数组件**和**自定义 hook** 中调用 Hook，不能在普通函数中使用 hook
  - 确保组件的状态逻辑清晰可读

## useState

`useState` 声明一个状态变量，传入初始值，返回状态变量与修改状态值的 setter 函数。

- 初始值可以是任意类型
- 通过解构语法为返回的变量和 setter 函数赋予合适的名称
- 多次调用返回的状态变量是独立的

```js
const [state, setState] = useState(initialState);
```

## useEffect

`useEffect` 用于触发副作用，比如修改 DOM、建立订阅等，在组件第一次挂载和每次更新时执行。

返回的函数在每次更新和组件卸载时执行，用于进行一些后处理，比如取消订阅、取消定时器等。

组件更新时，先执行返回的清理函数，后重新执行 `useEffect`。

不是所有 `useEffect` 都需要每次组件更新时执行，可以在第二个参数指定依赖数组，只有数组元素变化时才重新执行。

```js
useEffect(() => {
  subscribe();
  return () => {
    unsubscribe();
  };
}, [dep1, dep2]);
```

## 自定义 hook

可以通过自定义 hook 封装属于同一功能的状态和逻辑，实现组件代码的分割和复用，避免分散在多个位置影响可读性。

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

- `useFriendStatus` 传入好友 ID，内部完成在线状态的声明和订阅，只对外暴露实时更新的在线状态
- 外部组件可以使用这个自定义 hook 监听指定好友的在线状态，并确保在线状态变化时，返回值能够及时更新，避免在多个需要类似功能的组件中写重复的代码
