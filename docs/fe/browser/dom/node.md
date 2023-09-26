# Node

Node 是代表 DOM 节点的通用接口，没有直接的 Node 对象，而是通过实现 Node 接口的子类来操作 DOM 节点，比如 `Document`、`Element` 等。

## 属性

- `childNodes`：子节点，类型为 NodeList
- `nodeType`：节点类型，类型为 unsigned short

| Name                        | Value |
| --------------------------- | ----- |
| ELEMENT_NODE                | 1     |
| ATTRIBUTE_NODE              | 2     |
| TEXT_NODE                   | 3     |
| CDATA_SECTION_NODE          | 4     |
| PROCESSING_INSTRUCTION_NODE | 7     |
| COMMENT_NODE                | 8     |
| DOCUMENT_NODE               | 9     |
| DOCUMENT_TYPE_NODE          | 10    |
| DOCUMENT_FRAGMENT_NODE      | 11    |
