# 多数元素

```ts
function majorityElement(nums: number[]): number {
  let res = nums[0],
    cnt = 0;
  for (const num of nums) {
    cnt += num === res ? 1 : -1;
    if (cnt < 0) {
      res = num;
      cnt = 1;
    }
  }
  return res;
}
```
