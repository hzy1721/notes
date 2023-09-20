import{_ as e,c as s,o as a,U as o}from"./chunks/framework.e548c890.js";const h=JSON.parse('{"title":"useMemo","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react-stack/react/hooks/use-memo.md","filePath":"fe/react-stack/react/hooks/use-memo.md","lastUpdated":1684401573000}'),l={name:"fe/react-stack/react/hooks/use-memo.md"},t=o('<h1 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-label="Permalink to &quot;useMemo&quot;">​</a></h1><p>缓存计算结果。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cachedValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMemo</span><span style="color:#A6ACCD;">(calculateValue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dependencies)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>参数：</p><ul><li><code>calculateValue</code>：计算函数，返回需要缓存的结果</li><li><code>dependencies</code>：同 <code>useEffect</code></li></ul><p>返回值：</p><ul><li>缓存的计算结果</li></ul><p>警告：</p><ul><li>缓存会在部分情况下被清除，只用于性能优化，不要用于记住信息</li></ul><p>用途：</p><ul><li>跳过昂贵计算，比如 &gt; 1ms</li><li>跳过 <code>memo</code> 子组件的重新渲染</li></ul>',11),c=[t];function n(p,r,i,d,u,m){return a(),s("div",null,c)}const f=e(l,[["render",n]]);export{h as __pageData,f as default};