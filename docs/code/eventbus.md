# EventBus

事件总线 (EventBus) 是一种事件的发布/订阅模式。

![](assets/event-bus.png)

## 手写

```js
class EventBus {
  constructor() {
    this.bucket = new Map();
  }

  on(event, callback) {
    if (typeof callback !== "function") return;
    const _on = (e, cb) => {
      if (!this.bucket.has(e)) {
        this.bucket.set(e, new Set());
      }
      this.bucket.get(e).add(cb);
    };
    if (typeof event === "string") {
      _on(event, callback);
    } else if (Array.isArray(event)) {
      event.forEach((e) => {
        if (typeof e === "string") {
          _on(e, callback);
        }
      });
    }
  }

  once(event, callback) {
    if (typeof event !== "string") return;
    if (typeof callback !== "function") return;
    if (!this.bucket.has(event)) {
      this.bucket.set(event, new Set());
    }
    const _once = (...args) => {
      callback(...args);
      this.off(event, _once);
    };
    this.bucket.get(event).add(_once);
  }

  off(event, callback) {
    const _off = (e, cb) => {
      if (!this.bucket.has(e)) return;
      if (typeof cb === "function") {
        this.bucket.get(e).delete(cb);
      } else if (cb === undefined) {
        this.bucket.get(e).clear();
      }
    };
    if (typeof event === "string") {
      _off(event, callback);
    } else if (Array.isArray(event)) {
      event.forEach((e) => {
        if (typeof e === "string") {
          _off(e, callback);
        }
      });
    } else if (event === undefined && callback === undefined) {
      this.bucket.clear();
    }
  }

  emit(event, ...args) {
    if (typeof event !== "string") return;
    if (!this.bucket.has(event)) return;
    this.bucket.get(event).forEach((cb) => cb(...args));
  }
}
```

## Vue 2

Vue 2 的 `Vue` 对象也提供了这 4 个实例方法：

### vm.$on( event, callback )

- 参数：
  - `{string | Array<string>} event`
  - `{Function} callback`
- 用法：
  - 监听当前实例上的自定义事件。
  - 事件可以由 `vm.$emit` 触发。
  - 回调函数会接收所有传入事件触发函数的额外参数。

### vm.$once( event, callback )

- 参数：
  - `{string} event`
  - `{Function} callback`
- 用法：
  - 监听一个自定义事件，但是只触发一次。
  - 一旦触发之后，监听器就会被移除。

### vm.$off( [event, callback] )

- 参数：
  - `{string | Array<string>} event`
  - `{Function} [callback]`
- 用法：
  - 移除自定义事件监听器。
    - 如果没有提供参数，则移除所有的事件监听器；
    - 如果只提供了事件，则移除该事件所有的监听器；
    - 如果同时提供了事件与回调，则只移除这个回调的监听器。

### vm.$emit( eventName, [...args] )

- 参数：
  - `{string} eventName`
  - `[...args]`
- 用法：
  - 触发当前实例上的事件。
  - 附加参数都会传给监听器回调。
