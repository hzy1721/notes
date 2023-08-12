# HTTP 版本

## HTTP/0.9

1991 年发布。

- 只支持 `GET` 方法
- 只支持 `HTML` 类型
- 请求完成后关闭 TCP 连接

## HTTP/1.0

1996 年发布。

- 新增 `POST`、`HEAD` 方法
- 新增 HTTP Header，用于描述元数据，必须是 ASCII 编码
- 新增状态码 (Status Code)
- 支持图片、视频、二进制文件等多种类型，使用 `Content-Type` 说明数据格式
  - 总称为 **MIME type**，包含一级类型和二级类型
  - `text/plain`
  - `text/html`
  - `text/css`
  - `image/jpeg`
  - `image/png`
  - `image/svg+xml`
  - `audio/mp4`
  - `video/mp4`
  - `application/javascript`
  - `application/pdf`
  - `application/zip`
  - `application/atom+xml`
  - 也可以自定义类型
  - 末尾可以使用分号 `;` 添加参数，比如 `text/html; charset=utf-8`
- 客户端请求时使用 `Accept` 声明接受的 MIME 类型
- 支持多字符集
- 支持 multi-part type
- 支持 Authorization
- 支持缓存 (启发式缓存)
- 支持数据压缩，使用 `Content-Encoding` 说明压缩方法
- 客户端请求时使用 `Accept-Encoding` 声明支持的压缩方法
- 缺点：一个 TCP 连接只发送一个请求，性能比较差
- 部分浏览器请求时使用**非标准**的 `Connection: keep-alive`，要求服务端不要关闭 TCP 连接，如果服务端也回应 `Connection: keep-alive`，就建立了一个可复用的 TCP 连接

## HTTP/1.1

1997 年发布。

- 新增 `PUT`、`PATCH`、`OPTIONS`、`DELETE` 方法
- 请求头新增 `Host`，指定服务端域名，一个 IP 可以部署多个域名
- 引入**持久连接**：TCP 连接默认不关闭，可以被多个请求复用
  - 客户端和服务端发现对方有一段时间没有活动，可以主动关闭连接
  - 客户端最好发送最后一个请求时带上 `Connection: close`，告知服务端关闭连接
  - 同一个域名，大多数浏览器允许同时建立 6 个持久连接
- 引入**管道机制 (pipelining)**：允许在一个 TCP 连接里同时发送多个请求
  - 一个 TCP 连接可以发送多个回应，为了区分不同的响应报文，使用 `Content-Length` 指定数据长度，以字节为单位
  - 对于耗时操作，最好实时发送生成的数据，而不是全部生成再统一发送。使用 `Transfer-Encoding: chunked` 指定分块传输编码，每个数据块前有一个十六进制数，表示当前数据块的长度，最后是一个长度为 0 的块
- 缓存
- 内容协商
- 缺点：服务器按顺序处理请求，如果处理前面的请求耗时过长，就会造成后面的请求排队，称为**队头阻塞** (head-of-line blocking)。

## HTTP/2

2015 年发布，基于 Google 2009 年公开的 SPDY 协议 (用于解决 HTTP/1.1 效率不高的问题)。

- **多工/全双工 (multiplexing)**
  - 使用一个 TCP 连接，客户端和服务端都可以同时发送多个请求和响应，响应顺序不必对应请求顺序，避免了队头阻塞
- **二进制协议**
  - 每个报文的所有帧称为一个数据流 (stream)，有一个唯一编号，附加在每个数据包中
    - 客户端发出的数据流 ID 为奇数，服务端发出的数据流 ID 为偶数
    - 取消数据流：发送 `RST_STREAM` 帧
    - 客户端可以指定数据流的**优先级**，优先级高服务端更早回应
  - header 和 body 全部采用二进制编码，统称为帧 (frame)，比如头信息帧、数据帧
  - 可以定义额外的帧，用于高级应用，解析数据相比文本更方便
- **头信息压缩 (header compression)**
  - 由于 HTTP 无状态，每次请求需要带上很多重复的 header，浪费带宽、影响速度
  - header 使用 gzip 或 compress 压缩后再发送
  - 客户端和服务端维护一张头信息表，所有字段存入该表并生成索引号，后续只发送索引号
- **服务器推送 (server push)**
  - 允许服务端未收到请求就向客户端发送资源，比如主动推送 HTML 需要的静态资源

## HTTP/3

UDP + QUIC
