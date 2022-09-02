# LRU

```ts
class LRUCache {
  map = new Map<number, DListNode>();
  head = new DListNode();
  tail = new DListNode();
  capacity = 0;
  size = 0;

  constructor(capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    this._remove(node);
    this._appendTail(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = value;
      this._remove(node);
      this._appendTail(node);
      return;
    }
    if (this.size === this.capacity) {
      this.map.delete(this.head.next.key);
      this._removeHead();
      this.size -= 1;
    }
    const newNode = new DListNode(key, value);
    this.map.set(key, newNode);
    this._appendTail(newNode);
    this.size += 1;
  }

  _remove(node: DListNode) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _appendTail(node: DListNode) {
    this.tail.prev.next = node;
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev = node;
  }

  _removeHead() {
    const next = this.head.next.next;
    this.head.next = next;
    next.prev = this.head;
  }
}

class DListNode {
  key: number;
  val: number;
  prev: DListNode | null;
  next: DListNode | null;
  constructor(
    key?: number,
    val?: number,
    prev?: DListNode | null,
    next?: DListNode | null
  ) {
    this.key = key === undefined ? 0 : key;
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}
```
