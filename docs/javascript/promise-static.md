# 手写 Promise 静态方法

## Promise.all

```js
Promise.all = function (iterable) {
  const promises = Array.from(iterable);
  const total = promises.length;
  const results = new Array(total);
  let count = 0;
  return new Promise(function (resolve, reject) {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
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

```js
Promise.allSettled = function (iterable) {
  const promises = Array.from(iterable);
  const total = promises.length;
  const results = new Array(total);
  let count = 0;
  return new Promise(function (resolve) {
    promises.forEach((promise, index) => {
      Promise.resove(promise)
        .then((result) => {
          results[index] = {
            status: "fulfilled",
            value: result,
          };
        })
        .catch((error) => {
          results[index] = {
            status: "rejected",
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

```js
Promise.race = function (iterable) {
  return new Promise(function (resolve, reject) {
    for (let promise of iterable) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};
```

## Promise.any

```js
Promise.any = function (iterable) {
  const promises = Array.from(iterable);
  const total = promises.length;
  const errors = new Array(total);
  let count = 0;
  return new Promise(function (resolve, reject) {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          if (++count === total) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};
```

## Promise.resolve

```js
Promise.resolve = function (value) {
  return new Promise(function (resolve) {
    resolve(value);
  });
};
```

## Promise.reject

```js
Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};
```
