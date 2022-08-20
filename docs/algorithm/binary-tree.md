# 二叉树遍历

## 前序遍历

## 中序遍历

```cpp
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> ans;
        stack<TreeNode *> nodeStack;
        TreeNode *curr = root;
        while (curr || !nodeStack.empty()) {
            while (curr) {
                nodeStack.push(curr);
                curr = curr->left;
            }
            curr = nodeStack.top();
            nodeStack.pop();
            ans.push_back(curr->val);
            curr = curr->right;
        }
        return ans;
    }
};
```

## 后序遍历

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
