# transition

CSS 属性改变时自动应用动画。

- `transition-property`：应用动画的属性
  - 大部分 CSS 属性可以应用动画，但不是全部
  - `all` 表示应用于所有属性
- `transition-duration`：动画时长
  - 单位为 s 或 ms
- `transition-timing-function`：动画函数
  - 描述动画进程在时间上的分布，比如先慢后快还是先快后慢
  - 接受 2 种值：三阶贝塞尔曲线 (cubic bezier curve)、阶跃函数 (steps function)
- `transition-delay`：动画开始前的延迟时间
  - 单位为 s 或 ms
  - 设为负数表示跳过一段时间的动画，从中间开始播放动画

简写属性：`transition: property duration timing-function delay`

## 三阶贝塞尔曲线

贝塞尔曲线的阶次等于控制点的个数减一，因此三阶贝塞尔曲线需要 4 个控制点。

第 1 个点固定为 `(0, 0)`，第 4 个点固定为 `(1, 1)`，只需要指定中间的两个点。

语法：`transition-timing-function: cubic-bezier(x2, y2, x3, y3)`

x 表示时间，y 表示过程的完成度。

x 必须在 `[0, 1]` 之间，y 的取值没有限制，因此可以使动画超出起点和终点之间的范围。

CSS 提供几条内建的曲线：

- `ease` (默认)：`(0.25, 0.1, 0.25, 1.0)`
  - 稍慢=>快=>慢
- `ease-in`：`(0.42, 0, 1.0, 1.0)`
  - 慢=>快
- `ease-out`：`(0, 0, 0.58, 1.0)`
  - 快=>慢
- `ease-in-out`：`(0.42, 0, 0.58, 1.0)`
  - 慢=>快=>慢

![图片](https://s2.loli.net/2022/07/19/4SJNUPiTwGzAY5K.png)

## 阶跃函数

把动画过程分成若干个等长的间隔，进行离散的变化。

语法：`transition-timing-function: steps(number of steps[, start/end])`

`start` 表示变化发生在每一段的开始，`end` 表示变化发生在每一段的结尾。

简写值：

- `step-start`：`steps(1, start)`
  - 只有 1 段且立即开始，相当于没有动画
- `step-end`：`steps(1, end)`
  - 只有 1 段，`duration` 时长后发生变化，相当于只延时

## transitionend

动画完成后，会触发 `transitionend` 事件。

`TransitionEvent` 有几个特定属性：

- `propertyName`：完成动画的属性名。
- `elapsedTime`：动画完成的时间 (s)，不包括 `delay`
- `pseudoElement`：动画应用的伪元素的名称
  - `::` 开头的字符串
  - 如果不是在伪元素上应用，为空串
