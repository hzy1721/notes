# 请求/响应头

HTTP Header 是请求和响应报文的附加信息，每个 Header 为不区分大小写的 `name: value`。

自定义 Header 可以用 `X-` 前缀，但是这种用法在 2012 年被 IETF 弃用。

根据上下文，可以将 Header 分为：

- Request headers：描述请求资源的信息和客户端的情况。
- Response headers：响应数据的补充信息。
- Representation headers：描述传输数据的信息。
- Payload headers：描述与传输数据的表现形式无关的信息。

根据代理的处理方式，可以将 Header 分为：

- End-to-end headers：代理只能转发、不能修改、必须缓存。
- Hop-by-hop headers：只对一跳连接有意义，代理禁止转发和缓存。

## 请求头 Request headers

请求头只能用于 HTTP 请求报文，但并不是只有请求头才能出现在请求报文中，请求报文还可以包括 Representation headers 和 Payload headers。

常见请求头：

```
GET /home.html HTTP/1.1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Host: developer.mozilla.org
Referer: https://developer.mozilla.org/testpage.html
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Cache-Control: max-age=0
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
```
