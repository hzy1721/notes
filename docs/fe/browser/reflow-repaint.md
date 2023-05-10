# 回流和重绘

## 回流 (reflow)

元素的尺寸、位置或部分属性改变时，浏览器重新渲染部分文档称为**回流**。

会导致回流的操作：

- 页面首次渲染
- 浏览器窗口大小改变
- 元素尺寸、位置改变
- 元素内容改变
- 元素字体大小改变
- 添加或删除**可见**的 DOM 元素
- 激活 CSS 伪类
- 访问部分属性或方法
  - `clientWidth`、`clientHeight`、`clientTop`、`clientLeft`
  - `offsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft`
  - `scrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft`
  - `scrollIntoView()`、`scrollIntoViewIfNeeded()`
  - `getComputedStyle()`
  - `getBoundingClientRect()`
  - `scrollTo()`

## 重绘 (repaint)

元素样式改变，但位置不变，浏览器重新绘制元素称为**重绘**。

## 总结

回流一定导致重绘，重绘不一定回流。

回流比重绘的代价更高。
