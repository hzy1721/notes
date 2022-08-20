# 手写 Promise

```js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(func) {
  this.state = PENDING;
  this.result = undefined;

  this.fulfulledCallbacks = [];
  this.rejectedCallbacks = [];

  const resolve = (value) => {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.result = value;
    }
  };
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function" ? onRejected : (error) => throw error;
  if (this.state === FULFILLED) {
    queueMicrotask(() => {
      onFulfilled(this.result);
    });
  } else if (this.state === REJECTED) {
    queueMicrotask(() => {
      onRejected(this.result);
    });
  } else if (this.state === PENDING) {
    this.fulfilledCallbacks.push(onFulfilled);
    this.rejectedCallbacks.push(onRejected);
  }
};

MyPromise.prototype.catch = function (onRejected) {
  this.then(null, onRejected);
};

MyPromise.prototype.finally = function (onFinally) {
  this.then(onFinally, onFinally);
};
```
