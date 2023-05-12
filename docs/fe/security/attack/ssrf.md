# SSRF

SSRF (Server-Side Request Forgery，服务端请求伪造) 指的是直接使用用户参数在服务端进行各种操作，造成服务端资源被非法访问。

```js
public async webhook(ctx) {
  // callback 可能是内网 URL
  ctx.body = await fetch(ctx.query.callback);
}
```

防御措施：

- 限制 URL 的协议、域名、IP、端口
  - 禁止访问内网
