import{_ as s,c as a,o as n,a as l}from"./app.b22b3ef2.js";const C=JSON.parse('{"title":"\u52A8\u6001\u89C4\u5212","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6700\u5927\u5B50\u6570\u7EC4\u548C","slug":"\u6700\u5927\u5B50\u6570\u7EC4\u548C"}],"relativePath":"algorithm/dp.md"}'),p={name:"algorithm/dp.md"},o=l(`<h1 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><ul><li>\u91CD\u590D\u5B50\u95EE\u9898\uFF1A\u8FD9\u4E9B\u5B50\u95EE\u9898\u4E0D\u5E94\u8BE5\u88AB\u91CD\u590D\u8BA1\u7B97</li><li>\u6700\u4F18\u5B50\u7ED3\u6784\uFF1A\u539F\u95EE\u9898\u7684\u6700\u4F18\u89E3\u53EF\u4EE5\u5206\u89E3\u4E3A\u82E5\u5E72\u4E2A\u5B50\u95EE\u9898\u7684\u6700\u4F18\u89E3</li><li>\u65E0\u540E\u6548\u6027\uFF1A\u540E\u9762\u9636\u6BB5\u7684\u72B6\u6001\u53EA\u4F9D\u8D56\u4E8E\u524D\u9762\u9636\u6BB5\u7684\u72B6\u6001</li></ul><h2 id="\u6700\u5927\u5B50\u6570\u7EC4\u548C" tabindex="-1">\u6700\u5927\u5B50\u6570\u7EC4\u548C <a class="header-anchor" href="#\u6700\u5927\u5B50\u6570\u7EC4\u548C" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">maxSubArray</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-Infinity,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
