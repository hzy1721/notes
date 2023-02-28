# 栈队

## 最小栈

```ts
class MinStack {
  stack: number[] = [];
  minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    let minVal = val;
    if (this.minStack.length) {
      minVal = Math.min(this.minStack[this.minStack.length - 1], val);
    }
    this.minStack.push(minVal);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
```

## 两个栈实现队列

```ts
class CQueue {
  stack1: number[] = [];
  stack2: number[] = [];

  constructor() {}

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.length === 0 ? -1 : this.stack2.pop();
  }
}
```
