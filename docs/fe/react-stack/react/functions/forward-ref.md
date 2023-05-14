# forwardRef

把 ref 透传给子组件，而不是直接绑定到父组件。

- ref 作为组件的第二个参数传入

```js
const SomeComponent = forwardRef(render);
// render: (props, ref) => { ... }
```
