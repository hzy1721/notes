# 二叉树 DFS

## 最小深度

```ts
function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let depth = Infinity;
  if (root.left) {
    depth = Math.min(depth, minDepth(root.left));
  }
  if (root.right) {
    depth = Math.min(depth, minDepth(root.right));
  }
  return depth + 1;
}
```

## 路径和

```ts
function hasPathSum(
  root: TreeNode | null,
  targetSum: number
): boolean {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
```

## 根节点到叶节点数字之和

```ts
function sumNumbers(root: TreeNode | null): number {
  let res = 0;
  let sum = 0;
  function dfs(root: TreeNode | null) {
    if (!root) {
      return;
    }
    sum = sum * 10 + root.val;
    if (!root.left && !root.right) {
      res += sum;
    } else {
      dfs(root.left);
      dfs(root.right);
    }
    sum = Math.floor(sum / 10);
  }
  dfs(root);
  return res;
}
```
