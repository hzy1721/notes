# 动态规划

- 重复子问题：这些子问题不应该被重复计算
- 最优子结构：原问题的最优解可以分解为若干个子问题的最优解
- 无后效性：后面阶段的状态只依赖于前面阶段的状态

## 最大子数组和

```ts
function maxSubArray(nums: number[]): number {
  let res = -Infinity, sum = 0;
  for (const num of nums) {
    if (sum <= 0) {
      sum = num;
    } else {
      sum += num;
    }
    res = Math.max(res, sum);
  }
  return res;
}
```
