import{_ as e,c as o,o as t,U as s}from"./chunks/framework.e548c890.js";const l="/assets/event-loop-philip.a462fbb2.png",i="/assets/event-loop.60b24191.png",a="/assets/event-loop-1.4571acb0.webp",r="/assets/event-loop-2.29b6e1ba.webp",v=JSON.parse('{"title":"浏览器事件循环","description":"","frontmatter":{},"headers":[],"relativePath":"fe/browser/event-loop.md","filePath":"fe/browser/event-loop.md","lastUpdated":1683687303000}'),n={name:"fe/browser/event-loop.md"},c=s('<h1 id="浏览器事件循环" tabindex="-1">浏览器事件循环 <a class="header-anchor" href="#浏览器事件循环" aria-label="Permalink to &quot;浏览器事件循环&quot;">​</a></h1><p>浏览器事件循环包含以下阶段：</p><ol><li>执行<strong>一个</strong>宏任务 <ul><li><code>&lt;script&gt;</code> 脚本</li><li>事件处理程序</li><li>AJAX</li><li><code>setTimeout/setInterval</code></li></ul></li><li>执行<strong>所有</strong>微任务 <ul><li>Promise 的 <code>then/catch/finally</code> 处理程序</li><li><code>queueMicrotask</code></li><li><code>MutationObserver</code></li></ul></li><li>浏览器渲染</li></ol><img src="'+l+'" style="zoom:50%;display:inline-block;"><img src="'+i+'" style="zoom:45%;display:inline-block;margin-left:50px;"><p><img src="'+a+'" alt=""></p><p><img src="'+r+'" alt=""></p>',7),p=[c];function _(d,m,b,f,u,h){return t(),o("div",null,p)}const T=e(n,[["render",_]]);export{v as __pageData,T as default};