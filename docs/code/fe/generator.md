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

```ts
function* cycleGenerator(
  arr: number[],
  startIndex: number
): Generator<number, void, number> {
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
