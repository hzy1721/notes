# Excel 表

```text
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

## 序号转名称

```ts
function convertToTitle(columnNumber: number): string {
  const chars: string[] = [];
  while (columnNumber > 0) {
    --columnNumber;
    chars.push(String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return chars.reverse().join("");
}
```

## 名称转序号

```ts
function titleToNumber(columnTitle: string): number {
  let res = 0, pow = 1;
  for (let i = columnTitle.length - 1; i >= 0; --i) {
    res += (columnTitle[i].charCodeAt(0) - "A".charCodeAt(0) + 1) * pow;
    pow *= 26;
  }
  return res;
}
```
