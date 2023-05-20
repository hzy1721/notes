# useId

生成唯一的 ID，通常用于无障碍属性。

```js
const id = useId();
```

返回值：

- `id`：唯一 ID

警告：

- `useId` 不能用于生成 `key` (应该从数据中生成)

用途：

- 无障碍属性的 ID，比如 `aria-describedby`

```js
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}
```

同一页面有多个 React 应用时，需要在 `createRoot` 中传入 `identifierPrefix` 作为生成 ID 的前缀，避免 ID 冲突。

```jsx
const root1 = createRoot(document.getElementById('root1'), {
  identifierPrefix: 'my-first-app-',
});
root1.render(<App />);

const root2 = createRoot(document.getElementById('root2'), {
  identifierPrefix: 'my-second-app-',
});
root2.render(<App />);
```
