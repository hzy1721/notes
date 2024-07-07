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
    return Array.from(this.map.values()).filter((node) => !node.expired).length;
  }
}
```

## 事件发射器

```js
class EventEmitter {
  map = new Map();

  subscribe(eventName, callback) {
    let handlers = this.map.get(eventName);
    if (!handlers) {
      this.map.set(eventName, (handlers = []));
    }
    if (!handlers.includes(callback)) {
      handlers.push(callback);
    }
    return {
      unsubscribe: () => {
        const handlers = this.map.get(eventName);
        if (handlers?.length) {
          this.map.set(
            eventName,
            handlers.filter((cb) => cb !== callback)
          );
        }
      },
    };
  }

  emit(eventName, args = []) {
    const handlers = this.map.get(eventName) ?? [];
    return handlers.map((cb) => cb.apply(this, args));
  }
}
```

## 事件总线

```js
class EventBus {
  map = new Map();

  on(event, callback, once = false) {
    let handlers = this.map.get(event);
    if (!handlers) {
      this.map.set(event, (handlers = []));
    }
    if (!handlers.find((node) => node.cb === callback)) {
      handlers.push({ cb: callback, once });
    }
  }

  off(event, callback) {
    const handlers = this.map.get(event);
    if (handlers?.length) {
      this.map.set(
        event,
        handlers.filter((node) => node.cb !== callback)
      );
    }
  }

  emit(event, args) {
    const handlers = this.map.get(event);
    if (handlers?.length) {
      handlers.forEach(({ cb }) => cb.apply(this, args));
      this.map.set(
        event,
        handlers.filter((node) => !node.once)
      );
    }
  }

  once(event, callback) {
    this.on(event, callback, true);
  }
}
```

## 层级关系转换

```js
function convert(list) {
  const res = [];
  const map = new Map(list.map((node) => [node.key, node]));
  for (const node of list) {
    const { key, parentKey } = node;
    // 非法情况：循环引用，key 是 0
    if (key === parentKey || key === 0) {
      continue;
    }
    if (parentKey === 0) {
      res.push(node);
    } else if (map.has(parentKey)) {
      const parentNode = map.get(parentKey);
      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push(node);
    }
  }
  return res;
}
```

```js
const list = [
  { key: 1, name: '部门A', parentKey: 0 },
  { key: 2, name: '部门B', parentKey: 0 },
  { key: 3, name: '部门C', parentKey: 1 },
  { key: 4, name: '部门D', parentKey: 1 },
  { key: 5, name: '部门E', parentKey: 2 },
  { key: 6, name: '部门F', parentKey: 3 },
  { key: 16, name: '部门L', parentKey: 3 },
  { key: 7, name: '部门G', parentKey: 2 },
  { key: 8, name: '部门H', parentKey: 4 },
];
const res = convert(list);
console.log(JSON.stringify(res, null, 2));
```
