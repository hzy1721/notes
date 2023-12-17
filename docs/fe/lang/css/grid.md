# grid 布局

网格布局，把页面划分为二维网格，相邻网格可以合并。

<img src="./assets/grid-layout.png" style="zoom: 75%" />

容器属性：

```css
.container {
  display: grid;

  display: inline-grid;

  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;

  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;

  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);

  grid-template-columns: repeat(auto-fill, 100px);

  grid-template-columns: 1fr 1fr;

  grid-template-columns: 150px 1fr 2fr;

  grid-template-columns: 1fr 1fr minmax(100px, 1fr);

  grid-template-columns: 100px auto 100px;

  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  /* 两栏布局 */
  grid-template-columns: 70% 30%;
  /* 12 列等宽布局 */
  grid-template-columns: repeat(12, 1fr);
}
```
