# 单调栈

## 每日温度

```ts
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: [number, number][] = [];
  const n = temperatures.length;
  const res: number[] = new Array(n);
  for (let i = 0; i < n; ++i) {
    const temp = temperatures[i];
    while (stack.length && stack[stack.length - 1][0] < temp) {
      const [_, prev] = stack.pop();
      res[prev] = i - prev;
    }
    stack.push([temp, i]);
  }
  while (stack.length) {
    const [_, prev] = stack.pop();
    res[prev] = 0;
  }
  return res;
}
```
