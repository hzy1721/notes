# 二叉搜索树

## 不同的二叉搜索树

```ts
function numTrees(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
}
```

## 验证二叉搜索树

```ts
function isValidBST(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null, minVal: number, maxVal: number): boolean {
    if (!root) {
      return true;
    }
    if (root.val <= minVal || root.val >= maxVal) {
      return false;
    }
    return (
      dfs(root.left, minVal, Math.min(maxVal, root.val)) &&
      dfs(root.right, Math.max(minVal, root.val), maxVal)
    );
  }
  return dfs(root, -Infinity, Infinity);
}
```
