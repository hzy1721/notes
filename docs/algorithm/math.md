# 数学

## 整数反转

```ts
function reverse(x: number): number {
  let res = 0;
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  while (x) {
    if (res < INT_MIN / 10 || res > INT_MAX / 10) {
      return 0;
    }
    res = res * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  return res;
}
```
