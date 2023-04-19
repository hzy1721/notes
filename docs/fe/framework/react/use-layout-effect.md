# useLayoutEffect

组件完成 DOM 元素创建、绘制到屏幕之前执行的副作用函数。

此时 ref 已经设置好，通常用于获取 DOM 元素的位置和宽高，然后正确绘制**弹出层**的位置。

```js
useLayoutEffect(setup, dependencies?);
```
