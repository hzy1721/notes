# 状态码

HTTP 状态码可以分为 5 类：

- 1xx：Informational，指示一些信息
    - 100 Continue
- 2xx：Successful，请求成功
    - 200 OK
    - 201 Created
    - 204 No Content
- 3xx：Redirection，重定向
    - 301 Moved Permanently
    - 302 Found
    - 304 Not Modified
- 4xx：Client error，客户端的请求有问题
    - 400 Bad Request
    - 401 Unauthorized
    - 404 Not Found
    - 410 Gone
- 5xx：Server error，服务端处理合法请求中出错
    - 500 Internal Server Error
    - 501 Not Implemented
    - 502 Bad Gateway
    - 504 Gateway Timeout