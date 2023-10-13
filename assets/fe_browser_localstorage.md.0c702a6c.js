import{_ as l,c as e,o as a,U as o}from"./chunks/framework.e548c890.js";const h=JSON.parse('{"title":"localStorage","description":"","frontmatter":{},"headers":[],"relativePath":"fe/browser/localstorage.md","filePath":"fe/browser/localstorage.md","lastUpdated":1697165423000}'),s={name:"fe/browser/localstorage.md"},t=o('<h1 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;localStorage&quot;">​</a></h1><p>在浏览器上保存键值对，最多 5MB，服务端无法操控。</p><ul><li>作用域是同源 (same origin) <ul><li>协议 (protocol) + 主机名 (host) + 端口 (port)</li></ul></li><li>不同标签页/窗口之间共享</li><li>不会过期</li></ul><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><ul><li><code>getItem(key)</code>：按照键获取值</li><li><code>setItem(key, value)</code>：存储键值对</li><li><code>removeItem(key)</code>：删除键及其对应的值</li><li><code>clear()</code>：删除所有数据</li><li><code>key(index)</code>：获取该索引下的键名</li><li><code>length</code>：存储的内容的长度</li></ul><h2 id="监听" tabindex="-1">监听 <a class="header-anchor" href="#监听" aria-label="Permalink to &quot;监听&quot;">​</a></h2><p>同源其他标签页修改 localStorage 会触发当前标签页 window 的 storage 事件。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">storage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>事件类型为 StorageEvent，属性 (都是只读)：</p><ul><li>key <ul><li>值变化的 key</li><li>clear()：null</li></ul></li><li>newValue <ul><li>新值</li><li>clear() 或 removeItem(key)：null</li></ul></li><li>oldValue <ul><li>旧值</li><li>首次 setItem(key, value)：null</li></ul></li><li>storageArea <ul><li>localStorage 对象</li></ul></li><li>url <ul><li>修改值的标签页 URL</li></ul></li></ul>',10),i=[t];function r(n,c,p,d,u,y){return a(),e("div",null,i)}const g=l(s,[["render",r]]);export{h as __pageData,g as default};
