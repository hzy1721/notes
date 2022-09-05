# 快速排序

## 第 K 个最大元素

```ts
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  return findKth(nums, 0, n - 1, k);
}

function findKth(
  nums: number[],
  lo: number,
  hi: number,
  k: number
): number {
  if (lo === hi) {
    return nums[lo];
  }
  const mi = partition(nums, lo, hi);
  if (k - 1 === mi) {
    return nums[mi];
  } else if (k - 1 < mi) {
    return findKth(nums, lo, mi - 1, k);
  } else {
    return findKth(nums, mi + 1, hi, k);
  }
}

function partition(nums: number[], lo: number, hi: number): number {
  const randIdx = Math.floor(Math.random() * (hi - lo + 1)) + lo;
  [nums[lo], nums[randIdx]] = [nums[randIdx], nums[lo]];
  const pivot = nums[lo];
  while (lo < hi) {
    while (lo < hi && pivot >= nums[hi]) {
      --hi;
    }
    nums[lo] = nums[hi];
    while (lo < hi && nums[lo] >= pivot) {
      ++lo;
    }
    nums[hi] = nums[lo];
  }
  nums[lo] = pivot;
  return lo;
}
```
