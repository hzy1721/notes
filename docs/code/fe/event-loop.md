# 事件循环

## LazyMan

`class` 写法：通过 `new` 实例化

```js
class LazyMan {
  queue = [];

  constructor(name) {
    this.queue.push(() => {
      console.log(`Hi! This is ${name}!`);
      this.nextTask();
    });
    setTimeout(() => {
      this.nextTask();
    });
  }

  nextTask() {
    const task = this.queue.shift();
    task?.();
  }

  eat(food) {
    this.queue.push(() => {
      console.log(`Eat ${food}~`);
      this.nextTask();
    });
    return this;
  }

  sleep(seconds) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${seconds}s!`);
        this.nextTask();
      }, seconds * 1000);
    });
    return this;
  }

  sleepFirst(seconds) {
    this.queue.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${seconds}s!`);
        this.nextTask();
      }, seconds * 1000);
    });
    return this;
  }
}
```

Promise 实现：任务返回 Promise、去掉 `nextTask`

```js
class LazyMan {
  queue = [];

  constructor(name) {
    this.queue.push(() => {
      console.log(`Hi! This is ${name}!`);
    });
    setTimeout(() => {
      this.queue.reduce(
        (promise, task) => promise.then(task),
        Promise.resolve(),
      );
    });
  }

  eat(food) {
    this.queue.push(() => {
      console.log(`Eat ${food}~`);
    });
    return this;
  }

  sleep(seconds) {
    this.queue.push(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Wake up after ${seconds}s!`);
          resolve();
        }, seconds * 1000);
      });
    });
    return this;
  }

  sleepFirst(seconds) {
    this.queue.unshift(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Wake up after ${seconds}s!`);
          resolve();
        }, seconds * 1000);
      });
    });
    return this;
  }
}
```

函数写法：调用函数实例化

```js
const LazyMan = (name) => {
  const queue = [];
  const nextTask = () => {
    const task = queue.shift();
    task?.();
  };

  const man = {
    eat(food) {
      queue.push(() => {
        console.log(`Eat ${food}~`);
        nextTask();
      });
      return man;
    },
    sleep(seconds) {
      queue.push(() => {
        setTimeout(() => {
          console.log(`Wake up after ${seconds}s!`);
          nextTask();
        }, seconds * 1000);
      });
      return man;
    },
    sleepFirst(seconds) {
      queue.unshift(() => {
        setTimeout(() => {
          console.log(`Wake up after ${seconds}s!`);
          nextTask();
        }, seconds * 1000);
      });
      return man;
    },
  };

  queue.push(() => {
    console.log(`Hi! This is ${name}!`);
    nextTask();
  });
  setTimeout(nextTask);
  return man;
};
```
