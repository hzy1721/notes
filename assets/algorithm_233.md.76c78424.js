import{_ as s,c as n,o as a,a as l}from"./app.87442856.js";const C=JSON.parse('{"title":"233. \u6570\u5B57 1 \u7684\u4E2A\u6570","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/233.md"}'),p={name:"algorithm/233.md"},o=l(`<h1 id="_233-\u6570\u5B57-1-\u7684\u4E2A\u6570" tabindex="-1"><a href="https://leetcode.cn/problems/number-of-digit-one/" target="_blank" rel="noopener noreferrer">233. \u6570\u5B57 1 \u7684\u4E2A\u6570</a> <a class="header-anchor" href="#_233-\u6570\u5B57-1-\u7684\u4E2A\u6570" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u4F9D\u6B21\u8BA1\u7B97\u6BCF\u4E00\u4F4D\u4E0A 1 \u51FA\u73B0\u7684\u6B21\u6570\u7136\u540E\u7D2F\u52A0\uFF0Cn \u6700\u5927\u4E3A $10^9$\uFF0C\u6240\u4EE5\u6700\u591A\u9700\u8981\u7D2F\u52A0 10 \u6B21\u3002</p><p>\u4EE5\u767E\u4F4D\u4E3A\u4F8B\uFF0C\u6BCF\u9694 1000 \u4E2A\u6570\uFF0C\u767E\u4F4D\u4E0A\u7684 1 \u90FD\u4F1A\u51FA\u73B0 100 \u6B21\uFF0C\u5341\u4F4D\u548C\u4E2A\u4F4D\u5728 [0, 99] \u4E4B\u95F4\u53D8\u5316\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5F97\u5230\u89C4\u5F8B\uFF1A</p><ul><li>\u4ECE\u53F3\u5F80\u5DE6\u7B2C k \u4F4D (k \u4ECE <strong>0</strong> \u5F00\u59CB)\uFF0C\u6BCF\u9694 $10^{k+1}$ \u4E2A\u6570\uFF0C\u8FD9\u4E00\u4F4D\u4E0A\u7684 1 \u4F1A\u51FA\u73B0 $10^k$ \u6B21</li><li>\u5BF9\u4E8E\u4E0D\u591F $10^{k+1}$ \u5468\u671F\u7684\u5269\u4F59\u6570\uFF0C\u53EF\u4EE5\u8BA1\u7B97\u5176\u4E0E $10^k$ \u7684\u5DEE\uFF0C\u6BD4\u5982\uFF1A <ul><li>12045 \u4E2D\u767E\u4F4D\u5269\u4F59 45 &lt; 100\uFF0C1 \u51FA\u73B0\u7684\u6B21\u6570\u4E3A 0</li><li>12145 \u4E2D\u767E\u4F4D\u5269\u4F59 100 &lt;= 145 &lt; 200\uFF0C1 \u51FA\u73B0\u7684\u6B21\u6570\u4E3A 145 - 100 + 1 = 46</li><li>12345 \u4E2D\u767E\u4F4D\u5269\u4F59 345 &gt;= 200\uFF0C1 \u51FA\u73B0\u7684\u6B21\u6570\u4E3A 100</li></ul></li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">countDigitOne</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">long</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">long</span><span style="color:#F07178;"> powk </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1LL</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> ans </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">powk </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            ans </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">powk </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> powk</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            ans </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">n </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">powk </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> powk </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0LL</span><span style="color:#89DDFF;">),</span><span style="color:#F07178;"> powk</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">            powk </span><span style="color:#89DDFF;">*=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> ans</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};