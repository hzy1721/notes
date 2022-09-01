# 双指针

## 盛最多水的容器

```ts
function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1;
  let res = 0;
  while (i < j) {
    const water = Math.min(height[i], height[j]) * (j - i);
    res = Math.max(res, water);
    if (height[i] <= height[j]) {
      ++i;
    } else {
      --j;
    }
  }
  return res;
}
```
