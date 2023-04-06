import{_ as e,c as s,o as a,d as l}from"./app.176a4f12.js";const u=JSON.parse('{"title":"File","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/js/binary/file.md","lastUpdated":1680742589000}'),o={name:"fe/basic/js/binary/file.md"},i=l('<h1 id="file" tabindex="-1">File <a class="header-anchor" href="#file" aria-hidden="true">#</a></h1><p><code>File</code> 继承自 <code>Blob</code>，添加了文件系统相关的功能。</p><p>创建 <code>File</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#A6ACCD;">(fileParts</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fileName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [options])</span><span style="color:#89DDFF;">``</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><ul><li><code>fileParts</code>：<code>Blob/buffer/String</code> 数组</li><li><code>fileName</code>：文件名</li><li><code>options</code>： <ul><li><code>lastModified</code>：最后一次修改的时间戳</li></ul></li></ul><p>属性：</p><ul><li><code>name</code>：文件名</li><li><code>lastModified</code>：最后一次修改的时间戳</li></ul>',7),n=[i];function c(t,p,d,r,_,f){return a(),s("div",null,n)}const D=e(o,[["render",c]]);export{u as __pageData,D as default};
