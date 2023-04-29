# useState

`useState` 声明一个状态变量，传入初始值，返回状态变量与修改状态值的 setter 函数。

- 初始值可以是任意类型
- 通过解构语法为返回的变量和 setter 函数赋予合适的名称
- 多次调用返回的状态变量是独立的

```js
const [state, setState] = useState(initialState);
```
