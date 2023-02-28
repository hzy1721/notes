# 组合

## 组合总和

```ts
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  candidates.sort((a, b) => a - b);
  const nums: number[] = [];
  function dfs(index: number, sum: number) {
    if (sum >= target) {
      if (sum === target) {
        res.push(nums.slice());
      }
      return;
    }
    const n = candidates.length;
    for (let i = index; i < n; ++i) {
      if (i > 0 && candidates[i] === candidates[i - 1]) {
        continue;
      }
      const candidate = candidates[i];
      nums.push(candidate);
      dfs(i, sum + candidate);
      nums.pop();
    }
  }
  dfs(0, 0);
  return res;
}
```

## 幂集

```ts
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const seq: number[] = [];
  const n = nums.length;
  function dfs(index: number, total: number) {
    if (seq.length === total) {
      res.push(seq.slice());
      return;
    }
    for (let i = index; i < n; ++i) {
      seq.push(nums[i]);
      dfs(i + 1, total);
      seq.pop();
    }
  }
  for (let len = 0; len <= n; ++len) {
    dfs(0, len);
  }
  return res;
}
```
