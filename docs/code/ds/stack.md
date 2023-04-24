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

## 逆波兰表达式求值

```ts
function compute(b: number, op: string, a: number): number {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.trunc(a / b);
  }
}

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (/^[+\-*/]$/.test(token)) {
      stack.push(compute(stack.pop(), token, stack.pop()));
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
}
```

## 基本计算器

```ts
function isDigit(c: string): boolean {
  return '0' <= c && c <= '9';
}

const priorityTable = [
  // + - * / ( ) n #
  [1, 1, -1, -1, -1, 1, -1, 1], // +
  [1, 1, -1, -1, -1, 1, -1, 1], // -
  [1, 1, 1, 1, -1, 1, -1, 1], // *
  [1, 1, 1, 1, -1, 1, -1, 1], // /
  [-1, -1, -1, 0, -1, undefined], // (
  [1, 1, undefined, 1, undefined, 1], // )
  [1, 1, 1, 1, -1, 1, undefined], // n
];

const opIndex = new Map(
  ['+', '-', '*', '/', '(', ')', 'n', '#'].map((op, index) => [op, index])
);

function isPrior(op1: string, op2: string): boolean {
  return priorityTable[opIndex.get(op1)][opIndex.get(op2)] > 0;
}

function isEqual(op1: string, op2: string): boolean {
  return priorityTable[opIndex.get(op1)][opIndex.get(op2)] === 0;
}

function compute(b: number, op: string, a: number): number {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.trunc(a / b);
  }
}

function calculate(s: string): number {
  s += '#';
  const n = s.length;
  let lastChar = '';
  const numStack: number[] = [];
  const opStack: string[] = [];
  let i = 0;
  while (i < n) {
    const c = s[i];
    if (c === ' ') {
      ++i;
      continue;
    }
    if (isDigit(c)) {
      let num = 0;
      while (i < n && isDigit(s[i])) {
        num = num * 10 + Number(s[i]);
        ++i;
      }
      --i;
      numStack.push(num);
    } else if (c === '-' && '+-('.includes(lastChar)) {
      opStack.push('n');
    } else {
      while (opStack.length && isPrior(opStack[opStack.length - 1], c)) {
        const op = opStack.pop();
        if ('+-*/'.includes(op)) {
          numStack.push(compute(numStack.pop(), op, numStack.pop()));
        } else if (op === 'n') {
          numStack.push(-numStack.pop());
        }
      }
      if (opStack.length && isEqual(opStack[opStack.length - 1], c)) {
        opStack.pop();
      } else {
        opStack.push(c);
      }
    }
    lastChar = s[i];
    ++i;
  }
  return numStack.pop();
}
```
