# 双指针

## 盛最多水的容器

```ts
function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1;
  let res = 0;
  while (i < j) {
    const water = Math.min(height[i], height[j]) * (j - i);
    res = Math.max(res, water);
    if (height[i] <= height[j]) {
      ++i;
    } else {
      --j;
    }
  }
  return res;
}
```

## 颜色分类

```ts
function sortColors(nums: number[]): void {
  let p0 = 0,
    p1 = 0;
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]];
      if (p0 < p1) {
        [nums[p1], nums[i]] = [nums[i], nums[p1]];
      }
      ++p0;
      ++p1;
    } else if (nums[i] === 1) {
      [nums[p1], nums[i]] = [nums[i], nums[p1]];
      ++p1;
    }
  }
}
```

## 最短无序连续子数组

```ts
function findUnsortedSubarray(nums: number[]): number {
  const n = nums.length;
  let left = n;
  let minVal = Infinity;
  for (let i = n - 1; i >= 0; --i) {
    if (nums[i] > minVal) {
      left = i;
    }
    minVal = Math.min(minVal, nums[i]);
  }
  if (left === n) {
    return 0;
  }
  let right = -1;
  let maxVal = -Infinity;
  for (let i = 0; i < n; ++i) {
    if (nums[i] < maxVal) {
      right = i;
    }
    maxVal = Math.max(maxVal, nums[i]);
  }
  return right - left + 1;
}
```
