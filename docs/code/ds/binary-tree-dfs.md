# 二叉树 DFS

## 二叉树的最近公共祖先

```js
function lowestCommonAncestor(root, p, q) {
  let res = undefined;

  const dfs = root => {
    if (res || !root) {
      return [false, false];
    }
    const [leftHasP, leftHasQ] = dfs(root.left);
    const [rightHasP, rightHasQ] = dfs(root.right);
    const hasP = root === p || leftHasP || rightHasP;
    const hasQ = root === q || leftHasQ || rightHasQ;
    if (!res && hasP && hasQ) {
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
