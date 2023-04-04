# Promise 静态方法

## Promise.all

**并行**执行多个 promise，返回一个 promise。

- 所有 promise 都 `resolve`，返回的 promise 才会 `resolve`，带有一个结果数组。
- 任何一个 promise 被 `reject`，返回的 promise 立即 `reject`，带有这个 error 的值。

```js
let promise = Promise.all(iterable);
```

```js
Promise.all = function (iterable) {
  const promises = Array.from(iterable);
  const total = promises.length;
  const results = new Array(total);
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          if (++count === total) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
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

```js
Promise.allSettled = function (iterable) {
  const promises = Array.from(iterable);
  const total = promises.length;
  const results = new Array(total);
  let count = 0;
  return new Promise(resolve => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = {
            status: 'fulfilled',
            value: result,
          };
        })
        .catch(error => {
          results[index] = {
            status: 'rejected',
            reason: error,
          };
        })
        .finally(() => {
          if (++count === total) {
            resolve(results);
          }
        });
    });
  });
};
```

## Promise.race

只关心第一个**出结果**的 promise，无论成功与失败。

```js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1
```

```js
Promise.race = function (iterable) {
  return new Promise((resolve, reject) => {
    for (let promise of iterable) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};
```

## Promise.any

只关心第一个**成功**的 promise，如果都失败，返回的 `error.errors` 存储着所有 error。

```js
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ouch!")), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error!")), 2000)
  ),
]).catch((error) => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});
```

```js
Promise.any = function (iterable) {
  const promises = Array.from(iterable);
  const total = promises.length;
  const errors = new Array(total);
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(error => {
          errors[index] = error;
          if (++count === total) {
            reject(
              new AggregateError(errors, 'All promises were rejected')
            );
          }
        });
    });
  });
};
```

## Promise.resolve

`Promise.resolve(value)` 相当于 `new Promise(resolve => resolve(value)`。

```js
Promise.resolve = function (value) {
  return new Promise(resolve => {
    resolve(value);
  });
};
```

## Promise.reject

`Promise.reject(error)` 相当于 `new Promise((resolve, reject) => reject(error))`。

```js
Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};
```
