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
