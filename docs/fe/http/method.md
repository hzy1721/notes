# 方法

- `GET`
  - 请求资源
- `HEAD`
  - 与 GET 返回相同的响应，但是不包含 body
- `POST`
  - 提交资源，造成服务端状态改变
- `PUT`
  - 替换资源
- `DELETE`
  - 删除资源
- `CONNECT`
  - 建立获取资源的隧道
- `OPTIONS`
  - 发送通信选项
- `TRACE`
  - 资源的环回测试 (loop-back)
- `PATCH`
  - 部分修改资源

部分方法有 3 种特性：

- 安全性 (safe)
  - 不会修改服务端数据
  - `GET`、`HEAD`、`OPTIONS`
- 幂等性 (idempotent)
  - 执行多次与执行一次的效果相同
  - `GET`、`HEAD`、`PUT`、`DELETE`、`OPTIONS`
- 可缓存性 (cacheable)
  - 响应可以被缓存
  - `GET`、`HEAD`
