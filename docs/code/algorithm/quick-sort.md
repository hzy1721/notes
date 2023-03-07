# 快速排序

## 数组中的第K个最大元素

```ts
function findKthLargest(nums: number[], k: number): number {
  const partition = (lo: number, hi: number) => {
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
  };
  const topK = (lo: number, hi: number, k: number): number => {
    if (lo === hi) {
      return nums[lo];
    }
    const mi = partition(lo, hi);
    if (mi === k - 1) {
      return nums[mi];
    } else if (k - 1 < mi) {
      return topK(lo, mi - 1, k);
    } else {
      return topK(mi + 1, hi, k);
    }
  };
  return topK(0, nums.length - 1, k);
}
```

## 前 K 个高频元素

```ts
const partition = (arr: [number, number][], lo: number, hi: number) => {
  const pivot = arr[lo];
  while (lo < hi) {
    while (lo < hi && arr[hi][1] <= pivot[1]) {
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
};

const topK = (
  arr: [number, number][],
  lo: number,
  hi: number,
  k: number
) => {
  if (lo === hi) {
    return;
  }
  const mi = partition(arr, lo, hi);
  if (mi < k - 1) {
    topK(arr, mi + 1, hi, k);
  } else if (mi > k - 1) {
    topK(arr, lo, mi - 1, k);
  }
};

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const arr: [number, number][] = [];
  for (const kv of map) {
    arr.push(kv);
  }
  topK(arr, 0, arr.length - 1, k);
  return arr.slice(0, k).map(item => item[0]);
}
```
