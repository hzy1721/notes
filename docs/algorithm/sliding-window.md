# 滑动窗口

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

## 长度最小的子数组

```ts
function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  let sum = 0;
  let j = 0;
  let res = Infinity;
  for (let i = 0; i < n; ++i) {
    if (i > 0) {
      sum -= nums[i - 1];
    }
    while (j < n && sum < target) {
      sum += nums[j];
      ++j;
    }
    if (sum >= target) {
      res = Math.min(res, j - i);
    }
  }
  return res === Infinity ? 0 : res;
}
```
