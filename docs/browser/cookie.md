# Cookie

HTTP Cookie 是由服务器发送给浏览器的少量数据，浏览器会保存这些数据，在后续发送给相同服务器的请求报文中带上这些数据，从而使服务器能够辨别哪些请求来自同一个浏览器。本质上是为了给无状态的 HTTP 提供记录状态的功能。

Cookie 主要用于 3 个方面：
- 会话管理 (Session Management)
  - 登录、购物车、游戏分数等服务器需要存储的状态信息
- 个性化 (Personalization)
  - 用户偏好设置、主题等其他设置信息
- 跟踪 (Tracking)
  - 记录和分析用户的行为

Cookie 曾经是在浏览器存储数据的唯一手段，所以经常被用于本地的通用存储 (类似于现在的 localStorage)。但是 Cookie 的特点是会随着每次请求而发送，带来了额外的网络开销，对于移动端尤其不能接受。而且目前已经有了专门的存储 API (Web Storage API 和 IndexedDB)，不应该继续使用 Cookie 作为本地存储的手段。

`Set-Cookie` reponse header:

```text
Set-Cookie: <name>=<value>; Expires=<date>; Max-Age=<seconds>
```

- `Secure`：只使用 HTTPS 发送 Cookie，从不使用 HTTP；可以防止中间人攻击
- `HttpOnly`：JavaScript 无法通过 Document.cookie 访问该 Cookie；可以防止 XSS 攻击
- `Domain`：设置后可以访问子域名，不设置只能访问发送 Cookie 的服务器域名 (不包含子域名)，因此设置之后更宽松
- `Path`：只有发送到这些路径下的请求才带上 Cookie，也匹配子目录
- `SameSite`：是否可以通过跨站请求发送 Cookie
  - `Strict`：只能发送到设置 Cookie 的服务器
  - `Lax`：同 Strict，也适用于导航到源服务器，默认行为
  - `None`：允许跨站点请求，但是必须设置 `Secure`

`Cookie` request header:

```text
Cookie: <name1>=<value1>; <name2>=<value2>
```
