# Injection

注入 (Injection) 是指对用户提交的内容不过滤，直接用于 SQL 语句或命令行语句，造成恶意命令被执行。

## SQL 注入

SQL 注入指的是直接使用用户提供的参数拼接 SQL 语句，导致用户参数中的恶意 SQL 片段得到执行。

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

### 防御措施

- 对用户提交内容进行转义 (escape)
- 使用 `PREPARE` 语句，允许包含未转义字符，并且一次编译、多次运行

## CLI 注入

CLI 注入指的是直接使用用户提供的参数拼接 CLI 命令，导致用户参数中的恶意命令得到执行。

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

### 防御措施

- 最小权限原则：不使用 `sudo` 或 `root` 执行命令
- 命令白名单：禁止 `rm` 等敏感命令的执行
