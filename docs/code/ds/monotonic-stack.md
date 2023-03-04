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

## 柱状图中最大的矩形

```ts
function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const left: number[] = new Array(n);
  const right: number[] = new Array(n).fill(n);
  const stack: number[] = [];
  for (let i = 0; i < n; ++i) {
    while (
      stack.length &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      right[stack.pop()] = i;
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  let res = 0;
  for (let i = 0; i < n; ++i) {
    res = Math.max(res, (right[i] - left[i] - 1) * heights[i]);
  }
  return res;
}
```

## 最大矩形

```ts
function maximalRectangle(matrix: string[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const left: number[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] === '1') {
        left[i][j] = (left[i][j - 1] ?? 0) + 1;
      }
    }
  }
  let res = 0;
  for (let j = 0; j < n; ++j) {
    const stack: number[] = [];
    const up: number[] = new Array(m);
    const down: number[] = new Array(m).fill(m);
    for (let i = 0; i < m; ++i) {
      while (
        stack.length &&
        left[stack[stack.length - 1]][j] >= left[i][j]
      ) {
        down[stack.pop()] = i;
      }
      up[i] = stack.length ? stack[stack.length - 1] : -1;
      stack.push(i);
    }
    for (let i = 0; i < m; ++i) {
      res = Math.max(res, (down[i] - up[i] - 1) * left[i][j]);
    }
  }
  return res;
}
```
