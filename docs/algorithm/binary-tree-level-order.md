# 二叉树层序遍历

## 层序遍历

```ts
function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    const len = queue.length;
    const layer: number[] = [];
    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      layer.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(layer);
  }
  return res;
}
```
