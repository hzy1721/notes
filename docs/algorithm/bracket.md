# 括号

## 括号生成

```ts
function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  const tokens: string[] = [];
  function dfs(leftRemain: number, rightRemain: number) {
    if (tokens.length === n * 2) {
      ans.push(tokens.join(""));
      return;
    }
    if (leftRemain > 0) {
      tokens.push("(");
      dfs(leftRemain - 1, rightRemain);
      tokens.pop();
    }
    if (leftRemain < rightRemain) {
      tokens.push(")");
      dfs(leftRemain, rightRemain - 1);
      tokens.pop();
    }
  }
  dfs(n, n);
  return ans;
}
```
