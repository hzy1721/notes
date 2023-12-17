# 盒子模型

![](assets/box-model.png)

CSS 属性 `box-sizing` 支持 `content-box` 和 `border-box`。

- `content-box`：只包括 content
- `border-box`：包括 content、padding、border

## margin 重叠

常规流的块级元素的**上下**外边距有时会发生重叠。包括以下情况：

- 相邻的兄弟元素，后面的元素不能设置 `clear`，前面元素的下边距会和后面元素的上边距合并
- 父元素不是 BFC，父元素与第一个子元素没有 border、padding、行内元素分隔，父子元素的上边距会合并
- 父元素不是 BFC，父元素与最后一个子元素没有 border、padding、行内元素分隔，并且父元素没有设置 height、min-height，父子元素的下边距会合并
- 空的块级元素没有 border、padding、height、min-height，自己的上下外边距会合并

重叠规则：

- 都是正数或都是负数，取绝对值较大的值
- 一个正数一个负数，取两者之和
