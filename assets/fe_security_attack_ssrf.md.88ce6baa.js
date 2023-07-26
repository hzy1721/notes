import{_ as s,c as a,o as l,U as n}from"./chunks/framework.e548c890.js";const d=JSON.parse('{"title":"SSRF","description":"","frontmatter":{},"headers":[],"relativePath":"fe/security/attack/ssrf.md","filePath":"fe/security/attack/ssrf.md","lastUpdated":1683886409000}'),e={name:"fe/security/attack/ssrf.md"},t=n(`<h1 id="ssrf" tabindex="-1">SSRF <a class="header-anchor" href="#ssrf" aria-label="Permalink to &quot;SSRF&quot;">​</a></h1><p>SSRF (Server-Side Request Forgery，服务端请求伪造) 指的是直接使用用户参数在服务端进行各种操作，造成服务端资源被非法访问。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public async </span><span style="color:#82AAFF;">webhook</span><span style="color:#A6ACCD;">(ctx) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// callback 可能是内网 URL</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>防御措施：</p><ul><li>限制 URL 的协议、域名、IP、端口 <ul><li>禁止访问内网</li></ul></li></ul>`,5),o=[t];function p(c,r,i,y,F,D){return l(),a("div",null,o)}const f=s(e,[["render",p]]);export{d as __pageData,f as default};
