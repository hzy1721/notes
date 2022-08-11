import{_ as s,c as a,o as n,a as l}from"./app.b02377b5.js";var p="/assets/closure_variable.2be94562.png",o="/assets/closure_function.14addbf1.png",e="/assets/closure_outer.e0dc139d.png";const h=JSON.parse('{"title":"\u95ED\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u7528\u57DF","slug":"\u4F5C\u7528\u57DF"},{"level":2,"title":"\u8BCD\u6CD5\u73AF\u5883","slug":"\u8BCD\u6CD5\u73AF\u5883"},{"level":2,"title":"\u95ED\u5305\u7684\u5B9E\u73B0\u539F\u7406","slug":"\u95ED\u5305\u7684\u5B9E\u73B0\u539F\u7406"},{"level":2,"title":"\u5783\u573E\u6536\u96C6","slug":"\u5783\u573E\u6536\u96C6"},{"level":2,"title":"var","slug":"var"},{"level":2,"title":"IIFE","slug":"iife"}],"relativePath":"javascript/closure.md"}'),c={name:"javascript/closure.md"},t=l('<h1 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h1><p><strong>\u95ED\u5305 (closure)</strong> \u6307\u7684\u662F\u51FD\u6570\u58F0\u660E\u65F6\u7ED1\u5B9A\u5916\u90E8\u73AF\u5883\u7684\u53D8\u91CF (\u800C<strong>\u4E0D\u662F</strong>\u52A8\u6001\u7ED1\u5B9A\u8C03\u7528\u65F6\u7684\u5916\u90E8\u73AF\u5883)\uFF0C\u540E\u7EED\u8C03\u7528\u4ECD\u80FD\u8BBF\u95EE\u548C\u4FEE\u6539\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u901A\u5E38\u9002\u7528\u4E8E\u51FD\u6570\u4F5C\u4E3A\u4E00\u7B49\u516C\u6C11\u7684\u8BED\u8A00\u3002</p><h2 id="\u4F5C\u7528\u57DF" tabindex="-1">\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u6709 3 \u79CD\u4F5C\u7528\u57DF\uFF0C\u53EA\u5728\u6240\u5904\u7684\u4F5C\u7528\u57DF\u4E2D\u53EF\u89C1\uFF1A</p><ul><li>\u5168\u5C40\u4F5C\u7528\u57DF</li><li>\u51FD\u6570\u4F5C\u7528\u57DF</li><li>\u5757\u4F5C\u7528\u57DF</li></ul><h2 id="\u8BCD\u6CD5\u73AF\u5883" tabindex="-1">\u8BCD\u6CD5\u73AF\u5883 <a class="header-anchor" href="#\u8BCD\u6CD5\u73AF\u5883" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A\u4F5C\u7528\u57DF\u90FD\u6709\u4E00\u4E2A\u79F0\u4E3A<strong>\u8BCD\u6CD5\u73AF\u5883 (Lexical Environment)</strong> \u7684\u9690\u85CF\u5BF9\u8C61\uFF0C\u7531 2 \u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li>\u73AF\u5883\u8BB0\u5F55 (Environment Record)\uFF1A\u5B58\u50A8\u6240\u6709\u5C40\u90E8\u53D8\u91CF\u4F5C\u4E3A\u5C5E\u6027</li><li>\u5BF9\u5916\u90E8\u8BCD\u6CD5\u73AF\u5883\u7684\u5F15\u7528 (\u5168\u5C40\u8BCD\u6CD5\u73AF\u5883\u65E0\u5916\u90E8\u5F15\u7528)</li></ul><p>\u5BF9\u4E8E<strong>\u53D8\u91CF</strong>\u6765\u8BF4\uFF0C\u8BCD\u6CD5\u73AF\u5883\u9884\u5148\u8BFB\u53D6\u6240\u6709\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u8BBE\u4E3A\u672A\u521D\u59CB\u5316 (Uninitialized) \u72B6\u6001\uFF0C\u5728\u9047\u5230\u58F0\u660E\u4E4B\u524D\u4E0D\u80FD\u5F15\u7528\uFF0C\u5C31\u50CF\u8BE5\u53D8\u91CF\u4E0D\u5B58\u5728\u4E00\u6837\u3002\u9047\u5230\u58F0\u660E\u8BED\u53E5\u540E\uFF0C\u53D8\u91CF\u53EF\u4EE5\u88AB\u8BFB\u53D6\u548C\u4FEE\u6539\u3002</p><p><img src="'+p+'" alt=""></p><p>\u5BF9\u4E8E<strong>\u51FD\u6570</strong>\u6765\u8BF4\uFF0C\u8BCD\u6CD5\u73AF\u5883\u4F1A\u9884\u5148<strong>\u8BFB\u53D6\u5E76\u521D\u59CB\u5316</strong>\u6240\u6709\u58F0\u660E\u7684\u51FD\u6570\uFF0C\u5141\u8BB8\u8C03\u7528\u4E0B\u65B9\u58F0\u660E\u7684\u51FD\u6570\u3002</p><p><img src="'+o+'" alt=""></p><p>\u8BBF\u95EE\u53D8\u91CF\u65F6\uFF0C\u9996\u5148\u641C\u7D22\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u8BCD\u6CD5\u73AF\u5883\uFF0C\u5176\u6B21\u662F\u5916\u90E8\u4EE5\u53CA\u66F4\u5916\u90E8\uFF0C\u76F4\u5230\u5168\u5C40\u3002\u5982\u679C\u90FD\u6CA1\u627E\u5230\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\u62A5\u9519\uFF0C\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u4F1A\u58F0\u660E\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF (\u5947\u602A\u7684\u884C\u4E3A)\u3002</p><h2 id="\u95ED\u5305\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1">\u95ED\u5305\u7684\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#\u95ED\u5305\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u540C\u6837\u6709\u81EA\u5DF1\u7684\u8BCD\u6CD5\u73AF\u5883\uFF0C\u5E76\u4F7F\u7528 <code>[[Environment]]</code> \u9690\u85CF\u5C5E\u6027\u5B58\u50A8\u5BF9\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528\uFF0C\u521B\u5EFA\u51FD\u6570\u65F6\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u4ECE\u800C\u5B9E\u73B0\u201C\u8BB0\u4F4F\u201D\u58F0\u660E\u65F6\u7684\u5916\u90E8\u53D8\u91CF\u3002</p><p>\u4E0D\u7BA1\u8FD9\u4E2A\u51FD\u6570\u88AB\u4F20\u9012\u5230\u4EC0\u4E48\u5730\u65B9\u8C03\u7528\uFF0C\u8C03\u7528\u65F6\u7684\u5916\u90E8\u8BCD\u6CD5\u73AF\u5883\u6C38\u8FDC\u662F\u58F0\u660E\u65F6\u7684\u5916\u90E8\u73AF\u5883\uFF0C\u4E0E\u8C03\u7528\u65F6\u7684\u5916\u90E8\u73AF\u5883\u65E0\u5173\uFF0C\u4FDD\u8BC1\u4E86\u51FD\u6570\u7684\u53EF\u7528\u6027\u3002</p><p><img src="'+e+`" alt=""></p><h2 id="\u5783\u573E\u6536\u96C6" tabindex="-1">\u5783\u573E\u6536\u96C6 <a class="header-anchor" href="#\u5783\u573E\u6536\u96C6" aria-hidden="true">#</a></h2><p>\u901A\u5E38\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u5982\u679C\u6CA1\u6709\u5176\u4ED6\u53D8\u91CF\u5F15\u7528\u8FD9\u4E2A\u51FD\u6570\u73AF\u5883\uFF0C\u8BE5\u73AF\u5883\u4F1A\u4ECE\u5185\u5B58\u4E2D\u5220\u9664\uFF0C\u4E5F\u5C31\u662F\u6240\u8C13\u7684\u201C\u5783\u573E\u56DE\u6536\u201D\u3002\u5982\u679C\u51FD\u6570\u8FD4\u56DE\u4E86\u53E6\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u5D4C\u5957\u51FD\u6570\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570\u7684\u8BCD\u6CD5\u73AF\u5883\uFF0C\u5C31\u4E0D\u4F1A\u53D1\u751F\u5783\u573E\u56DE\u6536\uFF0C\u76F4\u5230\u8FD4\u56DE\u7684\u5D4C\u5957\u51FD\u6570\u4E0D\u88AB\u4F7F\u7528\u540E\uFF0C\u624D\u4F1A\u56DE\u6536\u51FD\u6570\u7684\u73AF\u5883\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> g </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5F53 g \u51FD\u6570\u5B58\u5728\u65F6\uFF0Cf \u7684\u73AF\u5883\u4F1A\u88AB\u4FDD\u7559\u5728\u5185\u5B58\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">g </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u73B0\u5728\u5185\u5B58\u88AB\u6E05\u7406\u4E86</span></span>
<span class="line"></span></code></pre></div><p>\u76EE\u524D\u4E3B\u6D41\u7684 V8 \u5F15\u64CE\u4F1A\u5BF9\u8FD9\u79CD\u60C5\u51B5\u505A\u4E00\u4E9B\u4F18\u5316\uFF0C\u5982\u679C\u8FD4\u56DE\u7684\u51FD\u6570\u6CA1\u6709\u5F15\u7528\u5916\u90E8\u73AF\u5883\u7684\u4EFB\u4F55\u53D8\u91CF\uFF0C\u5219\u5916\u90E8\u73AF\u5883\u4E5F\u6CA1\u6709\u5FC5\u8981\u4FDD\u5B58\uFF0C\u4F1A\u4ECE<strong>\u5916\u90E8\u73AF\u5883\u94FE</strong>\u4E0A\u5220\u9664\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Surprise!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">the closest value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">g</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">debugger</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5728 Console \u4E2D\u8F93\u5165 value \u4F1A\u663E\u793A &quot;Surprise!&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> g </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">g</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="var" tabindex="-1">var <a class="header-anchor" href="#var" aria-hidden="true">#</a></h2><p><code>var</code> \u662F ES6 \u4E4B\u524D\u58F0\u660E\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0CES6 \u5F15\u5165\u7684 <code>let</code> \u548C <code>const</code> <strong>\u5F7B\u5E95</strong>\u53D6\u4EE3\u4E86 <code>var</code>\u3002<code>var</code> \u6709\u4E00\u4E9B\u4E0E\u4F5C\u7528\u57DF\u76F8\u5173\u7684\u5947\u602A\u6027\u8D28\u3002</p><p><code>var</code> \u53EA\u6709\u5168\u5C40\u4F5C\u7528\u57DF\u548C\u51FD\u6570\u4F5C\u7528\u57DF\uFF0C\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u3002\u4EE3\u7801\u5757\u4E2D\u7684\u53D8\u91CF\u80FD\u591F\u88AB\u5916\u90E8\u8BBF\u95EE\uFF0C\u53EA\u6709\u51FD\u6570\u80FD\u9694\u7EDD\u53D8\u91CF\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sayHi</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">phrase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">phrase</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Hello</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(phrase)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ReferenceError: phrase is not defined</span></span>
<span class="line"></span></code></pre></div><p><code>var</code> \u91CD\u590D\u58F0\u660E\u4E0D\u4F1A\u62A5\u9519\uFF0C\u540E\u7EED\u91CD\u590D\u7684\u58F0\u660E\u4F1A\u88AB\u5F53\u4F5C\u8D4B\u503C\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(user)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// John</span></span>
<span class="line"></span></code></pre></div><p>\u4E0E <code>let/const</code> \u4E0D\u540C\uFF0C<code>var</code> \u5728\u4F5C\u7528\u57DF\u4E00\u5F00\u59CB\u5C31\u53EF\u4EE5\u88AB\u5F15\u7528\uFF0C\u79F0\u4E3A\u53D8\u91CF\u63D0\u5347 (hoisting)\u3002\u76F8\u5F53\u4E8E\u5728\u4F5C\u7528\u57DF\u4E00\u5F00\u59CB\u5C31\u58F0\u660E\u4E86\u6240\u6709\u53D8\u91CF\uFF0C\u4F46\u662F\u6CA1\u6709\u8D4B\u503C\uFF0C\u53EA\u6709\u9047\u5230\u771F\u6B63\u7684\u58F0\u660E\u8BED\u53E5\u65F6\u624D\u4F1A\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u5728\u90A3\u4E4B\u524D\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u662F <code>undefined</code>\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sayHi</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">phrase</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">phrase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">phrase</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Hello</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">phrase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">phrase</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// World</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="iife" tabindex="-1">IIFE <a class="header-anchor" href="#iife" aria-hidden="true">#</a></h2><p>\u7531\u4E8E <code>var</code> \u58F0\u660E\u7684\u53D8\u91CF\u53EA\u80FD\u901A\u8FC7\u51FD\u6570\u6765\u9694\u79BB\u4F5C\u7528\u57DF\uFF0C\u5F00\u53D1\u8005\u53D1\u660E\u4E86\u4E00\u79CD\u4F7F\u7528\u51FD\u6570\u6765\u6A21\u4EFF\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u65B9\u5F0F\uFF0C\u79F0\u4E3A <strong>IIFE (Immediately Invoked Function Expression)</strong>\u3002</p><p>\u539F\u7406\u5C31\u662F\u628A\u9700\u8981\u653E\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u4EE3\u7801\u5C01\u88C5\u4E3A\u4E00\u4E2A\u51FD\u6570\u8868\u8FBE\u5F0F\u5E76\u9A6C\u4E0A\u6267\u884C\uFF0C\u8FD9\u6837\u4EE3\u7801\u4E2D\u7684\u53D8\u91CF\u5C31\u4F1A\u4E0E\u5916\u754C\u9694\u79BB\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Hello</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,34),r=[t];function y(F,D,i,A,C,d){return n(),a("div",null,r)}var g=s(c,[["render",y]]);export{h as __pageData,g as default};
