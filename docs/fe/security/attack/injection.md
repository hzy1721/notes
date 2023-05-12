# Injection (注入)

## SQL 注入

SQL 注入指的是直接拼接 SQL 语句和用户提供的参数，导致用户参数中的恶意 SQL 片段得到执行。

```js
public async render(ctx) {
  const { username } = ctx.query;
  const result = await sql.query(`
    SELECT a, b, c FROM table
    WHERE username = ${username}
  `);
  ctx.body = result;
}
```

```js
username: 'user1; DROP TABLE table;';
```

```sql
SELECT a, b, c FROM table
WHERE username = user1; DROP TABLE table;
```

可能导致的后果：

- 通过 `DROP` 语句删除表或数据库
- 表数据被窃取或修改

防御措施：

- `PREPARE`

## CLI 注入

CLI 注入指的是直接拼接 CLI 命令和用户提供的参数，导致用户参数中的恶意命令得到执行。

```js
public async convertVideo(ctx) {
  const { video, options } = ctx.request.body;
  exec(`convert-cli ${video} -o ${options}`);
  ctx.body = 'ok';
}
```

```js
video: 'test.mp4',
options: 'option1 ; rm -rf /'
```

```sh
convert-cli test.mp4 -o option1 ; rm -rf /
```

可能导致的后果：

- 通过 `rm -rf` 删除重要文件
- 读取或修改重要文件
  - `/etc/passwd`
  - `/etc/shadow`
  - `~/.ssh`
  - `/etc/nginx/nginx.conf`

防御措施：

- 最小权限原则
  - 不要用 `sudo` 或 `root` 执行命令
- 白名单+过滤
  - `rm` 肯定不允许
