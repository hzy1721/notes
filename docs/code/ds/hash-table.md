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
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cnt = 0;
      while (set.has(num)) {
        ++cnt;
        ++num;
      }
      res = Math.max(res, cnt);
    }
  }
  return res;
}
```

## 前 K 个高频单词

```ts
function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  const arr = Array.from(map);
  arr.sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );
  return arr.slice(0, k).map(item => item[0]);
}
```
