# 字符串

## 最长公共子序列

```ts
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1));
  for (let i = 0; i <= m; ++i) {
    dp[i][0] = 0;
  }
  for (let j = 0; j <= n; ++j) {
    dp[0][j] = 0;
  }
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}
```

## 字符串相加

```ts
function addStrings(num1: string, num2: string): string {
  const arr1 = num1.split('').reverse().map(Number);
  const arr2 = num2.split('').reverse().map(Number);
  const res: number[] = [];
  const n1 = arr1.length;
  const n2 = arr2.length;
  let carry = 0;
  for (let i = 0; i < n1 || i < n2; ++i) {
    let sum = carry;
    sum += arr1[i] ?? 0;
    sum += arr2[i] ?? 0;
    res.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    res.push(carry);
  }
  return res.reverse().join('');
}
```

## 字符串解码

```ts
function decodeString(s: string): string {
  const stack: [number, string][] = [[1, '']];
  let num = 0;
  for (const c of s) {
    if (!isNaN(Number(c))) {
      num = num * 10 + Number(c);
    } else if (c === '[') {
      stack.push([num, '']);
      num = 0;
    } else if (c === ']') {
      const [times, str] = stack.pop();
      for (let j = 0; j < times; ++j) {
        stack[stack.length - 1][1] += str;
      }
    } else {
      stack[stack.length - 1][1] += c;
    }
  }
  return stack[0][1];
}
```
