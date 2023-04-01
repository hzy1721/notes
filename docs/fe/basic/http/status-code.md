# 状态码

HTTP 状态码可以分为 5 类：

## 1xx：Informational

指示一些信息

- 100 Continue
  - 继续请求或忽略响应
- 101 Switching Protocols
  - WebSocket 连接建立时会用到
- 103 Early Hints
  - 预加载资源

## 2xx：Successful

请求成功

- **200 OK**
  - 请求资源成功
- **201 Created**
  - 创建了新资源
- 204 No Content
  - 没有响应体可以发送，但是响应头可能有用

## 3xx：Redirection

重定向

- 300 Multiple Choices
  - 有多个响应可以选择
- **301 Moved Permanently**
  - 资源永久转移到其他 URL
- **302 Found**
  - 临时跳转
- **304 Not Modified**
  - 缓存过期后向服务端验证，资源未修改，可以继续使用本地缓存

## 4xx：Client error

客户端的请求有问题

- **400 Bad Request**
  - 客户端发送的请求有问题
- **401 Unauthorized**
  - 缺少身份验证信息，与 `WWW-Authenticate` 一起使用
- **403 Forbidden**
  - 拒绝访问
- **404 Not Found**
  - 资源不存在
- 405 Method Not Allowed
  - 资源不支持该方法
- 410 Gone
  - 资源被永久删除

## 5xx：Server error

服务端处理合法请求中出错

- **500 Internal Server Error**
  - 服务端内部错误
- **501 Not Implemented**
  - 服务端不支持请求方法，只有 `GET` 和 `HEAD` 服务端必须支持
- **502 Bad Gateway**
  - 服务端作为网关处理请求时，收到了无效的响应
- 503 Server Unavailable
  - 服务端当前不能处理请求
- 504 Gateway Timeout
  - 服务端作为网关时，请求超时
