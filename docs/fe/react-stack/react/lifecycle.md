# 生命周期

![](./assets/react-lifecycle-hooks.png)

1. **render**
   - 执行函数组件，得到 element (vdom)
2. **commit**
   - element 转为 fiber
   - 构建完整 DOM 树
   - 更新 DOM
   - 执行 `useEffect`
