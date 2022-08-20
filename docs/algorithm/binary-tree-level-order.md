# 二叉树层序遍历

## 层序遍历

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
