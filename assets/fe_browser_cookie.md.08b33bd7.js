import{_ as o,c as e,o as l,d as s}from"./app.e4b9fdbe.js";const y=JSON.parse('{"title":"Cookie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Set-Cookie","slug":"set-cookie","link":"#set-cookie","children":[]},{"level":2,"title":"Cookie","slug":"cookie-1","link":"#cookie-1","children":[]},{"level":2,"title":"document.cookie","slug":"document-cookie","link":"#document-cookie","children":[]},{"level":2,"title":"第三方 Cookie","slug":"第三方-cookie","link":"#第三方-cookie","children":[]}],"relativePath":"fe/browser/cookie.md"}'),a={name:"fe/browser/cookie.md"},i=s(`<h1 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-hidden="true">#</a></h1><p>HTTP Cookie 是由服务器发送给浏览器的少量数据，浏览器会保存这些数据，在后续发送给相同服务器的请求报文中带上这些数据，从而使服务器能够辨别哪些请求来自同一个浏览器。</p><p>本质上是为了给无状态的 HTTP 提供记录状态的功能。</p><p>用途：</p><ul><li>会话管理 (Session Management) <ul><li>登录、购物车、游戏分数等服务器需要存储的状态信息</li></ul></li><li>个性化 (Personalization) <ul><li>用户偏好设置、主题等其他设置信息</li></ul></li><li>跟踪 (Tracking) <ul><li>记录和分析用户的行为</li></ul></li></ul><h2 id="set-cookie" tabindex="-1">Set-Cookie <a class="header-anchor" href="#set-cookie" aria-hidden="true">#</a></h2><p>服务端使用 <code>Set-Cookie</code> 响应头设置客户端的 Cookie：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>可以写在一行、用分号 <code>;</code> 分隔，也可以写在多个 <code>Set-Cookie</code> 里。</p><p>还有一些对 Cookie 的设置也写在 <code>Set-Cookie</code> 里，用分号 <code>;</code> 分隔：</p><ul><li><code>Domain</code>：Cookie 应该被发送到哪些域名 <ul><li>默认：设置 Cookie 的域名，<strong>不包括</strong>子域名</li><li>设置为服务端域名：包含子域名 <ul><li>比如设置 <code>Domain=mozilla.org</code>，也会向 <code>developer.mozilla.org</code> 发送 Cookie</li></ul></li></ul></li><li><code>Path</code>：Cookie 应该被发送到哪些路径 <ul><li>默认：请求的路径</li><li>设置为某个路径：包括子路径 <ul><li>比如设置 <code>Path=/docs</code>，也会匹配 <code>/docs/</code>、<code>/docs/web</code>、<code>/docs/web/http</code> 等</li></ul></li></ul></li><li><code>Expires</code>：过期时间，GMT 格式，到期 Cookie 被删除 <ul><li>默认是 Session Cookie</li></ul></li><li><code>Max-Age</code>：有效时间，以秒为单位，到期 Cookie 被删除</li><li><code>Secure</code>：只使用 HTTPS 发送 Cookie，可以防止中间人攻击</li><li><code>HttpOnly</code>：JS 无法通过 <code>document.cookie</code> 访问 Cookie，可以防止 XSS 攻击</li><li><code>SameSite</code>：是否通过跨站请求发送 Cookie，可以防止 CSRF 攻击 <ul><li><code>Strict</code>：只在 Cookie 设置的站点发送</li><li><code>Lax</code> (默认)：同 Strict，但是允许从外部站点跳转到源站点时发送 Cookie <ul><li>安全 HTTP 方法：<code>GET</code>、<code>HEAD</code>、<code>OPTIONS</code></li><li>执行顶级导航 (更改浏览器地址栏中的 URL)，而不是 iframe 或 AJAX 请求</li></ul></li><li><code>None</code>：允许跨站请求发送 Cookie，必须设置 <code>Secure</code>，否则失效</li></ul></li></ul><h2 id="cookie-1" tabindex="-1">Cookie <a class="header-anchor" href="#cookie-1" aria-hidden="true">#</a></h2><p>客户端请求与 Cookie 相同的服务端时，会在 <code>Cookie</code> 请求头带上这些 Cookie：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>可以是一行，也可以是多行。</p><h2 id="document-cookie" tabindex="-1">document.cookie <a class="header-anchor" href="#document-cookie" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yummy_cookie=choco</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 添加 Cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tasty_cookie=strawberry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 添加 Cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 访问所有 Cookie</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// yummy_cookie=choco; tasty_cookie=strawberry</span></span>
<span class="line"></span></code></pre></div><p>限制：</p><ul><li>每个键值对的大小不能超过 4KB</li><li>每个域名的 Cookie 数量上限大约为 20 个</li></ul><h2 id="第三方-cookie" tabindex="-1">第三方 Cookie <a class="header-anchor" href="#第三方-cookie" aria-hidden="true">#</a></h2><p>由请求的页面以外的其他域设置的 Cookie，称为第三方 Cookie。通常用于跟踪和广告。</p><p>浏览器允许禁止第三方 Cookie。</p>`,22),c=[i];function n(t,p,d,r,k,C){return l(),e("div",null,c)}const h=o(a,[["render",n]]);export{y as __pageData,h as default};