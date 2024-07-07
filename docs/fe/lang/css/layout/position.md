# 定位

CSS 中的 `position` 规则用于定位，有以下取值：

- `static`：默认
- `relative`：相对于正常位置做偏移
- `absolute`：相对于第一个非 `static` 祖先元素做定位
- `fixed`：相对于页面定位
- `sticky`

定位类型：

- positioned：除 static 外的 4 种定位
- relatively positioned：relative
- absolutely positioned：absolute、fixed
- stickily positioned：sticky

```css
.demo {
  position: relative;
  position: absolute;
  position: fixed;
  position: sticky;
}
```
