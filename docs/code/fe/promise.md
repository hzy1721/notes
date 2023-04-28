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

## 看代码说打印顺序

```js
async function async1() {
  console.log('async1 start'); // 1
  await async2();
  console.log('async1 end'); // 5
}

async function async2() {
  console.log('async2'); // 2
}

console.log('script start'); // 0

setTimeout(() => {
  console.log('setTimeout'); // 7
});

async1();

new Promise(resolve => {
  console.log('promise1'); // 3
  resolve();
}).then(() => {
  console.log('promise2'); // 6
});

console.log('script end'); // 4
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
```
