# 平衡二叉树

## 平衡二叉树

```ts
function depth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const left = depth(root.left);
  if (left === -1) {
    return -1;
  }
  const right = depth(root.right);
  if (right === -1) {
    return -1;
  }
  const balanced = Math.abs(left - right) <= 1;
  return balanced ? Math.max(left, right) + 1 : -1;
}

function isBalanced(root: TreeNode | null): boolean {
  return depth(root) !== -1;
}
```
