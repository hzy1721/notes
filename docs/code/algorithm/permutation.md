# 排列

## 下一个排列

```ts
function nextPermutation(nums: number[]): void {
  const n = nums.length;
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    --i;
  }
  if (i >= 0) {
    let j = n - 1;
    while (i < j && nums[i] >= nums[j]) {
      --j;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  for (let j = i + 1, k = n - 1; j < k; ++j, --k) {
    [nums[j], nums[k]] = [nums[k], nums[j]];
  }
}
```

## 全排列

```ts
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const seq: number[] = [];
  const n = nums.length;
  const vis = new Array<boolean>(n).fill(false);
  function dfs() {
    if (seq.length === n) {
      res.push(seq.slice());
      return;
    }
    for (let i = 0; i < n; ++i) {
      if (vis[i]) continue;
      vis[i] = true;
      seq.push(nums[i]);
      dfs();
      seq.pop();
      vis[i] = false;
    }
  }
  dfs();
  return res;
}
```
