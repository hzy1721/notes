# lazy

延迟加载组件代码，直到组件第一次渲染。

```js
const SomeComponent = lazy(load);
```

- `load`：返回 Promise 或 thenable 的函数
  - React 会在 SomeComponent 第一次渲染时执行 `load`
  - 等待返回值 resolve 后渲染返回的组件
  - 如果 reject 则会抛出错误原因
  - 返回的 Promise 和 resolve 结果会被缓存，后续渲染不会执行 `load`

主流用法：懒加载组件，用 `lazy(() => import())` 代替 `import`

```js
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

配合 `<Suspense>` 在组件加载时显示替代内容：

```jsx
<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
</Suspense>
```
