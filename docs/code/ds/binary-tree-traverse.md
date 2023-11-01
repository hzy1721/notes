# 二叉树遍历

## 二叉树的前序遍历

```js
function preorderTraversal(root) {
  const res = [];
  let curr = root;
  const stack = [];
  while (curr || stack.length) {
    while (curr) {
      res.push(curr.val);
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    curr = curr.right;
  }
  return res;
}
```

## 二叉树的中序遍历

```js
function inorderTraversal(root) {
  const res = [];
  let curr = root;
  const stack = [];
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
}
```

## 二叉树的后序遍历

```ts
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let curr = root;
  let prev: TreeNode | null = null;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    if (!curr.right || curr.right === prev) {
      res.push(curr.val);
      prev = curr;
      curr = null;
    } else {
      stack.push(curr);
      curr = curr.right;
    }
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

### 前序遍历

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

### 空间 O(1)

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
