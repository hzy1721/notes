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

## rand7 实现 rand10

`(randX() - 1) * Y + randY()` 可以等概率的生成 [1, X \* Y] 范围的随机数

```ts
function rand10(): number {
  let num = 1;
  do {
    num = (rand7() - 1) * 7 + rand7();
  } while (num > 40);
  return ((num - 1) % 10) + 1;
}
```
