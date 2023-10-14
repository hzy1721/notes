# 接雨水

## 前缀最值

```js
function trap(height) {
  const n = height.length;
  const leftMax = new Array(n);
  const rightMax = new Array(n);
  leftMax[0] = height[0];
  rightMax[n - 1] = height[n - 1];
  for (let i = 1; i < n - 1; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    rightMax[n - i - 1] = Math.max(rightMax[n - i], height[n - i - 1]);
  }
  let res = 0;
  for (let i = 1; i < n - 1; ++i) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
}
```

## 双指针

```js
function trap(height) {
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] <= height[right]) {
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

## 单调递减栈

```js
function trap(height) {
  const n = height.length;
  const stack = [];
  let res = 0;
  for (let i = 0; i < n; ++i) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      const top = stack.pop();
      const left = stack[stack.length - 1];
      if (left !== undefined) {
        const areaWidth = i - left - 1;
        const areaHeight = Math.min(height[left], height[i]) - height[top];
        res += areaWidth * areaHeight;
      }
    }
    stack.push(i);
  }
  return res;
}
```
