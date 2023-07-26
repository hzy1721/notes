# 拓扑排序

## 课程表

- 拓扑排序

```ts
function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  // 出边和入边集合
  const outEdgeMap = new Map<number, Set<number>>();
  const inEdgeMap = new Map<number, Set<number>>();
  // b -> a
  for (const [a, b] of prerequisites) {
    if (!outEdgeMap.has(b)) {
      outEdgeMap.set(b, new Set());
    }
    outEdgeMap.get(b).add(a);
    if (!inEdgeMap.has(a)) {
      inEdgeMap.set(a, new Set());
    }
    inEdgeMap.get(a).add(b);
  }
  // 无入边节点的队列：不依赖其他课程，可以直接学习（删掉）
  const noInEdgeNodeQueue: number[] = [];
  for (let i = 0; i < numCourses; ++i) {
    if (!inEdgeMap.has(i)) {
      noInEdgeNodeQueue.push(i);
    }
  }
  while (noInEdgeNodeQueue.length) {
    // 选择一个没有入边的节点
    const u = noInEdgeNodeQueue.shift();
    // 删除其所有出边
    if (outEdgeMap.has(u)) {
      for (const v of outEdgeMap.get(u)) {
        const set = inEdgeMap.get(v);
        if (set) {
          set.delete(u);
          // 如果出现了新的无入边节点，加入队列
          if (set.size === 0) {
            inEdgeMap.delete(v);
            noInEdgeNodeQueue.push(v);
          }
        }
      }
      outEdgeMap.delete(u);
    }
  }
  // 最终所有节点都被删掉则说明能学完
  return inEdgeMap.size === 0;
}
```

- DFS 检查图中是否有环

```ts
function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  // 邻接表存储边
  const graph: number[][] = new Array(numCourses).fill(0).map(() => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }
  const vis: number[] = new Array(numCourses).fill(0);
  let valid = true;
  const dfs = (u: number) => {
    // 1 表示「搜索中」
    vis[u] = 1;
    for (const v of graph[u]) {
      // 0 表示「未搜索」
      if (vis[v] === 0) {
        // 继续搜索
        dfs(v);
        if (!valid) {
          return;
        }
      } else if (vis[v] === 1) {
        // 碰到重复节点，说明有环，不可能学完
        valid = false;
        return;
      }
    }
    // 2 表示「搜索完成」
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
