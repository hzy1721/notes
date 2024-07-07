import{_ as s,c as i,o as a,a1 as t}from"./chunks/framework.mNpZ2GHZ.js";const E=JSON.parse('{"title":"常量与变量","description":"","frontmatter":{},"headers":[],"relativePath":"fe/lang/rust/variables.md","filePath":"fe/lang/rust/variables.md","lastUpdated":1720354129000}'),e={name:"fe/lang/rust/variables.md"},h=t(`<h1 id="常量与变量" tabindex="-1">常量与变量 <a class="header-anchor" href="#常量与变量" aria-label="Permalink to &quot;常量与变量&quot;">​</a></h1><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h2><p>用 <code>let</code> 声明的 “变量” 默认是不可变的（也就是常量）。</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>允许重复声明同名变量，后面的会覆盖前面的，从而实现对变量值和类型的修改，并在修改后保持其不可变的特性。</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>用 <code>const</code> 声明常量，显式标注类型，初始值是常量表达式（编译时计算），支持全局作用域。</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ONE_HOUR_SECONDS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> u32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>在 <code>let</code> 后面加上 <code>mut</code> 来声明变量。</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,11),l=[h];function n(p,k,d,r,o,c){return a(),i("div",null,l)}const y=s(e,[["render",n]]);export{E as __pageData,y as default};
