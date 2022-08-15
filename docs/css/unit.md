# 单位

## 长度单位

`<length>` 是我们最常用的数值类型，有 2 种单位：绝对单位和相对单位。

### 绝对单位

| 单位 |     中文     |        英文         |           换算           |
| :--: | :----------: | :-----------------: | :----------------------: |
|  cm  |     厘米     |     Centimeters     | 1cm = 37.8px = 25.2/64in |
|  mm  |     毫米     |     Millimeters     |       1mm = 1/10cm       |
|  Q   | 四分之一毫米 | Quarter-millimeters |   1Q = 1/4mm = 1/40cm    |
|  in  |     英尺     |       Inches        |   1in = 96px = 2.54cm    |
|  pc  |     派卡     |        Picas        |       1pc = 1/6in        |
|  pt  |      点      |       Points        |       1pt = 1/72in       |
|  px  |     像素     |       Pixels        |       1px = 1/96in       |

大多数绝对单位用于打印而不是屏幕显示，页面开发最常用的只有像素 `px`。

### 相对单位

| 单位 |        相对于        |
| :--: | :------------------: |
|  em  |  父元素的 font-size  |
| rem  |  根元素的 font-size  |
|  vw  |    窗口宽度的 1%     |
|  vh  |    窗口高度的 1%     |
| vmin |   窗口较短边的 1%    |
| vmax |   窗口较长边的 1%    |
|  ex  |    字符 x 的高度     |
|  ch  |    数字 0 的宽度     |
|  lh  |  元素的 line-height  |
| rlh  | 根元素的 line-height |
