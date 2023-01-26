# 二分查找

## 搜索旋转排序数组

```ts
function search(nums: number[], target: number): number {
  let lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    const mi = Math.floor((lo + hi) / 2);
    if (nums[mi] === target) {
      return mi;
    }
    const leftSorted = lo < mi && nums[lo] <= nums[mi];
    const rightSorted = mi < hi && nums[mi] <= nums[hi];
    if (
      (leftSorted && nums[lo] <= target && target < nums[mi]) ||
      (rightSorted && (target < nums[mi] || nums[hi] < target))
    ) {
      hi = mi - 1;
    } else {
      lo = mi + 1;
    }
  }
  return -1;
}
```

## 查找第一个位置和最后一个位置

```ts
function searchRange(nums: number[], target: number): number[] {
  const binarySearch = (nums: number[], target: number, lower = true) => {
    const check = (num: number) => {
      return lower ? num >= target : num > target;
    };
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
      const mi = Math.floor((lo + hi) / 2);
      if (check(nums[mi])) {
        hi = mi - 1;
      } else {
        lo = mi + 1;
      }
    }
    return lo;
  };
  const left = binarySearch(nums, target);
  if (left === nums.length || nums[left] !== target) {
    return [-1, -1];
  }
  const right = binarySearch(nums, target, false);
  return [left, right - 1];
}
```
