# Map

## 有时间限制的缓存

```js
class CacheNode {
  value = undefined;
  expired = false;
  constructor(value) {
    this.value = value;
  }
}

class TimeLimitedCache {
  map = new Map();

  set(key, value, duration) {
    const oldNode = this.map.get(key);
    const newNode = new CacheNode(value);
    this.map.set(key, newNode);
    setTimeout(() => {
      newNode.expired = true;
    }, duration);
    return oldNode !== undefined && !oldNode.expired;
  }

  get(key) {
    const node = this.map.get(key);
    if (node && !node.expired) {
      return node.value;
    }
    return -1;
  }

  count() {
    let res = 0;
    for (const node of this.map.values()) {
      if (!node.expired) {
        res += 1;
      }
    }
    return res;
  }
}
```

## 事件发射器

```js
class EventEmitter {
  eventHandlers = new Map();

  subscribe(eventName, callback) {
    if (!this.eventHandlers.has(eventName)) {
      this.eventHandlers.set(eventName, []);
    }
    this.eventHandlers.get(eventName).push(callback);
    return {
      unsubscribe: () => {
        const handlers = this.eventHandlers.get(eventName);
        const index = handlers?.indexOf(callback);
        if (index >= 0) {
          handlers.splice(index, 1);
        }
      },
    };
  }

  emit(eventName, args = []) {
    const handlers = this.eventHandlers.get(eventName);
    if (!handlers || !handlers.length) {
      return [];
    }
    return handlers.map(fn => fn(...args));
  }
}
```
