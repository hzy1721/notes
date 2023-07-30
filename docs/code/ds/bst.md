# 二叉搜索树

## 不同的二叉搜索树

```ts
function numTrees(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
}
```

## 验证二叉搜索树

```ts
function isValidBST(root: TreeNode | null): boolean {
  const dfs = (
    root: TreeNode | null,
    minVal: number,
    maxVal: number
  ): boolean => {
    if (!root) {
      return true;
    }
    if (root.val <= minVal || root.val >= maxVal) {
      return false;
    }
    return (
      dfs(root.left, minVal, Math.min(maxVal, root.val)) &&
      dfs(root.right, Math.max(minVal, root.val), maxVal)
    );
  };
  return dfs(root, -Infinity, Infinity);
}
```

## 把二叉搜索树转换为累加树

- 递归

```ts
function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;

  const reverseInorder = (root: TreeNode | null): void => {
    if (root) {
      reverseInorder(root.right);
      sum += root.val;
      root.val = sum;
      reverseInorder(root.left);
    }
  };

  reverseInorder(root);
  return root;
}
```

- 迭代

```ts
function convertBST(root: TreeNode | null): TreeNode | null {
  const stack: TreeNode[] = [];
  let curr = root;
  let sum = 0;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.right;
    }
    curr = stack.pop();
    sum += curr.val;
    curr.val = sum;
    curr = curr.left;
  }
  return root;
}
```
