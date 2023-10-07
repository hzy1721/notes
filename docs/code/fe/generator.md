# 生成器

## 设计可取消函数

```js
function cancellable(generator) {
  let cancelFn = undefined;
  let generatorDone = false;
  const promise = new Promise((resolve, reject) => {
    cancelFn = () => {
      if (!generatorDone) {
        try {
          const { value, done } = generator.throw('Cancelled');
          resolve(value);
        } catch (error) {
          reject(error);
        }
      }
    };
    const nextTask = (fn, arg) => {
      try {
        const { value, done } = fn.call(generator, arg);
        if (done) {
          resolve(value);
          generatorDone = true;
        }
        value
          .then(result => nextTask(generator.next, result))
          .catch(error => nextTask(generator.throw, error));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    };
    nextTask(generator.next);
  });
  return [cancelFn, promise];
}
```

## 生成循环数组的值

```js
function* cycleGenerator(arr, startIndex) {
  const { length } = arr;
  let i = startIndex;
  while (true) {
    const step = yield arr[i];
    i += step;
    while (i < 0) {
      i += length;
    }
    i %= length;
  }
}
```

## 生成斐波那契数列

```js
function* fibGenerator() {
  yield 0;
  yield 1;
  let prev1 = 0;
  let prev2 = 1;
  while (true) {
    const curr = prev1 + prev2;
    yield curr;
    prev1 = prev2;
    prev2 = curr;
  }
}
```

## 阶乘生成器

```js
function* factorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; ++i) {
    result *= i;
    yield result;
  }
}
```
