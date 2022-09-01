# 数组

## 合并有序数组

```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k--] = nums2[j--];
    } else {
      nums1[k--] = nums1[i--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}
```

## 移动零

```ts
function moveZeroes(nums: number[]): void {
  let i = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[i++] = num;
    }
  }
  nums.fill(0, i);
}
```

## 数组中消失的数字

```ts
function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  for (let num of nums) {
    num = num > n ? num - n : num;
    if (nums[num - 1] <= n) {
      nums[num - 1] += n;
    }
  }
  const res: number[] = [];
  for (let i = 0; i < n; ++i) {
    if (nums[i] <= n) {
      res.push(i + 1);
    }
  }
  return res;
}
```
