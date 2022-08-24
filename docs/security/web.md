# Web 安全

**Web 安全**是每个前端开发必须掌握的知识点，这篇文章从攻击手段的角度阐述了每种攻击的原理和防御措施。

## XSS (Cross-Site Scripting)

XSS (跨站脚本攻击) 指的是在安全页面插入并执行恶意脚本。

导致 XSS 的原因主要有以下两个方面：

- 信任用户提交的内容，不进行过滤
- 将用户内容直接转化为 DOM

XSS 可以分为几大类：

- Stored XSS (存储型)
  - 恶意脚本保存在后端数据库中
  - 所有用户访问页面都会执行恶意脚本
  - 危害最大

```js
public async submit(ctx) {
  const { content, id } = ctx.request.body;
  // 用户提供的 content 没有过滤就直接保存到数据库中
  await db.save({
    content:,
    id
  });
}

public async render(ctx) {
  const { content } = await.db.query({
    id: ctx.query.id
  });
  // 直接把用户内容转为 DOM 字符串，同样没有过滤
  ctx.body = `<div>${content}</div>`;
}

// 攻击者提交恶意 content
fetch('/submit', {
  body: JSON.stringify({
    id: '1',
    content: `<script>alert('xss');</script>`
  })
});

// 恶意脚本会被渲染出来，在所有访问页面的用户浏览器上执行
ctx.body = `
  <div>
    <script>alert('xss');</script>
  </div>
`;
```

- Reflected XSS (反射型)
  - 不涉及数据库
  - 利用 query param 传递恶意脚本

```text
host/path/?param=<script>alert('xss')</script>
```

```js
// 服务端接口函数
public async render(ctx) {
  const { param } = ctx.query;
  // 直接把用户参数转为 DOM
  ctx.body = `<div>${param}</div>`;
}
```

- DOM-based XSS (基于 DOM)
  - 不涉及服务端
  - 同样利用 query param，不过是在浏览器端处理

```text
host/path/?param=<script>alert('xss')</script>
```

```js
// 浏览器端脚本
const content = new URL(location.href).searchParams.get("param");
const div = document.createElement("div");
div.innerHTML = content;
document.body.append(div);
```

- Mutation-based XSS
  - 利用浏览器渲染 DOM 的特性 (不同浏览器会有差异)
  - 针对不同的浏览器使用不同的攻击手段

```html
<noscript><p title="</noscript><img src=x onerror=alert(1)>"></p></noscript>
```

![截屏2022-07-31 18.30.19.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d391c2b925cc4e02b7dc1895fcf2a568~tplv-k3u1fbpfcp-watermark.image?)

防御措施：

- 进行以下操作前，过滤用户内容
  - 把用户内容转为 DOM
  - 用户上传 svg
  - 用户自定义跳转链接
  - 用户自定义 CSS 样式
- 使用现成工具
  - 主流框架默认防御 XSS，比如 React、Vue
  - `google-closure-library`
  - Node 可以用 `DOMPurify`
- CSP (Content Security Policy)

## CSRF (Cross-Site Request Forgery)

CSRF (跨站请求伪造) 指的是诱导用户发送带有 Cookie 的伪造请求，完成用户授权操作。

CSRF 有以下几种类型：

- GET 请求
  - `<a>` 标签
  - `<img>` 标签
- POST 请求
  - `<form>` 表单
- iframe 攻击
  - iframe 隐藏，上面覆盖 pointer-events 为 none 的 button
  - iframe 点击后发起伪造的同源请求

防御措施：

- 限制请求来源
  - 校验 `Origin` 和 `Referer`
  - 先访问过页面，才接受请求
  - 使用与用户绑定的 token，并设置过期时间
- SameSite Cookie
- `X-Frame-Options: DENY/SAMEORIGIN`
- 不要在一个接口内既返回数据又修改数据
- Node 中间件

## Injection (注入)

### SQL Injection

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
username: "user1; DROP TABLE table;";
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

### CLI Injection

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

## SSRF (Server-Side Request Forgery)

SSRF (服务端请求伪造) 指的是直接使用用户参数在服务端进行各种操作，造成服务端资源被非法访问。

```js
public async webhook(ctx) {
  // callback 可能是内网 URL
  ctx.body = await fetch(ctx.query.callback);
}
```

防御措施：

- 限制 URL 的协议、域名、IP、端口
  - 禁止访问内网

## DoS (Denial of Service)

DoS (拒绝服务) 指的是通过某种手段使服务器资源被显著消耗，无法响应更多请求，造成雪崩效应，最终导致服务不可用。

### ReDoS (Regex DoS)

不加问号 `?` 的正则表达式拥有**贪婪匹配**的特性，通过构造特定结构的字符串能够造成正则匹配过程中的大量回溯，使接口响应时间大幅增加、吞吐量大幅减少。

![截屏2022-08-01 08.58.48.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/159221d7ebb2449abae4ab3ddf4d636a~tplv-k3u1fbpfcp-watermark.image?)

防御措施：

- Code Review
  - 避免上线此类代码
- 代码扫描+正则性能测试
- 不使用用户提供的正则

### Logical DoS

开发者编写的一些不合理的代码或一些不合理的需求，也会导致服务器资源被大量消耗、接口响应时间变长，比如：

- 耗时的同步操作
- 数据库写入
- SQL join
- 文件备份
- 循环执行逻辑

### DDoS (Distributed DoS)

DDoS 指的是大量僵尸设备在短时间内向服务器发起请求，造成服务端带宽或 CPU 耗尽，无法响应新请求。拥有以下特点：

- 直接访问 IP
- 不区分 API
- 消耗大量带宽

比较常见的有 SYN Flood。

防御措施：

- 流量治理
  - 负载均衡
  - API 网关
  - CDN
- 快速自动扩容
- 非核心服务降级

## 传输层

### 中间人攻击 (Man-in-the-middle attack)

恶意 WebView、路由器、ISP 等充当浏览器和客户端之间的中间人，转发并修改双方的通信内容，造成通信被窃听、篡改、冒充。

![截屏2022-08-01 09.56.57.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cdf775e29a74f6b9fbf3e5119578440~tplv-k3u1fbpfcp-watermark.image?)

防御措施：

- HTTPS
  - 防窃听
  - 防篡改
  - 防冒充
- HTTP/3
- HSTS (HTTP Strict-Transport-Security)
- SRI (SubResource Integrity)
