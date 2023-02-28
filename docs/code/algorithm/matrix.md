# 矩阵

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
