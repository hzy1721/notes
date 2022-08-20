import{_ as e,c as a,o,a as c}from"./app.8b432662.js";const u=JSON.parse('{"title":"Map","description":"","frontmatter":{},"headers":[{"level":3,"title":"WeakMap","slug":"weakmap"}],"relativePath":"javascript/map.md"}'),d={name:"javascript/map.md"},l=c('<h1 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h1><p><code>Map</code> \u8868\u793A\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C<code>Object</code> \u4E5F\u662F\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u4F46 key \u53EA\u80FD\u662F\u5B57\u7B26\u4E32\u6216 Symbol \u7C7B\u578B\uFF0C<code>Map</code> \u7684 key \u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\u3002</p><p>API\uFF1A</p><ul><li><code>new Map(iterable)</code>\uFF1A\u4F7F\u7528\u952E\u503C\u5BF9\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61\u521B\u5EFA Map <ul><li>\u628A\u5BF9\u8C61\u8F6C\u6362\u4E3A Map\uFF1A<code>new Map(Object.entries(obj))</code></li><li>\u628A Map \u8F6C\u6362\u4E3A\u5BF9\u8C61\uFF1A<code>Object.fromEntries(map)</code></li></ul></li><li><code>map.set(key, value)</code>\uFF1A\u8BBE\u7F6E\u952E\u503C\u5BF9\uFF0C\u8FD4\u56DE map \u672C\u8EAB</li><li><code>map.get(key)</code>\uFF1A\u8BFB\u53D6\u952E\u503C\u5BF9\uFF0Ckey \u4E0D\u5B58\u5728\u8FD4\u56DE <code>undefined</code></li><li><code>map.has(key)</code>\uFF1A\u952E\u503C\u5BF9\u662F\u5426\u5B58\u5728</li><li><code>map.delete(key)</code>\uFF1A\u5220\u9664\u952E\u503C\u5BF9</li><li><code>map.clear()</code>\uFF1A\u6E05\u7A7A map</li><li><code>map.size</code>\uFF1A\u952E\u503C\u5BF9\u4E2A\u6570</li></ul><p>\u904D\u5386 Map\uFF1A</p><ul><li><code>map.forEach((value, key, map) =&gt; { ... })</code></li><li><code>map.keys()</code>\uFF1A\u6240\u6709\u952E\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61</li><li><code>map.values()</code>\uFF1A\u6240\u6709\u503C\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61</li><li><code>map.entries()</code>\uFF1A\u6240\u6709\u952E\u503C\u5BF9\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C<code>for...of</code> \u9ED8\u8BA4\u4F7F\u7528</li></ul><h3 id="weakmap" tabindex="-1">WeakMap <a class="header-anchor" href="#weakmap" aria-hidden="true">#</a></h3><p><code>WeakMap</code> \u4E0E <code>Map</code> \u6709\u4E24\u4E2A\u533A\u522B\uFF1A</p><ul><li>key \u53EA\u80FD\u662F\u5BF9\u8C61</li><li>key \u5BF9\u8C61\u90FD\u662F\u5F31\u5F15\u7528\uFF0C\u5783\u573E\u56DE\u6536\u4E0D\u8003\u8651 WeakMap \u5BF9 key \u5BF9\u8C61\u7684\u5F15\u7528</li></ul><p>\u9002\u5408\u8BB0\u5F55\u5BF9\u8C61\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u5BF9\u8C61\u4E0D\u88AB\u5F15\u7528\u540E\uFF0C\u76F8\u5173\u4FE1\u606F\u81EA\u52A8\u6D88\u5931\u3002</p><p>API\uFF1A</p><ul><li><code>new Map(iterable)</code></li><li><code>map.set(key, value)</code></li><li><code>map.get(key)</code></li><li><code>map.has(key)</code></li><li><code>map.delete(key)</code></li><li><strong>\u6CA1\u6709</strong> <code>clear()</code> \u548C <code>size</code>\uFF0C<strong>\u4E0D\u53EF\u904D\u5386</strong></li></ul>',12),i=[l];function p(t,r,s,m,n,_){return o(),a("div",null,i)}var h=e(d,[["render",p]]);export{u as __pageData,h as default};
