import{_ as s,c as a,o as i,a1 as t}from"./chunks/framework.mNpZ2GHZ.js";const u=JSON.parse('{"title":"SSRF","description":"","frontmatter":{},"headers":[],"relativePath":"fe/security/attack/ssrf.md","filePath":"fe/security/attack/ssrf.md","lastUpdated":1691680956000}'),e={name:"fe/security/attack/ssrf.md"},l=t(`<h1 id="ssrf" tabindex="-1">SSRF <a class="header-anchor" href="#ssrf" aria-label="Permalink to &quot;SSRF&quot;">​</a></h1><p>服务端请求伪造 (Server-Side Request Forgery，SSRF) 是指对用户提交内容不过滤，直接用于请求服务端资源，造成服务端资源被非法访问。类似于跨站脚本 (XSS)。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public async </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">webhook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // callback 可能是内网 URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ctx.body </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx.query.callback);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="防御措施" tabindex="-1">防御措施 <a class="header-anchor" href="#防御措施" aria-label="Permalink to &quot;防御措施&quot;">​</a></h2><ul><li>限制请求目的 URL 的协议、域名、IP、端口 <ul><li>禁止访问内网</li></ul></li></ul>`,5),n=[l];function r(h,p,c,k,d,o){return i(),a("div",null,n)}const E=s(e,[["render",r]]);export{u as __pageData,E as default};
