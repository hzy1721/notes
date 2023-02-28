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

## 最大子数组积

```ts
function maxProduct(nums: number[]): number {
  let prevMin = 1;
  let prevMax = 1;
  let currMin = 1;
  let currMax = 1;
  let res = -Infinity;
  for (const num of nums) {
    currMin = Math.min(prevMin * num, prevMax * num, num);
    currMax = Math.max(prevMin * num, prevMax * num, num);
    res = Math.max(res, currMax);
    [prevMin, prevMax] = [currMin, currMax];
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
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
```

## 最大正方形

```ts
function maximalSquare(matrix: string[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n));
  let maxSide = 0;
  for (let i = 0; i < m; ++i) {
    dp[i][0] = matrix[i][0] === '1' ? 1 : 0;
    maxSide = Math.max(maxSide, dp[i][0]);
  }
  for (let j = 1; j < n; ++j) {
    dp[0][j] = matrix[0][j] === '1' ? 1 : 0;
    maxSide = Math.max(maxSide, dp[0][j]);
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (matrix[i][j] === '1') {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      } else {
        dp[i][j] = 0;
      }
      maxSide = Math.max(maxSide, dp[i][j]);
    }
  }
  return maxSide * maxSide;
}
```

## 完全平方数

```ts
function numSquares(n: number): number {
  const dp = new Array<number>(n + 1);
  dp[0] = 0;
  for (let i = 1; i <= n; ++i) {
    dp[i] = Infinity;
    for (let j = 1; j * j <= i; ++j) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}
```

## 零钱兑换

```ts
function coinChange(coins: number[], amount: number): number {
  const n = coins.length;
  coins.sort((a, b) => a - b);
  const dp = new Array<number>(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; ++i) {
    dp[i] = Infinity;
    for (let j = 0; j < n && coins[j] <= i; ++j) {
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
```
