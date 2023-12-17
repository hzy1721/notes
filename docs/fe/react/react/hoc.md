# 高阶组件

高阶组件 (High Order Component, HOC) 是参数为组件、返回值为新组件的函数。

用于复用组件逻辑。纯函数、无副作用。

- 组件：props -> UI
- HOC：组件 -> 组件

使用场景：

- 路由库传入路由参数 withRouter
- Redux 的 connect
  - `connect(selector, actions)(Component)`
- Relay 的 createFragmentContainer

实现时的注意点：

- 不要修改组件原型
- 不要在组件内调用 HOC
- 透传不修改的 props
- 透传静态方法
- 透传 ref
- 设置合理的 displayName
