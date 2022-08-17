# 状态码

HTTP 状态码可以分为 5 类：

- 1xx：Informational，指示一些信息
  - 100 Continue
- 2xx：Successful，请求成功
  - 200 OK
    - 请求资源成功
  - 201 Created
    - 创建了新资源
  - 204 No Content
- 3xx：Redirection，重定向
  - 301 Moved Permanently
    - 资源永久转移到其他 URL
  - 302 Found
    - 临时跳转
  - 304 Not Modified
    - 缓存过期后向服务端验证，资源未修改
- 4xx：Client error，客户端的请求有问题
  - 400 Bad Request
  - 401 Unauthorized
    - 缺少身份验证信息，与 `WWW-Authenticate` 一起使用
  - 403 Forbidden
    - 拒绝访问
  - 404 Not Found
    - 资源不存在
  - 410 Gone
- 5xx：Server error，服务端处理合法请求中出错
  - 500 Internal Server Error
    - 服务端内部错误
  - 501 Not Implemented
  - 502 Bad Gateway
  - 503 Server Unavailable
    - 服务端当前不能处理请求
  - 504 Gateway Timeout
