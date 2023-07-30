# 快慢指针

## 寻找重复数

```ts
function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
```
