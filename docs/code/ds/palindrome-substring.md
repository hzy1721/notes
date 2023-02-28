# 回文子串

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
