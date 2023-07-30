# 路径总和

## 路径总和 III

```ts
function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0;
  let sum = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  const dfs = (root: TreeNode | null): void => {
    if (!root) {
      return;
    }
    sum += root.val;
    if (map.has(sum - targetSum)) {
      res += map.get(sum - targetSum);
    }
    map.set(sum, (map.get(sum) ?? 0) + 1);
    dfs(root.left);
    dfs(root.right);
    map.set(sum, map.get(sum) - 1);
    sum -= root.val;
  };

  dfs(root);
  return res;
}
```
