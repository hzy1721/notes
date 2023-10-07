# Date

## 日期范围生成器

```js
function* dateRangeGenerator(start, end, step) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + step)
  ) {
    yield date.toISOString().slice(0, 10);
  }
}
```

## 下一天

```js
Date.prototype.nextDay = function () {
  const date = new Date(this);
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
};
```
