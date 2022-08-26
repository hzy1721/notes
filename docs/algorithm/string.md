# 字符串

## 最长回文子串

```ts
function longestPalindrome(s: string): string {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  for (let i = 0; i < n; ++i) {
    dp[i][i] = true;
  }
  let maxLen = 1, maxIdx = 0;
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

## 无重复字符的最长子串

```ts
function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let lo = 0, hi = 0;
  const n = s.length;
  let ans = 0;
  while (hi < n) {
    while (hi < n && !set.has(s[hi])) {
      set.add(s[hi]);
      ++hi;
    }
    ans = Math.max(ans, hi - lo);
    if (hi === n) {
      break;
    }
    while (lo < hi) {
      set.delete(s[lo]);
      ++lo;
      if (s[lo - 1] === s[hi]) {
        break;
      }
    }
  }
  return ans;
}
```
