# CSP

内容安全策略 (Content Security Policy, CSP) 允许指定信任的资源地址，浏览器只会加载符合要求的资源、并忽略其他来源的资源，可以防御跨站脚本攻击。

兼容性：

- 除了 CSP 2 的部分特性，其他特性都是后向兼容的
- 客户端和服务端有一方不支持也不会报错，只会降级到同源策略
- caniuse：CSP 2 95%，CSP 1 96%

## 服务端配置

设置 `Content-Security-Policy` 响应头，值为若干策略指令 (policy directives)。

```
Content-Security-Policy: <policy-directive>; <policy-directive>
```

| 分类 | 指令                        | 含义                                              |
| ---- | --------------------------- | ------------------------------------------------- |
| 请求 | `default-src`               | 其他资源的兜底策略                                |
|      | `script-src`                | JS、WASM                                          |
|      | `script-src-elem`           | `<script>`                                        |
|      | `script-src-attr`           | `onevent` 事件处理函数                            |
|      | `style-src`                 | CSS                                               |
|      | `style-src-elem`            | `<style>`、`<link>`                               |
|      | `style-src-attr`            | 内联样式                                          |
|      | `img-src`                   | 图片和 favicon                                    |
|      | `font-src`                  | `@font-face` 字体                                 |
|      | `media-src`                 | `<audio>`、`<video>`、`<track>`                   |
|      | `object-src`                | `<object>`、`<embed>`                             |
|      | `frame-src`                 | `<frame>`、`<iframe>`                             |
|      | `worker-src`                | `Worker`、`SharedWorker`、`ServiceWorker`         |
|      | `child-src`                 | `frame-src` + `worker-src`                        |
|      | `manifest-src`              | manifest 文件                                     |
|      | `connect-src`               | script 接口                                       |
| 文档 | `base-uri`                  | `<base>`                                          |
|      | `sandbox`                   | 开启沙盒，类似于 `<iframe>` 的 `sandbox` 属性     |
| 导航 | `form-action`               | 表单提交                                          |
|      | `frame-ancestors`           | 包含 `<frame>`、`<iframe>`、`<object>`、`<embed>` |
| 上报 | `report-to`                 | 触发 `SecurityPolicyViolationEvent` 事件          |
| 其他 | `upgrade-insecure-requests` | 自动把 HTTP 切换为 HTTPS                          |

| 分类         | 取值                                       | 含义                            |
| ------------ | ------------------------------------------ | ------------------------------- |
| 关键词       | `'none'`                                   | 禁止所有来源                    |
|              | `'self'`                                   | 同源                            |
|              | `'strict-dynamic'`                         | `nonce`、`hash`                 |
|              | `'report-sample'`                          | 上报包括 sample                 |
| 不安全关键词 | `'unsafe-inline'`                          | 允许内联资源                    |
|              | `'unsafe-eval'`                            | 允许动态执行，比如 `eval()`     |
|              | `'unsafe-hashes'`                          | 允许特定的事件处理函数          |
| 地址         | `example.com`                              | 指定地址                        |
|              | `https://*.example.com:12/path/to/file.js` | 添加可选的协议、`*`、端口、路径 |
|              | `example.com/api/`                         | 路径以 `/` 结尾会匹配所有子路径 |
|              | `https:`                                   | 只指定协议，以冒号 `:` 结尾     |
|              | `*`                                        | 所有地址                        |
| 其他         | `'nonce-*'`                                | 匹配 nonce 相同的脚本           |
|              | `'sha*-*'`                                 | sha256、sha384、sha512          |

指令的多个取值之间用空格分隔，不同指令之间用分号 `;` 分隔。

同时指定多个 `Content-Security-Policy` 会取最严格的规则。

### script-src

指定 `default-src` 或 `script-src` 后，浏览器会：

- 忽略嵌入 `<script>` 脚本
- 忽略 `eval()` 调用
- 忽略 `onevent` 属性指定的事件处理函数

### style-src

指定 `default-src` 或 `style-src` 后，浏览器会：

- 忽略嵌入 `<style>` 样式
- 忽略 `style` 属性指定的内联样式

## 仅上报模式

设置 `Content-Security-Policy-Report-Only` 可以让 CSP 不生效、只上报违反 CSP 的情况到指定 URL，用于正式部署 CSP 前的测试。

上报数据为 `Content-Type: application/csp-report` 的 JSON：

| 字段                  | 含义 |
| --------------------- | ---- |
| `blocked-uri`         |      |
| `disposition`         |      |
| `document-uri`        |      |
| `effective-directive` |      |
| `original-policy`     |      |
| `script-sample`       |      |
| `status-code`         |      |

同时指定 `Content-Security-Policy` 和 `Content-Security-Policy-Report-Only` 会同时生效。

## 客户端配置

使用 `<meta>` 标签，不支持 `report-to`。

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';"
/>
```
