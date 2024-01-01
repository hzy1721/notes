# Script

JS 脚本。

```tsx
<Script
  src="https://example.com/script.js"
  strategy="lazyOnload"
  onLoad={onLoadFunc}
  onReady={onReadyFunc}
  onError={onErrorFunc}
/>
```

## strategy

- `beforeInteractive`：注水前
- `afterInteractive`（默认）：注水后
- `lazyOnload`：浏览器 idle 时
- `worker`：在 web worker 中
