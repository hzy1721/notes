import{_ as s,c as a,o as n,d as l}from"./app.a0163938.js";const C=JSON.parse('{"title":"函数","description":"","frontmatter":{},"headers":[{"level":2,"title":"看代码说输出","slug":"看代码说输出","link":"#看代码说输出","children":[]}],"relativePath":"code/fe/function.md","lastUpdated":1682650439000}'),p={name:"code/fe/function.md"},o=l(`<h1 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-hidden="true">#</a></h1><h2 id="看代码说输出" tabindex="-1">看代码说输出 <a class="header-anchor" href="#看代码说输出" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> implA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> implB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> implA</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">showName</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">implA</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showName</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a</span></span>
<span class="line"><span style="color:#A6ACCD;">implB</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showName</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// b</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};