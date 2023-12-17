# 生命周期

![](./assets/react-lifecycle-hooks.png)

组件生命周期：mount -> update -> unmount

mount/update 具体流程：

1. **trigger**
   - 应用启动触发第一次渲染
   - 组件状态变化触发重新渲染
2. **render**
   - 第一次渲染调用根组件
     - 创建浏览器元素的 DOM 节点
   - 后续渲染调用触发重新渲染的组件
     - 计算 prop 差异和更新所需的最少操作
3. **commit**
   - 第一次渲染只添加 DOM 节点
     - 使用 `appendChild`
   - 后续渲染应用这些最少操作
     - 只会更新有变化的 DOM 节点
4. **repaint**\*
   - React 更新 DOM 节点后触发浏览器重绘
