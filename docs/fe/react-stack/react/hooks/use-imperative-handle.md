# useImperativeHandle

自定义 ref 绑定的内容。

```js
useImperativeHandle(ref, createHandle, dependencies?)
```

比如不想暴露整个 `input` 元素，只想暴露两个方法。

```js
import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});
```
