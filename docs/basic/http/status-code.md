# 状态码

## 1xx：提示信息

Informational

| Code | Text                | 含义                                       |
| ---- | ------------------- | ------------------------------------------ |
| 100  | Continue            | 继续请求或忽略响应                         |
| 101  | Switching Protocols | WebSocket 连接建立时切换协议               |
| 102  | Processing          | 接收到请求，正在处理，目前没有响应可以返回 |
| 103  | Early Hints         | 预加载资源                                 |

## 2xx：请求成功

Successful

| Code | Text                          | 含义                                 |
| ---- | ----------------------------- | ------------------------------------ |
| 200  | OK                            | 请求资源成功                         |
| 201  | Created                       | 创建了新资源                         |
| 202  | Accepted                      | 接收到请求，但没有开始处理           |
| 203  | Non-Authoritative Information | 返回的响应是原始数据的镜像           |
| 204  | No Content                    | 没有响应体，但是响应头可能有用       |
| 205  | Reset Content                 | 重置 HTML 文档                       |
| 206  | Partial Content               | 请求头包含 `Range`，返回部分内容     |
| 207  | Multi-Status                  | 多个资源的多个状态信息               |
| 208  | Already-Reported              | 在 `<dav:propstat>` 中使用           |
| 226  | IM Used                       | 返回响应是在资源上进行若干操作的结果 |

## 3xx：重定向

Redirection

| Code | Text               | 含义                                            |
| ---- | ------------------ | ----------------------------------------------- |
| 300  | Multiple Choices   | 有多个响应可以选择                              |
| 301  | Moved Permanently  | 资源永久转移到其他 URL                          |
| 302  | Found              | 临时跳转                                        |
| 303  | See Other          | 用 GET 请求另一个 URL                           |
| 304  | Not Modified       | 缓存过期后重新验证，资源未修改                  |
| 305  | Use Proxy          | ⚠️ 已废弃                                       |
| 306  | unused             | ⚠️ 已废弃                                       |
| 307  | Temporary Redirect | 与 302 相同，区别是必须用同一方法请求重定向地址 |
| 308  | Permanent Redirect | 与 301 相同，区别是必须用同一方法请求重定向地址 |

## 4xx：客户端错误

Client error

| Code | Text                            | 含义                                            |
| ---- | ------------------------------- | ----------------------------------------------- |
| 400  | Bad Request                     | 客户端发送的请求有问题                          |
| 401  | Unauthorized                    | 缺少身份验证信息                                |
| 402  | Payment Required                | 保留给未来使用，目前无相关标准                  |
| 403  | Forbidden                       | 拒绝访问                                        |
| 404  | Not Found                       | 资源不存在                                      |
| 405  | Method Not Allowed              | 资源不支持该方法                                |
| 406  | Not Acceptable                  | 内容协商后未找到满足要求的资源                  |
| 407  | Proxy Authentication Required   | 类似 401，但是由代理要求鉴权                    |
| 408  | Request Timeout                 | 服务端主动发送，表示即将关闭该无用连接          |
| 409  | Conflict                        | 请求与服务器当前状态冲突                        |
| 410  | Gone                            | 资源被永久删除                                  |
| 411  | Lenght Required                 | 请求头缺少服务端要求的 `Content-Length`         |
| 412  | Precondition Failed             | 服务端不满足请求头包含的先决条件                |
| 413  | Payload Too Large               | 请求体大小超出了服务端限制                      |
| 414  | URI Too Long                    | 请求的 URI 长度超出服务端限制                   |
| 415  | Unsupported Media Type          | 请求资源的媒体类型不被服务端支持                |
| 416  | Range Not Satisfiable           | 请求头 `Range` 指定的范围无效                   |
| 417  | Expectation Failed              | 请求头 `Expect` 无法满足                        |
| 418  | I'm a teapot                    | 服务端拒绝使用茶壶来煮咖啡 ☕️                  |
| 421  | Misdirected Request             | 服务端无法产生任何请求，可能是定向错误          |
| 422  | Unprocessable Content           | 请求有语义错误，格式没问题                      |
| 423  | Locked                          | 资源被锁定                                      |
| 424  | Failed Dependency               | 由于上一个请求失败，导致这次请求也失败          |
| 425  | Too Early                       | 服务端拒绝处理可能被重放的请求                  |
| 426  | Upgrade Required                | 服务端要求升级协议为 `Upgrade` 响应头指定的协议 |
| 428  | Precondition Required           | 要求请求满足一定条件，通常为了避免 lost update  |
| 429  | Too Many Requests               | 短时间内发送了太多请求                          |
| 431  | Request Header Fields Too Large | 请求头太大了                                    |
| 451  | Unavailable For Legal Reasons   | 请求资源违反法律                                |

## 5xx：服务端错误

Server error

| Code | Text                            | 含义                                          |
| ---- | ------------------------------- | --------------------------------------------- |
| 500  | Internal Server Error           | 服务端内部错误                                |
| 501  | Not Implemented                 | 不支持请求方法，只有 `GET` 和 `HEAD` 必须支持 |
| 502  | Bad Gateway                     | 服务端作为网关处理请求时，收到了无效的响应    |
| 503  | Server Unavailable              | 服务端当前不能处理请求                        |
| 504  | Gateway Timeout                 | 服务端作为网关时，请求超时                    |
| 505  | HTTP Version Not Supported      | HTTP 版本不支持                               |
| 506  | Variant Also Negotiates         | 内部配置错误，资源应该用于透明内容协商        |
| 507  | Unsufficient Storage            | 存储空间不足                                  |
| 508  | Loop Detected                   | 处理请求时检测到死循环                        |
| 510  | Not Extended                    | 请求需要更多扩展才能被服务端处理              |
| 511  | Network Authentication Required | 客户端需要进行网络认证来访问网络              |
