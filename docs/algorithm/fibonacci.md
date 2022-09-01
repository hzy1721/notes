# 斐波那契数列

## 爬楼梯

```ts
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }
  let f1 = 1,
    f2 = 2,
    f3 = 3;
  for (let i = 3; i <= n; ++i) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
}
```
