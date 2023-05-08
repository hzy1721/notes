import{_ as s,c as a,o as n,d as l}from"./app.6117d686.js";const A=JSON.parse('{"title":"XSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"Stored","slug":"stored","link":"#stored","children":[]},{"level":2,"title":"Reflected","slug":"reflected","link":"#reflected","children":[]},{"level":2,"title":"DOM-based","slug":"dom-based","link":"#dom-based","children":[]},{"level":2,"title":"Mutation-based","slug":"mutation-based","link":"#mutation-based","children":[]},{"level":2,"title":"防御措施","slug":"防御措施","link":"#防御措施","children":[]}],"relativePath":"fe/optimization/security/xss.md","lastUpdated":1681116875000}'),p={name:"fe/optimization/security/xss.md"},o=l(`<h1 id="xss" tabindex="-1">XSS <a class="header-anchor" href="#xss" aria-hidden="true">#</a></h1><p>XSS (Cross-Site Scripting，跨站脚本) 是指在页面插入并执行恶意脚本。</p><p>原因主要是对用户提交的内容不过滤，直接存入数据库或转化为 DOM。</p><p>XSS 可以分为 4 类：</p><ul><li>Stored (存储型)</li><li>Reflected (反射型)</li><li>DOM-based (基于 DOM)</li><li>Mutation-based (基于浏览器差异)</li></ul><h2 id="stored" tabindex="-1">Stored <a class="header-anchor" href="#stored" aria-hidden="true">#</a></h2><ul><li>恶意脚本保存在后端数据库中</li><li>所有用户访问页面都会执行恶意脚本</li><li>危害最大</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">public async </span><span style="color:#82AAFF;">submit</span><span style="color:#A6ACCD;">(ctx) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 用户提供的 content 没有过滤就直接保存到数据库中</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    content</span><span style="color:#89DDFF;">:,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">public async </span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(ctx) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">await</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">query</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 直接把用户内容转为 DOM 字符串，同样没有过滤</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;div&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/div&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 攻击者提交恶意 content</span></span>
<span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/submit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;script&gt;alert(&#39;xss&#39;);&lt;/script&gt;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 恶意脚本会被渲染出来，在所有访问页面的用户浏览器上执行</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;script&gt;alert(&#39;xss&#39;);&lt;/script&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="reflected" tabindex="-1">Reflected <a class="header-anchor" href="#reflected" aria-hidden="true">#</a></h2><ul><li>不涉及数据库</li><li>利用 query param 传递恶意脚本</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">host/path/?param=&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 服务端接口函数</span></span>
<span class="line"><span style="color:#A6ACCD;">public async </span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(ctx) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">param</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 直接把用户参数转为 DOM</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;div&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">param</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/div&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="dom-based" tabindex="-1">DOM-based <a class="header-anchor" href="#dom-based" aria-hidden="true">#</a></h2><ul><li>不涉及服务端</li><li>同样利用 query param，不过是在浏览器端处理</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">host/path/?param=&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 浏览器端脚本</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> content </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#A6ACCD;">(location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">param</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> div </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(div)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="mutation-based" tabindex="-1">Mutation-based <a class="header-anchor" href="#mutation-based" aria-hidden="true">#</a></h2><ul><li>利用浏览器渲染 DOM 的特性 (不同浏览器会有差异)</li><li>针对不同的浏览器使用不同的攻击手段</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">noscript</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;/noscript&gt;&lt;img src=x onerror=alert(1)&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d391c2b925cc4e02b7dc1895fcf2a568~tplv-k3u1fbpfcp-watermark.image?" alt="截屏2022-07-31 18.30.19.png"></p><h2 id="防御措施" tabindex="-1">防御措施 <a class="header-anchor" href="#防御措施" aria-hidden="true">#</a></h2><ul><li>做以下操作前，过滤用户内容 <ul><li>把用户内容转为 DOM</li><li>用户上传 svg</li><li>用户自定义跳转链接</li><li>用户自定义 CSS 样式</li></ul></li><li>重要 Cookie 设置为 <code>HttpOnly</code>，禁止 JS 访问</li><li>使用现成工具 <ul><li>主流框架默认防御 XSS，比如 React、Vue</li><li><code>google-closure-library</code></li><li>Node 可以用 <code>DOMPurify</code></li></ul></li><li>CSP (Content Security Policy)</li></ul>`,22),e=[o];function t(c,r,D,y,i,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};