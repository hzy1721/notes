import{_ as e,c as s,o,d as t}from"./app.b2b4ff33.js";const y=JSON.parse('{"title":"TextEncoder","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/js/binary/text-encoder.md","lastUpdated":1680593177000}'),a={name:"fe/basic/js/binary/text-encoder.md"},n=t(`<h1 id="textencoder" tabindex="-1">TextEncoder <a class="header-anchor" href="#textencoder" aria-hidden="true">#</a></h1><p><code>TextEncoder</code> 把字符串编码为 buffer。只支持 <code>utf-8</code> 编码。</p><p>创建 <code>TextEncoder</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> encoder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TextEncoder</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>编码：</p><ul><li><code>encode(str)</code>：返回 <code>Uint8Array</code></li><li><code>encode(str, dest)</code>：编码到类型为 <code>Uint8Array</code> 的 <code>dest</code></li></ul>`,6),c=[n];function d(r,l,p,i,_,A){return o(),s("div",null,c)}const h=e(a,[["render",d]]);export{y as __pageData,h as default};
