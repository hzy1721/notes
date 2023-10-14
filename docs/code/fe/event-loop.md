# 事件循环

## LazyMan

```js
function LazyMan(name) {
  const tasks = [];
  const nextTask = () => {
    const fn = tasks.shift();
    fn && fn();
  };
  tasks.push(() => {
    console.log(`Hi! This is ${name}!`);
    nextTask();
  });
  const man = {
    sleep(seconds) {
      tasks.push(() => {
        setTimeout(() => {
          console.log(`Wake up after ${seconds}`);
          nextTask();
        }, seconds * 1000);
      });
      return this;
    },
    eat(meal) {
      tasks.push(() => {
        console.log(`Eat ${meal}~`);
        nextTask();
      });
      return this;
    },
    sleepFirst(seconds) {
      tasks.unshift(() => {
        setTimeout(() => {
          console.log(`Wake up after ${seconds}`);
          nextTask();
        }, seconds * 1000);
      });
      return this;
    },
  };
  setTimeout(nextTask);
  return man;
}

LazyMan('Hank');
LazyMan('Hank').sleep(10).eat('dinner');
LazyMan('Hank').eat('dinner').eat('supper');
LazyMan('Hank').sleepFirst(5).eat('supper');
```
