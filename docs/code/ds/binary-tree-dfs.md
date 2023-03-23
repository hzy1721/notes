# 二叉树 DFS

## 二叉树的最近公共祖先

```ts
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let res: TreeNode | null = null;
  const dfs = (root: TreeNode | null): [boolean, boolean] => {
    if (!root || res) {
      return [false, false];
    }
    let rootP = root === p;
    let rootQ = root === q;
    const [leftP, leftQ] = dfs(root.left);
    const [rightP, rightQ] = dfs(root.right);
    const hasP = rootP || leftP || rightP;
    const hasQ = rootQ || leftQ || rightQ;
    if (hasP && hasQ && !res) {
      res = root;
    }
    return [hasP, hasQ];
  };
  dfs(root);
  return res;
}
```

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
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
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

## 求根节点到叶节点数字之和

```ts
function sumNumbers(root: TreeNode | null): number {
  let res = 0;
  let num = 0;
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    num = num * 10 + root.val;
    if (!root.left && !root.right) {
      res += num;
    } else {
      dfs(root.left);
      dfs(root.right);
    }
    num = Math.floor(num / 10);
  };
  dfs(root);
  return res;
}
```
