# 模拟

## 旋转图像

### 上下翻转 + 主对角线翻转

```ts
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < n; ++j) {
      [matrix[i][j], matrix[n - i - 1][j]] = [
        matrix[n - i - 1][j],
        matrix[i][j],
      ];
    }
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}
```

### 原地旋转 1/4

```ts
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < Math.floor((n + 1) / 2); ++i) {
    for (let j = 0; j < Math.floor(n / 2); ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
}
```

## 螺旋矩阵

```ts
function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const m = matrix.length;
  const n = matrix[0].length;
  const layerNum = Math.floor((Math.min(m, n) + 1) / 2);
  for (let k = 0; k < layerNum; ++k) {
    for (let j = k; j < n - k; ++j) {
      res.push(matrix[k][j]);
    }
    for (let i = k + 1; i < m - k; ++i) {
      res.push(matrix[i][n - k - 1]);
    }
    if (k !== m - k - 1 && k !== n - k - 1) {
      for (let j = n - k - 2; j >= k; --j) {
        res.push(matrix[m - k - 1][j]);
      }
      for (let i = m - k - 2; i > k; --i) {
        res.push(matrix[i][k]);
      }
    }
  }
  return res;
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

## 高精度减法

```ts
function minusTwoNumbers(a: string, b: string): string {
  let neg = false;
  if (a.length < b.length || (a.length === b.length && a < b)) {
    [a, b] = [b, a];
    neg = true;
  }
  const num1 = a.split('').map(Number).reverse();
  const num2 = b.split('').map(Number).reverse();
  let borrow = 0;
  const m = num1.length;
  const res = new Array(m);
  for (let i = 0; i < m; ++i) {
    let diff = num1[i] - borrow - (num2[i] ?? 0);
    borrow = 0;
    if (diff < 0) {
      borrow = 1;
      diff += 10;
    }
    res[i] = diff;
  }
  while (res[res.length - 1] === 0) {
    res.pop();
  }
  if (!res.length) {
    res.push(0);
  }
  return (neg ? '-' : '') + res.reverse().join('');
}
```

`BigInt`

```ts
function minusTwoNumbers(a: string, b: string): string {
  const num1 = BigInt(a);
  const num2 = BigInt(b);
  return String(num1 - num2);
}
```

## 比较版本号

```ts
function compareVersion(version1: string, version2: string): number {
  const tokens1 = version1.split('.').map(Number);
  const tokens2 = version2.split('.').map(Number);
  const m = tokens1.length;
  const n = tokens2.length;
  for (let i = 0; i < Math.max(m, n); ++i) {
    const t1 = tokens1[i] ?? 0;
    const t2 = tokens2[i] ?? 0;
    if (t1 < t2) {
      return -1;
    } else if (t1 > t2) {
      return 1;
    }
  }
  return 0;
}
```
