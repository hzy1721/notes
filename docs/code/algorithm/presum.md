# 前缀和

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
