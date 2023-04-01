# transform

## 平移

```css
.translate {
  transform: translate(12px, 50%);
  transform: translateX(2em);
  transform: translateY(3in);
  transform: translate3d(12px, 50%, 3em);
  transform: translateZ(2px);
}
```

## 缩放

```css
.scale {
  transform: scale(2, 0.5);
  transform: scaleX(2);
  transform: scaleY(0.5);
  transform: scale3d(2.5, 1.2, 0.3);
  transform: scaleZ(0.3);
}
```

## 旋转

```css
.rotate {
  transform: rotate(0.5turn);
  transform: rotate3d(1, 2, 3, 10deg);
  transform: rotateX(10deg);
  transform: rotateY(10deg);
  transform: rotateZ(10deg);
}
```

## 倾斜

```css
.skew {
  transform: skew(30deg, 20deg);
  transform: skewX(30deg);
  transform: skewY(1.07rad);
}
```

## 变换矩阵

```css
.matrix {
  transform: matrix(1, 2, 3, 4, 5, 6);
  transform: matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
}
```

## 透视变换

```css
.perspective {
  transform: perspective(17px);
}
```
