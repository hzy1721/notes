# 贪心

## 任务调度器

```ts
function leastInterval(tasks: string[], n: number): number {
  const taskCount = new Array(26).fill(0);
  for (const task of tasks) {
    taskCount[task.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
  }
  const maxExec = Math.max(...taskCount);
  const maxCount = taskCount.filter(num => num === maxExec).length;
  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
}
```
