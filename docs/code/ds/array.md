# 数组

## 找到所有数组中消失的数字

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

## 寻找重复数

```ts
function findDuplicate(nums: number[]): number {
  const n = nums.length - 1;
  for (let num of nums) {
    while (num > n) {
      num -= n;
    }
    nums[num] += n;
  }
  for (let i = 1; i <= n; ++i) {
    if (nums[i] > 2 * n) {
      return i;
    }
  }
  return 1;
}
```

## 合并有序数组

```ts
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
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
