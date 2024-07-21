# Canvas API

## CanvasRenderingContext2D

这个类是 canvas 操作的核心，通过 `getContext('2d')` 获取到 `ctx` 后，就可以调用上面的各种方法在画布上绘制。

| 类别    | 方法                   | 用途 |
| ------- | ---------------------- | ---- |
| 路径    | beginPath()            |      |
|         | closePath()            |      |
|         | isPointInPath()        |      |
|         | moveTo()               |      |
| 圆弧    | arc()                  |      |
|         | arcTo()                |      |
| 曲线    | bezierCurveTo()        |      |
|         | quadraticCurveTo()     |      |
| 清除    | clearRect()            |      |
| 裁剪    | clip()                 |      |
| 渐变    | createConicGradient()  |      |
|         | createLinearGradient() |      |
|         | createRadialGradient() |      |
| 图片    | createImageData()      |      |
|         | drawImage()            |      |
|         | getImageData()         |      |
|         | putImageData()         |      |
| 图案    | createPattern()        |      |
| 聚焦    | drawFocusIfNeeded()    |      |
| 椭圆    | ellipse()              |      |
| 矩形    | rect()                 |      |
|         | roundRect()            |      |
|         | strokeRect()           |      |
| 填充    | fill()                 |      |
|         | fillRect()             |      |
|         | fillText()             |      |
| context | getContextAttributes() |      |
|         | isContextLost()        |      |
|         | reset()                |      |
|         | restore()              |      |
|         | save()                 |      |
| 线条    | getLineDash()          |      |
|         | lineTo()               |      |
|         | setLineDash()          |      |
| 变换    | getTransform()         |      |
|         | resetTransform()       |      |
|         | setTransform()         |      |
|         | transform()            |      |
| 边框    | isPointInStroke()      |      |
|         | stroke()               |      |
| 文本    | measureText()          |      |
|         | strokeText()           |      |
| 旋转    | rotate()               |      |
| 缩放    | scale()                |      |
| 平移    | translate()            |      |
