# 背包

## 分割等和子集

```ts
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((res, num) => res + num, 0);
  if (sum % 2 == 1) {
    return false;
  }
  const m = sum / 2;
  const dp = new Array<boolean>(m + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let j = m; j >= num; --j) {
      if (dp[j - num]) {
        dp[j] = true;
      }
    }
  }
  return dp[m];
}
```

## 目标和

```ts
function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((res, num) => res + num, 0);
  if (sum < target || (sum - target) % 2 === 1) {
    return 0;
  }
  const neg = (sum - target) / 2;
  const dp = new Array<number>(neg + 1).fill(0);
  dp[0] = 1;
  for (const num of nums) {
    for (let j = neg; j >= num; --j) {
      dp[j] += dp[j - num];
    }
  }
  return dp[neg];
}
```
