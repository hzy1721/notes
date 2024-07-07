import{_ as s,c as i,o as t,a1 as a}from"./chunks/framework.mNpZ2GHZ.js";const g=JSON.parse('{"title":"entry","description":"","frontmatter":{},"headers":[],"relativePath":"fe/engineer/bundler/webpack/entry.md","filePath":"fe/engineer/bundler/webpack/entry.md","lastUpdated":1720354129000}'),n={name:"fe/engineer/bundler/webpack/entry.md"},e=a(`<h1 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-label="Permalink to &quot;entry&quot;">​</a></h1><p>打包的入口文件。</p><h2 id="context" tabindex="-1">context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;context&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>string</code></td><td>entry 和 loader 所在目录</td><td>Node 当前工作目录</td></tr></tbody></table><h2 id="entry-1" tabindex="-1">entry <a class="header-anchor" href="#entry-1" aria-label="Permalink to &quot;entry&quot;">​</a></h2><p>打包入口文件，一个 entry 对应一个 chunk/bundle/页面。</p><p>SPA 一个 entry，MPA 多个 entry。</p><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>main</code> chunk 的入口文件路径</td><td></td></tr><tr><td><code>string[]</code></td><td><code>main</code> chunk 的入口文件路径列表</td><td></td></tr><tr><td><code>{ [key: string]: string }</code></td><td><code>key</code> chunk 对应的入口文件路径</td><td></td></tr><tr><td><code>{ [key: string]: descriptor }</code></td><td><code>key</code> chunk 对应的 entry 配置</td><td></td></tr><tr><td><code>() =&gt; entry</code></td><td>动态 entry，每次 <code>make</code> 事件触发</td><td></td></tr></tbody></table><h3 id="descriptor" tabindex="-1">descriptor <a class="header-anchor" href="#descriptor" aria-label="Permalink to &quot;descriptor&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 示意类型，并不是真的 TS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> descriptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 入口文件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 输出文件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 依赖的其他 chunk</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  dependOn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  chunkLoading</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  asyncChunks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  layer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,10),h=[e];function d(r,l,k,p,c,o){return t(),i("div",null,h)}const F=s(n,[["render",d]]);export{g as __pageData,F as default};
