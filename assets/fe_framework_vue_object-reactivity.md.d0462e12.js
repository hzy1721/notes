import{_ as e,c as o,o as t,d as c}from"./app.60ece37e.js";const p=JSON.parse('{"title":"对象响应式方案","description":"","frontmatter":{},"headers":[{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]}],"relativePath":"fe/framework/vue/object-reactivity.md","lastUpdated":1680318810000}'),i={name:"fe/framework/vue/object-reactivity.md"},l=c('<h1 id="对象响应式方案" tabindex="-1">对象响应式方案 <a class="header-anchor" href="#对象响应式方案" aria-hidden="true">#</a></h1><h2 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-hidden="true">#</a></h2><ul><li>访问属性：<code>obj.foo</code><ul><li><code>[[Get]]</code></li></ul></li><li>判断是否存在 key：<code>key in obj</code><ul><li><code>[[HasProperty]]</code></li></ul></li><li>使用 <code>for...in</code> 遍历：<code>for (const key in obj) { ... }</code><ul><li><code>[[OwnPropertyKeys]]</code></li></ul></li><li>添加新属性或修改已有属性的值：<code>obj.foo = value</code><ul><li><code>[[Set]]</code></li></ul></li><li>删除属性：<code>delete obj.foo</code><ul><li><code>[[Delete]]</code></li></ul></li></ul><h2 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h2><p>数组是一个异质对象，只有 <code>[[DefineOwnProperty]]</code> 内部方法与常规对象不同。</p><p>需要额外关注 <code>length</code> 属性。</p>',6),d=[l];function a(r,n,s,_,h,u){return t(),o("div",null,d)}const b=e(i,[["render",a]]);export{p as __pageData,b as default};
