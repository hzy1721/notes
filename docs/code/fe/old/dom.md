# DOM

## 子盒子为正方形且为父盒子的一半

父盒子宽高不固定，子盒子为正方形且始终为父盒子的一半

```css
.child {
  width: 50%;
  height: 0;
  /* padding 百分比相对父元素宽度计算 */
  padding-bottom: 50%;
}
```
