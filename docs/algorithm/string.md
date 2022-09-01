# 字符串

## 无重复字符的最长子串

```ts
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let j = 0;
  const n = s.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
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
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  for (let i = 0; i < n; ++i) {
    dp[i][i] = true;
  }
  let maxLen = 1,
    maxIdx = 0;
  for (let len = 2; len <= n; ++len) {
    for (let i = 0; i < n; ++i) {
      const j = i + len - 1;
      if (j >= n) {
        break;
      }
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
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
