import{_ as e,c as o,o as c,a}from"./app.e3dff596.js";const u=JSON.parse('{"title":"高并发","description":"","frontmatter":{},"headers":[],"relativePath":"fe/design/high-concurrency.md"}'),t={name:"fe/design/high-concurrency.md"},d=a('<h1 id="高并发" tabindex="-1">高并发 <a class="header-anchor" href="#高并发" aria-hidden="true">#</a></h1><ol><li>静态资源上传 CDN</li><li>利用本地存储缓存数据 <ul><li><code>localStorage</code></li><li><code>IndexedDB</code></li></ul></li><li>接口请求节流，短时间内请求数据直接返回本地缓存的上一次数据</li><li>服务端均设置 <code>Cache-Control</code>，并且请求间隔过短直接返回 <code>304</code>，跳过 <code>Last-Modified</code> 和 <code>ETag</code> 判断</li></ol>',2),i=[d];function r(n,l,_,s,h,f){return c(),o("div",null,i)}const g=e(t,[["render",r]]);export{u as __pageData,g as default};
