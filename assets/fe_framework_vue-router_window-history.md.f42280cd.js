import{_ as o,c as e,o as s,U as t}from"./chunks/framework.e548c890.js";const a="/assets/PopStateEvent.df4db733.png",w=JSON.parse('{"title":"window.history","description":"","frontmatter":{},"headers":[],"relativePath":"fe/framework/vue-router/window-history.md","filePath":"fe/framework/vue-router/window-history.md","lastUpdated":1680318810000}'),l={name:"fe/framework/vue-router/window-history.md"},n=t('<h1 id="window-history" tabindex="-1">window.history <a class="header-anchor" href="#window-history" aria-label="Permalink to &quot;window.history&quot;">​</a></h1><p><code>window.history</code> 是一个 <code>History</code> 对象，可以进行页面导航。</p><p>会话历史 (session history)：当前标签页访问过的所有页面。</p><p>出于安全因素，<code>window.history</code> 访问不到会话历史的 URL。</p><p>属性：</p><ul><li><code>length</code>：会话历史的长度，只读属性</li><li><code>scrollRestoration</code>：是否自动复原滚动位置，<code>auto</code> 或 <code>manual</code></li><li><code>state</code>：当前页面的状态</li></ul><p>方法：</p><ul><li><code>back()</code>：后退，效果等同于点击后退按钮</li><li><code>forward()</code>：前进，效果等同于点击前进按钮</li><li><code>go(delta = 0)</code>：相对当前页面跳转 delta 步，默认刷新当前页面</li><li><code>pushState(state, unused[, url])</code>：添加一条历史记录 <ul><li><code>state</code>：状态对象，会传入 popstate 的处理函数</li><li><code>unused</code>：历史遗留，一般传一个空字符串</li><li><code>url</code>：同源的新 URL，可以是绝对 URL 或相对路径，默认是当前页面 URL</li><li>特点：只会添加记录 (并改变地址栏 URL)，不会真正进行页面跳转</li></ul></li><li><code>replaceState(state, unused[, url])</code>：替换当前历史记录 <ul><li>参数与 <code>pushState</code> 相同，区别是替换当前记录而不是添加一条新记录</li></ul></li></ul><p><code>popstate</code> 事件：</p><ul><li>当前历史记录改变时触发</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">popstate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><img src="'+a+'" width="50%">',12),c=[n];function i(d,r,p,u,y,h){return s(),e("div",null,c)}const D=o(l,[["render",i]]);export{w as __pageData,D as default};
