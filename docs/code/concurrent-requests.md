# 并发请求

```js
function sendRequests(urls, limit) {
  const total = urls.length;
  const results = new Array(total);
  const num = Math.min(total, limit);
  let nextIndex = num;
  let count = 0;
  return new Promise((resolve) => {
    function request(index) {
      fetch(urls[index])
        .then((value) => {
          results[index] = { status: "fulfilled", value: value };
          console.log(urls[index], "fulfilled");
        })
        .catch((error) => {
          results[index] = { status: "rejected", reason: error };
          console.log(urls[index], "rejected");
        })
        .finally(() => {
          if (++count === total) {
            resolve(results);
          }
          if (nextIndex < total) {
            request(nextIndex++);
          }
        });
    }
    for (let i = 0; i < num; ++i) {
      request(i);
    }
  });
}
```
