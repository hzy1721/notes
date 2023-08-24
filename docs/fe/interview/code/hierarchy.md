# 层级关系转换

```js
function convert(list) {
  const res = [];
  const map = new Map(list.map(node => [node.key, node]));
  for (const node of list) {
    const { key, parentKey } = node;
    // 非法情况：循环引用，key 是 0
    if (key === parentKey || key === 0) {
      continue;
    }
    if (parentKey === 0) {
      res.push(node);
    } else if (map.has(parentKey)) {
      const parentNode = map.get(parentKey);
      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push(node);
    }
  }
  return res;
}
```

```js
const list = [
  { key: 1, name: '部门A', parentKey: 0 },
  { key: 2, name: '部门B', parentKey: 0 },
  { key: 3, name: '部门C', parentKey: 1 },
  { key: 4, name: '部门D', parentKey: 1 },
  { key: 5, name: '部门E', parentKey: 2 },
  { key: 6, name: '部门F', parentKey: 3 },
  { key: 16, name: '部门L', parentKey: 3 },
  { key: 7, name: '部门G', parentKey: 2 },
  { key: 8, name: '部门H', parentKey: 4 },
];

const res = convert(list);
console.log(JSON.stringify(res, null, 2));
```

```json
[
  {
    "key": 1,
    "name": "部门A",
    "parentKey": 0,
    "children": [
      {
        "key": 3,
        "name": "部门C",
        "parentKey": 1,
        "children": [
          {
            "key": 6,
            "name": "部门F",
            "parentKey": 3
          },
          {
            "key": 16,
            "name": "部门L",
            "parentKey": 3
          }
        ]
      },
      {
        "key": 4,
        "name": "部门D",
        "parentKey": 1,
        "children": [
          {
            "key": 8,
            "name": "部门H",
            "parentKey": 4
          }
        ]
      }
    ]
  },
  {
    "key": 2,
    "name": "部门B",
    "parentKey": 0,
    "children": [
      {
        "key": 5,
        "name": "部门E",
        "parentKey": 2
      },
      {
        "key": 7,
        "name": "部门G",
        "parentKey": 2
      }
    ]
  }
]
```
