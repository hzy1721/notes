# URL

## query string 与对象互相转换

```js
const qs = {
  parse(s) {
    const obj = {};
    s.split('&')
      .map(item => item.split('='))
      .forEach(([key, value]) => {
        obj[key] = value;
      });
    return obj;
  },
  stringify(obj) {
    return Object.keys(obj).reduce(
      (s, key, index) => s + (index > 0 ? '&' : '') + `${key}=${obj[key]}`,
      ''
    );
  },
};
```
