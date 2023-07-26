# LRU 缓存

```ts
class DListNode {
  key: number;
  value: number;
  prev: DListNode;
  next: DListNode;

  constructor(
    key?: number,
    value?: number,
    prev?: DListNode,
    next?: DListNode
  ) {
    this.key = key ?? 0;
    this.value = value ?? 0;
    this.prev = prev !== undefined ? prev : null;
    this.next = next !== undefined ? next : null;
  }
}

class LRUCache {
  capaticy: number;
  map = new Map<number, DListNode>();
  head = new DListNode();
  tail = new DListNode();

  constructor(capacity: number) {
    this.capaticy = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  removeNode(node: DListNode) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertToHead(node: DListNode) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  moveToHead(node: DListNode) {
    this.removeNode(node);
    this.insertToHead(node);
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.moveToHead(node);
      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.moveToHead(node);
      node.value = value;
      return;
    }
    if (this.map.size === this.capaticy) {
      if (this.capaticy === 0) {
        return;
      }
      const evicted = this.tail.prev;
      this.removeNode(evicted);
      this.map.delete(evicted.key);
    }
    const node = new DListNode(key, value);
    this.map.set(key, node);
    this.insertToHead(node);
  }
}
```
