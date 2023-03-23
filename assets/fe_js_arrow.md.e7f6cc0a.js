import{_ as s,c as n,o as a,d as l}from"./app.e4b9fdbe.js";const C=JSON.parse('{"title":"箭头函数","description":"","frontmatter":{},"headers":[{"level":2,"title":"没有 this","slug":"没有-this","link":"#没有-this","children":[]},{"level":2,"title":"不能用做构造函数","slug":"不能用做构造函数","link":"#不能用做构造函数","children":[]},{"level":2,"title":"没有 arguments","slug":"没有-arguments","link":"#没有-arguments","children":[]},{"level":2,"title":"不能用做生成器函数","slug":"不能用做生成器函数","link":"#不能用做生成器函数","children":[]}],"relativePath":"fe/js/arrow.md"}'),o={name:"fe/js/arrow.md"},p=l(`<h1 id="箭头函数" tabindex="-1">箭头函数 <a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a></h1><p>ES6 引入的一种定义函数的新方式，有以下优点：</p><ul><li>用箭头 <code>=&gt;</code> 代替 <code>function</code> 关键字，语法更简洁</li><li>只有一个参数可以省略圆括号，函数体只有一条语句可以省略花括号，简化了回调函数的写法</li></ul><h2 id="没有-this" tabindex="-1">没有 this <a class="header-anchor" href="#没有-this" aria-hidden="true">#</a></h2><p>普通函数调用时的 <code>this</code> 指向调用该函数的对象，而箭头函数调用时的 <code>this</code> 始终为函数<strong>定义时</strong>所在函数的 <code>this</code>，即使箭头函数被传入另一个函数在内部调用。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sayHi</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sayHello </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sayHi</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefined 或 window</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sayHi</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">arrow</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> group </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Our Group</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">students</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showList</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">students</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">student</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">student</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showList</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Our Group: John</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Our Group: Pete</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Our Group: Alice</span></span>
<span class="line"></span></code></pre></div><h2 id="不能用做构造函数" tabindex="-1">不能用做构造函数 <a class="header-anchor" href="#不能用做构造函数" aria-hidden="true">#</a></h2><p>对箭头函数使用 <code>new</code> 会报错。</p><h2 id="没有-arguments" tabindex="-1">没有 arguments <a class="header-anchor" href="#没有-arguments" aria-hidden="true">#</a></h2><p>函数内访问不到 <code>arguments</code>，可以用 rest 参数代替。</p><h2 id="不能用做生成器函数" tabindex="-1">不能用做生成器函数 <a class="header-anchor" href="#不能用做生成器函数" aria-hidden="true">#</a></h2><p>函数内不能使用 <code>yield</code>。</p>`,13),e=[p];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};