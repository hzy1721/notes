# 二叉树层序遍历

## 二叉树的层序遍历

普通层序遍历。

```ts
const levelOrder = (root) => {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  const res = [];
  while (queue.length) {
    const layer = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      layer.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(layer);
  }
  return res;
};
```

## 二叉树的层序遍历 II

自底向上，push 改成 unshift。

```js
const levelOrderBottom = (root) => {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  const res = [];
  while (queue.length) {
    const layer = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      layer.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.unshift(layer);
  }
  return res;
};
```

## 二叉树的锯齿形层序遍历

用一个变量标记每层的遍历方向。

```ts
const zigzagLevelOrder = (root) => {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  const res = [];
  let leftToRight = true;
  while (queue.length) {
    const layer = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      if (leftToRight) {
        layer.push(node.val);
      } else {
        layer.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(layer);
    leftToRight = !leftToRight;
  }
  return res;
};
```

## 二叉树的右视图

层序遍历，保存每层最后一个元素的值。

```js
const rightSideView = (root) => {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  const res = [];
  while (queue.length) {
    const len = queue.length;
    res.push(queue[len - 1].val);
    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return res;
};
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
    .map((str) => (str === 'null' ? null : new TreeNode(Number(str))));
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
