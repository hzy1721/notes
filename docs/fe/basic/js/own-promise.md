# 手写 Promise

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
      } else if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(cb => cb());
      }
    };

    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(cb => cb());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : reason => {
            throw reason;
          };
    const promise = new MyPromise((resolve, reject) => {
      const dispatchCallback = (cb, arg) => {
        queueMicrotask(() => {
          try {
            const res = cb(arg);
            resolvePromise(promise, res, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      if (this.status === FULFILLED) {
        dispatchCallback(onFulfilled, this.value);
      }
      if (this.status === REJECTED) {
        dispatchCallback(onRejected, this.reason);
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          dispatchCallback(onFulfilled, this.value);
        });
        this.onRejectedCallbacks.push(() => {
          dispatchCallback(onRejected, this.reason);
        });
      }
    });
    return promise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      value => {
        onFinally();
        return new MyPromise(resolve => resolve(value));
      },
      reason => {
        onFinally();
        return new MyPromise((resolve, reject) => reject(reason));
      }
    );
  }
}

MyPromise.deferred = () => {
  const result = {};
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
};

module.exports = MyPromise;
```

## resolvePromise

```js
const isObject = value => {
  return (
    (typeof value === 'object' && value !== null) ||
    typeof value === 'function'
  );
};

const resolvePromise = (promise, res, resolve, reject) => {
  if (promise === res) {
    throw new TypeError('Chaining cycle detected for promise #<Promise>');
  }
  let settled = false;
  if (isObject(res)) {
    try {
      const then = res.then;
      if (typeof then === 'function') {
        then.call(
          res,
          value => {
            if (settled) {
              return;
            }
            settled = true;
            resolvePromise(promise, value, resolve, reject);
          },
          reason => {
            if (settled) {
              return;
            }
            settled = true;
            reject(reason);
          }
        );
      } else {
        resolve(res);
      }
    } catch (error) {
      if (settled) {
        return;
      }
      settled = true;
      reject(error);
    }
  } else {
    resolve(res);
  }
};
```

## 测试

```sh
npm i -g promises-aplus-tests
promises-aplus-tests MyPromise
```
