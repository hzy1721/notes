# 手写 Promise 静态方法

## all

```js
Promise.all = iterable => {
  const promises = Array.from(iterable);
  const { length } = promises;
  const results = new Array(length);
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      // 封装非 promise 值
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          if (++count === length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
```

## allSettled

```js
Promise.allSettled = iterable => {
  const promises = Array.from(iterable);
  const { length } = promises;
  const results = new Array(length);
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
          if (++count === length) {
            resolve(results);
          }
        });
    });
  });
};
```

## any

```js
Promise.any = iterable => {
  const promises = Array.from(iterable);
  const { length } = promises;
  const errors = new Array(length);
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(error => {
          errors[index] = error;
          if (++count === length) {
            reject(
              new AggregateError(errors, 'All promises were rejected')
            );
          }
        });
    });
  });
};
```

## race

```js
Promise.race = iterable => {
  return new Promise((resolve, reject) => {
    for (let promise of iterable) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};
```

## resolve

```js
Promise.resolve = value => new Promise(resolve => resolve(value));
```

## reject

```js
Promise.reject = value => new Promise((_, reject) => reject(value));
```
