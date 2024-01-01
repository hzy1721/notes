import{_ as e,c as a,o as s,U as t}from"./chunks/framework.e548c890.js";const m=JSON.parse('{"title":"更新","description":"","frontmatter":{},"headers":[],"relativePath":"fe/desktop/electron/update.md","filePath":"fe/desktop/electron/update.md","lastUpdated":1704115023000}'),o={name:"fe/desktop/electron/update.md"},l=t('<h1 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-label="Permalink to &quot;更新&quot;">​</a></h1><h2 id="update-electronjs-org" tabindex="-1">update.electronjs.org <a class="header-anchor" href="#update-electronjs-org" aria-label="Permalink to &quot;update.electronjs.org&quot;">​</a></h2><p>Electron 官方针对开源项目提供的更新服务。</p><p>有以下要求：</p><ul><li>只支持 macOS 和 Windows，不支持 Linux</li><li>有公开的 GitHub 仓库</li><li>产物发布到 GitHub release</li><li>产物已签名</li></ul><p>配置步骤：</p><ol><li>安装 <code>update-electron-app</code></li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update-electron-app</span></span></code></pre></div><ol start="2"><li>在主脚本 <code>main.js</code> 导入并执行</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-electron-app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span></code></pre></div>',10),n=[l];function p(c,r,i,d,u,_){return s(),a("div",null,n)}const C=e(o,[["render",p]]);export{m as __pageData,C as default};
