# 自适应

**自适应 (responsive)** 指的是让同一张网页自动适应不同大小的屏幕，根据屏幕的宽度，自动调整布局。

## 网页宽度自动调整

使用 `viewport` 指定网页的默认宽度和缩放比例：

- 默认宽度为屏幕宽度 (`device-width`)
- 原始缩放比例为 `1` (`initial-scale`)

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## 相对大小的字体

根元素字体设为 `100%`：

```css
body {
  font-size: 100%;
}
```

其他元素字体使用 `rem` 或 `em` 设置：

```css
h1 {
  font-size: 1.5rem;
}
```

## 相对单位

少用 `px` 这种绝对单位，多用 `rem`、`em`、百分比等相对单位。

## 媒体查询

根据屏幕宽度引入不同的 CSS 文件：

```html
<link
  rel="stylesheet"
  type="text/css"
  media="screen and (min-width: 400px) and (max-device-width: 600px)"
  href="smallScreen.css"
/>
```

```css
@import url("tinyScreen.css") screen and (max-device-width: 400px);
```

使用 `@media` 根据屏幕宽度应用不同的 CSS 规则：

```css
@media screen and (max-device-width: 400px) {
  .column {
    float: none;
    width: auto;
  }

  #sidebar {
    display: none;
  }
}
```

## 图片自适应

```css
img {
  max-width: 100%;
}
```
