# 三栏布局

左侧栏和右侧栏宽度较小且固定，中间栏填满剩余宽度。

```html
<div class="container">
  <div class="left"></div>
  <div class="middle"></div>
  <div class="right"></div>
</div>
```

![](assets/three-column.png)

两栏布局去掉右侧栏即可。

## flex

- 左右栏固定宽度
- 中间栏 `flex-grow` 和 `flex-shrink` 都设为 `1`

```css
.container {
  display: flex;
  align-items: flex-start;
  height: 100vh;
}

.left {
  width: 300px;
  height: 100%;
  background-color: #074188;
}

.middle {
  flex: 1 0;
  height: 100%;
  background-color: #feb475;
}

.right {
  width: 300px;
  height: 100%;
  background-color: #806f93;
}
```

## absolute

- 左右栏固定宽度，绝对定位到页面两侧
- 中间栏设置左右 `margin` 为左右栏宽度

```css
.container {
  position: relative;
  height: 100vh;
}

.left {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #074188;
}

.middle {
  margin: 0 300px;
  height: 100%;
  background-color: #feb475;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #806f93;
}
```

## inline-block

- 三栏都设置 `display: inline-block`
- 容器设置 `font-size: 0` 消除间隔
- 左右栏固定宽度
- 中间栏用 `calc()` 计算剩余宽度

```css
.container {
  height: 100vh;
  font-size: 0;
}

.left {
  display: inline-block;
  vertical-align: top;
  width: 300px;
  height: 100%;
  background-color: #074188;
}

.middle {
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 600px);
  height: 100%;
  background-color: #feb475;
}

.right {
  display: inline-block;
  vertical-align: top;
  width: 300px;
  height: 100%;
  background-color: #806f93;
}
```
