# 报文结构

HTTP 报文主要分为请求报文 (Request) 和响应报文 (Response)。

请求报文的结构为：

- 第一行包含 3 个字段：HTTP 方法 (Method)、请求的路径 (Path)、使用的 HTTP 版本 (Version)，用空格分隔
- 请求头 (Request Headers)，每行一个键值对
- 一行空行
- 请求体 (Request Body)

响应报文的结构为：

- 第一行包含 3 个字段：HTTP 版本 (Version)、状态码 (Status Code)、状态消息 (Status Message)
- 响应头 (Response Headers)
- 一行空行
- 响应头 (Response Body)

![](assets/http_message.png)
