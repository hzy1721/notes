# useReducer

用 `useReducer` 代替 `useState`，合并大量复杂的状态更新。

```js
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

## reducer

- 组件中的状态更新数量多且复杂 (对象、数组)，造成较多的重复代码
- 将每种更新封装为一个 `action`，所有更新合并到一个函数，称为 `reducer`
- 每次更新状态时提供 `action` 类型和相关参数即可，减少了模板代码
- `reducer` 不依赖外部数据，可以提取为单独的函数放在组件外，减少组件行数

### dispatch

`setState` 替换为抽象层级更高的 `dispatch`，传入描述更新内容的 `action` 对象，格式由开发者自己决定，与 `reducer` 函数中的处理流程相对应。

```js
dispatch({
  type: 'deleted',
  id: taskId,
});
```

### reducer 函数

包含所有具体的更新操作，接收两个参数：

- `state`：上一次状态值
- `action`：`dispatch` 传入的对象

返回新的状态值，React 负责状态的设置。

```js
function myReducer(state, action) {
  switch (action.type) {
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
```

## useImmerReducer

用 `useImmerReducer` 代替 `useReducer` 可以使 reducer 函数支持直接修改状态。

```js
function tasksReducer(draft, action) {
  switch (action.type) {
    case 'added': {
      // 可以修改原数组
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
```

```js
import { useImmerReducer } from 'use-immer';
```

```js
const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);
```
