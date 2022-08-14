import{_ as s,c as e,o as n,a}from"./app.b1f5e497.js";const u=JSON.parse('{"title":"\u4E8B\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E8B\u4EF6\u7C7B\u578B","slug":"\u4E8B\u4EF6\u7C7B\u578B"},{"level":2,"title":"\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F","slug":"\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F"},{"level":3,"title":"addEventListener","slug":"addeventlistener"},{"level":3,"title":"\u4E8B\u4EF6\u5904\u7406\u5BF9\u8C61","slug":"\u4E8B\u4EF6\u5904\u7406\u5BF9\u8C61"},{"level":2,"title":"\u5192\u6CE1","slug":"\u5192\u6CE1"},{"level":2,"title":"\u6355\u83B7","slug":"\u6355\u83B7"}],"relativePath":"browser/event.md"}'),l={name:"browser/event.md"},o=a(`<h1 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4E8B\u4EF6\u7C7B\u578B" tabindex="-1">\u4E8B\u4EF6\u7C7B\u578B <a class="header-anchor" href="#\u4E8B\u4EF6\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u9F20\u6807\u4E8B\u4EF6\uFF1A</p><ul><li><code>click</code></li><li><code>contextmenu</code></li><li><code>mouseover</code>/<code>mouseout</code></li><li><code>mousedown</code>/<code>mouseup</code></li><li><code>mouseover</code></li></ul><p>\u952E\u76D8\u4E8B\u4EF6\uFF1A</p><ul><li><code>keydown</code>/<code>keyup</code></li></ul><p>\u8868\u5355\u4E8B\u4EF6\uFF1A</p><ul><li><code>submit</code></li><li><code>focus</code></li></ul><p>DOM \u4E8B\u4EF6\uFF1A</p><ul><li><code>DOMContentLoaded</code></li></ul><p>CSS \u4E8B\u4EF6\uFF1A</p><ul><li><code>transitionend</code></li></ul><h2 id="\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F" tabindex="-1">\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F <a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F" aria-hidden="true">#</a></h2><p>\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F (<strong>event handler</strong>) \u662F\u5728\u4E8B\u4EF6\u89E6\u53D1\u65F6\u6267\u884C\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A\u3002</p><h3 id="addeventlistener" tabindex="-1">addEventListener <a class="header-anchor" href="#addeventlistener" aria-hidden="true">#</a></h3><p>\u6DFB\u52A0\u5904\u7406\u7A0B\u5E8F\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>event\uFF1A\u4E8B\u4EF6\u540D\uFF0CString</li><li>handler\uFF1A\u5904\u7406\u51FD\u6570</li><li>options\uFF1A <ul><li>once\uFF1A\u662F\u5426\u89E6\u53D1 1 \u6B21\u540E\u88AB\u79FB\u9664</li><li>capture\uFF1A</li><li>passive\uFF1A\u8BBE\u4E3A true \u4E0D\u4F1A\u8C03\u7528 preventDefault()</li></ul></li></ul><p>\u79FB\u9664\u5904\u7406\u7A0B\u5E8F\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeEventListener</span><span style="color:#A6ACCD;">(event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6BCF\u79CD\u4E8B\u4EF6\u53EF\u80FD\u7ED1\u5B9A\u4E86\u591A\u4E2A\u5904\u7406\u51FD\u6570\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u5165\u76F8\u540C\u7684\u51FD\u6570\u624D\u80FD\u6B63\u786E\u79FB\u9664\u3002</p><p>\u67D0\u4E9B\u4E8B\u4EF6\u53EA\u80FD\u4F7F\u7528 <code>addEventListener</code>\uFF0C\u6BD4\u5982 <code>DOMContentLoaded</code> \u548C <code>transitionend</code>\u3002</p><p>\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u7684 <code>this</code> \u5C31\u662F\u5BF9\u5E94\u7684 HTML \u5143\u7D20\u3002</p><p>\u4E8B\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F\u4F1A\u4F5C\u4E3A event \u5BF9\u8C61\u4F20\u5165\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</p><p>event \u5BF9\u8C61\u5C5E\u6027\uFF1A</p><ul><li>type\uFF1A\u4E8B\u4EF6\u540D\uFF0CString</li><li>currentTarget\uFF1A\u4E0E this \u76F8\u540C</li><li>...... (\u6BCF\u79CD\u7C7B\u578B\u7684\u4E8B\u4EF6\u90FD\u6709\u81EA\u5DF1\u72EC\u6709\u7684\u4E00\u7EC4\u5C5E\u6027)</li></ul><h3 id="\u4E8B\u4EF6\u5904\u7406\u5BF9\u8C61" tabindex="-1">\u4E8B\u4EF6\u5904\u7406\u5BF9\u8C61 <a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406\u5BF9\u8C61" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u6307\u5B9A\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u5904\u7406\u7A0B\u5E8F\uFF0C\u8FD8\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5177\u6709 <code>handleEvent</code> \u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u5BF9\u4E8E\u590D\u6742\u7E41\u7410\u3001\u4EE3\u7801\u91CF\u5927\u7684\u5904\u7406\u51FD\u6570\uFF0C\u5C31\u53EF\u4EE5\u5C01\u88C5\u5230\u4E00\u4E2A\u7C7B\u6216\u5BF9\u8C61\u91CC\uFF0C\u4ECE\u800C\u63D0\u9AD8\u53EF\u8BFB\u6027\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Menu</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleEvent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// mousedown -&gt; onMousedown</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">method</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toUpperCase</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">method</span><span style="color:#F07178;">](</span><span style="color:#A6ACCD;">event</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onMousedown</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mouse button pressed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onMouseup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...and released.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5192\u6CE1" tabindex="-1">\u5192\u6CE1 <a class="header-anchor" href="#\u5192\u6CE1" aria-hidden="true">#</a></h2><p>\u5192\u6CE1 (bubbling)\uFF1A\u9996\u5148\u8FD0\u884C<strong>\u76F4\u63A5\u5143\u7D20</strong>\u7684\u5904\u7406\u51FD\u6570\uFF0C\u7136\u540E\u662F\u7236\u5143\u7D20\uFF0C\u4F9D\u6B64\u7C7B\u63A8\u76F4\u5230\u6839\u5143\u7D20\u3002</p><p>\u51E0\u4E4E\u6240\u6709\u4E8B\u4EF6\u90FD\u4F1A\u5192\u6CE1\uFF0C\u9664\u4E86 <code>focus</code> \u7B49\u5C11\u6570\u4E8B\u4EF6\u3002</p><p>\u8BBF\u95EE\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20\uFF1A</p><ul><li><code>event.target</code>\uFF1A\u5D4C\u5957\u6700\u6DF1\u7684\u76F4\u63A5\u5143\u7D20</li><li><code>this</code> \u6216 <code>event.currentTarget</code>\uFF1A\u5F53\u524D\u5192\u6CE1\u5230\u7684\u5143\u7D20\uFF0C\u5F53\u524D\u5904\u7406\u51FD\u6570\u6240\u5728\u7684\u5143\u7D20</li></ul><p>\u901A\u5E38\u5192\u6CE1\u4F1A\u4EE5 <code>document</code> \u5BF9\u8C61\u6216 <code>window</code> \u5BF9\u8C61\u7ED3\u675F\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5904\u7406\u51FD\u6570\u4E2D\u624B\u52A8\u505C\u6B62\u5192\u6CE1\u3002</p><ul><li><code>event.stopPropagation()</code>\uFF1A\u505C\u6B62\u5192\u6CE1\uFF0C\u963B\u6B62\u7236\u5143\u7D20\u7684\u5904\u7406\u51FD\u6570\u6267\u884C</li><li><code>event.stopImmediatePropagation()</code>\uFF1A\u505C\u6B62\u5192\u6CE1\uFF0C\u5E76\u963B\u6B62\u5F53\u524D\u5143\u7D20\u5728\u5F53\u524D\u4E8B\u4EF6\u4E0A\u7684\u5176\u4ED6\u5904\u7406\u51FD\u6570\u6267\u884C</li></ul><h2 id="\u6355\u83B7" tabindex="-1">\u6355\u83B7 <a class="header-anchor" href="#\u6355\u83B7" aria-hidden="true">#</a></h2><p>\u4E8B\u4EF6\u4F20\u64AD\u6709 3 \u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u6355\u83B7 (capturing)</li><li>\u76EE\u6807 (target)</li><li>\u5192\u6CE1 (bubbling)</li></ul><img src="https://s2.loli.net/2022/08/02/GHcwO74JatRhyTN.png" width="80%"><p>\u4F7F\u7528 <code>on&lt;event&gt;</code> \u6216 <code>addEventListener(event, func)</code> \u8BBE\u7F6E\u7684\u5904\u7406\u51FD\u6570\u90FD\u5728\u5192\u6CE1\u9636\u6BB5\u6267\u884C\u3002</p><p><code>addEventListener(event, func, { capture: true })</code> \u5C06\u4F1A\u4F7F <code>func</code> \u5728\u6355\u83B7\u9636\u6BB5\u6267\u884C\u3002</p><p>\u7B80\u5199\uFF1A<code>addEventListener(event, func, true)</code></p><p>\u5220\u9664\u5904\u7406\u51FD\u6570\u65F6\u4E5F\u9700\u8981\u6307\u5B9A\u6355\u83B7\u9636\u6BB5\uFF1A<code>removeEventListener(event, func, true)</code></p><ul><li><code>event.eventPhase</code>\uFF1A\u5F53\u524D\u4E8B\u4EF6\u4F20\u64AD\u7684\u9636\u6BB5</li></ul>`,45),p=[o];function t(c,r,d,i,F,D){return n(),e("div",null,p)}var C=s(l,[["render",t]]);export{u as __pageData,C as default};
