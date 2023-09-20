import{_ as e,c as o,o as a,U as l}from"./chunks/framework.e548c890.js";const f=JSON.parse('{"title":"PWA 改造流程","description":"","frontmatter":{},"headers":[],"relativePath":"fe/field/pwa/how-to.md","filePath":"fe/field/pwa/how-to.md","lastUpdated":1695200371000}'),s={name:"fe/field/pwa/how-to.md"},t=l('<h1 id="pwa-改造流程" tabindex="-1">PWA 改造流程 <a class="header-anchor" href="#pwa-改造流程" aria-label="Permalink to &quot;PWA 改造流程&quot;">​</a></h1><p>将一个普通的 Web 应用改造为 PWA 需要以下步骤：</p><ol><li>创建 manifest JSON 文件，在 HTML 中通过 <code>&lt;link&gt;</code> 引用 <ul><li>如果是 MPA，每个页面的 HTML 都需要引用</li></ul></li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">manifest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">manifest.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><ol start="2"><li>通过 HTTPS 提供应用</li><li>包含一个 Service Worker 来监听 fetch 事件，提供基本的离线能力</li></ol><h2 id="自定义安装" tabindex="-1">自定义安装 <a class="header-anchor" href="#自定义安装" aria-label="Permalink to &quot;自定义安装&quot;">​</a></h2><p>允许应用提供自定义的安装按钮。iOS 不支持。</p><p>浏览器确认当前应用是可安装的 PWA 后，在 <code>window</code> 上触发 <code>beforeinstallprompt</code> 事件。</p><p>自定义流程：</p><ul><li>监听 <code>beforeinstallprompt</code> 事件</li><li>调用 <code>preventDefault()</code> 取消事件的默认行为</li><li>添加自定义的「安装」按钮，点击后调用 <code>event.prompt()</code> 进行弹框</li></ul>',10),n=[t];function p(c,r,i,d,h,_){return a(),o("div",null,n)}const m=e(s,[["render",p]]);export{f as __pageData,m as default};