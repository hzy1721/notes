# 防抖节流

## 批处理查询

```js
class QueryBatcher {
  queryMultiple = undefined;
  delay = undefined;
  timer = undefined;
  keys = [];
  map = new Map();

  constructor(queryMultiple, t) {
    this.queryMultiple = queryMultiple;
    this.delay = t;
  }

  async getValue(key) {
    return new Promise(async resolve => {
      this.keys.push(key);
      this.map.set(key, resolve);
      const callAndLanuchTimer = () => {
        const { keys } = this;
        this.queryMultiple(keys).then(results => {
          keys.forEach((key, i) => {
            this.map.get(key)(results[i]);
            this.map.delete(key);
          });
        });
        this.keys = [];
        this.timer = setTimeout(() => {
          this.timer = undefined;
          if (this.keys.length) {
            callAndLanuchTimer();
          }
        }, this.delay);
      };
      if (!this.timer) {
        callAndLanuchTimer();
      }
    });
  }
}
```

## 函数防抖

```js
function debounce(fn, t) {
  let timer = undefined;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
}
```

## 节流

```js
function throttle(fn, t) {
  let timer = undefined;
  let latestArgs = undefined;
  return function (...args) {
    const callAndLaunchTimer = args => {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = undefined;
        if (latestArgs) {
          callAndLaunchTimer(latestArgs);
          latestArgs = undefined;
        }
      }, t);
    };
    if (!timer) {
      callAndLaunchTimer(args);
    } else {
      latestArgs = args;
    }
  };
}
```
