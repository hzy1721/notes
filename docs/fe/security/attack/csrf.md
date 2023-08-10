# CSRF

跨站请求伪造 (Cross-Site Request Forgery，CSRF) 是指诱导用户访问恶意页面，从而自动发送带有 Cookie 的请求到敏感地址（比如银行卡支付地址），完成用户授权操作。

CSRF 有以下类型：

- GET 请求
  - `<a>` 标签
  - `<img>` 标签
- POST 请求
  - `<form>` 表单
- iframe 攻击
  - iframe 隐藏，上面覆盖 pointer-events 为 none 的 button
  - iframe 点击后发起伪造的同源请求

## 防御措施

- 减少在 Cookie 中存储重要信息，并使用 `SameSite` Cookie
  - `Set-Cookie: SameSite=Strict`
- 限制请求来源
  - 校验 `Origin` 和 `Referer`
  - 先访问过页面，才接受请求
  - 使用与用户绑定的 token，并设置过期时间
- `X-Frame-Options: DENY/SAMEORIGIN`
- 不要在一个接口内既返回数据又修改数据，比如不要使用 `GET` 请求修改数据
- Node 中间件
