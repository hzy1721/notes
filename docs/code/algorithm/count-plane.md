# 数飞机

```ts
// class Interval {
//   start: number;
//   end: number;
//   constructor(start: number, end: number) {
//     this.start = start;
//     this.end = end;
//   }
// }

function countOfAirplanes(airplanes: Interval[]): number {
  const times: number[][] = [];
  for (const { start, end } of airplanes) {
    times.push([start, 1], [end, -1]);
  }
  times.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  let res = 0,
    sum = 0;
  for (const [time, flag] of times) {
    sum += flag;
    res = Math.max(res, sum);
  }
  return res;
}
```
