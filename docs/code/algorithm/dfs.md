# DFS

## 电话号码的字母组合

```ts
const digitLetters = [
  '',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
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
}
```

## 括号生成

```ts
function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  const tokens: string[] = [];
  function dfs(leftRemain: number, rightRemain: number) {
    if (tokens.length === n * 2) {
      ans.push(tokens.join(''));
      return;
    }
    if (leftRemain > 0) {
      tokens.push('(');
      dfs(leftRemain - 1, rightRemain);
      tokens.pop();
    }
    if (leftRemain < rightRemain) {
      tokens.push(')');
      dfs(leftRemain, rightRemain - 1);
      tokens.pop();
    }
  }
  dfs(n, n);
  return ans;
}
```

## 组合总和

```ts
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  candidates.sort((a, b) => a - b);
  const nums: number[] = [];
  function dfs(index: number, sum: number) {
    if (sum >= target) {
      if (sum === target) {
        res.push(nums.slice());
      }
      return;
    }
    const n = candidates.length;
    for (let i = index; i < n; ++i) {
      if (i > 0 && candidates[i] === candidates[i - 1]) {
        continue;
      }
      const candidate = candidates[i];
      nums.push(candidate);
      dfs(i, sum + candidate);
      nums.pop();
    }
  }
  dfs(0, 0);
  return res;
}
```

## 全排列

```js
function permute(nums) {
  const n = nums.length;
  const vis = new Array(n).fill(false);
  const res = [];
  const stack = [];

  const dfs = () => {
    if (stack.length === n) {
      res.push(stack.slice());
      return;
    }
    for (let i = 0; i < n; ++i) {
      if (vis[i]) {
        continue;
      }
      stack.push(nums[i]);
      vis[i] = true;
      dfs();
      vis[i] = false;
      stack.pop();
    }
  };

  dfs();
  return res;
}
```

## 全排列 II

```js
function permuteUnique(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const vis = new Array(n).fill(false);
  const res = [];
  const stack = [];

  const dfs = () => {
    if (stack.length === n) {
      res.push(stack.slice());
      return;
    }
    for (let i = 0; i < n; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      stack.push(nums[i]);
      vis[i] = true;
      dfs();
      vis[i] = false;
      stack.pop();
    }
  };

  dfs();
  return res;
}
```

## 子集

```ts
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const seq: number[] = [];
  const n = nums.length;
  function dfs(index: number, total: number) {
    if (seq.length === total) {
      res.push(seq.slice());
      return;
    }
    for (let i = index; i < n; ++i) {
      seq.push(nums[i]);
      dfs(i + 1, total);
      seq.pop();
    }
  }
  for (let len = 0; len <= n; ++len) {
    dfs(0, len);
  }
  return res;
}
```

## 单词搜索

```ts
function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const vis = new Array(m).fill(0).map(() => new Array(n).fill(false));
  function dfs(x: number, y: number, pos: number): boolean {
    if (pos === word.length) {
      return true;
    }
    if (x < 0 || x >= m || y < 0 || y >= n) {
      return false;
    }
    if (vis[x][y] || board[x][y] !== word[pos]) {
      return false;
    }
    vis[x][y] = true;
    const steps = [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ];
    for (const [dx, dy] of steps) {
      if (dfs(x + dx, y + dy, pos + 1)) {
        return true;
      }
    }
    vis[x][y] = false;
    return false;
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}
```

## 岛屿数量

```ts
function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  function dfs(x: number, y: number) {
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== '1') {
      return;
    }
    grid[x][y] = '0';
    const steps = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dx, dy] of steps) {
      dfs(x + dx, y + dy);
    }
  }
  let res = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '1') {
        res += 1;
        dfs(i, j);
      }
    }
  }
  return res;
}
```

## 除法求值

```ts
function dfs(
  graph: Map<string, [string, number][]>,
  vis: Map<string, boolean>,
  curr: string,
  target: string
): number {
  if (!graph.has(curr)) {
    return -1.0;
  }
  if (curr === target) {
    return 1.0;
  }
  if (vis.get(curr)) {
    return -1.0;
  }
  vis.set(curr, true);
  for (const [node, val] of graph.get(curr)) {
    const res = dfs(graph, vis, node, target);
    if (res !== -1.0) {
      vis.set(curr, false);
      return val * res;
    }
  }
  vis.set(curr, false);
  return -1.0;
}

function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph = new Map<string, [string, number][]>();
  const vis = new Map<string, boolean>();
  const n = equations.length;
  for (let i = 0; i < n; ++i) {
    const [a, b] = equations[i];
    const val = values[i];
    if (!graph.has(a)) {
      graph.set(a, []);
    }
    graph.get(a).push([b, val]);
    if (!graph.has(b)) {
      graph.set(b, []);
    }
    graph.get(b).push([a, 1 / val]);
    vis.set(a, false);
    vis.set(b, false);
  }
  const res: number[] = [];
  for (const [c, d] of queries) {
    const quotient = dfs(graph, vis, c, d);
    res.push(quotient);
  }
  return res;
}
```
