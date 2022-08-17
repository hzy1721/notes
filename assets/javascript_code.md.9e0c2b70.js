import{_ as s,c as a,o as n,a as l}from"./app.0f2923c6.js";const C=JSON.parse('{"title":"\u624B\u6495\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6709\u5E8F\u6570\u7EC4\u53BB\u91CD","slug":"\u6709\u5E8F\u6570\u7EC4\u53BB\u91CD"},{"level":3,"title":"sort","slug":"sort"},{"level":3,"title":"Set","slug":"set"},{"level":2,"title":"\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26(\u6B21\u6570)","slug":"\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26-\u6B21\u6570"},{"level":2,"title":"\u5BF9\u8C61\u4E0E query param \u4E92\u76F8\u8F6C\u6362","slug":"\u5BF9\u8C61\u4E0E-query-param-\u4E92\u76F8\u8F6C\u6362"},{"level":2,"title":"\u7ED9\u5B9A\u65E5\u671F\u8DDD\u79BB\u4ECA\u5929\u7684\u5929\u6570","slug":"\u7ED9\u5B9A\u65E5\u671F\u8DDD\u79BB\u4ECA\u5929\u7684\u5929\u6570"}],"relativePath":"javascript/code.md"}'),p={name:"javascript/code.md"},o=l(`<h1 id="\u624B\u6495\u9898" tabindex="-1">\u624B\u6495\u9898 <a class="header-anchor" href="#\u624B\u6495\u9898" aria-hidden="true">#</a></h1><h2 id="\u6709\u5E8F\u6570\u7EC4\u53BB\u91CD" tabindex="-1">\u6709\u5E8F\u6570\u7EC4\u53BB\u91CD <a class="header-anchor" href="#\u6709\u5E8F\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a></h2><h3 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">unique</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">unique</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26-\u6B21\u6570" tabindex="-1">\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26(\u6B21\u6570) <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26-\u6B21\u6570" aria-hidden="true">#</a></h2><h2 id="\u5BF9\u8C61\u4E0E-query-param-\u4E92\u76F8\u8F6C\u6362" tabindex="-1">\u5BF9\u8C61\u4E0E query param \u4E92\u76F8\u8F6C\u6362 <a class="header-anchor" href="#\u5BF9\u8C61\u4E0E-query-param-\u4E92\u76F8\u8F6C\u6362" aria-hidden="true">#</a></h2><h2 id="\u7ED9\u5B9A\u65E5\u671F\u8DDD\u79BB\u4ECA\u5929\u7684\u5929\u6570" tabindex="-1">\u7ED9\u5B9A\u65E5\u671F\u8DDD\u79BB\u4ECA\u5929\u7684\u5929\u6570 <a class="header-anchor" href="#\u7ED9\u5B9A\u65E5\u671F\u8DDD\u79BB\u4ECA\u5929\u7684\u5929\u6570" aria-hidden="true">#</a></h2>`,9),e=[o];function r(t,c,F,y,D,i){return n(),a("div",null,e)}var d=s(p,[["render",r]]);export{C as __pageData,d as default};
