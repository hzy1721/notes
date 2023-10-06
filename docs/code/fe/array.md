# 数组

## 蜗牛排序

```ts
declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  const { length } = this;
  if (rowsCount * colsCount !== length) {
    return [];
  }
  const res: number[][] = new Array(rowsCount)
    .fill(0)
    .map(() => new Array(colsCount));
  let k = 0;
  for (let j = 0; j < colsCount; ++j) {
    if (j % 2 === 0) {
      for (let i = 0; i < rowsCount; ++i) {
        res[i][j] = this[k++];
      }
    } else {
      for (let i = rowsCount - 1; i >= 0; --i) {
        res[i][j] = this[k++];
      }
    }
  }
  return res;
};
```

## 扁平化嵌套数组

```ts
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function flat(
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n <= 0) {
    return arr;
  }
  const res: MultiDimensionalArray = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      res.push(...flat(el, n - 1));
    } else {
      res.push(el);
    }
  }
  return res;
}
```

## 分组

```ts
declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function <T>(fn) {
  const res: Record<string, T[]> = {};
  for (const el of this) {
    const key = fn(el);
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(el);
  }
  return res;
};
```

## 嵌套数组生成器

```ts
type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (const el of arr) {
    if (Array.isArray(el)) {
      yield* inorderTraversal(el);
    } else {
      yield el;
    }
  }
}
```

## 根据 ID 合并两个数组

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function join(arr1: JSONValue[], arr2: JSONValue[]): JSONValue[] {
  const map: Map<number, JSONValue> = new Map();
  for (const arr of [arr1, arr2]) {
    for (const { id, ...rest } of arr) {
      const obj = map.get(id) ?? {};
      map.set(id, { ...obj, ...rest });
    }
  }
  return Array.from(map)
    .map(([id, obj]) => ({ id, ...obj }))
    .sort((a, b) => a.id - b.id);
}
```
