import{_ as s,c as a,o as n,U as l}from"./chunks/framework.e548c890.js";const F=JSON.parse('{"title":"进程沙箱","description":"","frontmatter":{},"headers":[],"relativePath":"fe/field/electron/sandbox.md","filePath":"fe/field/electron/sandbox.md","lastUpdated":1699838445000}'),e={name:"fe/field/electron/sandbox.md"},o=l(`<h1 id="进程沙箱" tabindex="-1">进程沙箱 <a class="header-anchor" href="#进程沙箱" aria-label="Permalink to &quot;进程沙箱&quot;">​</a></h1><p>Electron 的沙箱来源于 Chromium，每个进程只能访问 CPU 和内存，其他授权操作需要派遣任务给更高权限的进程。</p><h2 id="渲染进程" tabindex="-1">渲染进程 <a class="header-anchor" href="#渲染进程" aria-label="Permalink to &quot;渲染进程&quot;">​</a></h2><p>Electron 的渲染进程与 Chromium 类似，无法访问 Node 和 Electron API，只能通过与主进程通信来完成相关操作。</p><h2 id="preload-脚本" tabindex="-1">preload 脚本 <a class="header-anchor" href="#preload-脚本" aria-label="Permalink to &quot;preload 脚本&quot;">​</a></h2><p>允许访问部分 Electron 和 Node API。</p><ul><li>electron <ul><li>contextBridge</li><li>crashReporter</li><li>ipcRenderer</li><li>nativeImage</li><li>webFrame</li></ul></li><li>node:events</li><li>node:timers</li><li>node:url</li><li>Buffer</li><li>process</li><li>clearImmediate</li><li>setImmediate</li></ul><h2 id="禁用-electron-沙箱" tabindex="-1">禁用 Electron 沙箱 <a class="header-anchor" href="#禁用-electron-沙箱" aria-label="Permalink to &quot;禁用 Electron 沙箱&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> win </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BrowserWindow</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">webPreferences</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sandbox</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>启用 <code>nodeIntegration</code> 也会禁用沙箱：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> win </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BrowserWindow</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">webPreferences</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nodeIntegration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="全局启用沙箱" tabindex="-1">全局启用沙箱 <a class="header-anchor" href="#全局启用沙箱" aria-label="Permalink to &quot;全局启用沙箱&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">enableSandbox</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="禁用-chromium-沙箱" tabindex="-1">禁用 Chromium 沙箱 <a class="header-anchor" href="#禁用-chromium-沙箱" aria-label="Permalink to &quot;禁用 Chromium 沙箱&quot;">​</a></h2><p>禁用 Chromium 所有进程的沙箱，只推荐在测试时使用。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">commandLine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendSwitch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">--no-sandbox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,16),p=[o];function t(r,c,i,d,D,C){return n(),a("div",null,p)}const A=s(e,[["render",t]]);export{F as __pageData,A as default};