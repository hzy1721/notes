# 类型标注

## 变量

```ts
// 自动推导
const str = '123';
// 手动标注
const numArr: number[] = [];
```

## 函数

包括参数和返回值 2 部分。

```ts
// 返回值自动推导为 void
function greet(name: string) {
  console.log(`Hi ${name}`);
}
// 返回值为 number 类型
function getNumber(): number {
  return 123;
}
// 匿名函数
const greet = (name: string) => {
  console.log(`Hi ${name}`);
};
// 参数类型通过 forEach 的类型自动推导
[1, 2, 3].forEach((num) => console.log(`number ${num}`));
```

尽量手写返回值类型，这样函数内返回了错误的类型也能检查出来。
