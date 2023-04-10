# 中间人攻击 (Man-in-the-middle attack)

恶意 WebView、路由器、ISP 等充当浏览器和客户端之间的中间人，转发并修改双方的通信内容，造成通信被窃听、篡改、冒充。

![截屏2022-08-01 09.56.57.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cdf775e29a74f6b9fbf3e5119578440~tplv-k3u1fbpfcp-watermark.image?)

防御措施：

- HTTPS
  - 防窃听
  - 防篡改
  - 防冒充
- HTTP/3
- HSTS (HTTP Strict-Transport-Security)
- SRI (SubResource Integrity)
