import{_ as s,c as a,o as n,d as o}from"./app.19e8d22d.js";const i=JSON.parse('{"title":"别名函数","description":"","frontmatter":{},"headers":[],"relativePath":"fe/framework/axios/alias.md","lastUpdated":1682650439000}'),l={name:"fe/framework/axios/alias.md"},p=o(`<h1 id="别名函数" tabindex="-1">别名函数 <a class="header-anchor" href="#别名函数" aria-hidden="true">#</a></h1><p>把 <code>method</code>、<code>url</code>、<code>data</code> 提取为函数名和函数参数。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 等价于 axios(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(config)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// method/url/data</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">head</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">options</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">patch</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postForm</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">putForm</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">patchForm</span><span style="color:#A6ACCD;">(url[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config]])</span></span>
<span class="line"></span></code></pre></div>`,3),e=[p];function t(c,r,A,D,y,C){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};
