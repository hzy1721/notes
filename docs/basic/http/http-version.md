# HTTP 版本

## HTTP/0.9 (1991)

> 单行协议

请求报文只有一行，包括 `GET` 方法和请求路径 (path)。

```http
GET /mypage.html
```

响应报文只有 HTML 文本。

```html
<html>
  A very simple HTML page
</html>
```

## HTTP/1.0 (1996)

> 扩展功能

- 请求方法新增 `POST`、`HEAD`
- 请求报文首行末尾新增 HTTP 版本
- 新增请求头和响应头，用于描述元数据
- 响应报文首行新增状态码 (status code) 和状态文本 (status text)
- 响应体支持更多数据类型，称为 MIME 类型
- 支持 Authorization
- 支持启发式缓存
  - 响应头没有 Cache-Control 或 Expires，但是有 Last-Modified
  - 默认的缓存策略：`(当前时间 - Last-Modified) * 0.1`

```http
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

- 缺点：
  - 一个 TCP 连接只发送一个请求，性能较差
  - 不同浏览器和服务端的实现缺乏标准，互操作性较差 (先有实现、后有标准)
- 部分浏览器请求时使用**非标准**的 `Connection: keep-alive`，要求服务端不要关闭 TCP 连接，如果服务端也回应 `Connection: keep-alive`，就建立了一个可复用的 TCP 连接

## HTTP/1.1 (1997/1999/2014)

> 标准化 + 扩展功能

- 第一个标准化的 HTTP 版本，先有标准、后有实现
- 请求方法新增 `PUT`、`PATCH`、`OPTIONS`、`DELETE`
- 请求头新增 `Host` 表示服务端域名，一个 IP 可以部署多个域名
- 连接复用
  - TCP 连接默认不关闭，可以被多个请求复用
  - 客户端和服务端发现对方有一段时间没有活动，可以主动关闭连接
  - 客户端发送最后一个请求时最好带上 `Connection: close`，告知服务端关闭连接
  - 同一个域名，大多数浏览器允许同时建立 **6** 个 TCP 连接
- 流水线 (pipelining)
  - 一个 TCP 连接可以同时发送多个请求和多个回应
  - 为了区分相邻的响应报文，使用 `Content-Length` 指定数据长度，以字节为单位
- 响应分块
  - 对于耗时操作，最好实时发送生成的数据，而不是全部生成再统一发送
  - 响应头 `Transfer-Encoding: chunked` 表示分块传输，每个数据块前有一个十六进制数，表示当前数据块的长度，最后是一个长度为 0 的块
- 缓存机制完善：`Cache-Control`
- 内容协商：支持语言、编码、类型的协商

| 内容协商  | 请求头            | 响应头             |
| --------- | ----------------- | ------------------ |
| MIME 类型 | `Accept`          | `Content-Type`     |
| 编码格式  | `Accept-Encoding` | `Content-Encoding` |
| 语言      | `Accept-Lanugage` | `Content-Language` |

```http
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)
```

- 缺点：服务器按顺序处理请求和发回响应，如果前面的请求耗时过长，就会造成后面的请求排队，称为**队头阻塞** (head-of-line blocking)

## HTTP/2 (2015)

> 优化性能

基于 Google 的 SPDY 协议 (解决 HTTP/1.1 效率不高的问题)。

1. **二进制协议 (binary protocol)**

- 报文采用二进制编码，而不是文本格式，便于性能优化
- 每个报文对应一个数据流 (stream)，有一个唯一 ID，附加在每个帧中
- 数据流分为多个帧 (frame) 发送，比如头信息帧、数据帧
  - 客户端发出的数据流 ID 为奇数，服务端发出的数据流 ID 为偶数
  - 发送 `RST_STREAM` 帧来取消数据流
  - 客户端可以指定数据流的优先级，优先级高服务端优先回应
- 支持自定义帧，用于高级应用

2. **头信息压缩 (header compression)**

- HTTP 的无状态导致每次请求都需要带上大部分重复的 header，造成浪费
- header 使用 gzip 或 compress 压缩后再发送
- 客户端和服务端维护一张头信息表，所有字段存入该表并生成索引号，后续只发送索引号

3. **多路复用 (multiplexed)**

- 一个 TCP 连接上，客户端和服务端可以同时发送多个请求和响应，响应顺序不必对应请求顺序，避免了队头阻塞

4. **服务端推送 (server push)**

- 允许服务端主动向客户端发送资源，填充客户端缓存，比如 HTML 关联的静态资源

## HTTP/3 (2022)

> TCP -> QUIC

- 传输层用 QUIC 代替 TCP，实现更低的时延
- TCP 的可靠传输和超时重传可能阻塞所有 HTTP/2 数据流
- QUIC 底层采用 UDP，对每个数据流单独实现超时重传机制，不会阻塞其他数据流
