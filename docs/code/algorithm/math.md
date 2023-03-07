# 数学

## 下一个排列

```ts
function nextPermutation(nums: number[]): void {
  const n = nums.length;
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    --i;
  }
  if (i >= 0) {
    let j = n - 1;
    while (i < j && nums[i] >= nums[j]) {
      --j;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  for (let j = i + 1, k = n - 1; j < k; ++j, --k) {
    [nums[j], nums[k]] = [nums[k], nums[j]];
  }
}
```

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

## 数字 1 的个数

可以依次计算每一位上 1 出现的次数然后累加，n 最大为 $10^9$，所以最多需要累加 10 次。

以百位为例，每隔 1000 个数，百位上的 1 都会出现 100 次，十位和个位在 [0, 99] 之间变化，因此可以得到规律：

- 从右往左第 k 位 (k 从 **0** 开始)，每隔 $10^{k+1}$ 个数，这一位上的 1 会出现 $10^k$ 次
- 对于不够 $10^{k+1}$ 周期的剩余数，可以计算其与 $10^k$ 的差，比如：
  - 12045 中百位剩余 45 < 100，1 出现的次数为 0
  - 12145 中百位剩余 100 <= 145 < 200，1 出现的次数为 145 - 100 + 1 = 46
  - 12345 中百位剩余 345 >= 200，1 出现的次数为 100

```cpp
class Solution {
public:
    int countDigitOne(int n) {
        long long powk = 1LL;
        int ans = 0;
        while (powk <= n) {
            ans += n / (powk * 10) * powk;
            ans += min(max(n % (powk * 10) - powk + 1, 0LL), powk);
            powk *= 10;
        }
        return ans;
    }
};
```
