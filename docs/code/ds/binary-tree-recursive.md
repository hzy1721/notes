# 二叉树递归

## 对称二叉树

```ts
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return isSymmetricTwo(root.left, root.right);
}

function isSymmetricTwo(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  if (root1.val !== root2.val) {
    return false;
  }
  return (
    isSymmetricTwo(root1.left, root2.right) &&
    isSymmetricTwo(root1.right, root2.left)
  );
}
```

## 二叉树的最大深度

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

## 翻转二叉树

```ts
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
```

## 二叉树的直径

```ts
function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = -Infinity;
  function maxDepth(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    res = Math.max(res, left + right + 1);
    return Math.max(left, right) + 1;
  }
  maxDepth(root);
  return res - 1;
}
```

## 合并二叉树

```ts
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 || !root2) {
    return root1 ?? root2;
  }
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
}
```

## 二叉树中的最大路径和

```ts
function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity;
  const maxRootPath = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    const left = Math.max(0, maxRootPath(root.left));
    const right = Math.max(0, maxRootPath(root.right));
    res = Math.max(res, left + root.val + right);
    return root.val + Math.max(left, right);
  };
  maxRootPath(root);
  return res;
}
```
