# useState

`useState` 声明一个状态变量，传入初始值，返回状态变量与修改状态值的 setter 函数。

- 初始值可以是任意类型
- 通过解构语法为返回的变量和 setter 函数赋予合适的名称
- 多次调用返回的状态变量是独立的

```js
const [state, setState] = useState(initialState);
```

## 状态上移

如果需要在两个或多个组件之间共享状态数据，可以把状态定义上移到最近的公共祖先组件，然后通过 `props` 或 `Context` 将状态变量传递到需要的后代组件。
