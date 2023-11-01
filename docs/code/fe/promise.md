# Promise

## Promise 对象池

```js
function promisePool(functions, n) {
  const { length } = functions;
  if (length === 0) {
    return Promise.resolve([]);
  }
  const results = new Array(length);
  const initCount = Math.min(n, length);
  let count = 0;
  let nextIndex = initCount;
  return new Promise(resolve => {
    const nextTask = index => {
      if (index >= length) {
        return;
      }
      functions[index]().then(value => {
        results[index] = value;
        if (++count === length) {
          resolve(results);
        }
        nextTask(nextIndex++);
      });
    };
    for (let i = 0; i < initCount; ++i) {
      nextTask(i);
    }
  });
}
```

## 有时间限制的 Promise 对象

```js
function timeLimit(fn, t) {
  return function (...args) {
    return new Promise(async (resolve, reject) => {
      let done = false;
      setTimeout(() => {
        if (!done) {
          reject('Time Limit Exceeded');
        }
      }, t);
      try {
        const result = await fn.apply(this, args);
        done = true;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}
```

## 并行执行异步函数

```js
function promiseAll(functions) {
  const { length } = functions;
  const results = new Array(length);
  let count = 0;
  return new Promise((resolve, reject) => {
    functions.forEach(async (fn, index) => {
      try {
        const res = await fn();
        results[index] = res;
        if (++count === length) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}
```

## 转换回调函数为 Promise 函数

```js
function promisify(fn) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const cb = (data, error) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      };
      fn.call(this, cb, ...args);
    });
  };
}
```

## 并行执行 Promise 以获取独有的结果

```js
function promiseAllSettled(functions) {
  const { length } = functions;
  if (length === 0) {
    return Promise.resolve([]);
  }
  const results = new Array(length);
  let count = 0;
  return new Promise(resolve => {
    functions.forEach((fn, i) => {
      fn()
        .then(value => {
          results[i] = { status: 'fulfilled', value };
        })
        .catch(error => {
          results[i] = { status: 'rejected', reason: error };
        })
        .finally(() => {
          if (++count === length) {
            resolve(results);
          }
        });
    });
  });
}
```

## 睡眠函数

```js
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}
```

## 两个 Promise 对象相加

```js
async function addTwoPromises(promise1, promise2) {
  return new Promise(async resolve => {
    const [res1, res2] = await Promise.all([promise1, promise2]);
    resolve(res1 + res2);
  });
}
```

## 延迟每个 Promise 对象的解析

```js
function delayAll(functions, ms) {
  return functions.map(fn => {
    return function (...args) {
      return new Promise((resolve, reject) => {
        fn()
          .then(value => {
            setTimeout(() => {
              resolve(value);
            }, ms);
          })
          .catch(error => {
            setTimeout(() => {
              reject(error);
            }, ms);
          });
      });
    };
  });
}
```

## 异步加法

```js
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.random() * 1000);
}

const map = new Map();

function sum(...nums) {
  const n = nums.length;
  let count = 0;
  nums.sort((a, b) => a - b);
  const key = nums.join('+');
  if (map.has(key)) {
    return Promise.resolve(map.get(key));
  }
  return new Promise((resolve, reject) => {
    const add = () => {
      if (nums.length >= 2) {
        const a = nums.pop();
        const b = nums.pop();
        asyncAdd(a, b, (error, res) => {
          if (error) {
            reject(error);
          }
          nums.push(res);
          if (++count === n - 1) {
            map.set(key, nums[0]);
            resolve(nums[0]);
          } else {
            add();
          }
        });
      }
    };
    for (let i = 0; i < n / 2; ++i) {
      add();
    }
  });
}

async function total() {
  const res1 = await sum(1, 2, 3, 4, 5, 6, 4);
  const res2 = await sum(1, 2, 3, 4, 5, 6, 4);
  return [res1, res2];
}

console.log(await total());
```
