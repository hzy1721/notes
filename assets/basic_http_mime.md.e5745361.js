import{_ as e,c as i,o as l,U as o}from"./chunks/framework.e548c890.js";const _=JSON.parse('{"title":"MIME 类型","description":"","frontmatter":{},"headers":[],"relativePath":"basic/http/mime.md","filePath":"basic/http/mime.md","lastUpdated":1697294017000}'),c={name:"basic/http/mime.md"},d=o('<h1 id="mime-类型" tabindex="-1">MIME 类型 <a class="header-anchor" href="#mime-类型" aria-label="Permalink to &quot;MIME 类型&quot;">​</a></h1><p>MIME：Multipurpose Internet Mail Extensions</p><p>包括一级类型、二级类型、可选的额外参数，支持自定义类型。</p><div class="language-http"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">Content-Type</span><span style="color:#F78C6C;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type/subtype; parameter=value</span></span></code></pre></div><ul><li>文本 <ul><li><code>text/plain</code></li><li><code>text/html</code></li><li><code>text/css</code></li><li><code>text/javascript</code></li></ul></li><li>字体 <ul><li><code>font/woff</code></li><li><code>font/ttf</code></li><li><code>font/otf</code></li></ul></li><li>图片 <ul><li><code>image/apng</code></li><li><code>image/avif</code></li><li><code>image/gif</code></li><li><code>image/jpeg</code></li><li><code>image/png</code></li><li><code>image/svg+xml</code></li><li><code>image/webp</code></li></ul></li><li>音视频 <ul><li><code>audio/wave</code>、<code>audio/wav</code>、<code>audio/x-wav</code>、<code>audio/x-pn-wav</code></li><li><code>audio/webm</code></li><li><code>audio/ogg</code></li><li><code>audio/mpeg</code></li><li><code>audio/vorbis</code></li><li><code>video/webm</code></li><li><code>video/ogg</code></li><li><code>video/mp4</code></li><li><code>application/ogg</code></li></ul></li><li>3D 对象或场景 <ul><li><code>model/3mf</code></li><li><code>model/vrml</code></li></ul></li><li>其他二进制类型 <ul><li><code>application/octet-stream</code></li><li><code>application/pdf</code></li><li><code>application/pkcs8</code></li><li><code>application/zip</code></li></ul></li><li>复合文档 <ul><li><code>multipart/form-data</code></li><li><code>multipart/byteranges</code></li><li><code>message/rfc822</code></li><li><code>message/partial</code></li></ul></li></ul>',5),a=[d];function t(s,p,n,m,r,u){return l(),i("div",null,a)}const f=e(c,[["render",t]]);export{_ as __pageData,f as default};