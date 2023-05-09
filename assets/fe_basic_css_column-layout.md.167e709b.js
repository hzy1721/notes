import{_ as s,c as l,o as n,d as a}from"./app.a0163938.js";const m=JSON.parse('{"title":"多列布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"column-count","slug":"column-count","link":"#column-count","children":[]},{"level":2,"title":"column-width","slug":"column-width","link":"#column-width","children":[]},{"level":2,"title":"columns","slug":"columns","link":"#columns","children":[]},{"level":2,"title":"column-gap","slug":"column-gap","link":"#column-gap","children":[]},{"level":2,"title":"column-fill","slug":"column-fill","link":"#column-fill","children":[]},{"level":2,"title":"column-rule-width","slug":"column-rule-width","link":"#column-rule-width","children":[]},{"level":2,"title":"column-rule-style","slug":"column-rule-style","link":"#column-rule-style","children":[]},{"level":2,"title":"column-rule-color","slug":"column-rule-color","link":"#column-rule-color","children":[]},{"level":2,"title":"column-rule","slug":"column-rule","link":"#column-rule","children":[]},{"level":2,"title":"column-span","slug":"column-span","link":"#column-span","children":[]}],"relativePath":"fe/basic/css/column-layout.md","lastUpdated":1682486230000}'),e={name:"fe/basic/css/column-layout.md"},o=a(`<h1 id="多列布局" tabindex="-1">多列布局 <a class="header-anchor" href="#多列布局" aria-hidden="true">#</a></h1><h2 id="column-count" tabindex="-1">column-count <a class="header-anchor" href="#column-count" aria-hidden="true">#</a></h2><p>把元素内容分成多列。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Keyword value */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-count</span><span style="color:#A6ACCD;">: auto;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;integer&gt; value */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-count</span><span style="color:#A6ACCD;">: 3;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>auto</code> (默认)：列数自适应，由 <code>column-width</code> 决定</li><li><code>&lt;integer&gt;</code>：指定列数，如果 <code>column-width</code> 也指定了数值，则表示允许的最多列数</li></ul><h2 id="column-width" tabindex="-1">column-width <a class="header-anchor" href="#column-width" aria-hidden="true">#</a></h2><p>指定每一列的理想宽度。</p><ul><li>容器会包含尽可能多的列，每一列的宽度不小于指定宽度，可能大于指定宽度来填补空白</li><li>如果容器宽度小于指定宽度，则唯一一列的宽度会小于指定宽度</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Keyword value */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-width</span><span style="color:#A6ACCD;">: auto;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;length&gt; values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-width</span><span style="color:#A6ACCD;">: 60px;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-width</span><span style="color:#A6ACCD;">: 15.5em;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-width</span><span style="color:#A6ACCD;">: 3.3vw;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>auto</code> (默认)：由其他属性决定，比如 <code>column-count</code></li><li><code>&lt;length&gt;</code>：理想宽度，正值</li></ul><h2 id="columns" tabindex="-1">columns <a class="header-anchor" href="#columns" aria-hidden="true">#</a></h2><p><code>column-count/width</code> 的简写。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Column count */</span></span>
<span class="line"><span style="color:#A6ACCD;">columns: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">columns: 2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Column width */</span></span>
<span class="line"><span style="color:#A6ACCD;">columns: 18em;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Both column count and width */</span></span>
<span class="line"><span style="color:#A6ACCD;">columns: 2 auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">columns: auto 12em;</span></span>
<span class="line"><span style="color:#A6ACCD;">columns: auto auto;</span></span>
<span class="line"></span></code></pre></div><h2 id="column-gap" tabindex="-1">column-gap <a class="header-anchor" href="#column-gap" aria-hidden="true">#</a></h2><p>列间距。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Keyword value */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-gap</span><span style="color:#A6ACCD;">: normal;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;length&gt; values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-gap</span><span style="color:#A6ACCD;">: 3px;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-gap</span><span style="color:#A6ACCD;">: 2.5em;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;percentage&gt; value */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-gap</span><span style="color:#A6ACCD;">: 3%;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>normal</code> (默认)：多列布局为 <code>1em</code>，其他布局为 <code>0</code></li><li><code>&lt;length&gt;</code>：间距大小</li><li><code>&lt;percentage&gt;</code>：相对元素宽度的百分比</li></ul><h2 id="column-fill" tabindex="-1">column-fill <a class="header-anchor" href="#column-fill" aria-hidden="true">#</a></h2><p>元素内容如何分配到每一列。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Keyword values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-fill</span><span style="color:#A6ACCD;">: auto;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-fill</span><span style="color:#A6ACCD;">: balance;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-fill</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">balance-all</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>auto</code>：按顺序填充列，可能导致部分列是空的</li><li><code>balance</code> (默认)：所有列均分内容</li><li><code>balance-all</code>：所有 fragment 都会被均分</li></ul><h2 id="column-rule-width" tabindex="-1">column-rule-width <a class="header-anchor" href="#column-rule-width" aria-hidden="true">#</a></h2><p>列之间分隔线的宽度。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Keyword values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-width</span><span style="color:#A6ACCD;">: thin;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-width</span><span style="color:#A6ACCD;">: medium;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-width</span><span style="color:#A6ACCD;">: thick;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;length&gt; values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-width</span><span style="color:#A6ACCD;">: 1px;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-width</span><span style="color:#A6ACCD;">: 2.5em;</span></span>
<span class="line"></span></code></pre></div><ul><li>与 <code>border-width</code> 类型相同</li></ul><h2 id="column-rule-style" tabindex="-1">column-rule-style <a class="header-anchor" href="#column-rule-style" aria-hidden="true">#</a></h2><p>列之间分隔线的样式。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;&#39;border-style&#39;&gt; values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: none;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: hidden;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: dotted;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: dashed;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: solid;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: double;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: groove;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: ridge;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: inset;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-style</span><span style="color:#A6ACCD;">: outset;</span></span>
<span class="line"></span></code></pre></div><ul><li>与 <code>border-style</code> 类型相同</li></ul><h2 id="column-rule-color" tabindex="-1">column-rule-color <a class="header-anchor" href="#column-rule-color" aria-hidden="true">#</a></h2><p>列之间分隔线的颜色。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;color&gt; values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-color</span><span style="color:#A6ACCD;">: red;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-color</span><span style="color:#A6ACCD;">: rgb(192 56 78);</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-color</span><span style="color:#A6ACCD;">: transparent;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule-color</span><span style="color:#A6ACCD;">: hsl(0 100% 50% / 0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="column-rule" tabindex="-1">column-rule <a class="header-anchor" href="#column-rule" aria-hidden="true">#</a></h2><p><code>column-rule-width/style/color</code> 的简写，不限顺序。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">column-rule</span><span style="color:#A6ACCD;">: dotted;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule</span><span style="color:#A6ACCD;">: solid 8px;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule</span><span style="color:#A6ACCD;">: solid blue;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-rule</span><span style="color:#A6ACCD;">: thick inset blue;</span></span>
<span class="line"></span></code></pre></div><h2 id="column-span" tabindex="-1">column-span <a class="header-anchor" href="#column-span" aria-hidden="true">#</a></h2><p>允许子元素横跨多列。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Keyword values */</span></span>
<span class="line"><span style="color:#FFCB6B;">column-span</span><span style="color:#A6ACCD;">: none;</span></span>
<span class="line"><span style="color:#FFCB6B;">column-span</span><span style="color:#A6ACCD;">: all;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>none</code> (默认)：不横跨多列</li><li><code>all</code>：横跨所有列</li></ul>`,39),c=[o];function p(t,i,r,u,d,y){return n(),l("div",null,c)}const h=s(e,[["render",p]]);export{m as __pageData,h as default};
