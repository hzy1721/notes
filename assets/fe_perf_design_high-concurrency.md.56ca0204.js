import{_ as e,c as o,o as c,U as t}from"./chunks/framework.e548c890.js";const u=JSON.parse('{"title":"高并发","description":"","frontmatter":{},"headers":[],"relativePath":"fe/perf/design/high-concurrency.md","filePath":"fe/perf/design/high-concurrency.md","lastUpdated":1702821351000}'),a={name:"fe/perf/design/high-concurrency.md"},i=t('<h1 id="高并发" tabindex="-1">高并发 <a class="header-anchor" href="#高并发" aria-label="Permalink to &quot;高并发&quot;">​</a></h1><ol><li>静态资源上传 CDN</li><li>利用本地存储缓存数据 <ul><li><code>localStorage</code></li><li><code>IndexedDB</code></li></ul></li><li>接口请求节流，短时间内请求数据直接返回本地缓存的上一次数据</li><li>服务端均设置 <code>Cache-Control</code>，并且请求间隔过短直接返回 <code>304</code>，跳过 <code>Last-Modified</code> 和 <code>ETag</code> 判断</li></ol>',2),d=[i];function r(n,l,s,_,h,f){return c(),o("div",null,d)}const g=e(a,[["render",r]]);export{u as __pageData,g as default};
