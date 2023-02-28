# 路径总和

## 路径总和 III

```ts
function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefixSumMap = new Map<number, number>([[0, 1]]);
  let sum = 0;
  let res = 0;
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    sum += root.val;
    if (prefixSumMap.has(sum - targetSum)) {
      res += prefixSumMap.get(sum - targetSum);
    }
    const prevCount = prefixSumMap.get(sum) ?? 0;
    prefixSumMap.set(sum, prevCount + 1);
    dfs(root.left);
    dfs(root.right);
    if (prevCount === 0) {
      prefixSumMap.delete(sum);
    } else {
      prefixSumMap.set(sum, prevCount);
    }
    sum -= root.val;
  };
  dfs(root);
  return res;
}
```
