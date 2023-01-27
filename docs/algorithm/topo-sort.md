# 拓扑排序

## 课程表

```ts
function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const graph: number[][] = new Array(numCourses).fill(0).map(() => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }
  const vis: number[] = new Array(numCourses).fill(0);
  let valid = true;
  const dfs = (u: number) => {
    vis[u] = 1;
    for (const v of graph[u]) {
      if (vis[v] === 0) {
        dfs(v);
        if (!valid) {
          return;
        }
      } else if (vis[v] === 1) {
        valid = false;
        return;
      }
    }
    vis[u] = 2;
  };
  for (let i = 0; i < numCourses && valid; ++i) {
    if (!vis[i]) {
      dfs(i);
    }
  }
  return valid;
}
```
