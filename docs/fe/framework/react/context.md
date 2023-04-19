# context

向相隔一层以上的后代组件传递数据。

## createContext

创建 context：

```js
import { createContext } from 'react';

const SomeContext = createContext(initialValue);
```

## Context.Provider

用 Provider 包裹需要接收数据的后代组件：

```jsx
<SomeContext.Provider value={value}>{/* 后代组件 */}</SomeContext.Provider>
```

## useContext

在后代组件中接收数据：

```js
import { useContext } from 'react';

const value = useContext(SomeContext);
```

## 用途

1. 主题切换，暗黑模式
2. 当前登录的用户信息
3. 当前路由信息，路由库会用到
4. 代替 prop 透传进行祖先节点到后代节点的数据传递
