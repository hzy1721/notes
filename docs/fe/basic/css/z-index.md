# z-index

设置 position 非 static 元素 z 轴方向上的高度，高度大的会覆盖高度小的。

```css
.z-index {
  /* 默认值：0 */
  z-index: auto;

  /* 整数 */
  z-index: 0;
  z-index: 3;
  z-index: 289;
  z-index: -1; /* Negative values to lower the priority */

  z-index: inherit;
  z-index: initial;
  z-index: revert;
  z-index: revert-layer;
  z-index: unset;
}
```
