# Session

通过 Cookie 发送和保存 Session ID，可以实现会话管理。

![](assets/session.png)

与用 Cookie 保存所有用户数据相比，Session 只用 Cookie 保存一个 Session ID，剩余数据保存在服务端，使用 Session ID 索引，更加灵活、方便、安全。一般用于**短时间**用户认证和授权。
