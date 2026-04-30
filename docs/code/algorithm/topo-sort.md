# 拓扑排序

## 课程表

```js
const canFinish = (numCourses, prerequisites) => {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    indegree[a] += 1;
  }
  const queue = [];
  for (let i = 0; i < numCourses; ++i) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  let cnt = queue.length;
  while (queue.length) {
    const b = queue.shift();
    for (const a of graph[b]) {
      indegree[a] -= 1;
      if (indegree[a] === 0) {
        queue.push(a);
        cnt += 1;
      }
    }
  }
  return cnt === numCourses;
};
```

扩展方法：DFS 检查图中是否有环

```ts
const canFinish = (numCourses, prerequisites) => {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }
  const vis = new Array(numCourses).fill(0);
  let valid = true;

  const dfs = (u) => {
    // 1 表示 “搜索中”
    vis[u] = 1;
    for (const v of graph[u]) {
      // 0 表示 “未搜索”
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
    // 2 表示 “搜索完成”
    vis[u] = 2;
  };

  for (let i = 0; i < numCourses && valid; ++i) {
    if (!vis[i]) {
      dfs(i);
    }
  }
  return valid;
};
```
