import{_ as i,c as s,o as a,a1 as e}from"./chunks/framework.mNpZ2GHZ.js";const g=JSON.parse('{"title":"安全","description":"","frontmatter":{},"headers":[],"relativePath":"fe/desktop/electron/security.md","filePath":"fe/desktop/electron/security.md","lastUpdated":1704115023000}'),l={name:"fe/desktop/electron/security.md"},t=e(`<h1 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h1><p>Electron 安全主要分为两部分：</p><ul><li>前端：涉及到页面代码、第三方依赖</li><li>Electron：涉及到 Chromium/Node/Electron 版本、主进程代码、preload 脚本</li></ul><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-label="Permalink to &quot;前端&quot;">​</a></h2><ol><li>及时更新 npm 依赖版本，不要使用有安全问题的旧版本</li><li>做好主流攻击手段的防御措施，包括 XSS/CSRF/SSRF/DoS/注入/中间人等</li><li>始终使用加密网络协议，比如 HTTPS/WSS/FTPS、而不是 HTTP/WS/FTP</li></ol><h2 id="electron" tabindex="-1">Electron <a class="header-anchor" href="#electron" aria-label="Permalink to &quot;Electron&quot;">​</a></h2><ol><li>尽可能保持 Electron 为最新稳定版本</li><li>不要开启 <code>nodeIntegration</code> (默认)</li><li>始终开启 <code>contextIsolation</code> (默认)</li><li>始终开启 Chromium 进程沙箱 (默认)</li><li>显式指定权限请求的处理函数 <ul><li>Electron 默认允许页面的所有权限请求</li><li>如果想严格控制权限，务必显式指定处理函数</li></ul></li><li>始终开启 <code>webSecurity</code> (默认)</li><li>定义 CSP 策略：响应头或 <code>&lt;meta&gt;</code> 标签</li><li>不要开启 <code>allowRunningInsecureContent</code> (默认)</li><li>不要开启 <code>experimentalFeatures</code> (默认)</li><li>不要使用 <code>enableBlinkFeatures</code> (默认)</li><li>不要开启 <code>allowpopups</code> (默认)</li><li>验证 <code>&lt;webview&gt;</code> 的创建选项，确保不会有影响安全的选项</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;web-contents-created&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  contents.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;will-attach-webview&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">webPreferences</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Strip away preload scripts if unused or verify their location is legitimate</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> webPreferences.preload;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Disable Node.js integration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    webPreferences.nodeIntegration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Verify URL being loaded</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">params.src.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ol start="13"><li>尽可能限制导航的目的 URL</li><li>尽可能限制新窗口的创建</li><li>不要用 <code>shell.openExternal</code> 打开未知内容</li><li>主进程验证接收到的 IPC 消息是否为可信发送方</li></ol><h2 id="electronegativity" tabindex="-1">electronegativity <a class="header-anchor" href="#electronegativity" aria-label="Permalink to &quot;electronegativity&quot;">​</a></h2><p><a href="https://github.com/doyensec/electronegativity" target="_blank" rel="noreferrer">https://github.com/doyensec/electronegativity</a></p><p>扫描 Electron 项目中是否存在影响安全的错误配置。</p>`,12),n=[t];function h(p,k,r,o,d,E){return a(),s("div",null,n)}const y=i(l,[["render",h]]);export{g as __pageData,y as default};
