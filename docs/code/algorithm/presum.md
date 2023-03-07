# 前缀和

## 除自身以外数组的乘积

```ts
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array<number>(n);
  prefix[0] = nums[0];
  for (let i = 1; i < n; ++i) {
    prefix[i] = prefix[i - 1] * nums[i];
  }
  const suffix = new Array<number>(n);
  suffix[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    suffix[i] = suffix[i + 1] * nums[i];
  }
  const res = new Array<number>(n);
  res[0] = suffix[1];
  res[n - 1] = prefix[n - 2];
  for (let i = 1; i < n - 1; ++i) {
    res[i] = prefix[i - 1] * suffix[i + 1];
  }
  return res;
}
```

## 和为 K 的子数组

```ts
function subarraySum(nums: number[], k: number): number {
  const sumCount = new Map<number, number>([[0, 1]]);
  let sum = 0;
  let res = 0;
  for (const num of nums) {
    sum += num;
    if (sumCount.has(sum - k)) {
      res += sumCount.get(sum - k);
    }
    sumCount.set(sum, (sumCount.get(sum) ?? 0) + 1);
  }
  return res;
}
```
