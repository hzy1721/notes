import{_ as s,c as a,o as l,U as e}from"./chunks/framework.e548c890.js";const _=JSON.parse('{"title":"SSRF","description":"","frontmatter":{},"headers":[],"relativePath":"fe/security/attack/ssrf.md","filePath":"fe/security/attack/ssrf.md","lastUpdated":1691680956000}'),n={name:"fe/security/attack/ssrf.md"},t=e(`<h1 id="ssrf" tabindex="-1">SSRF <a class="header-anchor" href="#ssrf" aria-label="Permalink to &quot;SSRF&quot;">​</a></h1><p>服务端请求伪造 (Server-Side Request Forgery，SSRF) 是指对用户提交内容不过滤，直接用于请求服务端资源，造成服务端资源被非法访问。类似于跨站脚本 (XSS)。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public async </span><span style="color:#82AAFF;">webhook</span><span style="color:#A6ACCD;">(ctx) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// callback 可能是内网 URL</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="防御措施" tabindex="-1">防御措施 <a class="header-anchor" href="#防御措施" aria-label="Permalink to &quot;防御措施&quot;">​</a></h2><ul><li>限制请求目的 URL 的协议、域名、IP、端口 <ul><li>禁止访问内网</li></ul></li></ul>`,5),o=[t];function p(c,r,i,y,F,d){return l(),a("div",null,o)}const f=s(n,[["render",p]]);export{_ as __pageData,f as default};
