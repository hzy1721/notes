import{_ as e,c as i,o as t,a1 as l}from"./chunks/framework.mNpZ2GHZ.js";const S=JSON.parse('{"title":"CSRF","description":"","frontmatter":{},"headers":[],"relativePath":"fe/security/attack/csrf.md","filePath":"fe/security/attack/csrf.md","lastUpdated":1691680956000}'),o={name:"fe/security/attack/csrf.md"},a=l('<h1 id="csrf" tabindex="-1">CSRF <a class="header-anchor" href="#csrf" aria-label="Permalink to &quot;CSRF&quot;">​</a></h1><p>跨站请求伪造 (Cross-Site Request Forgery，CSRF) 是指诱导用户访问恶意页面，从而自动发送带有 Cookie 的请求到敏感地址（比如银行卡支付地址），完成用户授权操作。</p><p>CSRF 有以下类型：</p><ul><li>GET 请求 <ul><li><code>&lt;a&gt;</code> 标签</li><li><code>&lt;img&gt;</code> 标签</li></ul></li><li>POST 请求 <ul><li><code>&lt;form&gt;</code> 表单</li></ul></li><li>iframe 攻击 <ul><li>iframe 隐藏，上面覆盖 pointer-events 为 none 的 button</li><li>iframe 点击后发起伪造的同源请求</li></ul></li></ul><h2 id="防御措施" tabindex="-1">防御措施 <a class="header-anchor" href="#防御措施" aria-label="Permalink to &quot;防御措施&quot;">​</a></h2><ul><li>减少在 Cookie 中存储重要信息，并使用 <code>SameSite</code> Cookie <ul><li><code>Set-Cookie: SameSite=Strict</code></li></ul></li><li>限制请求来源 <ul><li>校验 <code>Origin</code> 和 <code>Referer</code></li><li>先访问过页面，才接受请求</li><li>使用与用户绑定的 token，并设置过期时间</li></ul></li><li><code>X-Frame-Options: DENY/SAMEORIGIN</code></li><li>不要在一个接口内既返回数据又修改数据，比如不要使用 <code>GET</code> 请求修改数据</li><li>Node 中间件</li></ul>',6),c=[a];function r(d,s,n,u,_,f){return t(),i("div",null,c)}const p=e(o,[["render",r]]);export{S as __pageData,p as default};
