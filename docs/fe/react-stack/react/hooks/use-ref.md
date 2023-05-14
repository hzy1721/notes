# useRef

类似于 `useState`，提供一个初始值，后续渲染值会保留，但是修改值不会导致 re-render。

```js
const ref = useRef(initialValue);
// 读
console.log(ref.current);
// 写
ref.current = newValue;
```

## 获取 DOM 元素

ref 常用来获取组件渲染后的 DOM 元素。

1. 定义初始值为 `null` 的 ref
2. 把 ref 传入组件的 `ref` 属性
3. React 渲染组件到屏幕上后，会设置 ref 的值为 DOM 元素
4. 通过 ref 值进行 DOM 操作

```js
const inputRef = useRef(null);
```

```jsx
<input ref={inputRef} />
```
