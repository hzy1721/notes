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

## 二叉搜索树中第 K 小的元素

```ts
class TopKBst {
  private root: TreeNode | null = null;
  private nodeNumMap = new Map<TreeNode, number>();

  constructor(root: TreeNode | null) {
    this.root = root;
    this.countNodeNum(root);
  }

  kthSmallest(k: number): number {
    let curr = this.root;
    while (curr) {
      const leftNodeNum = this.getNodeNum(curr.left);
      if (k - 1 === leftNodeNum) {
        return curr.val;
      } else if (k - 1 < leftNodeNum) {
        curr = curr.left;
      } else {
        k -= leftNodeNum + 1;
        curr = curr.right;
      }
    }
    return -1;
  }

  private countNodeNum(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const nodeNum =
      1 + this.countNodeNum(root.left) + this.countNodeNum(root.right);
    this.nodeNumMap.set(root, nodeNum);
    return nodeNum;
  }

  private getNodeNum(root: TreeNode | null): number {
    return this.nodeNumMap.get(root) ?? 0;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  const bst = new TopKBst(root);
  return bst.kthSmallest(k);
}
```

## 二叉搜索树的最近公共祖先

```js
function lowestCommonAncestor(root, p, q) {
  let res = undefined;

  const dfs = root => {
    if (res || !root) {
      return [false, false];
    }
    let [leftHasP, leftHasQ] = [false, false];
    let [rightHasP, rightHasQ] = [false, false];
    if (root.val < p.val && root.val < q.val) {
      [rightHasP, rightHasQ] = dfs(root.right);
    } else if (p.val < root.val && q.val < root.val) {
      [leftHasP, leftHasQ] = dfs(root.left);
    } else {
      [leftHasP, leftHasQ] = dfs(root.left);
      [rightHasP, rightHasQ] = dfs(root.right);
    }
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
