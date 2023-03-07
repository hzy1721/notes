# 位运算

## 只出现一次的数字

```ts
function singleNumber(nums: number[]): number {
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }
  return res;
}
```

## 汉明距离

```ts
function hammingDistance(x: number, y: number): number {
  let res = 0;
  while (x || y) {
    if ((x & 1) !== (y & 1)) {
      ++res;
    }
    x >>= 1;
    y >>= 1;
  }
  return res;
}
```
