# LRU

```ts
class DListNode {
  key: number;
  val: number;
  prev: DListNode;
  next: DListNode;
  constructor(
    key?: number,
    val?: number,
    prev?: DListNode | null,
    next?: DListNode | null
  ) {
    this.key = key === undefined ? null : key;
    this.val = val === undefined ? null : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}

class LRUCache {
  capacity = 0;
  size = 0;
  map = new Map<number, DListNode>();
  head = new DListNode();
  tail = new DListNode();

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private moveToHead(node: DListNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    this.moveToHead(node);
    return node.val;
  }

  private deleteTail(): DListNode {
    const node = this.tail.prev;
    this.tail.prev = this.tail.prev.prev;
    this.tail.prev.next = this.tail;
    return node;
  }

  private insertToHead(node: DListNode): void {
    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.moveToHead(node);
      node.val = value;
      return;
    }
    if (this.capacity === 0) {
      return;
    }
    if (this.size === this.capacity) {
      const node = this.deleteTail();
      this.map.delete(node.key);
      this.size -= 1;
    }
    const node = new DListNode(key, value);
    this.insertToHead(node);
    this.map.set(key, node);
    this.size += 1;
  }
}
```
