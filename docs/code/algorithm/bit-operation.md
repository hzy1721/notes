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

## 比特位记数

```ts
function countBits(n: number): number[] {
  const res = new Array<number>(n + 1);
  for (let i = 0; i <= n; ++i) {
    res[i] = countOnes(i);
  }
  return res;
}

function countOnes(x: number) {
  let ones = 0;
  while (x) {
    x &= x - 1;
    ++ones;
  }
  return ones;
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
