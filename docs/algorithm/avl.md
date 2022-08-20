# 平衡二叉树

## 判断是否为平衡二叉树

```cpp
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return depth(root) != -1;
    }
private:
    int depth(TreeNode* root) {
        if (!root)
            return 0;
        int leftDepth = depth(root->left);
        if (leftDepth == -1)
            return -1;
        int rightDepth = depth(root->right);
        if (rightDepth == -1)
            return -1;
        return abs(leftDepth - rightDepth) <= 1 ? max(leftDepth, rightDepth) + 1 : -1;
    }
};
```
