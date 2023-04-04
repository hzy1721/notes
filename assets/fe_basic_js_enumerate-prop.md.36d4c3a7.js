import{_ as s,c as n,o as a,d as l}from"./app.b2b4ff33.js";const A=JSON.parse('{"title":"枚举属性","description":"","frontmatter":{},"headers":[{"level":2,"title":"自有属性","slug":"自有属性","link":"#自有属性","children":[{"level":3,"title":"测试脚本","slug":"测试脚本","link":"#测试脚本","children":[]}]}],"relativePath":"fe/basic/js/enumerate-prop.md","lastUpdated":1680593177000}'),o={name:"fe/basic/js/enumerate-prop.md"},p=l(`<h1 id="枚举属性" tabindex="-1">枚举属性 <a class="header-anchor" href="#枚举属性" aria-hidden="true">#</a></h1><p>对象属性分为：</p><ol><li>自有属性： <ul><li>数据/访问器</li><li>字符串/Symbol</li><li>可枚举/不可枚举</li></ul></li><li>继承属性：对象从原型链中继承属性</li></ol><h2 id="自有属性" tabindex="-1">自有属性 <a class="header-anchor" href="#自有属性" aria-hidden="true">#</a></h2><table><thead><tr><th>语法</th><th>包含</th><th>不包含</th></tr></thead><tbody><tr><td><code>for...in</code> + <code>hasOwnProperty</code></td><td>数据/字符串/可枚举</td><td>访问器/Symbol/不可枚举</td></tr><tr><td><code>Object.keys</code></td><td>数据/字符串/可枚举</td><td>访问器/Symbol/不可枚举</td></tr><tr><td><code>JSON.stringify</code></td><td>数据/字符串/可枚举</td><td>访问器/Symbol/不可枚举</td></tr><tr><td><code>...</code></td><td>数据/字符串/Symbol/可枚举</td><td>访问器/不可枚举</td></tr><tr><td><code>Object.assign</code></td><td>数据/字符串/Symbol/可枚举</td><td>访问器/不可枚举</td></tr><tr><td><code>_.clone</code></td><td>数据/字符串/Symbol/可枚举</td><td>访问器/不可枚举</td></tr><tr><td><code>Object.getOwnPropertyNames</code></td><td>数据/访问器/字符串/可枚举/不可枚举</td><td>Symbol</td></tr><tr><td><code>Object.getOwnPropertySymbols</code></td><td>数据/访问器/Symbol/可枚举/不可枚举</td><td>字符串</td></tr><tr><td><code>Object.getOwnPropertyDescriptors</code></td><td>数据/访问器/字符串/Symbol/可枚举/不可枚举</td><td></td></tr><tr><td><code>Reflect.ownKeys</code></td><td>数据/访问器/字符串/Symbol/可枚举/不可枚举</td><td></td></tr></tbody></table><p>枚举顺序：</p><ul><li>语法符合非负整数的字符串属性，按照数值顺序从小到大</li><li>剩余字符串属性，按照添加的先后顺序</li><li>符号属性，按照添加的先后顺序</li></ul><h3 id="测试脚本" tabindex="-1">测试脚本 <a class="header-anchor" href="#测试脚本" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dKey </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(a) data prop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(c) string prop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">dKey</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(d) Symbol prop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(e) enumerable prop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(b) accessor prop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(f) non-enumerable prop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dKey</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clone </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/** XXX */</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> props) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">clone.</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">key </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> dKey </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">clone[key]</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),e=[p];function t(c,r,D,y,F,d){return a(),n("div",null,e)}const i=s(o,[["render",t]]);export{A as __pageData,i as default};
