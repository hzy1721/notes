# DFS

## 电话号码的字母组合

```ts
const digitLetters = [
  '',
  '', 'abc', 'def',
  'ghi', 'jkl', 'mno',
  'pqrs', 'tuv', 'wxyz'
];

function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }
  const res: string[] = [];
  const tokens: string[] = [];
  const n = digits.length;
  function dfs(index: number) {
    if (index === n) {
      res.push(tokens.join(''));
      return;
    }
    const digit = +digits[index];
    for (const letter of digitLetters[digit]) {
      tokens.push(letter);
      dfs(index + 1);
      tokens.pop();
    }
  }
  dfs(0);
  return res;
};
```