# 层级关系转换

```js
const list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 16, name: '部门L', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
];

function convert(list, parent = 0) {
  const res = [];
  for (const item of list) {
    if (item.parentId === parent) {
      res.push({
        id: item.id,
        name: item.name,
        children: convert(list, item.id),
      });
    }
  }
  return res.length > 0 ? res : undefined;
}

console.log(JSON.stringify(convert(list)));
```

```json
[
  {
    "id": 1,
    "name": "部门A",
    "children": [
      {
        "id": 3,
        "name": "部门C",
        "children": [
          { "id": 6, "name": "部门F" },
          { "id": 16, "name": "部门L" }
        ]
      },
      { 
        "id": 4, 
        "name": "部门D", 
        "children": [
          { "id": 8, "name": "部门H" }
        ] 
      }
    ]
  },
  {
    "id": 2,
    "name": "部门B",
    "children": [
      { "id": 5, "name": "部门E" },
      { "id": 7, "name": "部门G" }
    ]
  }
]
```
