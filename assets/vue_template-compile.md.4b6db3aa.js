import{_ as s,c as a,o as l,a as o}from"./app.68ea3551.js";const D=JSON.parse('{"title":"模板编译","description":"","frontmatter":{},"headers":[],"relativePath":"vue/template-compile.md"}'),e={name:"vue/template-compile.md"},n=o(`<h1 id="模板编译" tabindex="-1">模板编译 <a class="header-anchor" href="#模板编译" aria-hidden="true">#</a></h1><blockquote><p>模板字符串</p></blockquote><ul><li>词法分析</li><li>语法分析</li></ul><blockquote><p>模板 AST</p></blockquote><ul><li>AST 转换</li></ul><blockquote><p>JS AST</p></blockquote><ul><li>代码生成</li></ul><blockquote><p>渲染函数</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> templateAST </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(template)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 词法 + 语法分析</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> jsAST </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">transform</span><span style="color:#A6ACCD;">(templateAST)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// AST 转换</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> code </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate</span><span style="color:#A6ACCD;">(jsAST)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 代码生成</span></span>
<span class="line"></span></code></pre></div>`,9),t=[n];function p(c,r,i,A,y,C){return l(),a("div",null,t)}const u=s(e,[["render",p]]);export{D as __pageData,u as default};
