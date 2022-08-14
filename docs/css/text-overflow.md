# 文本溢出省略

## 单行

```css
.single-line {
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

优点：

- 实现效果好
- 无兼容问题

缺点：

- 只支持单行

## 多行

### CSS (行数)

```css
.multi-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; // 2行文本
  overflow: hidden;
  text-overflow: ellipsis;
}
```

优点：

- 实现效果好

缺点：

- 兼容性一般，只有 WebKit 内核的浏览器支持

### JS (行数)

```html
<div id="multi-line"></div>
<script>
  const text = "多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字"
    + "多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字"
    + "多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字"
    + "多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字"
    + "多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字多行溢出文字";
  const lineNum = 2;

  window.onresize = formatText;

  function formatText() {
    const el = document.getElementById("multi-line");
    const { width, fontSize } = window.getComputedStyle(el);
    const lineWidth = +width.slice(0, -2); // 去掉 px
    const lineFontSize = +fontSize.slice(0, -2);
    const charNum = Math.floor(lineWidth / lineFontSize);
    const totalCharNum = lineNum * charNum;
    let content = text;
    if (totalCharNum < text.length) {
      content = text.slice(0, totalCharNum - text.length - 3).concat("...");
    }
    el.textContent = content;
  }

  formatText();
</script>
```

优点：
- 无兼容问题
  
缺点：
- 中英文混合时，省略号位置有偏差
- 用 JS 实现样式，违背展示和行为分离的原则

### CSS (高度，不显示省略号)

```css
.multi-line {
  overflow: hidden;
  line-height: 20px;
  max-height: 40px;
}
```

优点：
- 无兼容问题

缺点：
- 无省略号
