# 类型

## 原始类型

对应于 JS 的原始类型。

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`
- 字面量：单个值也是一种类型，表示只能取这个值

```ts
const align: 'left' | 'center' | 'right' = 'center';
const compareResult: -1 | 0 | 1 = 0;
const mustTrue: true = true;
```

## 数组

元素类型为 `T` 的数组。

- `T[]` 或 `Array<T>`

## any

任意类型，相当于 JS 的不检查类型。

- `any`

尽量少用。

## 对象

- `{ x: number, y: number }`
  - 可选字段：`{ x: number, y?: number }`

## 枚举

本质是类型别名。
