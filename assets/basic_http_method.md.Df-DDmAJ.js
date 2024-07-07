import{_ as l,c as e,o as i,a1 as o}from"./chunks/framework.mNpZ2GHZ.js";const p=JSON.parse('{"title":"方法","description":"","frontmatter":{},"headers":[],"relativePath":"basic/http/method.md","filePath":"basic/http/method.md","lastUpdated":1682050462000}'),c={name:"basic/http/method.md"},d=o('<h1 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h1><ul><li><code>GET</code><ul><li>请求资源</li></ul></li><li><code>HEAD</code><ul><li>与 GET 返回相同的响应，但是不包含 body</li></ul></li><li><code>POST</code><ul><li>提交资源，造成服务端状态改变</li></ul></li><li><code>PUT</code><ul><li>替换资源</li></ul></li><li><code>DELETE</code><ul><li>删除资源</li></ul></li><li><code>CONNECT</code><ul><li>建立获取资源的隧道</li></ul></li><li><code>OPTIONS</code><ul><li>发送通信选项</li></ul></li><li><code>TRACE</code><ul><li>资源的环回测试 (loop-back)</li></ul></li><li><code>PATCH</code><ul><li>部分修改资源</li></ul></li></ul><p>部分方法有 3 种特性：</p><ul><li>安全性 (safe) <ul><li>不会修改服务端数据</li><li><code>GET</code>、<code>HEAD</code>、<code>OPTIONS</code></li></ul></li><li>幂等性 (idempotent) <ul><li>执行多次与执行一次的效果相同</li><li><code>GET</code>、<code>HEAD</code>、<code>PUT</code>、<code>DELETE</code>、<code>OPTIONS</code></li></ul></li><li>可缓存性 (cacheable) <ul><li>响应可以被缓存</li><li><code>GET</code>、<code>HEAD</code></li></ul></li></ul>',4),t=[d];function a(u,s,_,r,n,T){return i(),e("div",null,t)}const E=l(c,[["render",a]]);export{p as __pageData,E as default};
