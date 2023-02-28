# 连连看

给定一个 `m x n` 的网格，0 表示没有棋子，正数表示不同类型的棋子。(`m, n >= 1`)

判断 `(x1, y1)` 和 `(x2, y2)` 的棋子能不能消去。

```ts
function canLink(
  grid: number[][],
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean {
  if (grid[x1][y1] !== grid[x2][y2]) {
    return false;
  }
  const m = grid.length;
  const n = grid[0].length;
  const vis = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(false));
  const steps = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  function dfs(
    x: number,
    y: number,
    turn: number,
    direction: number
  ): boolean {
    if (x < 0 || x >= m || y < 0 || y >= n) {
      return false;
    }
    if (vis[x][y] || turn > 2) {
      return false;
    }
    if (x === x2 && y === y2) {
      return true;
    }
    if (grid[x][y] !== 0) {
      return false;
    }
    vis[x][y] = true;
    for (const [index, [dx, dy]] of steps.entries()) {
      const newTurn = turn + Number(index !== direction);
      if (dfs(x + dx, y + dy, newTurn, index)) {
        return true;
      }
    }
    vis[x][y] = false;
    return false;
  }
  for (const [index, [dx, dy]] of steps.entries()) {
    if (dfs(x1 + dx, y1 + dy, 0, index)) {
      return true;
    }
  }
  return false;
}
```

测试

```ts
const grid = [
  [0, 0, 0, 0],
  [2, 0, 1, 2],
  [0, 0, 2, 0],
  [1, 2, 0, 0],
];
console.log(canLink(grid, 1, 0, 1, 3)); // true
console.log(canLink(grid, 1, 0, 2, 2)); // true
console.log(canLink(grid, 1, 0, 3, 1)); // true
console.log(canLink(grid, 1, 2, 3, 0)); // false
```
