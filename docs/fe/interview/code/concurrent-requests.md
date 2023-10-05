# 并发请求

```js
function limitRequest(reqList, limit) {
  // 所有请求数
  const n = reqList.length;
  // 请求结果
  const res = new Array(n);
  // 初始发起的请求数
  const initCount = Math.min(limit, n);
  // 当前请求
  let idx = initCount;
  // 已完成请求数
  let cnt = 0;

  return new Promise(resolve => {
    const dispatchRequest = i => {
      reqList[i]()
        .then(result => {
          res[i] = { status: 'fulfilled', value: result };
        })
        .catch(error => {
          res[i] = { status: 'rejected', reason: error };
        })
        .finally(() => {
          if (++cnt === n) {
            resolve(res);
          }
          if (idx < n) {
            dispatchRequest(idx++);
          }
        });
    };

    for (let i = 0; i < initCount; ++i) {
      dispatchRequest(i);
    }
  });
}
```
