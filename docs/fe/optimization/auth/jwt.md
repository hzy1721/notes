# JWT

JWT (JSON Web Tokens) 是目前最流行的跨域认证解决方案。

JWT 有三个部分：

- Header
- Payload
- Signature

写成一行，用点 `.` 分隔：`Header.Payload.Signature`

![](assets/jwt.jpeg)

## Header

Header 是一个 JSON 对象，描述 JWT 的元数据。

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- `alg`：签名算法 (algorithm)，默认是 HMAC SHA256 (`HS256`)
- `typ`：token 类型 (type)，统一写为 `JWT`

最后使用 Base64 URL 算法转换为字符串。

## Payload

Payload 也是一个 JSON 对象，用来存放实际需要传送的数据。

JWT 规定了 7 个官方字段：

- `iss` (issuer)：签发人
- `exp` (expiration time)：过期时间
- `sub` (subject)：主题
- `aud` (audience)：受众
- `nbf` (Not Before)：生效时间
- `iat` (Issued At)：签发时间
- `jti` (JWT ID)：编号

也可以定义私有字段。

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

JWT 默认不加密，不能放私密信息。

最后使用 Base64 URL 算法转换为字符串。

## Signature

Signature 是对 Header 和 Payload 的签名，防止数据被篡改。

首先指定一个**只有服务端知道**的密钥 (`secret`)，然后使用 Header 指定的签名算法 `alg` 生成 Signature。

```js
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);
```

## Base64 URL 算法

Base64 URL 算法基于 Base64 算法做了一些修改：

- `/` 替换为 `_`
- `+` 替换为 `-`
- `=` 省略

因为 token 有可能作为 query param。

## 使用方式

- 客户端收到的 JWT 可以放在 Cookie 里自动发送，但不能跨域
- 更好的办法是放在请求头的 `Authorization` 里
- 也可以放在 POST 请求的请求体里。

## 特点

- 默认不加密，服务端也可以自己做加密
- 不仅可以用于认证，也可以用于交换信息
- 服务端无状态，无法在到期时间前收回 token 或修改 token 权限
- 本身包含了认证信息，泄漏后问题比较严重，因此有效期应该设置得比较短
- JWT 应该使用 HTTPS 传输，而不是 HTTP
