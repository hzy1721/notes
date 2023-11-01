# DFS

## 节点的所有祖先节点

```js
function getAncestorNodes(root, targetId) {
  let res = undefined;
  const stack = [];

  const dfs = root => {
    if (res || !root) {
      return;
    }
    if (root.id === targetId) {
      res = stack.slice();
      return;
    }
    stack.push(root.id);
    root.children?.forEach(dfs);
    stack.pop();
  };

  dfs(root);
  return res;
}
```

```js
const tree = {
  id: 0,
  children: [
    {
      id: 1,
      children: [
        {
          id: 2,
        },
        {
          id: 3,
          children: [{ id: 4 }],
        },
      ],
    },
    { id: 5 },
  ],
};
console.log(getAncestorNodes(tree, 4)); // [0, 1, 3]
```
