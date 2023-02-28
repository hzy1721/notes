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

## 找到字符串中所有字母异位词

```ts
function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) {
    return [];
  }
  const diff = new Array(26).fill(0);
  for (let i = 0; i < p.length; ++i) {
    diff[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    diff[p[i].charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
  }
  let cnt = diff.reduce((res, num) => (num ? res + 1 : res), 0);
  const res: number[] = [];
  if (cnt === 0) {
    res.push(0);
  }
  for (let right = p.length; right < s.length; ++right) {
    const left = right - p.length;
    const leftIndex = s[left].charCodeAt(0) - 'a'.charCodeAt(0);
    diff[leftIndex] -= 1;
    if (diff[leftIndex] === 0) {
      cnt -= 1;
    } else if (diff[leftIndex] === -1) {
      cnt += 1;
    }
    const rightIndex = s[right].charCodeAt(0) - 'a'.charCodeAt(0);
    diff[rightIndex] += 1;
    if (diff[rightIndex] === 0) {
      cnt -= 1;
    } else if (diff[rightIndex] === 1) {
      cnt += 1;
    }
    if (cnt === 0) {
      res.push(left + 1);
    }
  }
  return res;
}
```
