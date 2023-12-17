# 多列布局

## column-count

把元素内容分成多列。

```css
/* Keyword value */
column-count: auto;

/* <integer> value */
column-count: 3;
```

- `auto` (默认)：列数自适应，由 `column-width` 决定
- `<integer>`：指定列数，如果 `column-width` 也指定了数值，则表示允许的最多列数

## column-width

指定每一列的理想宽度。

- 容器会包含尽可能多的列，每一列的宽度不小于指定宽度，可能大于指定宽度来填补空白
- 如果容器宽度小于指定宽度，则唯一一列的宽度会小于指定宽度

```css
/* Keyword value */
column-width: auto;

/* <length> values */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;
```

- `auto` (默认)：由其他属性决定，比如 `column-count`
- `<length>`：理想宽度，正值

## columns

`column-count/width` 的简写。

```css
/* Column count */
columns: auto;
columns: 2;

/* Column width */
columns: 18em;

/* Both column count and width */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;
```

## column-gap

列间距。

```css
/* Keyword value */
column-gap: normal;

/* <length> values */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> value */
column-gap: 3%;
```

- `normal` (默认)：多列布局为 `1em`，其他布局为 `0`
- `<length>`：间距大小
- `<percentage>`：相对元素宽度的百分比

## column-fill

元素内容如何分配到每一列。

```css
/* Keyword values */
column-fill: auto;
column-fill: balance;
column-fill: balance-all;
```

- `auto`：按顺序填充列，可能导致部分列是空的
- `balance` (默认)：所有列均分内容
- `balance-all`：所有 fragment 都会被均分

## column-rule-width

列之间分隔线的宽度。

```css
/* Keyword values */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* <length> values */
column-rule-width: 1px;
column-rule-width: 2.5em;
```

- 与 `border-width` 类型相同

## column-rule-style

列之间分隔线的样式。

```css
/* <'border-style'> values */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;
```

- 与 `border-style` 类型相同

## column-rule-color

列之间分隔线的颜色。

```css
/* <color> values */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 0.6);
```

## column-rule

`column-rule-width/style/color` 的简写，不限顺序。

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;
```

## column-span

允许子元素横跨多列。

```css
/* Keyword values */
column-span: none;
column-span: all;
```

- `none` (默认)：不横跨多列
- `all`：横跨所有列
