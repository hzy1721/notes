import{_ as e,c as o,o as l,U as c}from"./chunks/framework.e548c890.js";const _=JSON.parse('{"title":"类型转换","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/js/type-conversion.md","filePath":"fe/basic/js/type-conversion.md","lastUpdated":1692806443000}'),a={name:"fe/basic/js/type-conversion.md"},d=c('<h1 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h1><h2 id="转换为字符串" tabindex="-1">转换为字符串 <a class="header-anchor" href="#转换为字符串" aria-label="Permalink to &quot;转换为字符串&quot;">​</a></h2><p>需要字符串的地方，会隐式转换为 <code>String</code> 类型。比如 <code>alert</code>。</p><p>显式转换：<code>String(value)</code></p><h2 id="转换为数字" tabindex="-1">转换为数字 <a class="header-anchor" href="#转换为数字" aria-label="Permalink to &quot;转换为数字&quot;">​</a></h2><p>不同类型原始值之间的算术运算、比较大小时，会隐式把操作数转换为 <code>Number</code> 类型。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span></code></pre></div><p>显式转换：<code>Number(value)</code></p><p>转换规则：</p><ul><li><code>String</code>： <ul><li>去掉首尾空白符，剩余纯数字字符串含有的数字</li><li>如果剩余字符串为空，结果为 0</li><li>如果剩余字符串不符合数字的格式，结果为 NaN</li></ul></li><li><code>Boolean</code>：<code>true</code> 为 1，<code>false</code> 为 0</li><li><code>null</code>：0</li><li><code>undefined</code>：NaN</li></ul><h2 id="转换为布尔值" tabindex="-1">转换为布尔值 <a class="header-anchor" href="#转换为布尔值" aria-label="Permalink to &quot;转换为布尔值&quot;">​</a></h2><p>逻辑运算等需要布尔值的地方，会隐式转换为 <code>Boolean</code> 类型。</p><p>显式转换：<code>Boolean(value)</code></p><p>转换规则：</p><ul><li><code>0</code>、<code>NaN</code>、空字符串、<code>null</code>、<code>undefined</code> 转换为 <code>false</code></li><li>其他值转换为 <code>true</code></li></ul><h2 id="对象转换为原始值" tabindex="-1">对象转换为原始值 <a class="header-anchor" href="#对象转换为原始值" aria-label="Permalink to &quot;对象转换为原始值&quot;">​</a></h2><p>JS 对象不支持运算符重载，算术运算中的对象会隐式转换为原始值。还有一些需要原始值的地方，传入对象也会进行隐式转换。</p><p>所有需要布尔值的上下文，传入对象均转换为 <code>true</code>。</p><p>对象向原始值的转换规则依据的是 “<strong>hint</strong>”，有 3 种类型：</p><ul><li><code>string</code>：转换为字符串</li><li><code>number</code>：转换为数字</li><li><code>default</code>：当运算符不确定期望值的类型时，少数情况下发生 <ul><li>二元加法 <code>+</code> 既可以相加数字，也可以拼接字符串，相加对象时不知道应该转换为哪种类型</li><li>对象与原始值进行 <code>==</code> 比较时，也不知道应该转换为哪种类型</li><li>但是 <code>&lt;</code> 和 <code>&gt;</code> 使用 <code>number</code> hint，这是历史原因</li><li>除了 <code>Date</code>，所有内建对象对 <code>default</code> 的实现与 <code>number</code> 相同</li></ul></li></ul><p>转换过程：</p><ul><li>尝试调用 <code>[Symbol.toPrimitive](hint)</code><ul><li>必须返回一个原始值，否则报错</li></ul></li><li>如果 hint 是 <code>string</code>，尝试调用 <code>toString()</code> 和 <code>valueOf()</code><ul><li>普通对象的 <code>toString()</code> 默认返回 <code>[object Object]</code></li><li>如果这两个方法返回非原始值，返回值会被忽略</li></ul></li><li>如果 hint 是 <code>number</code> 或 <code>default</code>，尝试调用 <code>valueOf()</code> 和 <code>toString()</code><ul><li>普通对象的 <code>valueOf()</code> 默认返回对象本身</li><li>如果 <code>valueOf()</code> 返回的不是原始值，<code>toString()</code> 会被使用，返回一个字符串，也就是说最终得到的值不一定与 hint 对应，只要求是原始值</li></ul></li></ul><p>从对象转换为原始值后，可能还需要进一步转换，根据上述的规则进行。</p>',23),t=[d];function i(s,n,r,p,u,h){return l(),o("div",null,t)}const y=e(a,[["render",i]]);export{_ as __pageData,y as default};
