import{_ as e,c as a,o as l,d as o}from"./app.de920966.js";const u=JSON.parse('{"title":"localStorage","description":"","frontmatter":{},"headers":[{"level":2,"title":"sessionStorage","slug":"sessionstorage","link":"#sessionstorage","children":[]},{"level":2,"title":"localStorage","slug":"localstorage-1","link":"#localstorage-1","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"fe/basic/browser/localstorage.md","lastUpdated":1682050462000}'),i={name:"fe/basic/browser/localstorage.md"},t=o('<h1 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-hidden="true">#</a></h1><p><code>sessionStorage/localStorage</code> 用于在浏览器上保存键值对。</p><p>最多 5MB，服务端无法操控。</p><h2 id="sessionstorage" tabindex="-1">sessionStorage <a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a></h2><ul><li>作用域是标签页，不同标签页有独立的数据</li><li>页面刷新会保留</li><li>标签页关闭后删除</li></ul><h2 id="localstorage-1" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage-1" aria-hidden="true">#</a></h2><ul><li>作用域是同源 (same origin)</li><li>不同标签页/窗口之间共享</li><li>不会过期</li></ul><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><ul><li><code>getItem(key)</code>：按照键获取值</li><li><code>setItem(key, value)</code>：存储键值对</li><li><code>removeItem(key)</code>：删除键及其对应的值</li><li><code>clear()</code>：删除所有数据</li><li><code>key(index)</code>：获取该索引下的键名</li><li><code>length</code>：存储的内容的长度</li></ul>',9),s=[t];function r(c,d,n,h,g,_){return l(),a("div",null,s)}const f=e(i,[["render",r]]);export{u as __pageData,f as default};
