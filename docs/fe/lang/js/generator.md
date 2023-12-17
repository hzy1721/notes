# generator

## generator 函数

`function*` 表示生成器函数，内部用 `yield` 一个一个地返回值。

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
```

## generator 对象

调用生成器函数不会立即执行函数体，而是返回一个生成器对象。

```js
const generator = generateSequence();
```

生成器对象的核心方法是 `next()`，每次调用时恢复上次生成器函数的执行，直到执行到下一个 `yield` 语句，返回 `value` 和 `done` 并暂停执行。

```js
generator.next(); // { value: 1, done: false }
generator.next(); // { value: 2, done: false }
generator.next(); // { value: 3, done: true }
generator.next(); // { value: undefined, done: true }
```

`value` 是 `yield` 后面的值，`done` 表示是否执行完毕，执行完毕的 `value` 是生成器函数的返回值，后续的 `next()` 调用将始终返回 `{ value: undefined, done: true }`。

## 可迭代

生成器函数通常用于 `[Symbol.iterator]` 方法，能够简化逻辑。

```js
const range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; ++value) {
      yield value;
    }
  },
};
```

生成器对象本身也是可迭代的，`Generator` 内部实现了 `[Symbol.iterator]` 方法。

```js
for (const value of generator) {
  console.log(value);
}
// 1
// 2
```

## yield\*

为了进一步复用逻辑，`yield*` 支持依次 `yield` 可迭代对象中的值。

支持任意可迭代对象，比如数组、Set、Map、生成器对象等。

```js
function* generate() {
  yield* [1, 2, 3];
  yield* new Set([4, 5]);
  yield* new Map([
    [6, 7],
    [8, 9],
  ]);
  yield* generateSequence();
}
// 1, 2, 3, 4, 5, [6, 7], [8, 9], 1, 2
```

## 双向传递

`next(arg)` 支持传入参数 `arg`，作为上一个 `yield` 的返回值。

```js
function* generate() {
  const ans1 = yield '2 + 2 = ?';
  console.log(ans1);
  const ans2 = yield '3 + 3 = ?';
  console.log(ans2);
}
const generator = generate();
console.log(generator.next());
console.log(generator.next(4));
console.log(generator.next(6));
// { value: '2 + 2 = ?', done: false }
// 4
// { value: '3 + 3 = ?', done: false }
// 6
// { value: undefined, done: true }
```

## generator.throw

类似 `next(arg)`，区别是传入一个错误，在上一个 `yield` 处抛出。

```js
function* generate() {
  try {
    yield '1 + 1 = 3';
    console.log('no error');
  } catch (error) {
    console.log('error:', error.message);
  }
}
const generator = generate();
console.log(generator.next());
console.log(generator.throw(new Error('wrong answer')));
// { value: '1 + 1 = 3', done: false }
// error: wrong answer
// { value: undefined, done: true }
```

## generator.return

提前结束生成器函数的执行，返回传入的参数值。

```js
function* generate() {
  yield* [1, 2, 3];
}
const generator = generate();
console.log(generator.next());
console.log(generator.return(4));
console.log(generator.next());
// { value: 1, done: false }
// { value: 4, done: true }
// { value: undefined, done: true }
```

## 用途

- 可迭代对象
- 函数与调用代码交换数据
- 数据流
