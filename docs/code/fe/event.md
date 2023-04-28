# 事件

## 事件委托

代码优化：把监听每个子元素改为监听父元素。优化后的代码：

```html
<ul id="list">
  <li class="item">item 1</li>
  <li class="item">item 2</li>
  <li class="item">item 3</li>
</ul>
<script>
  const list = document.getElementById('list');
  list.addEventListener(
    'click',
    e => (e.target.style.backgroundColor = '#ff0000')
  );
</script>
```
