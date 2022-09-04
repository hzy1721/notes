# 二叉树层序遍历

## 层序遍历

```ts
function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    const len = queue.length;
    const layer: number[] = [];
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
}
```

## 右视图

```ts
function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    const len = queue.length;
    let last = 0;
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

## 锯齿形层序遍历

双端队列 (deque) 实现奇数层从左往右、偶数层从右往左。

```cpp
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        vector<int> layerNodes;
        deque<TreeNode *> nodeDeque;
        if (root)
            nodeDeque.push_back(root);
        int layerIdx = 1;
        while (!nodeDeque.empty()) {
            int len = nodeDeque.size();
            layerNodes.clear();
            if (layerIdx % 2 == 1) {
                for (int i = 0; i < len; ++i) {
                    TreeNode *curr = nodeDeque.front();
                    nodeDeque.pop_front();
                    layerNodes.push_back(curr->val);
                    if (curr->left)
                        nodeDeque.push_back(curr->left);
                    if (curr->right)
                        nodeDeque.push_back(curr->right);
                }
            } else {
                for (int i = 0; i < len; ++i) {
                    TreeNode *curr = nodeDeque.back();
                    nodeDeque.pop_back();
                    layerNodes.push_back(curr->val);
                    if (curr->right)
                        nodeDeque.push_front(curr->right);
                    if (curr->left)
                        nodeDeque.push_front(curr->left);
                }
            }
            ans.push_back(layerNodes);
            ++layerIdx;
        }
        return ans;
    }
};
```

[107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

vector+reverse 或 deque/list+vector

```cpp
class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        deque<vector<int>> ans;
        queue<TreeNode*> nodeQueue;
        if (root)
            nodeQueue.push(root);
        while (!nodeQueue.empty()) {
            int len = nodeQueue.size();
            vector<int> layer;
            for (int i = 0; i < len; ++i) {
                TreeNode *node = nodeQueue.front();
                nodeQueue.pop();
                layer.push_back(node->val);
                if (node->left)
                    nodeQueue.push(node->left);
                if (node->right)
                    nodeQueue.push(node->right);
            }
            ans.push_front(layer);
        }
        return {ans.begin(), ans.end()};
    }
};
```

[429. N 叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)

```cpp
class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        vector<vector<int>> ans;
        vector<int> layerNodes;
        queue<Node *> nodeQueue;
        if (root)
            nodeQueue.push(root);
        while (!nodeQueue.empty()) {
            layerNodes.clear();
            int len = nodeQueue.size();
            while (len--) {
                Node *node = nodeQueue.front();
                nodeQueue.pop();
                layerNodes.push_back(node->val);
                for (Node *child : node->children)
                    nodeQueue.push(child);
            }
            ans.push_back(layerNodes);
        }
        return ans;
    }
};
```
