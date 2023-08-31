# 排序题目

## 合并区间

```ts
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  const res: number[][] = [];
  const n = intervals.length;
  let [left, right] = intervals[0];
  for (let i = 1; i < n; ++i) {
    const [start, end] = intervals[i];
    if (start <= right) {
      right = Math.max(right, end);
    } else {
      res.push([left, right]);
      [left, right] = [start, end];
    }
  }
  res.push([left, right]);
  return res;
}
```

## 根据身高重建队列

```ts
function reconstructQueue(people: number[][]): number[][] {
  people.sort(([h1, k1], [h2, k2]) => (h1 === h2 ? k2 - k1 : h1 - h2));
  const n = people.length;
  const res: number[][] = new Array(n);
  for (const [h, k] of people) {
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
      if (res[i] === undefined && ++cnt === k + 1) {
        res[i] = [h, k];
      }
    }
  }
  return res;
}
```

## 相对名次

```ts
function getRankPrize(rank: number): string {
  if (rank === 1) {
    return 'Gold Medal';
  }
  if (rank === 2) {
    return 'Silver Medal';
  }
  if (rank === 3) {
    return 'Bronze Medal';
  }
  return String(rank);
}

function findRelativeRanks(score: number[]): string[] {
  const n = score.length;
  const res = new Array<string>(n);
  const scoreWithIndex = score.map((value, index) => [value, index]);
  scoreWithIndex.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < n; ++i) {
    const [score, index] = scoreWithIndex[i];
    res[index] = getRankPrize(i + 1);
  }
  return res;
}
```
