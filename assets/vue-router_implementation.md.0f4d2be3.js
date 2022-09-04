import{_ as s,c as a,o as n,a as p}from"./app.87442856.js";const C=JSON.parse('{"title":"\u5B9E\u73B0\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"hash \u6A21\u5F0F","slug":"hash-\u6A21\u5F0F"},{"level":2,"title":"HTML5 \u6A21\u5F0F","slug":"html5-\u6A21\u5F0F"}],"relativePath":"vue-router/implementation.md"}'),l={name:"vue-router/implementation.md"},o=p(`<h1 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1">\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h1><h2 id="hash-\u6A21\u5F0F" tabindex="-1">hash \u6A21\u5F0F <a class="header-anchor" href="#hash-\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u6539\u53D8 hash\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hash </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u76D1\u542C <code>hashchange</code> \u4E8B\u4EF6\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hashchange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// hash\u6539\u53D8\u65F6\u5207\u6362\u9875\u9762</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="html5-\u6A21\u5F0F" tabindex="-1">HTML5 \u6A21\u5F0F <a class="header-anchor" href="#html5-\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u6539\u53D8 URL\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pushState</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> title[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> url])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replaceState</span><span style="color:#A6ACCD;">(stateObj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> title[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> url])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(delta)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">back</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forward</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u76D1\u542C <code>popstate</code> \u4E8B\u4EF6\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">popstate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// URL\u6539\u53D8\u65F6\u5207\u6362\u9875\u9762</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function t(c,r,D,y,F,A){return n(),a("div",null,e)}var d=s(l,[["render",t]]);export{C as __pageData,d as default};