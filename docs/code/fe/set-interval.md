# setInterval

## 自定义间隔

```ts
type Timer = ReturnType<typeof setTimeout>;

let nextId = 0;
const intervals = new Map<number, Timer>();

function customInterval(
  fn: Function,
  delay: number,
  period: number
): number {
  const id = nextId++;
  let timer: Timer | undefined = undefined;
  let count = 0;

  const launchTask = () => {
    timer = setTimeout(() => {
      fn();
      launchTask();
    }, delay + period * count);
    intervals.set(id, timer);
    count += 1;
  };

  launchTask();

  return id;
}

function customClearInterval(id: number): void {
  clearTimeout(intervals.get(id));
}
```
