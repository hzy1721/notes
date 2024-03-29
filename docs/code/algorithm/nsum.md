# N 数之和

## 两数之和

::: code-group

```ts
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (const [index, num] of nums.entries()) {
    const other = target - num;
    if (map.has(other)) {
      return [map.get(other), index];
    }
    map.set(num, index);
  }
  return [0, 1];
}
```

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap();
        for (int i = 0; i < nums.length; ++i) {
            int other = target - nums[i];
            if (map.containsKey(other)) {
                return new int[]{map.get(other), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{1, 2};
    }
}
```

:::

## 三数之和

```ts
function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = -nums[i];
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        ++j;
        continue;
      }
      const sum = nums[j] + nums[k];
      if (sum === target) {
        res.push([nums[i], nums[j], nums[k]]);
        ++j;
        --k;
      } else if (sum < target) {
        ++j;
      } else {
        --k;
      }
    }
  }
  return res;
}
```
