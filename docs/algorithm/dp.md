# 动态规划

- 重复子问题：这些子问题不应该被重复计算
- 最优子结构：原问题的最优解可以分解为若干个子问题的最优解
- 无后效性：后面阶段的状态只依赖于前面阶段的状态

## 比特位计数

### 最高位

```ts
function countBits(n: number): number[] {
  const res = new Array<number>(n + 1);
  res[0] = 0;
  let msb = 1;
  for (let i = 1; i <= n; ++i) {
    if ((i & (i - 1)) === 0) {
      msb = i;
    }
    res[i] = res[i - msb] + 1;
  }
  return res;
}
```

### 最低位

```ts
function countBits(n: number): number[] {
  const res = new Array<number>(n + 1);
  res[0] = 0;
  for (let i = 1; i <= n; ++i) {
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
}
```

### 最低设置位

```ts
function countBits(n: number): number[] {
  const res = new Array<number>(n + 1);
  res[0] = 0;
  for (let i = 1; i <= n; ++i) {
    res[i] = res[i & (i - 1)] + 1;
  }
  return res;
}
```

## 最大子数组和

```ts
function maxSubArray(nums: number[]): number {
  let res = -Infinity,
    sum = 0;
  for (const num of nums) {
    if (sum <= 0) {
      sum = num;
    } else {
      sum += num;
    }
    res = Math.max(res, sum);
  }
  return res;
}
```

## 跳跃游戏

```ts
function canJump(nums: number[]): boolean {
  const n = nums.length;
  const dp = new Array<boolean>(n).fill(false);
  dp[0] = true;
  for (let i = 1; i < n; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n - 1];
}
```

## 单词拆分

```ts
function wordBreak(s: string, wordDict: string[]): boolean {
  const set = new Set(wordDict);
  const n = s.length;
  const dp = new Array<boolean>(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
```
