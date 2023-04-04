# once

```js
const once = func => {
  let invoked = false;
  let ret = undefined;
  return function (...args) {
    if (invoked) {
      return ret;
    }
    invoked = true;
    ret = func.apply(this, args);
    return ret;
  };
};
```
