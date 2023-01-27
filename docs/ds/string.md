# 字符串

## 最长回文子串

```ts
function longestPalindrome(s: string): string {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n));
  let maxLen = 0,
    maxIdx = 0;
  for (let len = 1; len <= n; ++len) {
    for (let i = 0; i < n; ++i) {
      const j = i + len - 1;
      if (j >= n) {
        break;
      }
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (len <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && len > maxLen) {
        maxLen = len;
        maxIdx = i;
      }
    }
  }
  return s.slice(maxIdx, maxIdx + maxLen);
}
```

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

## 比较版本号

```ts
function compareVersion(version1: string, version2: string): number {
  const tokens1 = version1.split('.');
  const tokens2 = version2.split('.');
  const n1 = tokens1.length;
  const n2 = tokens2.length;
  for (let i = 0; i < n1 || i < n2; ++i) {
    const num1 = i < n1 ? Number(tokens1[i]) : 0;
    const num2 = i < n2 ? Number(tokens2[i]) : 0;
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    }
  }
  return 0;
}
```

## 字符串相加

```ts
function addStrings(num1: string, num2: string): string {
  let carry = 0;
  const arr1 = num1
    .split('')
    .reverse()
    .map(char => Number(char));
  const arr2 = num2
    .split('')
    .reverse()
    .map(char => Number(char));
  const arr3: number[] = [];
  const n1 = arr1.length;
  const n2 = arr2.length;
  for (let i = 0; i < n1 || i < n2; ++i) {
    let sum = carry;
    sum += i < n1 ? arr1[i] : 0;
    sum += i < n2 ? arr2[i] : 0;
    arr3.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    arr3.push(carry);
  }
  return arr3.reverse().join('');
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
