# Response

HTTP 响应对象，通常由 fetch 返回。

## 属性

| 属性       | 含义                       |
| ---------- | -------------------------- |
| body       | 响应体的 ReadableStream    |
| bodyUsed   | body 是否被用于过 response |
| headers    | 响应头                     |
| ok         | 状态码是否为 2xx           |
| redirected | 是否为重定向后的结果       |
| status     | 状态码                     |
| statusText | 状态文本                   |
| type       | basic 或 cors              |
| url        | 响应来自的 URL             |
