# 接雨水

## 前缀最值

```ts
function trap(height: number[]): number {
  const n = height.length;
  const leftMax: number[] = new Array(n);
  leftMax[0] = height[0];
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  const rightMax: number[] = new Array(n);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let res = 0;
  for (let i = 1; i < n - 1; ++i) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
}
```

## 单调递减栈

```ts
function trap(height: number[]): number {
  const stack: number[] = [];
  const n = height.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    while (
      stack.length > 0 &&
      height[i] > height[stack[stack.length - 1]]
    ) {
      const top = stack.pop();
      if (stack.length === 0) {
        break;
      }
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top];
      res += currWidth * currHeight;
    }
    stack.push(i);
  }
  return res;
}
```

## 双指针

```ts
function trap(height: number[]): number {
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      res += leftMax - height[left];
      ++left;
    } else {
      res += rightMax - height[right];
      --right;
    }
  }
  return res;
}
```
