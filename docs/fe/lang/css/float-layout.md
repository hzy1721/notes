# 浮动布局

使图片浮动在父元素左侧或右侧，文字或其他 inline 元素环绕在图片周围，实现图文混排。

```css
.float {
  float: left;
  float: right;
  /* 不浮动 */
  float: none;
  /* 20230823 支持率 20% 只有 Safari 和 Firefox 支持 */
  float: inline-start;
  float: inline-end;

  float: inherit;
  float: initial;
  float: revert;
  float: revert-layer;
  float: unset;
}
```

浮动元素会从文档常规流 (normal flow) 中移除，可能改变元素的 display 计算属性：

| 指定值       | 计算值 |
| ------------ | ------ |
| inline       | block  |
| inline-block | block  |
| inline-table | table  |
| table-xxx    | block  |
| inline-flex  | flex   |
| inline-grid  | grid   |

## clear

使元素位于之前浮动元素的下方，而不是混排。

```css
.clear {
  clear: none;
  clear: left;
  clear: right;
  clear: both;
  /* 支持率 20% */
  clear: inline-start;
  clear: inline-end;

  clear: inherit;
  clear: initial;
  clear: revert;
  clear: revert-layer;
  clear: unset;
}
```
