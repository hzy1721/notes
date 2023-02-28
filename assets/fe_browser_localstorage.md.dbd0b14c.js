import{_ as e,c as o,o as a,a as c}from"./app.e3dff596.js";const m=JSON.parse('{"title":"localStorage","description":"","frontmatter":{},"headers":[],"relativePath":"fe/browser/localstorage.md"}'),t={name:"fe/browser/localstorage.md"},l=c('<h1 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-hidden="true">#</a></h1><p><code>localStorage</code> 和 <code>sessionStorage</code> 用于在浏览器上保存键值对。最多 5MB，服务端无法操控。</p><p><code>localStorage</code> 作用域是同源 (origin)，不同标签页/窗口之间共享，不会过期。</p><p><code>sessionStorage</code> 作用域是标签页，不同标签页有独立的数据，页面刷新会保留，标签页关闭后删除。</p><p>API：</p><ul><li><code>setItem(key, value)</code> —— 存储键/值对。</li><li><code>getItem(key)</code> —— 按照键获取值。</li><li><code>removeItem(key)</code> —— 删除键及其对应的值。</li><li><code>clear()</code> —— 删除所有数据。</li><li><code>key(index)</code> —— 获取该索引下的键名。</li><li><code>length</code> —— 存储的内容的长度。</li></ul>',6),r=[l];function d(s,i,_,n,p,g){return a(),o("div",null,r)}const S=e(t,[["render",d]]);export{m as __pageData,S as default};
