# n 个异步操作按序执行

```js
async function sequentialExecute(executors) {
  for (const executor of executors) {
    await new Promise(executor);
  }
}

function sequentialExecute(executors) {
  executors.reduce((promise, executor) => {
    return promise.then(() => new Promise(executor));
  }, Promise.resolve());
}
```
