# useEffect

将组件与外部系统进行同步。

```js
useEffect(setup, dependencies?)
```

- setup
  - 第一个参数传入
  - 触发副作用，比如修改 DOM、建立订阅
  - 在组件第一次挂载和每次更新时执行
- cleanup
  - setup 函数的返回值
  - 清除副作用，比如取消订阅、取消定时器
  - 在每次更新和组件卸载时执行
  - 更新时先执行 cleanup，后重新执行 setup

第二个参数指定依赖数组，只有依赖变化时才重新执行。
