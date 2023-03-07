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

## 最长回文子串

```ts
function longestPalindrome(s: string): string {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n));
  let maxLen = 0,
    maxIdx = 0;
  for (let len = 1; len <= n; ++len) {
    for (let i = 0; i < n; ++i) {
      const j = i + len - 1;
      if (j >= n) {
        break;
      }
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else if (len <= 3) {
        dp[i][j] = true;
      } else {
        dp[i][j] = dp[i + 1][j - 1];
      }
      if (dp[i][j] && len > maxLen) {
        maxLen = len;
        maxIdx = i;
      }
    }
  }
  return s.slice(maxIdx, maxIdx + maxLen);
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

## 不同路径

组合数：C(m-1, m+n-2)

```ts
function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(0).map(() => new Array(n));
  for (let i = 0; i < m; ++i) {
    dp[i][0] = 1;
  }
  for (let j = 1; j < n; ++j) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
```

## 最小路径和

```ts
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; ++i) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; ++j) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
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

## 乘积最大子数组

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

## 最长递增子序列

```ts
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let res = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
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

## 回文子串

```ts
function countSubstrings(s: string): number {
  const n = s.length;
  const dp: boolean[][] = new Array(n).fill(0).map(() => new Array(n));
  let res = 0;
  for (let len = 1; len <= n; ++len) {
    for (let i = 0; i + len <= n; ++i) {
      const j = i + len - 1;
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else if (len <= 2) {
        dp[i][j] = true;
      } else {
        dp[i][j] = dp[i + 1][j - 1];
      }
      res += dp[i][j] ? 1 : 0;
    }
  }
  return res;
}
```

## 正则表达式匹配

```ts
function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;
  const dp: boolean[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(false));
  dp[0][0] = true;
  const canMatch = (i: number, j: number): boolean => {
    if (i === 0) {
      return false;
    }
    const c1 = s[i - 1];
    const c2 = p[j - 1];
    return c1 === c2 || c2 === '.';
  };
  for (let i = 0; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (canMatch(i, j - 1)) {
          dp[i][j] ||= dp[i - 1][j];
        }
      } else {
        if (canMatch(i, j)) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }
  return dp[m][n];
}
```

## 最长有效括号

```ts
function longestValidParentheses(s: string): number {
  const n = s.length;
  const dp: number[] = new Array(n).fill(0);
  let res = 0;
  for (let i = 1; i < n; ++i) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (dp[i - 2] ?? 0) + 2;
      } else if (s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + 2;
        dp[i] += i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0;
      }
      res = Math.max(res, dp[i]);
    }
  }
  return res;
}
```

## 编辑距离

```ts
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1));
  for (let i = 0; i <= m; ++i) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; ++j) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      const top = dp[i - 1][j] + 1;
      const left = dp[i][j - 1] + 1;
      const topLeft =
        dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0);
      dp[i][j] = Math.min(top, left, topLeft);
    }
  }
  return dp[m][n];
}
```

## 戳气球

```ts
function maxCoins(nums: number[]): number {
  const n = nums.length;
  nums.unshift(1);
  nums.push(1);
  const dp: number[][] = new Array(n + 2)
    .fill(0)
    .map(() => new Array(n + 2).fill(0));
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n + 2; ++j) {
      for (let k = i + 1; k < j; ++k) {
        const prod = nums[i] * nums[k] * nums[j];
        dp[i][j] = Math.max(dp[i][j], prod + dp[i][k] + dp[k][j]);
      }
    }
  }
  return dp[0][n + 1];
}
```

## 剪绳子

```ts
function cuttingRope(n: number): number {
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j < i; ++j) {
      dp[i] = Math.max(dp[i], Math.max(dp[i - j], i - j) * j);
    }
  }
  return dp[n];
}
```
