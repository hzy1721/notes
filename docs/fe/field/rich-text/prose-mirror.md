# ProseMirror

开源富文本编辑器，有 4 个核心模块和若干扩展模块。

| 核心模块              | 用途                                                  |
| --------------------- | ----------------------------------------------------- |
| prosemirror-model     | 文档模型                                              |
| prosemirror-state     | 编辑器状态，比如 selection (选中)、transaction (事务) |
| prosemirror-view      | 可编辑的 DOM 元素与相关事件监听                       |
| prosemirror-transform | 支持撤销/重做的文档状态修改，state 中事务的核心       |

schema -> state -> view

```ts
import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

const state = EditorState.create({ schema });
const view = new EditorView(document.body, { state });
```

transaction -> newState -> newView

```ts
const new = new EditorView(document.body, {
  state,
  dispatchTransaction(transaction) {
    const newState = view.state.apply(transaction);
    view.updateState(newState);
  }
});
```

plugin (插件)：schema + plugin -> state

```ts
import {undo, redo, history} from 'prosemirror-history';
import {keymap} from 'prosemirror-keymap';

const state = EditorState.create({
  schema,
  plugins: [
    history(),
    keymap('Mod-z': undo, 'Mod-y': redo)
  ]
});
```

command (命令)：

```ts
import { baseKeymap } from 'prosemirror-commands';

const state = EditorState.create({
  schema,
  plugins: [keymap(baseKeymap)],
});
```

document (文档)：state.doc

```ts
import { DOMParser } from 'prosemirror-model';

const content = document.getElementById('content');
const state = EditorState.create({
  doc: DOMParser.fromSchema(schema).parse(content),
});
```
