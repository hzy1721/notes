# useDeferredValue

- 对于耗时的更新操作，在新 UI 构建完成之前，需要显示旧 UI 作为替代
- `useDeferredValue` 可以延迟指定值触发的 UI 更新，第一次显示旧 UI，同时在后台渲染新 UI，直到新 UI 渲染完成再触发一次 re-render 将新 UI 更新上去
- 后台渲染是可中断的，如果渲染过程中状态又发生了改变，则会取消当前渲染，从头开始新的渲染

```js
const deferredValue = useDeferredValue(value);
```

- `value`：想要延迟更新的状态值
