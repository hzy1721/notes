import{_ as s,c as a,o as i,a1 as e}from"./chunks/framework.mNpZ2GHZ.js";const _=JSON.parse('{"title":"渲染","description":"","frontmatter":{},"headers":[],"relativePath":"fe/vue/vue/render.md","filePath":"fe/vue/vue/render.md","lastUpdated":1702822707000}'),n={name:"fe/vue/vue/render.md"},t=e(`<h1 id="渲染" tabindex="-1">渲染 <a class="header-anchor" href="#渲染" aria-label="Permalink to &quot;渲染&quot;">​</a></h1><h2 id="虚拟-dom" tabindex="-1">虚拟 DOM <a class="header-anchor" href="#虚拟-dom" aria-label="Permalink to &quot;虚拟 DOM&quot;">​</a></h2><p>使用 JS 对象表示 UI 元素的数据，与真实 DOM 保持同步。</p><p>真实 DOM 的元素对应于虚拟 DOM 的 <code>VNode</code>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 更多 vnode */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,5),l=[t];function p(h,d,r,k,o,c){return i(),a("div",null,l)}const g=s(n,[["render",p]]);export{_ as __pageData,g as default};