# Promise

## promisify

```js
const promisify = func => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      // 回调函数参数格式约定
      const cb = (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      };
      args.push(cb);
      func.apply(this, args);
    });
  };
};
```
