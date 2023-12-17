# useLayoutEffect

浏览器重绘之前触发的 effect，通常用于测量布局。

```js
useLayoutEffect(setup, dependencies?)
```

参数/返回值：同 `useEffect`

警告：

- `useLayoutEffect` 会阻塞浏览器重绘，影响性能

用途：

- 弹出层位置正确绘制
  - 浏览器重绘前拿到 ref，获取位置和宽高，计算弹出层位置，设置给 CSS 属性
