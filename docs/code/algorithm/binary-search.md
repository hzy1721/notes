# 二分查找

## 搜索旋转排序数组

```ts
function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;
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

## 在排序数组中查找元素的第一个和最后一个位置

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

## 寻找两个正序数组的中位数

```ts
function findKthMinElement(
  nums1: number[],
  nums2: number[],
  k: number
): number {
  const m = nums1.length;
  const n = nums2.length;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (k === 1) {
      return Math.min(nums1[i], nums2[j]);
    }
    const ni = Math.min(i + Math.floor(k / 2), m) - 1;
    const nj = Math.min(j + Math.floor(k / 2), n) - 1;
    if (nums1[ni] <= nums2[nj]) {
      k -= ni - i + 1;
      i = ni + 1;
    } else {
      k -= nj - j + 1;
      j = nj + 1;
    }
  }
  return i === m ? nums2[j + k - 1] : nums1[i + k - 1];
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const len = m + n;
  if (len % 2 === 1) {
    return findKthMinElement(nums1, nums2, Math.floor(len / 2) + 1);
  } else {
    const left = findKthMinElement(nums1, nums2, len / 2);
    const right = findKthMinElement(nums1, nums2, len / 2 + 1);
    return (left + right) / 2;
  }
}
```
