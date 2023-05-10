# 窗口和文档大小

## 窗口大小

`document.documentElement.clientWidth/clientHeight`

## 文档大小

```js
const scrollHeight = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.body.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight,
  document.documentElement.clientHeight
);
```

## 滚动距离

```js
const documentScrollTop = window.pageYOffset;
const documentScrollLeft = window.pageXOffset;
```

## 滚动到指定位置

```js
window.scrollBy(x, y);
window.scrollTo(pageX, pageY);
// 元素上边缘与窗口顶部对齐
elem.scrollToView(true);
// 元素下边缘与窗口底部对齐
elem.scrollToView(false);
```

## 禁止滚动

```css
body {
  overflow: hidden;
}
```
