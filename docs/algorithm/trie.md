# 字典树

## 实现 Trie (前缀树)

```ts
class Trie {
  map = new Map<string, Trie>();
  end = false;

  insert(word: string): void {
    let curr: Trie = this;
    for (const c of word) {
      if (!curr.map.has(c)) {
        curr.map.set(c, new Trie());
      }
      curr = curr.map.get(c);
    }
    curr.end = true;
  }

  private searchPrefix(word: string): Trie | null {
    let curr: Trie = this;
    for (const c of word) {
      if (!curr.map.has(c)) {
        return null;
      }
      curr = curr.map.get(c);
    }
    return curr;
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word);
    return node ? node.end : false;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) !== null;
  }
}
```
