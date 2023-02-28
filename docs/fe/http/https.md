# HTTPS

HTTP 是不加密的明文传输，带来了三大风险：

- 窃听 (eavesdropping)：第三方可以获知通信内容。
- 篡改 (tampering)：第三方可以修改通信内容。
- 冒充 (pretending)：第三方可以冒充他人身份参与通信。

HTTPS 的通信安全建立在 SSL/TLS 协议上，目的是为了：

- 防窃听：所有信息加密传输，第三方无法窃听。
- 防篡改：具有校验机制，一旦被篡改，通信双方可以立即发现。
- 防冒充：使用身份证书，防止身份被冒充。

SSL/TLS 的版本：

- 1994 年，NetScape 设计了 SSL 1.0，但是未发布。
- 1995 年，NetScape 发布了 SSL 2.0，但是很快发现有严重漏洞。
- 1996 年，NetScape 发布了 SSL 3.0，得到广泛应用。
- 1999 年，ISOC (Internet Society) 接替 NetScape 发布了 SSL 的升级版 TLS 1.0。
- 2006 年，发布了 TLS 1.1。
- 2008 年，发布了 TLS 1.2。
- 2011 年，发布了 TLS 1.2 修订版。
- 2018 年，IETF 发布了 TLS 1.3。

目前的主流版本是 TLS 1.2/1.3。

TLS 1.0 通常称为 SSL 3.1，TLS 1.1 称为 SSL 3.2，TLS 1.2 称为 SSL 3.3。

SSL/TLS 使用公钥加密+对称加密，在握手阶段获取服务端的公钥，并协商生成一个 session key，公钥用于加密 pre-master key 的传输，后续的数据传输使用 HTTP 协议和 session key 的对称加密。

![图片](https://s2.loli.net/2022/07/20/kHjxvKphJ375AwG.jpg)

SSL/TLS 的具体步骤如下：

1. 客户端发起请求

客户端发出加密通信的请求 (ClientHello)，包括以下内容：

- 支持的协议版本，比如 TLS 1.0
- 支持的加密算法，比如 RSA
- 客户端生成的随机数，后续用于生成 session key
- 支持的压缩算法

ClientHello 中不包含域名，如果服务器上部署了多个网站和证书，服务端会不知道该发回哪个网站的证书。2006 年，TLS 协议加入了 Server Name Indication (SNI)，允许客户端提供请求的域名。

2. 服务端响应请求

服务端收到 ClientHello 后，发送响应 ServerHello，包括以下内容：

- 确认使用的协议版本，如果此处的版本与 ClientHello 不同，则服务端关闭通信
- 确认使用的加密算法
- 服务端生成的随机数，后续用于生成 session key
- 服务端证书 (包含公钥)

部分服务器会要求客户端提供客户端证书。

3. 客户端最后回应

客户端首先验证服务端证书，确保：

- 证书由权威机构颁布
- 证书域名与请求域名一致
- 证书未过期

如果证书有问题会向用户发出警告，否则取出证书中的公钥，发出以下回应：

- 第三个随机数 (ClientKeyExchange)，也称为 pre-master key，**用公钥加密**
- 编码改变通知 (ChangeCipherSpec)，表示后续信息将用双方协商的 session key 加密传输
- 客户端握手结束通知 (Finished)，包含前面所有内容的 hash 值，供服务端校验

客户端使用三个随机数和事前商定的加密算法计算得到 session key。

4. 服务端最后回应

服务端收到 pre-master key 后，发出以下回应：

- 编码改变通知 (ChangeCipherSpec)，表示后续信息将用双方协商的 session key 加密传输
- 服务端握手结束通知 (Finished)，包含前面所有内容的 hash 值，供客户端校验

服务端使用与客户端相同的三个随机数和加密算法得到相同的 session key。
