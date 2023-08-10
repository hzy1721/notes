# XSS

跨站脚本 (Cross-Site Scripting，XSS) 是指对用户提交内容不过滤直接转为 DOM，导致在正常页面插入恶意 `<script>`。

通常由于对用户提交的内容不过滤，直接转化为页面 DOM。

XSS 可以分为 4 类：

- Stored (存储型)
- Reflected (反射型)
- DOM-based (基于 DOM)
- Mutation-based (基于浏览器差异)

## 防御措施

- 过滤用户上传的内容
  - 把用户内容转为 DOM
  - 用户上传 svg
  - 用户自定义跳转链接
  - 用户自定义 CSS 样式
- 重要 Cookie 设置为 `HttpOnly`，禁止 JS 访问
  - `Set-Cookie: HttpOnly`
- 已有工具
  - 主流框架默认防御 XSS，比如 React、Vue
  - `google-closure-library`
  - Node 可以用 `DOMPurify`
- CSP (Content Security Policy)

## Stored

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

## Reflected

- 不涉及数据库
- 利用 query param 传递恶意脚本

```
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

## DOM-based

- 不涉及服务端
- 同样利用 query param，不过是在浏览器端处理

```
host/path/?param=<script>alert('xss')</script>
```

```js
// 浏览器端脚本
const content = new URL(location.href).searchParams.get('param');
const div = document.createElement('div');
div.innerHTML = content;
document.body.append(div);
```

## Mutation-based

- 利用浏览器渲染 DOM 的特性 (不同浏览器会有差异)
- 针对不同的浏览器使用不同的攻击手段

```html
<noscript
  ><p title="</noscript><img src=x onerror=alert(1)>"></p
></noscript>
```

![截屏2022-07-31 18.30.19.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d391c2b925cc4e02b7dc1895fcf2a568~tplv-k3u1fbpfcp-watermark.image?)
