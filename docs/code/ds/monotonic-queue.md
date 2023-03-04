# 单调队列

## 滑动窗口最大值

```ts
function maxSlidingWindow(nums: number[], k: number): number[] {
  const q: number[] = [];
  for (let i = 0; i < k; ++i) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
  }
  const n = nums.length;
  const res: number[] = [nums[q[0]]];
  for (let i = k; i < n; ++i) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    while (q[0] <= i - k) {
      q.shift();
    }
    res.push(nums[q[0]]);
  }
  return res;
}
```
