# useState

`useState` 声明一个状态变量，传入初始值，返回状态变量与修改状态值的 setter 函数。

- 初始值可以是任意类型
- 通过解构语法为返回的变量和 setter 函数赋予合适的名称
- 多次调用返回的状态变量是独立的

```js
const [state, setState] = useState(initialState);
```

## 状态更新

每次渲染的 state 是固定不变的，调用 setState 不会修改 state 的值，而是触发一次重新渲染，在重新执行的组件函数内 `useState` 返回的 state 才会变为新值。

调用一次 setState 不会立即开始重新渲染，而是等待当前宏任务执行完后统一进行渲染，可以合并多次状态更新 (batching)，提高性能。

setState 可以传入函数，参数是上一次更新后的状态，可以实现同一个状态的多次更新。

## 嵌套对象

对于嵌套层数比较多的对象，虽然也可以用扩展语法 `...` 更新，但可能会比较麻烦。可以尝试使用 `useImmer` 代替 `useState`，使用返回的 `updateState` 函数更新对象，写法更简洁方便。

```js
import { useImmer } from 'use-immer';
```

```js
const [person, updatePerson] = useImmer({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  },
});
```

```js
updatePerson(draft => {
  draft.artwork.title = e.target.value;
});
```

## 更新数组

避免使用修改数组的方法，总是使用返回新数组的方法。或者使用 `useImmer` 代替 `useState`，可以使用所有方法。

|      | avoid (修改原数组)   | prefer (返回新数组)      |
| ---- | -------------------- | ------------------------ |
| 添加 | push, unshift        | concat, [...arr]         |
| 删除 | pop, shift, splice   | filter, slice            |
| 替换 | splice, arr[i] = ... | map                      |
| 排序 | reverse, sort        | 先复制为新数组再调用方法 |

## 状态上移

如果需要在两个或多个组件之间共享状态数据，可以把状态定义上移到最近的公共祖先组件，然后通过 `props` 或 `Context` 将状态变量传递到需要的后代组件。
