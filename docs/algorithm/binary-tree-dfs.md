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

## 最大深度

```ts
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
}
```
