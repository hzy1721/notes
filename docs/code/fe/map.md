# Map

## 有时间限制的缓存

```ts
class CacheNode {
  value: number;
  expired = false;

  constructor(value: number) {
    this.value = value;
  }
}

class TimeLimitedCache {
  map: Map<number, CacheNode> = new Map();

  constructor() {}

  set(key: number, value: number, duration: number): boolean {
    const oldNode = this.map.get(key);
    const newNode = new CacheNode(value);
    this.map.set(key, newNode);
    setTimeout(() => {
      newNode.expired = true;
    }, duration);
    return oldNode !== undefined && !oldNode.expired;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (node && !node.expired) {
      return node.value;
    }
    return -1;
  }

  count(): number {
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

```ts
type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  eventHandlers: Map<string, Callback[]> = new Map();

  subscribe(eventName: string, callback: Callback): Subscription {
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

  emit(eventName: string, args: any[] = []): any[] {
    const handlers = this.eventHandlers.get(eventName);
    if (!handlers || !handlers.length) {
      return [];
    }
    return handlers.map(fn => fn(...args));
  }
}
```
