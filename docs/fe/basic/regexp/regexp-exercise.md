# 正则题目

## 字符串替换

`1abc2d5e13fgh4`

1. 去掉 `b/d/f` 三种字符：`1ac25e13gh4`
2. 把数字两侧加上 `[]`：`[1]abc[2]d[5]e[13]fgh[4]`
3. 把数字变为原来的两倍：`2abc4d10e26fgh8`

```js
const str = '1abc2d5e13fgh4';
console.log(str.replace(/(b|d|f)/g, ''));
console.log(str.replace(/(?<!\d)\d+(?!\d)/g, '[$&]'));
console.log(str.replace(/(?<!\d)\d+(?!\d)/g, match => match * 2));
```
