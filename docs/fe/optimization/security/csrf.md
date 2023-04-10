# CSRF

CSRF (Cross-Site Request Forgery，跨站请求伪造) 是指诱导用户发送带有 Cookie 的伪造请求，完成用户授权操作。

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

- 减少在 Cookie 中存储重要信息，使用 `SameSite` Cookie
- 限制请求来源
  - 校验 `Origin` 和 `Referer`
  - 先访问过页面，才接受请求
  - 使用与用户绑定的 token，并设置过期时间
- 不要在一个接口内既返回数据又修改数据
  - 不要使用 `GET` 请求修改数据
- `X-Frame-Options: DENY/SAMEORIGIN`
- Node 中间件
