import{_ as s,c as l,o as n,d as a}from"./app.32a4a0ab.js";const o="/assets/dom-rect.5c78ea8a.png",d=JSON.parse('{"title":"元素坐标","description":"","frontmatter":{},"headers":[{"level":2,"title":"窗口坐标","slug":"窗口坐标","link":"#窗口坐标","children":[]},{"level":2,"title":"文档坐标","slug":"文档坐标","link":"#文档坐标","children":[]}],"relativePath":"fe/browser/dom/coordinates.md","lastUpdated":1683687617000}'),p={name:"fe/browser/dom/coordinates.md"},e=a('<h1 id="元素坐标" tabindex="-1">元素坐标 <a class="header-anchor" href="#元素坐标" aria-hidden="true">#</a></h1><p>有 2 种坐标系：</p><ul><li>相对于窗口 <ul><li>类似于 <code>position: fixed</code></li></ul></li><li>相对于文档 <ul><li>类似于 <code>position: absolute</code></li></ul></li></ul><h2 id="窗口坐标" tabindex="-1">窗口坐标 <a class="header-anchor" href="#窗口坐标" aria-hidden="true">#</a></h2><p><img src="'+o+`" alt=""></p><ul><li><code>getBoundingClientRect</code>：最小矩形的窗口坐标 <ul><li>返回 <code>DOMRect</code> 对象 <ul><li><code>x/y</code>：左上角的窗口坐标</li><li><code>width/height</code>：宽高</li><li><code>top/bottom</code>：顶部/底部边缘的 Y 坐标</li><li><code>left/right</code>：左侧/右侧边缘的 X 坐标</li></ul></li></ul></li></ul><h2 id="文档坐标" tabindex="-1">文档坐标 <a class="header-anchor" href="#文档坐标" aria-hidden="true">#</a></h2><p>没有标准方法获取文档坐标，实现方式不唯一。</p><ul><li>窗口坐标 + 文档滚动出的部分</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> elem</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBoundingClientRect</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> top </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pageYOffset</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pageXOffset</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>累加 <code>offsetTop/offsetLeft</code> 直到 <code>&lt;body&gt;</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getElementTop </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">elem</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">elem</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offsetTop</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">elem</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offsetParent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getElementLeft </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">elem</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">elem</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offsetLeft</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">elem</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offsetParent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,12),t=[e];function c(r,y,D,F,i,C){return n(),l("div",null,t)}const f=s(p,[["render",c]]);export{d as __pageData,f as default};