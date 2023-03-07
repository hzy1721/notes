# 栈

## 有效的括号

```ts
function isValid(s: string): boolean {
  const stack: string[] = [];
  const braceMap = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  const leftBraces = Array.from(braceMap.keys());
  for (const c of s) {
    if (leftBraces.includes(c)) {
      stack.push(c);
    } else {
      const left = stack.pop();
      if (braceMap.get(left) !== c) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
```

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

## 字符串解码

```ts
function decodeString(s: string): string {
  const stack: [number, string][] = [[1, '']];
  let num = 0;
  for (const c of s) {
    if (!isNaN(Number(c))) {
      num = num * 10 + Number(c);
    } else if (c === '[') {
      stack.push([num, '']);
      num = 0;
    } else if (c === ']') {
      const [times, str] = stack.pop();
      for (let j = 0; j < times; ++j) {
        stack[stack.length - 1][1] += str;
      }
    } else {
      stack[stack.length - 1][1] += c;
    }
  }
  return stack[0][1];
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
