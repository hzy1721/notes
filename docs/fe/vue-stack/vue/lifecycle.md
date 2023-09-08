# 生命周期

1. setup
   - 在所有选项式 API 钩子之前调用
2. beforeCreate
   - 组件实例初始化完成
   - props 解析完成
   - 还未设置状态 (`data`、`computed` 等)
3. created
   - 处理完所有状态，包括：
     - 响应式数据 `data`
     - 计算属性 `computed`
     - 方法 `methods`
     - 侦听器 `watch/watchEffect`
4. beforeMount
   - 完成了响应式状态的设置
   - 还没有创建真实 DOM 节点
5. mounted
   - 所有同步子组件挂载完成 (不包含异步组件和 `<Suspense>` 内的组件)
   - 真实 DOM 创建完成并插入到父容器
   - 常用于执行需要访问 DOM 的操作
6. beforeUpdate
   - 由于响应式状态变更而导致 DOM 树更新之前
7. updated
   - 由于响应式状态变更而导致 DOM 树更新之后
   - 在任意 DOM 更新后调用，无法确定是哪些状态导致的更新
   - 如果需要在指定状态更新 DOM 后做一些操作，使用 `nextTick()`
   - 不要在 `updated` 中改变组件状态，可能会导致无限循环
8. beforeUnmount
   - 组件实例卸载前
   - 组件还保有全部的功能
9. unmounted
   - 组件实例卸载后
   - 所有子组件被卸载
   - 所有响应式作用已停止
   - 用于手动清理一些副作用，比如计时器、DOM 事件监听器、与服务器的连接等

![图片](https://s2.loli.net/2022/08/04/kg3fJrG4cwE7x6K.png)
