# 打家劫舍

## 打家劫舍

```ts
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  const dp = new Array<number>(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; ++i) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[n - 1];
}
```

## 打家劫舍 III

```ts
function rob(root: TreeNode | null): number {
  const robOrNot = (root: TreeNode | null): [number, number] => {
    if (!root) {
      return [0, 0];
    }
    const [leftRob, leftNot] = robOrNot(root.left);
    const [rightRob, rightNot] = robOrNot(root.right);
    const rootRob = root.val + leftNot + rightNot;
    const rootNot =
      Math.max(leftRob, leftNot) + Math.max(rightRob, rightNot);
    return [rootRob, rootNot];
  };
  return Math.max(...robOrNot(root));
}
```
