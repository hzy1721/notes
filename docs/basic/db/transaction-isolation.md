# 事务隔离级别

| 是否能避免       | 脏读 | 不可重复读 | 幻读 |
| ---------------- | :--: | :--------: | :--: |
| read uncommitted |  ❌  |     ❌     |  ❌  |
| read committed   |  ✅  |     ❌     |  ❌  |
| repeatable read  |  ✅  |     ✅     |  ❌  |
| serializable     |  ✅  |     ✅     |  ✅  |

MySQL 默认：repeatable read

其他数据库：read committed
