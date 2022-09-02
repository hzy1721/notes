# 哈希表

## 字母异位词分组

```ts
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = str.split('').sort().join('');
    let value = map.get(key);
    if (!value) {
      map.set(key, (value = []));
    }
    value.push(str);
  }
  return Array.from(map.values());
}
```

## 最长连续序列

```ts
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let res = 0;
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let cnt = 1;
      for (let i = num + 1; set.has(i); ++i) {
        ++cnt;
      }
      res = Math.max(res, cnt);
    }
  }
  return res;
}
```
