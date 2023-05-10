# useEffect

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
