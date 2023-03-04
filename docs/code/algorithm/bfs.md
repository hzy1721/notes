# BFS

## 删除无效的括号

```ts
const isValid = (s: string): boolean => {
  let left = 0;
  let right = 0;
  for (const c of s) {
    if (c === '(') {
      ++left;
    } else if (c === ')') {
      if (left > 0) {
        --left;
      } else {
        ++right;
      }
    }
    if (left < right) {
      return false;
    }
  }
  return !left && !right;
};

function removeInvalidParentheses(s: string): string[] {
  let currSet = new Set([s]);
  let res: string[] = [];
  while (true) {
    for (const str of currSet) {
      if (isValid(str)) {
        res.push(str);
      }
    }
    if (res.length) {
      return res;
    }
    const nextSet = new Set<string>();
    for (const str of currSet) {
      for (let i = 0; i < str.length; ++i) {
        if (i > 0 && str[i] === str[i - 1]) {
          continue;
        }
        nextSet.add(str.substring(0, i) + str.substring(i + 1));
      }
    }
    currSet = nextSet;
  }
}
```
