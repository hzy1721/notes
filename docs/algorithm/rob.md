# 打家劫舍

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
    const rootNot = Math.max(leftRob, leftNot) + Math.max(rightRob, rightNot);
    return [rootRob, rootNot];
  };
  return Math.max(...robOrNot(root));
}
```
