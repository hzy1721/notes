# Promise 静态方法

## Promise.all

**并行**执行多个 promise，返回一个 promise。

- 所有 promise 都 `resolve`，返回的 promise 才会 `resolve`，带有一个结果数组。
- 任何一个 promise 被 `reject`，返回的 promise 立即 `reject`，带有这个 error 的值。

```js
let promise = Promise.all(iterable);
```

## Promise.allSettled

与 all 相比，会等待所有 promise 出结果 (`resolve` 或 `reject`)。即使有部分 promise 失败，我们仍对其他成功的感兴趣。

结果数组的每个值有 2 种情况：

- `{status:"fulfilled", value:result}`：执行成功
- `{status:"rejected", reason:error}`：执行出错

也就是说 allSettled 不会 reject。

```js
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url',
];

Promise.allSettled(urls.map(url => fetch(url))).then(results => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      alert(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == 'rejected') {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});
// [
//   {status: 'fulfilled', value: response},
//   {status: 'fulfilled', value: response},
//   {status: 'rejected', reason: error}
// ]
```

## Promise.any

只关心第一个**成功**的 promise，如果都失败，返回的 `error.errors` 存储着所有 error。

```js
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ouch!')), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});
```

## Promise.race

只关心第一个**出结果**的 promise，无论成功与失败。

```js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1
```

## Promise.resolve

`Promise.resolve(value)` 相当于 `new Promise(resolve => resolve(value)`。

## Promise.reject

`Promise.reject(error)` 相当于 `new Promise((resolve, reject) => reject(error))`。
