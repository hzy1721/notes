import{_ as t,c as i,o as e,a1 as a}from"./chunks/framework.mNpZ2GHZ.js";const _=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"fe/desktop/electron/index.md","filePath":"fe/desktop/electron/index.md","lastUpdated":1704115023000}'),l={name:"fe/desktop/electron/index.md"},s=a(`<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p>Electron 组合了 Chromium 和 Node，允许用前端和 Node 技术栈开发 PC 端应用。</p><p>支持三种系统：<code>win32</code> (Windows)、<code>linux</code> (Linux)、<code>darwin</code> (macOS)。</p><h2 id="前端-v-s-原生" tabindex="-1">前端 v.s. 原生 <a class="header-anchor" href="#前端-v-s-原生" aria-label="Permalink to &quot;前端 v.s. 原生&quot;">​</a></h2><table tabindex="0"><thead><tr><th></th><th>前端</th><th>PC 端原生</th></tr></thead><tbody><tr><td>开发者人数</td><td>🌟🌟🌟</td><td>🌟</td></tr><tr><td>开发效率</td><td>🌟🌟🌟</td><td>🌟🌟</td></tr><tr><td>运行效率</td><td>🌟🌟</td><td>🌟🌟🌟</td></tr><tr><td>用户体验</td><td>🌟🌟</td><td>🌟🌟🌟</td></tr></tbody></table><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>如果不极致追求用户体验和运行效率，可以考虑使用 Electron。</p><ol><li>已经有 Web 应用，拓展 PC 端吸引更多用户 <ul><li>Figma、GitHub、Notion</li></ul></li><li>toB、toD 应用 <ul><li>编辑器：VSCode</li><li>办公 IM：钉钉、飞书</li><li>接口测试：Postman、Insomnia</li><li>终端：Tabby</li></ul></li></ol><h2 id="组成部分" tabindex="-1">组成部分 <a class="header-anchor" href="#组成部分" aria-label="Permalink to &quot;组成部分&quot;">​</a></h2><ol><li><code>main.js</code>：主脚本 <ul><li>管理主进程</li></ul></li><li><code>preload.js</code>：预加载脚本 <ul><li>在渲染进程运行前执行</li><li>能够访问 DOM 和部分 Node API</li></ul></li><li>显示的内容 <ul><li>远程 URL</li><li>本地资源 <ul><li>HTML/CSS/JS</li></ul></li></ul></li></ol><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>挂代理，设置好 <code>http_proxy</code> 和 <code>https_proxy</code>。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ELECTRON_GET_USE_PROXY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> electron</span></span></code></pre></div>`,13),d=[s];function o(n,r,h,c,p,k){return e(),i("div",null,d)}const b=t(l,[["render",o]]);export{_ as __pageData,b as default};