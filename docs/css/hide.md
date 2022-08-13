# 隐藏元素

## display: none

- 存在于 DOM 中
- 布局时被忽略，不占用空间

## visibility: hidden

- 存在于 DOM 中
- 参与布局，占用空间
- 只是不绘制元素，看不到
- 如果后代元素设置了 `visibility: visible` 则会被绘制
- 无法触发 `click` 事件等 `MouseEvent`