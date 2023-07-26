import{_ as e,c as l,o as s,U as a}from"./chunks/framework.e548c890.js";const S=JSON.parse('{"title":"useSyncExternalStore","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react-stack/react/hooks/use-sync-external-store.md","filePath":"fe/react-stack/react/hooks/use-sync-external-store.md","lastUpdated":1684585285000}'),o={name:"fe/react-stack/react/hooks/use-sync-external-store.md"},t=a('<h1 id="usesyncexternalstore" tabindex="-1">useSyncExternalStore <a class="header-anchor" href="#usesyncexternalstore" aria-label="Permalink to &quot;useSyncExternalStore&quot;">​</a></h1><p>订阅外部数据。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> snapshot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSyncExternalStore</span><span style="color:#A6ACCD;">(subscribe</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getSnapshot</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getServerSnapshot</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>参数：</p><ul><li><code>subscribe</code>：订阅函数 <ul><li>接收 <code>callback</code> 参数</li><li>内部实现当数据变化时调用 <code>callback</code>，从而触发组件重新渲染</li><li>返回 cleanup 函数，用于取消订阅</li></ul></li><li><code>getSnapshot</code>：返回数据的快照，快照变化会导致组件重新渲染</li><li><code>getServerSnapshot</code>：返回数据的初始快照，用于 SSR</li></ul><p>返回值：</p><ul><li><code>snapshot</code>：数据的当前快照</li></ul><p>警告：</p><ul><li><code>subscribe</code> 的改变会导致取消和重新订阅 <ul><li>如果使用组件内函数，会导致每次渲染都触发订阅</li><li>需要使用组件外函数或 <code>useCallback</code> 缓存组件内函数</li></ul></li><li><code>getSnapshot</code> 返回的快照不能每次都不一样，会造成无限循环 <ul><li>比如返回一个对象字面量</li></ul></li><li><code>getSnapshot</code> 返回的快照必须是不可变的 <ul><li>修改快照不会导致真正的数据改变</li><li>如果数据没有改变，每次调用返回的快照都相同</li></ul></li><li>通常把外部数据的管理逻辑封装为一个自定义 hook</li></ul><p>用途：</p><ul><li>订阅外部数据 (可能随时间变化) <ul><li>第三方状态管理库</li><li>浏览器 API</li></ul></li></ul>',11),c=[t];function n(r,i,p,d,u,_){return s(),l("div",null,c)}const y=e(o,[["render",n]]);export{S as __pageData,y as default};
