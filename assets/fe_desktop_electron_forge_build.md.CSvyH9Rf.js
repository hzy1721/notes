import{_ as s,c as i,o as a,a1 as l}from"./chunks/framework.mNpZ2GHZ.js";const e="/assets/build-flow.CWCFKVNq.webp",u=JSON.parse('{"title":"打包-构建-发布","description":"","frontmatter":{},"headers":[],"relativePath":"fe/desktop/electron/forge/build.md","filePath":"fe/desktop/electron/forge/build.md","lastUpdated":1704115023000}'),n={name:"fe/desktop/electron/forge/build.md"},t=l('<h1 id="打包-构建-发布" tabindex="-1">打包-构建-发布 <a class="header-anchor" href="#打包-构建-发布" aria-label="Permalink to &quot;打包-构建-发布&quot;">​</a></h1><p>从源码到发布主要有 3 个步骤：</p><ol><li>打包 (package)：源码 -&gt; 可执行应用 (<code>.app</code>/<code>.exe</code>) <ul><li>通常只能打包当前 platform 的产物，比如 macOS 上无法打包 exe 文件</li><li>打包产物放在 <code>out</code> 目录</li></ul></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">electron-forge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span></span></code></pre></div><ol start="2"><li>构建 (make)：可执行应用 -&gt; 安装包/压缩包 (<code>.dmg</code>/<code>.msi</code>/<code>.zip</code>) <ul><li>通常只能构建当前 platform 的产物</li><li>构建产物放在 <code>out/make</code> 目录</li></ul></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">electron-forge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span></span></code></pre></div><ol start="3"><li>发布 (publish)：安装包/可执行应用 -&gt; 各种云服务/商店 <ul><li>GitHub、App Store、微软商店、自己的网站等</li><li>可选，类似于自动部署</li></ul></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">electron-forge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish</span></span></code></pre></div><p><img src="'+e+`" alt=""></p><h2 id="package" tabindex="-1">package <a class="header-anchor" href="#package" aria-label="Permalink to &quot;package&quot;">​</a></h2><ul><li><code>--arch</code>：CPU 架构 <ul><li>可选：<code>ia32</code>、<code>x64</code>、<code>armv7l</code>、<code>arm64</code>、<code>universal</code>、<code>mips64el</code></li><li>可以指定多个，用逗号 <code>,</code> 分隔</li><li>默认：当前机器的架构</li></ul></li><li><code>--platform</code>：操作系统 <ul><li>可选：<code>darwin</code>、<code>mas</code>、<code>win32</code>、<code>linux</code></li><li>默认：当前机器的 OS</li></ul></li></ul><h2 id="make" tabindex="-1">make <a class="header-anchor" href="#make" aria-label="Permalink to &quot;make&quot;">​</a></h2><ul><li><code>--arch</code>：同 package</li><li><code>--platform</code>：同 package</li><li><code>--targets</code>：maker 列表，覆盖配置文件</li><li><code>--skip-package</code>：跳过 package <ul><li>执行 make 默认会执行 package (publish 同理)</li></ul></li></ul><h2 id="makers" tabindex="-1">Makers <a class="header-anchor" href="#makers" aria-label="Permalink to &quot;Makers&quot;">​</a></h2><p>打包-构建相关的配置。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // makers 数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  makers: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 配置对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@electron-forge/maker-zip&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      platforms: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;darwin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;linux&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      config: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Config here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // maker 对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MakerZIP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;darwin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;linux&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>每种 maker 对应一种产物类型，通常只支持特定的 platform，因此 <code>platforms</code> 属性一般不需要开发者填写，除非不想生成所有支持的平台。</p><table tabindex="0"><thead><tr><th>maker</th><th>含义</th><th>platforms</th></tr></thead><tbody><tr><td>dmg</td><td>macOS 安装包</td><td>darwin, mas</td></tr><tr><td>pkg</td><td>App Store 应用、macOS 安装包</td><td>darwin, mas</td></tr><tr><td>Squirrel.Windows</td><td>Windows 应用</td><td>win32</td></tr><tr><td>msi</td><td>Windows 安装包</td><td>win32</td></tr><tr><td>appx</td><td>Windows 商店应用</td><td>win32</td></tr><tr><td>deb</td><td>Debian 发行版应用</td><td>linux</td></tr><tr><td>rpm</td><td>RedHat 发行版应用</td><td>linux</td></tr><tr><td>flatpak</td><td>Linux 沙箱化应用</td><td>linux</td></tr><tr><td>snap</td><td>Linux 沙箱化应用</td><td>linux</td></tr><tr><td>zip</td><td>打包产物的压缩包</td><td>darwin, mas, win32, linux</td></tr></tbody></table><h2 id="publish" tabindex="-1">publish <a class="header-anchor" href="#publish" aria-label="Permalink to &quot;publish&quot;">​</a></h2><ul><li><code>--target</code>：publisher 列表，覆盖配置文件</li><li><code>--dry-run</code>：尝试运行，不会上传产物</li><li><code>--from-dry-run</code>：基于之前 <code>--dry-run</code> 的结果进行发布</li></ul><h2 id="publishers" tabindex="-1">Publishers <a class="header-anchor" href="#publishers" aria-label="Permalink to &quot;Publishers&quot;">​</a></h2><p>发布相关配置。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  publishers: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@electron-forge/publisher-bitbucket&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      config: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        repository: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          owner: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myusername&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myreponame&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li>Bitbucket：发布到 Bitbucket Downloads</li><li><a href="https://github.com/ArekSredzki/electron-release-server" target="_blank" rel="noreferrer">Electron Release Server</a>：自部署的发布服务</li><li>GitHub：发布到 GitHub release</li></ul><h3 id="github-release" tabindex="-1">GitHub release <a class="header-anchor" href="#github-release" aria-label="Permalink to &quot;GitHub release&quot;">​</a></h3><ol><li>生成专用的 PAT，只勾选 <code>public_repo</code></li><li>安装 GitHub Publisher</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @electron-forge/publisher-github</span></span></code></pre></div><ol start="3"><li>修改 Forge 配置文件</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  publishers: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@electron-forge/publisher-github&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      config: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        repository: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          owner: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;github-user-name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;github-repo-name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        prerelease: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        draft: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ol start="4"><li>配置脚本命令</li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;publish&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;electron-forge publish&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><ol start="5"><li>设置 <code>GITHUB_TOKEN</code> 环境变量为 PAT，运行脚本</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GITHUB_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish</span></span></code></pre></div><h2 id="跨平台构建" tabindex="-1">跨平台构建 <a class="header-anchor" href="#跨平台构建" aria-label="Permalink to &quot;跨平台构建&quot;">​</a></h2>`,34),p=[t];function h(k,d,r,o,E,c){return a(),i("div",null,p)}const y=s(n,[["render",h]]);export{u as __pageData,y as default};