# 双指针

## 移动零

```ts
function moveZeroes(nums: number[]): void {
  let j = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      ++j;
    }
  }
  nums.fill(0, j);
}
```

## 盛最多水的容器

```ts
function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
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
  const n = nums.length;
  let j = 0;
  let k = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      ++j;
      if (j <= k) {
        [nums[k], nums[i]] = [nums[i], nums[k]];
      }
      ++k;
    } else if (nums[i] === 1) {
      [nums[k], nums[i]] = [nums[i], nums[k]];
      ++k;
    }
  }
}
```

## 搜索二维矩阵 II

```ts
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      ++i;
    } else {
      --j;
    }
  }
  return false;
}
```

## 最短无序连续子数组

```ts
function findUnsortedSubarray(nums: number[]): number {
  const n = nums.length;
  let minVal = Infinity;
  let left = n;
  for (let i = n - 1; i >= 0; --i) {
    if (nums[i] > minVal) {
      left = i;
    }
    minVal = Math.min(minVal, nums[i]);
  }
  if (left === n) {
    return 0;
  }
  let maxVal = -Infinity;
  let right = -1;
  for (let i = 0; i < n; ++i) {
    if (nums[i] < maxVal) {
      right = i;
    }
    maxVal = Math.max(maxVal, nums[i]);
  }
  return right - left + 1;
}
```
