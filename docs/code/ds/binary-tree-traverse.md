# 二叉树遍历

## 二叉树的中序遍历

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

## 从前序与中序遍历序列构造二叉树

```ts
function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
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

## 后序遍历

```ts
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let curr = root;
  let prev: TreeNode | null = null;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    if (curr.right && curr.right !== prev) {
      stack.push(curr);
      curr = curr.right;
    } else {
      res.push(curr.val);
      prev = curr;
      curr = null;
    }
  }
  return res;
}
```