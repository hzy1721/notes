# useRef

渲染之间保留的数据，类似于状态，但是修改不会触发重新渲染。

```js
const ref = useRef(initialValue);
// 通过 ref.current 访问值
console.log(ref.current);
ref.current = newValue;
```

通常用于保存定时器 ID、DOM 元素等。

## 获取 DOM 元素

ref 常用来获取组件渲染后的 DOM 元素。

1. 定义初始值为 `null` 的 ref
2. 把 ref 传入组件的 `ref` 属性
3. React 渲染组件为 DOM 元素后，会设置 ref 的值为该元素
4. 通过 ref 值进行 DOM 操作

```js
const inputRef = useRef(null);
```

```jsx
<input ref={inputRef} />
```
