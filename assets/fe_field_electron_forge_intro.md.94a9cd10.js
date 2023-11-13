import{_ as s,c as a,o,U as e}from"./chunks/framework.e548c890.js";const h=JSON.parse('{"title":"Forge","description":"","frontmatter":{},"headers":[],"relativePath":"fe/field/electron/forge/intro.md","filePath":"fe/field/electron/forge/intro.md","lastUpdated":1699838445000}'),l={name:"fe/field/electron/forge/intro.md"},n=e(`<h1 id="forge" tabindex="-1">Forge <a class="header-anchor" href="#forge" aria-label="Permalink to &quot;Forge&quot;">​</a></h1><p>Electron 脚手架。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@electron-forge/cli</span></span></code></pre></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">electron-app@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--template=webpack-typescript</span></span></code></pre></div><p>模板：</p><ul><li>webpack</li><li>webpack-typescript</li></ul><h2 id="import-项目" tabindex="-1">import 项目 <a class="header-anchor" href="#import-项目" aria-label="Permalink to &quot;import 项目&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">electron-forge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">import</span></span></code></pre></div><h2 id="scripts" tabindex="-1">scripts <a class="header-anchor" href="#scripts" aria-label="Permalink to &quot;scripts&quot;">​</a></h2><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron-forge start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">package</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron-forge package</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">make</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron-forge make</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span></code></pre></div><h2 id="打包分发" tabindex="-1">打包分发 <a class="header-anchor" href="#打包分发" aria-label="Permalink to &quot;打包分发&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span></span></code></pre></div><ol><li>内部执行 <code>electron-forge package</code>，把应用代码和 Electron 二进制文件打包起来，生成一个目录 <code>out/\${app}-\${platform}-\${arch}</code></li><li>基于打包目录和 <code>forge.config.js</code> 中的 <code>makers</code> 生成最终的分发文件 <code>out/make/xxx</code></li></ol>`,15),p=[n];function t(c,r,i,D,y,C){return o(),a("div",null,p)}const F=s(l,[["render",t]]);export{h as __pageData,F as default};