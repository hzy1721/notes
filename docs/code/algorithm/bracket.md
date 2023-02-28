# 括号

## 括号匹配

```ts
const bracketMap = new Map([
  [")", "("],
  ["]", "["],
  ["}", "{"],
]);

function isValid(s: string): boolean {
  const stack: string[] = [];
  for (const c of s) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      if (stack.length === 0 || stack.pop() !== bracketMap.get(c)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
```

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
