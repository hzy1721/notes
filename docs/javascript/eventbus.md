# EventBus

事件总线 (EventBus) 是一种事件的发布/订阅模式。

![](assets/event-bus.png)

```js
class EventBus {
  constructor() {
    this.tasks = {};
  }

  on(event, callback) {
    if (!this.tasks[event]) {
      this.tasks[event] = [];
    }
    this.tasks[event].push(callback);
  }

  once(event, callback) {
    if (!this.tasks[event]) {
      this.tasks[event] = [];
    }
    const _once = (...args) => {
      callback(...args);
      this.off(_once);
    };
    this.tasks[event].push(_once);
  }

  off(event, callback) {
    const tasks = this.tasks[event];
    if (!Array.isArray(tasks)) {
      return;
    }
    this.tasks[event] = tasks.filter((cb) => cb !== callback);
  }

  emit(event, ...args) {
    if (!this.tasks[event]) {
      return;
    }
    this.tasks[event].forEach((cb) => cb(...args));
  }
}
```

Vue 2 的 `Vue` 对象也提供了这 4 个实例方法：

- `vm.$on( event, callback )`
  - 监听当前实例上的自定义事件。
  - 事件可以由 `vm.$emit` 触发。
  - 回调函数会接收所有传入事件触发函数的额外参数。
- `vm.$once( event, callback )`
  - 监听一个自定义事件，但是只触发一次。
  - 一旦触发之后，监听器就会被移除。
- `vm.$off( [event, callback] )`
  - 移除自定义事件监听器。
    - 如果没有提供参数，则移除所有的事件监听器；
    - 如果只提供了事件，则移除该事件所有的监听器；
    - 如果同时提供了事件与回调，则只移除这个回调的监听器。
- `vm.$emit( eventName, [...args] )`
  - 触发当前实例上的事件。
  - 附加参数都会传给监听器回调。
