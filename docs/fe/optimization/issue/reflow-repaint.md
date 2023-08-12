# 回流与重绘

## translate()

`translate()` 是 `transform` 的一个值。改变 `transform` 或 `opacity` 不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。 `transform` 使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此 `translate()` 更高效，可以缩短平滑动画的绘制时间。

当使用 `translate()` 时，元素仍然占据其原始空间（有点像 `position：relative` ），这与改变绝对定位不同。
