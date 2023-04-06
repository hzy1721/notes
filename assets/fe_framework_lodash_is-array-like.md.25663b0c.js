import{_ as s,c as a,o as n,d as l}from"./app.176a4f12.js";const E=JSON.parse('{"title":"isArrayLike","description":"","frontmatter":{},"headers":[],"relativePath":"fe/framework/lodash/is-array-like.md","lastUpdated":1680742589000}'),t={name:"fe/framework/lodash/is-array-like.md"},e=l(`<h1 id="isarraylike" tabindex="-1">isArrayLike <a class="header-anchor" href="#isarraylike" aria-hidden="true">#</a></h1><p>是否为类数组对象。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Checks if \`value\` is array-like. A value is considered array-like if it&#39;s</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * not a function and has a \`value.length\` that&#39;s an integer greater than or</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * equal to \`0\` and less than or equal to \`Number.MAX_SAFE_INTEGER\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">since</span><span style="color:#676E95;font-style:italic;"> 4.0.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">category</span><span style="color:#676E95;font-style:italic;"> Lang</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">*</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#676E95;font-style:italic;"> The value to check.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">boolean</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> Returns \`true\` if \`value\` is array-like, else \`false\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">example</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * isArrayLike([1, 2, 3])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * // =&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * isArrayLike(document.body.children)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * // =&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * isArrayLike(&#39;abc&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * // =&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * isArrayLike(Function)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * // =&gt; false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isArrayLike</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">isLength</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,3),o=[e];function p(c,i,r,y,F,f){return n(),a("div",null,o)}const A=s(t,[["render",p]]);export{E as __pageData,A as default};
