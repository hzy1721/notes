# 二叉树遍历

## 前序遍历

## 中序遍历

```ts
function inorderTraversal(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  let node: TreeNode | null = root;
  const res: number[] = [];
  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    res.push(node.val);
    node = node.right;
  }
  return res;
}
```

## 后序遍历
