# BigInt

`BigInt` 支持任意长度的整数。

## 创建 BigInt

- 整数字面量后面加 `n`
- 调用 `BigInt()` 函数
  - 从 Number、String 类型转换

## 数学运算

- 支持大部分数学运算符
- 计算结果仍是 `BigInt`
- 不支持 `BigInt` 和 Number 直接运算，需要显式类型转换

## 比较运算

- 支持 `BigInt` 和 Number 直接比较
- 值相同的 `BigInt` 和 Number，`==` 为 true，`===` 为 false

## 布尔运算

- 行为与 Number 类似，非 `0n` 是 true，`0n` 是 false
