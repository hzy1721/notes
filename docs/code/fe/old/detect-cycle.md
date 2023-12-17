# 检测对象循环引用

## 递归

```js
function isObject(value) {
  return (
    (typeof value === "object" && value !== null) || typeof value === "function"
  );
}

function detectCycle(value, seen = new Set()) {
  if (!isObject(value)) {
    return false;
  }
  if (seen.has(value)) {
    return true;
  }
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      const val = value[key];
      if (detectCycle(val, seen)) {
        return true;
      }
    }
  }
  return false;
}
```

## 图

把对象转换为一颗多叉树，边是 key，节点是 value，如果树中有环，说明对象存在循环引用。

- DFS
- 拓扑排序
- 并查集
