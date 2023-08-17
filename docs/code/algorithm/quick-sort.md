# 快速排序

## 数组中的第 K 个最大元素

```ts
function partition(nums: number[], lo: number, hi: number): number {
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

function topK(nums: number[], lo: number, hi: number, k: number): number {
  const mi = partition(nums, lo, hi);
  if (k - 1 === mi) {
    return nums[mi];
  } else if (k - 1 < mi) {
    return topK(nums, lo, mi - 1, k);
  } else {
    return topK(nums, mi + 1, hi, k);
  }
}

function findKthLargest(nums: number[], k: number): number {
  return topK(nums, 0, nums.length - 1, k);
}
```

## 前 K 个高频元素

```ts
function partition(
  arr: [number, number][],
  lo: number,
  hi: number
): number {
  const pivot = arr[lo];
  while (lo < hi) {
    while (lo < hi && pivot[1] >= arr[hi][1]) {
      --hi;
    }
    arr[lo] = arr[hi];
    while (lo < hi && arr[lo][1] >= pivot[1]) {
      ++lo;
    }
    arr[hi] = arr[lo];
  }
  arr[lo] = pivot;
  return lo;
}

function topK(
  arr: [number, number][],
  lo: number,
  hi: number,
  k: number
): void {
  const mi = partition(arr, lo, hi);
  if (k - 1 === mi) {
    return;
  } else if (k - 1 < mi) {
    topK(arr, lo, mi - 1, k);
  } else {
    topK(arr, mi + 1, hi, k);
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const arr = Array.from(map);
  topK(arr, 0, arr.length - 1, k);
  return arr.slice(0, k).map(item => item[0]);
}
```
