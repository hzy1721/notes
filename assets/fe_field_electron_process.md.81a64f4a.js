import{_ as s,c as a,o as n,U as l}from"./chunks/framework.e548c890.js";const A=JSON.parse('{"title":"进程模型","description":"","frontmatter":{},"headers":[],"relativePath":"fe/field/electron/process.md","filePath":"fe/field/electron/process.md","lastUpdated":1699838445000}'),o={name:"fe/field/electron/process.md"},e=l(`<h1 id="进程模型" tabindex="-1">进程模型 <a class="header-anchor" href="#进程模型" aria-label="Permalink to &quot;进程模型&quot;">​</a></h1><p>Electron 基于 Chromium 构建，也采用了类似的多进程架构。</p><p>单进程优缺点：</p><ul><li>尽可能资源共享，额外开销小</li><li>隔离性差，一个页面崩溃会影响整个浏览器</li></ul><p>Electron 进程分为 main 和 renderer 两类。</p><h2 id="主进程-main" tabindex="-1">主进程 main <a class="header-anchor" href="#主进程-main" aria-label="Permalink to &quot;主进程 main&quot;">​</a></h2><p>每个 Electron 应用只有 1 个主进程，是应用的入口，运行在 Node 环境。</p><p>负责：</p><ul><li>管理窗口 <code>BrowserWindow</code></li><li>管理渲染进程和页面 <code>webContents</code></li><li>管理生命周期 <code>app</code></li><li>提供原生 API <ul><li>菜单/对话框</li><li>授权操作</li></ul></li></ul><p>不能：</p><ul><li>访问和操作 DOM</li></ul><h2 id="渲染进程-renderer" tabindex="-1">渲染进程 renderer <a class="header-anchor" href="#渲染进程-renderer" aria-label="Permalink to &quot;渲染进程 renderer&quot;">​</a></h2><p>每个打开的窗口对应一个渲染进程，运行在 Chromium 环境。</p><p>负责：</p><ul><li>管理前端页面</li></ul><p>不能：</p><ul><li>访问 Node 环境和原生 API</li></ul><h3 id="preload-脚本" tabindex="-1">preload 脚本 <a class="header-anchor" href="#preload-脚本" aria-label="Permalink to &quot;preload 脚本&quot;">​</a></h3><p>在渲染进程中、页面加载之前执行，允许访问部分 Node API。</p><p>在主脚本中附加到窗口上：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> win </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BrowserWindow</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">webPreferences</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">preload</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path/to/preload.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="contextisolation" tabindex="-1">contextIsolation <a class="header-anchor" href="#contextisolation" aria-label="Permalink to &quot;contextIsolation&quot;">​</a></h3><p>出于安全原因，preload 脚本与页面是隔离的，二者访问的 <code>window</code> 不是同一个。</p><p>需要使用 <code>contextBridge</code> 进行变量的传递，相比直接设置 <code>window</code> 有更多限制、更加安全。</p><p>尽管 <code>contextBridge</code> 提供了安全方面的限制，但开发者还需要尽可能收缩权限，避免直接传递功能强大的 IPC 函数。</p><h3 id="contextbridge" tabindex="-1">contextBridge <a class="header-anchor" href="#contextbridge" aria-label="Permalink to &quot;contextBridge&quot;">​</a></h3><p>设置页面的全局变量：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// preload.js</span></span>
<span class="line"><span style="color:#A6ACCD;">contextBridge</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exposeInMainWorld</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myAPI</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">desktop</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// renderer.js</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myAPI)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; { desktop: true }</span></span></code></pre></div><h3 id="ts-支持" tabindex="-1">TS 支持 <a class="header-anchor" href="#ts-支持" aria-label="Permalink to &quot;TS 支持&quot;">​</a></h3><p>通过 <code>contextBridge</code> 传递的属性需要手动添加类型定义。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// preload.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">contextBridge</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exposeInMainWorld</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electronAPI</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">loadPreferences</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> ipcRenderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">load-prefs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// renderer.d.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IElectronAPI</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">loadPreferences</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> global </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Window</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    electronAPI</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">IElectronAPI</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="创建子进程" tabindex="-1">创建子进程 <a class="header-anchor" href="#创建子进程" aria-label="Permalink to &quot;创建子进程&quot;">​</a></h2><ul><li>Electron 提供了 <code>utilityProcess</code> 用于创建子进程</li><li>相比 Node 原生的 <code>child_process.fork</code>，能够更方便地与渲染进程通信 (通过 <code>MessagePort</code>)</li><li>因此在 Electron 应用中创建子进程时优先使用 <code>utilityProcess</code></li></ul><h2 id="类型优化" tabindex="-1">类型优化 <a class="header-anchor" href="#类型优化" aria-label="Permalink to &quot;类型优化&quot;">​</a></h2><p>Electron 包的子路径提供了更完善的类型定义。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron/main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> shell </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron/common</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,36),p=[e];function t(c,r,i,D,y,F){return n(),a("div",null,p)}const C=s(o,[["render",t]]);export{A as __pageData,C as default};