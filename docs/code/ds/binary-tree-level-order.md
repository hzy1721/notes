# 二叉树层序遍历

## 二叉树的层序遍历

```ts
function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const layer: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const curr = queue.shift();
      layer.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    res.push(layer);
  }
  return res;
}
```

## 二叉树的层序遍历 II

```ts
function levelOrderBottom(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const layer: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const curr = queue.shift();
      layer.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    res.unshift(layer);
  }
  return res;
}
```

## 二叉树的锯齿形层序遍历

```ts
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  let leftToRight = true;
  while (queue.length) {
    const layer: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const curr = queue.shift();
      if (leftToRight) {
        layer.push(curr.val);
      } else {
        layer.unshift(curr.val);
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    res.push(layer);
    leftToRight = !leftToRight;
  }
  return res;
}
```

## 二叉树的序列化与反序列化

```ts
function serialize(root: TreeNode | null): string {
  if (!root) {
    return '';
  }
  const queue: Array<TreeNode | null> = [];
  queue.push(root);
  const vals: Array<number | null> = [];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      vals.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      vals.push(null);
    }
  }
  while (vals[vals.length - 1] === null) {
    vals.pop();
  }
  return vals.map(String).join(',');
}

function deserialize(data: string): TreeNode | null {
  if (!data) {
    return null;
  }
  const nodes: Array<TreeNode | null> = data
    .split(',')
    .map(str => (str === 'null' ? null : new TreeNode(Number(str))));
  let i = 1;
  const root = nodes[0];
  const queue: Array<TreeNode | null> = [root];
  while (queue.length && i < nodes.length) {
    const node = queue.shift();
    const left = nodes[i++];
    const right = nodes[i++];
    if (left) {
      node.left = left;
      queue.push(left);
    }
    if (right) {
      node.right = right;
      queue.push(right);
    }
  }
  return root;
}
```

## 二叉树的右视图

```ts
function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    let last = 0;
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      last = node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(last);
  }
  return res;
}
```
