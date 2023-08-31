# 堆

## 数据流中的第 K 大元素

```ts
class MinHeap {
  data: number[];

  constructor(nums: number[] = []) {
    this.data = nums;
    this.heapify();
  }

  add(num: number): void {
    this.data.push(num);
    this.siftUp(this.size - 1);
  }

  popMin(): void {
    if (!this.size) {
      return;
    }
    this.swap(0, this.size - 1);
    this.data.pop();
    this.siftDown(0);
  }

  getMin(): number {
    return this.data[0];
  }

  get size(): number {
    return this.data.length;
  }

  heapify(): void {
    for (let i = 1; i < this.size; ++i) {
      this.siftUp(i);
    }
  }

  siftUp(index: number): void {
    let currIndex = index;
    while (currIndex) {
      const parentIndex = (currIndex - 1) >> 1;
      if (this.data[currIndex] < this.data[parentIndex]) {
        this.swap(currIndex, parentIndex);
        currIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  siftDown(index: number): void {
    let parent = index;
    let child = parent * 2 + 1;
    while (child < this.size) {
      if (
        child + 1 < this.size &&
        this.data[child] > this.data[child + 1]
      ) {
        ++child;
      }
      if (this.data[parent] <= this.data[child]) {
        return;
      }
      this.swap(parent, child);
      parent = child;
      child = parent * 2 + 1;
    }
  }

  swap(i: number, j: number): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

class KthLargest {
  k: number;
  heap: MinHeap;

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = new MinHeap(nums);
    while (this.heap.size > this.k) {
      this.heap.popMin();
    }
  }

  add(val: number): number {
    this.heap.add(val);
    if (this.heap.size > this.k) {
      this.heap.popMin();
    }
    return this.heap.getMin();
  }
}
```

## 二叉树中第 K 小的元素

「[二叉搜索树中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst)」的拓展，BST 变为普通二叉树

```ts
// TODO
```
