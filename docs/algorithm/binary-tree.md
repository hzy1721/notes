# 二叉树遍历

## 前序遍历

## 中序遍历

[94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

- 左根右

**迭代 (栈)**

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

- 时间复杂度：$O(n)$
  - 每个节点访问 2 次，先入栈再出栈
- 空间复杂度：$O(n)$
  - 最坏情况是整棵树是一条左侧链，栈保存了所有节点

**Morris**

```cpp
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> ans;
        TreeNode *curr = root, *prev = nullptr;
        while (curr) {
            if (curr->left) {
                prev = curr->left;
                while (prev->right && prev->right != curr)
                    prev = prev->right;
                if (!prev->right) {
                    prev->right = curr;
                    curr = curr->left;
                } else {
                    ans.push_back(curr->val);
                    curr = curr->right;
                    prev->right = nullptr;
                }
            } else {
                ans.push_back(curr->val);
                curr = curr->right;
            }
        }
        return ans;
    }
};
```

- 时间复杂度：$O(n)$
  - 每个节点访问 2 次，建立链接 1 次，加入结果 1 次
- 空间复杂度：$O(1)$

**递归**

```cpp
class Solution {
    vector<int> ans;

    void inorder(TreeNode *root) {
        if (!root)
            return;
        inorder(root->left);
        ans.push_back(root->val);
        inorder(root->right);
    }
public:
    vector<int> inorderTraversal(TreeNode* root) {
        ans.clear();
        inorder(root);
        return ans;
    }
};
```

- 时间复杂度：$O(n)$
  - 每个节点访问 1 次
- 空间复杂度：$O(n)$
  - 递归深度不超过 n

## 后序遍历

## 层序遍历

[102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

queue

```cpp
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        vector<int> layerNodes;
        queue<TreeNode *> nodeQueue;
        if (root)
            nodeQueue.push(root);
        while (!nodeQueue.empty()) {
            layerNodes.clear();
            int len = nodeQueue.size();
            for (int i = 0; i < len; ++i) {
                TreeNode *curr = nodeQueue.front();
                nodeQueue.pop();
                layerNodes.push_back(curr->val);
                if (curr->left)
                    nodeQueue.push(curr->left);
                if (curr->right)
                    nodeQueue.push(curr->right);
            }
            ans.push_back(layerNodes);
        }
        return ans;
    }
};
```

[103. 二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)

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

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

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
