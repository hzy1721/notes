# 摩尔投票法

## 多数元素

```ts
function majorityElement(nums: number[]): number {
  let res = nums[0];
  let cnt = 0;
  for (const num of nums) {
    if (cnt === 0) {
      res = num;
    }
    if (num === res) {
      ++cnt;
    } else {
      --cnt;
    }
  }
  return res;
}
```
