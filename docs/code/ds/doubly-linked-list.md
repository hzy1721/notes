# 双向链表

## LRU

```js
class DListNode {
  constructor(key, val, prev, next) {
    this.key = key ?? 0;
    this.val = val ?? 0;
    this.prev = prev ?? null;
    this.next = next ?? null;
  }
}

class LRUCache {
  map = new Map();
  head = new DListNode();
  tail = new DListNode();

  constructor(capacity) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    this.moveToHead(node);
    return node.val;
  }

  put(key, val) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = val;
      this.moveToHead(node);
      return;
    }
    if (this.map.size === this.capacity) {
      const node = this.tail.prev;
      this.deleteNode(node);
      this.map.delete(node.key);
    }
    const node = new DListNode(key, val);
    this.insertHead(node);
    this.map.set(key, node);
  }

  moveToHead(node) {
    this.deleteNode(node);
    this.insertHead(node);
  }

  deleteNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertHead(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }
}
```

扩展：支持过期时间

- 链表节点新增过期时间 `expiredAt`
- `get` 获取时判断节点是否过期
- `put` 支持传入过期时间、默认永不过期
- `put` 判断是否已满前清理过期节点

```js
class DListNode {
  constructor(key, val, expiredAt, prev, next) {
    this.key = key ?? 0;
    this.val = val ?? 0;
    // 新增过期时间
    this.expiredAt = expiredAt ?? -1;
    this.prev = prev ?? null;
    this.next = next ?? null;
  }

  // 新增判断是否过期的方法
  isExpired() {
    return this.expiredAt !== -1 && this.expiredAt < Date.now();
  }
}

class LRUCache {
  map = new Map();
  head = new DListNode();
  tail = new DListNode();

  constructor(capacity) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    // 新增判断是否过期
    if (node.isExpired()) {
      this.deleteNode(node);
      this.map.delete(key);
      return -1;
    }
    this.moveToHead(node);
    return node.val;
  }

  put(key, val, expiredAt) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = val;
      // 更新过期时间
      node.expiredAt = expiredAt ?? -1;
      this.moveToHead(node);
      return;
    }
    // 新增清理过期节点
    if (this.map.size === this.capacity) {
      this.clearExpiredNodes();
    }
    if (this.map.size === this.capacity) {
      const node = this.tail.prev;
      this.deleteNode(node);
      this.map.delete(node.key);
    }
    // 传入过期时间
    const node = new DListNode(key, val, expiredAt);
    this.insertHead(node);
    this.map.set(key, node);
  }

  moveToHead(node) {
    this.deleteNode(node);
    this.insertHead(node);
  }

  deleteNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertHead(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  clearExpiredNodes() {
    let curr = this.tail.prev;
    while (curr !== this.head) {
      if (curr.isExpired()) {
        this.deleteNode(curr);
        this.map.delete(curr.key);
      }
      curr = curr.prev;
    }
  }
}
```
