import{_ as e,c as o,o as t,U as s}from"./chunks/framework.e548c890.js";const A=JSON.parse('{"title":"TextEncoder","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/js/binary/text-encoder.md","filePath":"fe/basic/js/binary/text-encoder.md","lastUpdated":1680593177000}'),a={name:"fe/basic/js/binary/text-encoder.md"},c=s('<h1 id="textencoder" tabindex="-1">TextEncoder <a class="header-anchor" href="#textencoder" aria-label="Permalink to &quot;TextEncoder&quot;">​</a></h1><p><code>TextEncoder</code> 把字符串编码为 buffer。只支持 <code>utf-8</code> 编码。</p><p>创建 <code>TextEncoder</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> encoder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TextEncoder</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>编码：</p><ul><li><code>encode(str)</code>：返回 <code>Uint8Array</code></li><li><code>encode(str, dest)</code>：编码到类型为 <code>Uint8Array</code> 的 <code>dest</code></li></ul>',6),n=[c];function r(d,l,p,i,_,x){return t(),o("div",null,n)}const f=e(a,[["render",r]]);export{A as __pageData,f as default};
