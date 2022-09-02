# 二叉树遍历

## 前序遍历

## 中序遍历

```ts
function inorderTraversal(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  let node: TreeNode | null = root;
  const res: number[] = [];
  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    res.push(node.val);
    node = node.right;
  }
  return res;
}
```

## 后序遍历

## 从前序/中序遍历序列构造二叉树

```ts
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map<number, number>();
  for (const [i, num] of inorder.entries()) {
    map.set(num, i);
  }
  function build(
    preLeft: number,
    preRight: number,
    inLeft: number,
    inRight: number
  ): TreeNode | null {
    if (preLeft > preRight || inLeft > inRight) {
      return null;
    }
    const rootVal = preorder[preLeft];
    const root = new TreeNode(rootVal);
    const mid = map.get(rootVal);
    const leftLen = mid - inLeft;
    root.left = build(preLeft + 1, preLeft + leftLen, inLeft, mid - 1);
    root.right = build(preLeft + leftLen + 1, preRight, mid + 1, inRight);
    return root;
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1);
}
```
