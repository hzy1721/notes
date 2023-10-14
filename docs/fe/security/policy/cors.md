# CORS

CORS (Cross-Origin Resource Sharing，跨域资源共享) 是解决浏览器跨域问题最常用的方法。

根据是否需要发送预检请求 (preflight) 将 CORS 请求分为 2 类：

- 简单请求 (simple request)
- 非简单请求 (not-so-simple request)

## 简单请求

满足以下 2 个条件的请求为简单请求：

- 请求方法是 `GET/HEAD/POST` 之一
- 请求头只包含以下几种：
  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Last-Event-ID`
  - `Content-Type` (只支持以下 3 个值)
    - `application/x-www-form-urlencoded`
    - `multipart/form-data`
    - `text/plain`

对于简单请求，浏览器在请求头中添加一个 `Origin` 字段，表明当前页面的 URL：

```
Origin: http://localhost:5173
```

如果服务端没有配置 CORS 或 `Origin` 的值不在允许的 URL 列表中，则返回不包含额外响应头的 HTTP 响应。浏览器发现响应头没有 `Access-Control-Allow-Origin` 字段，说明跨域请求不被服务端支持，则抛出一个错误。

对于服务端支持的 `Origin`，响应头可能包含以下额外字段：

```
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

- `Access-Control-Allow-Origin`：服务端允许请求的 URL，取值为 `Origin` 的值或一个星号 `*`（允许所有 URL）
- `Access-Control-Allow-Credentials`：CORS 请求默认不发送 Cookie，设为 `true` 表示服务端允许发送 Cookie
  - 不能设为 `false`，如果不允许 Cookie，不包含这个字段即可
- `Access-Control-Expose-Headers`：可选字段，CORS 请求默认只能拿到响应头的 6 个基本字段，可以在此处指定允许访问的其他字段
  - `Cache-Control`
  - `Content-Language`
  - `Content-Type`
  - `Expires`
  - `Last-Modified`
  - `Pragma`

### Cookie

如果要通过 CORS 请求发送 Cookie，需要：

- 服务端设置 `Access-Control-Allow-Credentials` 为 `true`
- `Access-Control-Allow-Origin` 是具体的 URL，不能为 `*`
- 在 AJAX 中设置：

```js
var xhr = new XMLHttpRequest();
xhr.withCredentials = true; // 发送 Cookie
xhr.withCredentials = false; // 禁止 Cookie
```

## 非简单请求

不属于简单请求的为非简单请求，通常是 `PUT/DELETE` 方法或 `Content-Type` 为 `application/json`。

### 预检请求 (preflight)

在正式请求之前发送一次额外请求，使用 `OPTIONS` 方法询问服务端当前 URL 是否被允许、允许的方法和请求头。

预检请求的请求头包含以下额外字段：

```
Origin: http://localhost:5173
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
```

- `Origin`：发送方 URL
- `Access-Control-Request-Method`：非简单请求计划使用的方法
- `Access-Control-Request-Headers`：可能发送的额外字段

如果服务端允许这三条要求，则发回有额外响应头的报文：

```
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000
```

- `Access-Control-Allow-Origin`：服务端允许请求的 URL，取值为 `Origin` 的值或一个星号 `*`（允许所有 URL）
- `Access-Control-Allow-Methods`：服务端允许的所有方法，不限于 `Access-Control-Request-Method` 中的方法
- `Access-Control-Allow-Headers`：服务端允许的所有 Header，不限于 `Access-Control-Allow-Headers` 中的 Header
- `Access-Control-Allow-Credentials`：CORS 请求默认不发送 Cookie，设为 `true` 表示服务端允许发送 Cookie
- `Access-Control-Max-Age`：本次预检请求的有效期，以秒为单位

如果服务端不支持这次跨域请求，则返回不包含以上额外响应头的报文。

### 正式通信

通过预检请求后，后续的 CORS 请求与简单请求的交互过程相同，请求头会包含 `Origin`，响应头会包含 `Access-Control-Allow-Origin` 等。
