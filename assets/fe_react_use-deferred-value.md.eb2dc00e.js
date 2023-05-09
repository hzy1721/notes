import{_ as e,c as a,o as s,d as l}from"./app.a0163938.js";const h=JSON.parse('{"title":"useDeferredValue","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react/use-deferred-value.md","lastUpdated":1683625189000}'),r={name:"fe/react/use-deferred-value.md"},t=l(`<h1 id="usedeferredvalue" tabindex="-1">useDeferredValue <a class="header-anchor" href="#usedeferredvalue" aria-hidden="true">#</a></h1><ul><li>对于耗时的更新操作，在新 UI 构建完成之前，需要显示旧 UI 作为替代</li><li><code>useDeferredValue</code> 可以延迟指定值触发的 UI 更新，第一次显示旧 UI，同时在后台渲染新 UI，直到新 UI 渲染完成再触发一次 re-render 将新 UI 更新上去</li><li>后台渲染是可中断的，如果渲染过程中状态又发生了改变，则会取消当前渲染，从头开始新的渲染</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> deferredValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useDeferredValue</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>value</code>：想要延迟更新的状态值</li></ul>`,4),n=[t];function o(d,c,p,i,u,_){return s(),a("div",null,n)}const D=e(r,[["render",o]]);export{h as __pageData,D as default};
