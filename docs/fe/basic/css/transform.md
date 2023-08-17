# transform

对元素进行几何变换，包括旋转、缩放、倾斜、平移等。

```css
.transform-rules {
  /* 无变换 */
  transform: none;

  /* 指定变换矩阵 */
  transform: matrix(1, 2, 3, 4, 5, 6);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

  /* 透视变换 */
  transform: perspective(17px);

  /* 旋转 */
  transform: rotate(0.5turn);
  transform: rotate3d(1, 2, 3, 10deg);
  transform: rotateX(10deg);
  transform: rotateY(10deg);
  transform: rotateZ(10deg);

  /* 平移 */
  transform: translate(12px, 50%);
  transform: translate3d(12px, 50%, 3em);
  transform: translateX(2em);
  transform: translateY(3in);
  transform: translateZ(2px);

  /* 缩放 */
  transform: scale(2, 0.5);
  transform: scale3d(2.5, 1.2, 0.3);
  transform: scaleX(2);
  transform: scaleY(0.5);
  transform: scaleZ(0.3);

  /* 倾斜 */
  transform: skew(30deg, 20deg);
  transform: skewX(30deg);
  transform: skewY(1.07rad);

  /* 同时应用多种变换 */
  transform: translateX(10px) rotate(10deg) translateY(5px);
  transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

  /* 全局值 */
  transform: inherit;
  transform: initial;
  transform: revert;
  transform: revert-layer;
  transform: unset;
}
```
