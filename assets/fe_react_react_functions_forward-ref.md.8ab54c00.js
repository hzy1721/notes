import{_ as e,c as a,o as s,U as r}from"./chunks/framework.e548c890.js";const h=JSON.parse('{"title":"forwardRef","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react/react/functions/forward-ref.md","filePath":"fe/react/react/functions/forward-ref.md","lastUpdated":1702821351000}'),t={name:"fe/react/react/functions/forward-ref.md"},o=r(`<h1 id="forwardref" tabindex="-1">forwardRef <a class="header-anchor" href="#forwardref" aria-label="Permalink to &quot;forwardRef&quot;">​</a></h1><p>把 ref 透传给子组件，而不是直接绑定到父组件。</p><ul><li>ref 作为组件的第二个参数传入</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> SomeComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">forwardRef</span><span style="color:#A6ACCD;">(render)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// render: (props, ref) =&gt; { ... }</span></span></code></pre></div>`,4),n=[o];function c(l,p,f,d,i,_){return s(),a("div",null,n)}const m=e(t,[["render",c]]);export{h as __pageData,m as default};
