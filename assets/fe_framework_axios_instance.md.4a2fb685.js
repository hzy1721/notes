import{_ as s,c as n,o as a,d as l}from"./app.a0163938.js";const F=JSON.parse('{"title":"自定义实例","description":"","frontmatter":{},"headers":[],"relativePath":"fe/framework/axios/instance.md","lastUpdated":1682650439000}'),o={name:"fe/framework/axios/instance.md"},p=l(`<h1 id="自定义实例" tabindex="-1">自定义实例 <a class="header-anchor" href="#自定义实例" aria-hidden="true">#</a></h1><p>可以通过创建自定义实例来复用更多配置，也支持别名函数。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> instance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">([config])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">head</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">options</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">patch</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUri</span><span style="color:#A6ACCD;">([config])</span></span>
<span class="line"></span></code></pre></div>`,3),e=[p];function t(c,r,A,D,C,y){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};