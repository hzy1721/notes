import{_ as a,c as s,o as i,a1 as e}from"./chunks/framework.mNpZ2GHZ.js";const t="/assets/url-prop.C1f4E2js.png",u=JSON.parse('{"title":"URL","description":"","frontmatter":{},"headers":[],"relativePath":"fe/lang/js/url.md","filePath":"fe/lang/js/url.md","lastUpdated":1720354129000}'),l={name:"fe/lang/js/url.md"},n=e(`<h1 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h1><h2 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 完整 URL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com:8000/path/name?q=term#fragment&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 路径 + base URL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path/name?q=term#fragment&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com:8000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p><img src="`+t+'" alt=""></p><ul><li>searchParams：URLSearchParams 对象</li></ul><h2 id="urlsearchparams" tabindex="-1">URLSearchParams <a class="header-anchor" href="#urlsearchparams" aria-label="Permalink to &quot;URLSearchParams&quot;">​</a></h2><p>构造函数：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URLSearchParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>方法：</p><ul><li><code>append(name, value)</code></li><li><code>delete(name)</code></li><li><code>get(name)</code></li><li><code>getAll(name)</code></li><li><code>has(name)</code></li><li><code>set(name, value)</code></li><li><code>sort()</code></li><li>可迭代</li></ul><h2 id="全局函数" tabindex="-1">全局函数 <a class="header-anchor" href="#全局函数" aria-label="Permalink to &quot;全局函数&quot;">​</a></h2><p>URL API 标准化前的遗留函数，更推荐使用 URL 对象。</p><ul><li>转义非 ASCII 字符和部分 ASCII 字符（空格） <ul><li>先转为 UTF-8 编码，然后每个字节替换为 %xx 转义序列</li></ul></li><li>特殊字符：<code>#</code> <code>$</code> <code>&amp;</code> <code>+</code> <code>,</code> <code>/</code> <code>:</code> <code>;</code> <code>=</code> <code>?</code> <code>@</code></li></ul><table tabindex="0"><thead><tr><th></th><th>适用场景</th><th>特殊字符</th></tr></thead><tbody><tr><td><code>encodeURI/decodeURI</code></td><td>完整 URL</td><td>不转义</td></tr><tr><td><code>encodeURIComponent/decodeURIComponent</code></td><td>URL 片段</td><td>转义</td></tr></tbody></table>',15),h=[n];function d(p,o,r,c,k,g){return i(),s("div",null,h)}const y=a(l,[["render",d]]);export{u as __pageData,y as default};
