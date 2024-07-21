import{_ as s,c as i,o as a,a1 as e}from"./chunks/framework.mNpZ2GHZ.js";const y=JSON.parse('{"title":"module","description":"","frontmatter":{},"headers":[],"relativePath":"fe/engineer/bundler/webpack/module.md","filePath":"fe/engineer/bundler/webpack/module.md","lastUpdated":1720354129000}'),t={name:"fe/engineer/bundler/webpack/module.md"},l=e(`<h1 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h1><p>规定不同类型模块的处理方式。</p><h2 id="module-rules" tabindex="-1">module.rules <a class="header-anchor" href="#module-rules" aria-label="Permalink to &quot;module.rules&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>Rule[]</code></td><td><code>Rule</code> 数组，规定模块处理方式</td><td></td></tr></tbody></table><h2 id="rule" tabindex="-1">Rule <a class="header-anchor" href="#rule" aria-label="Permalink to &quot;Rule&quot;">​</a></h2><p><code>Rule</code> 分为 3 部分：</p><ul><li>conditions <ul><li>resource：被引用的资源 <ul><li><code>test/include/exclude/resource</code></li></ul></li><li>issuer：引用方 <ul><li><code>issuer</code></li></ul></li></ul></li><li>results <ul><li>loaders <ul><li><code>loader/options/use</code></li><li><code>query/loaders</code></li><li><code>enforce</code></li></ul></li><li>parser options <ul><li><code>parser</code></li></ul></li></ul></li><li>nested Rules <ul><li><code>rules/oneOf</code></li></ul></li></ul><h2 id="rule-test" tabindex="-1">Rule.test <a class="header-anchor" href="#rule-test" aria-label="Permalink to &quot;Rule.test&quot;">​</a></h2><p>包含文件名满足条件的所有模块。</p><h2 id="rule-type" tabindex="-1">Rule.type <a class="header-anchor" href="#rule-type" aria-label="Permalink to &quot;Rule.type&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>Rule</code> 匹配模块的类型</td><td></td></tr></tbody></table><p>可能的取值：</p><ul><li><code>javascript/auto</code></li><li><code>javascript/dynamic</code></li><li><code>javascript/esm</code></li><li><code>json</code></li><li><code>webassembly/sync</code></li><li><code>webassembly/async</code></li><li><code>asset</code></li><li><code>asset/source</code></li><li><code>asset/resource</code></li><li><code>asset/inline</code></li></ul><h2 id="rule-use" tabindex="-1">Rule.use <a class="header-anchor" href="#rule-use" aria-label="Permalink to &quot;Rule.use&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>UseEntry[]</code></td><td><code>UseEntry</code> 数组，定义使用的 loader</td><td></td></tr><tr><td><code>(info) =&gt; UseEntry[]</code></td><td></td><td></td></tr></tbody></table><h3 id="useentry" tabindex="-1">UseEntry <a class="header-anchor" href="#useentry" aria-label="Permalink to &quot;UseEntry&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UseEntry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UseEntryObject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">info</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UseEntryInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UseEntryObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UseEntryObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  loader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // loader 配置，会被传给 loader</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // options 的别名，已废弃</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UseEntryInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  compiler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  issuer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  realResource</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  resource</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),n=[l];function h(d,r,p,k,o,c){return a(),i("div",null,n)}const E=s(t,[["render",h]]);export{y as __pageData,E as default};