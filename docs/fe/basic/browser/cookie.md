# Cookie

HTTP Cookie 是服务器发送给浏览器的少量数据，浏览器保存这些数据，后续发送给相同服务器的请求中带上这些数据，从而使服务器知道哪些请求来自同一个浏览器。本质是为了给无状态的 HTTP 提供记录状态的功能。

![](./assets/cookie.png)

## Set-Cookie 响应头

服务端发送包含 `Set-Cookie` 响应头的报文来设置浏览器的 Cookie。

```
Set-Cookie: key1=value1;key2=value2

Set-Cookie: key1=value1
Set-Cookie: key2=value2
```

Cookie 设置也写在 `Set-Cookie` 里，用分号 `;` 分隔：

### 发送目标

- `Domain`：Cookie 应该发送到哪些域名
  - 默认：请求域名，**不包括**子域名
  - 显式设置为服务端域名，包含子域名
    - 比如设置 `Domain=mozilla.org`，也会向 `developer.mozilla.org` 发送 Cookie
- `Path`：Cookie 应该发送到哪些路径
  - 默认：请求路径
  - 某个路径：包括子路径
    - 比如设置 `Path=/docs`，也会匹配 `/docs/`、`/docs/web`、`/docs/web/http` 等

### 过期时间

- `Expires`：过期时间，GMT 格式，到期 Cookie 被删除
  - 默认是 Session Cookie
- `Max-Age`：有效时间，以秒为单位，到期 Cookie 被删除

### 安全相关

- `Secure`：只使用 HTTPS 发送 Cookie，可以防止中间人攻击
- `HttpOnly`：JS 无法通过 `document.cookie` 访问 Cookie，可以防止 XSS 攻击
- `SameSite`：是否通过跨站请求发送 Cookie，可以防止 CSRF 攻击
  - `Strict`：只在 Cookie 设置的站点发送
  - `Lax` (默认)：同 Strict，但是允许从外部站点跳转到源站点时发送 Cookie
    - 安全 HTTP 方法：`GET`、`HEAD`、`OPTIONS`
    - 执行顶级导航 (更改浏览器地址栏中的 URL)，而不是 iframe 或 AJAX 请求
  - `None`：允许跨站请求发送 Cookie，必须设置 `Secure`，否则失效

## Cookie 请求头

浏览器请求与 Cookie 的 `Domain/Path` 匹配的 URL 时，会在 `Cookie` 请求头带上 Cookie：

```
Cookie: key1=value1;key2=value2

Cookie: key1=value1
Cookie: key2=value2
```

## document.cookie

JS 通过 `document.cookie` 读写非 `HttpOnly` 的 Cookie。

```js
// 添加 Cookie
document.cookie = "yummy_cookie=choco";
// 多次赋值会添加 Cookie，不会覆盖
document.cookie = "tasty_cookie=strawberry"; 
// 访问所有 Cookie
console.log(document.cookie);
// yummy_cookie=choco; tasty_cookie=strawberry
```

## 限制

- 每个键值对不能超过 4KB
- 每个域名的 Cookie 数量上限大约为 20 个

## 用途

- 会话管理 (Session Management)
  - 登录、购物车、游戏分数等服务器需要存储的状态信息
- 个性化 (Personalization)
  - 用户偏好设置、主题等其他设置信息
- 跟踪 (Tracking)
  - 记录和分析用户的行为

## 第三方 Cookie

由请求的页面以外的其他域设置的 Cookie，称为第三方 Cookie。通常用于跟踪和广告。

浏览器允许禁止第三方 Cookie。
