# Promise

## Promise 对象池

```ts
type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  const { length } = functions;
  if (length === 0) {
    return Promise.resolve([]);
  }
  const results = new Array(length);
  const initCount = Math.min(n, length);
  let count = 0;
  let nextIndex = initCount;
  return new Promise(resolve => {
    const nextTask = (index: number) => {
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

```ts
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
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

```ts
type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  const { length } = functions;
  const results = new Array<T>(length);
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

```ts
type CallbackFn = (
  next: (data: number, error: string) => void,
  ...args: number[]
) => void;
type Promisified = (...args: number[]) => Promise<number>;

function promisify(fn: CallbackFn): Promisified {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const cb = (data: number, error: string): void => {
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

```ts
type FulfilledObj = {
  status: 'fulfilled';
  value: string;
};
type RejectedObj = {
  status: 'rejected';
  reason: string;
};
type Obj = FulfilledObj | RejectedObj;

function promiseAllSettled(functions: Function[]): Promise<Obj[]> {
  const { length } = functions;
  if (length === 0) {
    return Promise.resolve([]);
  }
  const results = new Array<Obj>(length);
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
