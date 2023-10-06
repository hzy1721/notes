# Date

## 日期范围生成器

```ts
function* dateRangeGenerator(
  start: string,
  end: string,
  step: number
): Generator<string> {
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
