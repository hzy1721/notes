# 字符串

## 无重复字符的最长子串

```ts
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  const n = s.length;
  let j = 0;
  let res = 0;
  for (let i = 0; i < n && j < n; ++i) {
    if (i > 0) {
      set.delete(s[i - 1]);
    }
    while (j < n && !set.has(s[j])) {
      set.add(s[j]);
      ++j;
    }
    res = Math.max(res, j - i);
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
      } else {
        if (len <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
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

## 回文子串数量

```ts

```

## 最长公共子序列

```ts
function longestCommonSubsequence(
  text1: string,
  text2: string
): number {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1));
  for (let i = 0; i <= m; ++i) {
    dp[i][0] = 0;
  }
  for (let j = 0; j <= n; ++j) {
    dp[0][j] = 0;
  }
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}
```
