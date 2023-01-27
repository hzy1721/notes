# 二叉树

## 是否对称

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

## 最大深度

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

## 二叉树直径

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

## 二叉树展开为链表

前序遍历

```ts
function flatten(root: TreeNode | null): void {
  const dummyHead = new TreeNode();
  let prev = dummyHead;
  function preorder(root: TreeNode | null) {
    if (root) {
      prev.right = root;
      const leftChild = root.left;
      const rightChild = root.right;
      root.left = null;
      prev = root;
      preorder(leftChild);
      preorder(rightChild);
    }
  }
  preorder(root);
}
```

空间 O(1)

```ts
function flatten(root: TreeNode | null): void {
  let curr = root;
  while (curr) {
    if (curr.left) {
      const next = curr.left;
      let prev = next;
      while (prev.right) {
        prev = prev.right;
      }
      prev.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
}
```
