# JSON 节点路径

```ts
interface JSONNode {
  id: string | number;
  children?: JSONNode[];
}

function getNodePath(
  node: JSONNode,
  id: string | number,
  tokens: number[] = []
): number[] | false {
  if (node.id === id) {
    return tokens;
  }
  if (!node.children) {
    return false;
  }
  for (const [index, child] of node.children.entries()) {
    tokens.push(index);
    const result = getNodePath(child, id, tokens);
    if (result) {
      return result;
    }
    tokens.pop();
  }
  return false;
}
```
