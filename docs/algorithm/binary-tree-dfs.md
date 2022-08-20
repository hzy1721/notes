# 二叉树 DFS

## 最小深度

```js
class Solution {
public:
    int minDepth(TreeNode* root) {
        if (!root)
            return 0;
        if (!root->left && !root->right)
            return 1;
        int depth = INT_MAX;
        if (root->left)
            depth = min(depth, minDepth(root->left));
        if (root->right)
            depth = min(depth, minDepth(root->right));
        return depth + 1;
    }
};
```
