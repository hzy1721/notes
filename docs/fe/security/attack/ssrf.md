# SSRF

服务端请求伪造 (Server-Side Request Forgery，SSRF) 是指对用户提交内容不过滤，直接用于请求服务端资源，造成服务端资源被非法访问。类似于跨站脚本 (XSS)。

```js
public async webhook(ctx) {
  // callback 可能是内网 URL
  ctx.body = await fetch(ctx.query.callback);
}
```

## 防御措施

- 限制请求目的 URL 的协议、域名、IP、端口
  - 禁止访问内网
