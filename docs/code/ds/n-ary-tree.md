# N 叉树

## N 叉树的层序遍历

```ts
function levelOrder(root: Node | null): number[][] {
  const res: number[][] = [];
  const queue: Node[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const layer: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const curr = queue.shift();
      layer.push(curr.val);
      for (const child of curr.children) {
        queue.push(child);
      }
    }
    res.push(layer);
  }
  return res;
}
```
