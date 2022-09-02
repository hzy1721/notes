# 网格

## 左上角走到右下角的不同路径

动态规划

```ts
function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(0).map(() => new Array(n));
  for (let i = 0; i < m; ++i) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; ++j) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
```

组合数：C(m-1, m+n-2)

## 左上角走到右下角的最小路径

动态规划

```ts
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; ++i) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; ++j) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
}
```

## 单词搜索

DFS

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
