import{_ as e,c as a,o as s,U as l}from"./chunks/framework.e548c890.js";const k=JSON.parse('{"title":"useCallback","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react/react/hooks/use-callback.md","filePath":"fe/react/react/hooks/use-callback.md","lastUpdated":1702821351000}'),c={name:"fe/react/react/hooks/use-callback.md"},o=l('<h1 id="usecallback" tabindex="-1">useCallback <a class="header-anchor" href="#usecallback" aria-label="Permalink to &quot;useCallback&quot;">​</a></h1><p>缓存函数定义，等价于 <code>useMemo</code> 返回函数。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cachedFn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCallback</span><span style="color:#A6ACCD;">(fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dependencies)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>参数：</p><ul><li><code>fn</code>：被缓存的函数</li><li><code>dependencies</code>：<code>fn</code> 用到的所有响应式数据</li></ul><p>返回值：</p><ul><li>缓存后的 <code>fn</code> 函数</li></ul><p>用途：</p><ul><li>跳过 <code>memo</code> 子组件的重新渲染</li><li>自定义 hook 返回的函数最好都用 <code>useCallback</code> 包裹，方便用户优化</li></ul>',9),t=[o];function n(p,d,r,i,u,_){return s(),a("div",null,t)}const C=e(c,[["render",n]]);export{k as __pageData,C as default};
