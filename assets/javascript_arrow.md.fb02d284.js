import{_ as s,c as n,o as a,a as l}from"./app.7ac5e822.js";const C=JSON.parse('{"title":"\u7BAD\u5934\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CA1\u6709 this","slug":"\u6CA1\u6709-this"}],"relativePath":"javascript/arrow.md"}'),p={name:"javascript/arrow.md"},o=l(`<h1 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1">\u7BAD\u5934\u51FD\u6570 <a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a></h1><p>ES6 \u5F15\u5165\u7684\u4E00\u79CD\u5B9A\u4E49\u51FD\u6570\u7684\u65B0\u65B9\u5F0F\uFF0C\u6709\u4EE5\u4E0B\u4F18\u70B9\uFF1A</p><ul><li>\u7528\u7BAD\u5934 <code>=&gt;</code> \u4EE3\u66FF <code>function</code> \u5173\u952E\u5B57\uFF0C\u8BED\u6CD5\u66F4\u7B80\u6D01</li><li>\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u7701\u7565\u5706\u62EC\u53F7\uFF0C\u51FD\u6570\u4F53\u53EA\u6709\u4E00\u6761\u8BED\u53E5\u53EF\u4EE5\u7701\u7565\u82B1\u62EC\u53F7\uFF0C\u7B80\u5316\u4E86\u56DE\u8C03\u51FD\u6570\u7684\u5199\u6CD5</li></ul><h2 id="\u6CA1\u6709-this" tabindex="-1">\u6CA1\u6709 this <a class="header-anchor" href="#\u6CA1\u6709-this" aria-hidden="true">#</a></h2><p>\u666E\u901A\u51FD\u6570\u8C03\u7528\u65F6\u7684 <code>this</code> \u6307\u5411\u8C03\u7528\u8BE5\u51FD\u6570\u7684\u5BF9\u8C61\uFF0C\u800C\u7BAD\u5934\u51FD\u6570\u8C03\u7528\u65F6\u7684 <code>this</code> \u59CB\u7EC8\u4E3A\u51FD\u6570<strong>\u5B9A\u4E49\u65F6</strong>\u6240\u5728\u51FD\u6570\u7684 <code>this</code>\uFF0C\u5373\u4F7F\u7BAD\u5934\u51FD\u6570\u88AB\u4F20\u5165\u53E6\u4E00\u4E2A\u51FD\u6570\u5728\u5185\u90E8\u8C03\u7528\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sayHi</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sayHello </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sayHi</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefined \u6216 window</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sayHi</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">arrow</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> group </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Our Group</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">students</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showList</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">students</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">student</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">student</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showList</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Our Group: John</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Our Group: Pete</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Our Group: Alice</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,y,F,D,A){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
