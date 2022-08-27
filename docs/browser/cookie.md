# Cookie

HTTP Cookie 是由服务器发送给浏览器的少量数据，浏览器会保存这些数据，在后续发送给相同服务器的请求报文中带上这些数据，从而使服务器能够辨别哪些请求来自同一个浏览器。

本质上是为了给无状态的 HTTP 提供记录状态的功能。

用途：

- 会话管理 (Session Management)
  - 登录、购物车、游戏分数等服务器需要存储的状态信息
- 个性化 (Personalization)
  - 用户偏好设置、主题等其他设置信息
- 跟踪 (Tracking)
  - 记录和分析用户的行为

## Set-Cookie

服务端使用 `Set-Cookie` 响应头设置客户端的 Cookie：

```text
Set-Cookie: <cookie-name>=<cookie-value>
```

可以写在一行、用分号 `;` 分隔，也可以写在多个 `Set-Cookie` 里。

还有一些对 Cookie 的设置也写在 `Set-Cookie` 里，用分号 `;` 分隔：

- `Domain`：Cookie 应该被发送到哪些域名
  - 默认：设置 Cookie 的域名，**不包括**子域名
  - 设置为服务端域名：包含子域名
    - 比如设置 `Domain=mozilla.org`，也会向 `developer.mozilla.org` 发送 Cookie
- `Path`：Cookie 应该被发送到哪些路径
  - 默认：请求的路径
  - 设置为某个路径：包括子路径
    - 比如设置 `Path=/docs`，也会匹配 `/docs/`、`/docs/web`、`/docs/web/http` 等
- `Expires`：过期时间，GMT 格式，到期 Cookie 被删除
  - 默认是 Session Cookie
- `Max-Age`：有效时间，以秒为单位，到期 Cookie 被删除
- `Secure`：只使用 HTTPS 发送 Cookie，可以防止中间人攻击
- `HttpOnly`：JS 无法通过 `document.cookie` 访问 Cookie，可以防止 XSS 攻击
- `SameSite`：是否通过跨站请求发送 Cookie，可以防止 CSRF 攻击
  - `Strict`：只在 Cookie 设置的站点发送
  - `Lax` (默认)：同 Strict，但是允许从外部站点跳转到源站点时发送 Cookie
    - 安全 HTTP 方法：`GET`、`HEAD`、`OPTIONS`
    - 执行顶级导航 (更改浏览器地址栏中的 URL)，而不是 iframe 或 AJAX 请求
  - `None`：允许跨站请求发送 Cookie，必须设置 `Secure`，否则失效

## Cookie

客户端请求与 Cookie 相同的服务端时，会在 `Cookie` 请求头带上这些 Cookie：

```text
Cookie: <cookie-name>=<cookie-value>
```

可以是一行，也可以是多行。

## document.cookie

```js
document.cookie = "yummy_cookie=choco"; // 添加 Cookie
document.cookie = "tasty_cookie=strawberry"; // 添加 Cookie
console.log(document.cookie); // 访问所有 Cookie
// yummy_cookie=choco; tasty_cookie=strawberry
```

限制：

- 每个键值对的大小不能超过 4KB
- 每个域名的 Cookie 数量上限大约为 20 个

## 第三方 Cookie

由请求的页面以外的其他域设置的 Cookie，称为第三方 Cookie。通常用于跟踪和广告。

浏览器允许禁止第三方 Cookie。
