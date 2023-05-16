# 正则

## 模板替换

把 `{someVariable}` 中的变量名替换为相应的值。

```js
const renderTemplate = (template, data) => {
  const re = /\{\s*([\w$]*)\s*\}/;
  while (re.test(template)) {
    template = template.replace(re, (_, key) => {
      if (!data.hasOwnProperty(key)) {
        throw Error(`invalid variable ${key}`);
      }
      return data[key];
    });
  }
  return template;
};
```

## 字符串替换

`1abc2d5e13fgh4`

1. 去掉 `b/d/f` 三种字符：`1ac25e13gh4`
2. 把数字两侧加上 `[]`：`[1]abc[2]d[5]e[13]fgh[4]`
3. 把数字变为原来的两倍：`2abc4d10e26fgh8`

```js
const str = '1abc2d5e13fgh4';
// 注意要加 g 修饰符
str.replace(/(b|d|f)/g, '');
// lookbehind + lookahead
// $& 表示匹配结果
str.replace(/(?<!\d)\d+(?!\d)/g, '[$&]');
// 函数第一个参数是匹配结果
str.replace(/(?<!\d)\d+(?!\d)/g, match => match * 2);
```

## 以 `qq.com` 为后缀的域名

```js
/([a-zA-Z0-9](-[a-zA-Z0-9])*\.)*qq.com/;
```
