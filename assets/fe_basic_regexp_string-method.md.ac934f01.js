import{_ as e,c as l,o as a,d as s}from"./app.a0163938.js";const A=JSON.parse('{"title":"字符串方法","description":"","frontmatter":{},"headers":[{"level":2,"title":"search","slug":"search","link":"#search","children":[]},{"level":2,"title":"match","slug":"match","link":"#match","children":[]},{"level":2,"title":"matchAll","slug":"matchall","link":"#matchall","children":[]},{"level":2,"title":"replace","slug":"replace","link":"#replace","children":[]},{"level":2,"title":"replaceAll","slug":"replaceall","link":"#replaceall","children":[]},{"level":2,"title":"split","slug":"split","link":"#split","children":[]}],"relativePath":"fe/basic/regexp/string-method.md","lastUpdated":1681310459000}'),o={name:"fe/basic/regexp/string-method.md"},c=s(`<h1 id="字符串方法" tabindex="-1">字符串方法 <a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a></h1><p><code>String</code> 有一些方法接收正则表达式。</p><h2 id="search" tabindex="-1">search <a class="header-anchor" href="#search" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">search</span><span style="color:#A6ACCD;">(regexp)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>regexp</code>： <ul><li><code>RegExp</code> 对象或拥有 <code>Symbol.search</code> 方法的对象</li><li>否则通过 <code>new RegExp(regexp)</code> 转为 <code>RegExp</code> 对象</li></ul></li></ul><p>返回结果：</p><ul><li>匹配成功：匹配结果的开始索引</li><li>无匹配：返回 <code>-1</code></li></ul><h2 id="match" tabindex="-1">match <a class="header-anchor" href="#match" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(regexp)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>regexp</code>： <ul><li><code>RegExp</code> 对象或拥有 <code>Symbol.match</code> 方法的对象</li><li>否则通过 <code>new RegExp(regexp)</code> 转为 <code>RegExp</code> 对象</li><li><code>undefined</code> 返回 <code>[&#39;&#39;]</code>，等价于 <code>match(/(?:)/)</code></li></ul></li></ul><p>返回结果：</p><ul><li>有修饰符 <code>g</code>：返回所有匹配结果的数组，不包括捕获组</li><li>没有修饰符 <code>g</code>：返回第一个匹配结果的数组 <code>res</code> 和捕获组 <ul><li>与 <code>RegExp.prototype.exec</code> 的返回结果相同</li></ul></li><li>无匹配项：返回 <code>null</code></li></ul><h2 id="matchall" tabindex="-1">matchAll <a class="header-anchor" href="#matchall" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">matchAll</span><span style="color:#A6ACCD;">(regexp)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>regexp</code>： <ul><li><code>RegExp</code> 对象或拥有 <code>Symbol.match</code> 方法的对象 <ul><li>必须设置 <code>g</code> 修饰符，否则 <code>TypeError</code></li></ul></li><li>否则通过 <code>new RegExp(regexp, &#39;g&#39;)</code> 转为 <code>RegExp</code> 对象</li></ul></li></ul><p>返回结果：</p><ul><li>可迭代对象，元素是单个匹配结果的数组 <code>res</code> 和相应捕获组 <ul><li><code>res[0]</code>：匹配结果</li><li><code>res.index</code>：匹配位置</li><li><code>res.input</code>：原字符串</li></ul></li></ul><h2 id="replace" tabindex="-1">replace <a class="header-anchor" href="#replace" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(pattern</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> replacement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>pattern</code>： <ul><li>字符串或拥有 <code>Symbol.replace</code> 方法的对象 (比如 <code>RegExp</code>)</li><li>否则转为字符串</li></ul></li><li><code>replacement</code>： <ul><li>字符串：用于代替匹配结果，支持一些转义序列 (如下表)</li><li>函数：每次匹配成功时调用，返回值作为替换结果 (函数接收的参数如下)</li></ul></li></ul><table><thead><tr><th>转义序列</th><th>含义</th></tr></thead><tbody><tr><td><code>$&amp;</code></td><td>匹配项</td></tr><tr><td><code>$\`</code></td><td>匹配项之前的字符串</td></tr><tr><td><code>$&#39;</code></td><td>匹配项之后的字符串</td></tr><tr><td><code>$n</code></td><td>第 n 个捕获组</td></tr><tr><td><code>$&lt;name&gt;</code></td><td>名称为 <code>name</code> 的捕获组</td></tr><tr><td><code>$$</code></td><td>字符 <code>$</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">replacer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">match</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">p1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">p2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* …, */</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">pN</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">offset</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">groups</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">replacement</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><code>match</code>：匹配结果，类似 <code>$&amp;</code></li><li><code>p1, p2, …, pN</code>：捕获组</li><li><code>offset</code>：匹配结果的开始索引</li><li><code>string</code>：原字符串</li><li><code>groups</code>：命名捕获组</li></ul><h2 id="replaceall" tabindex="-1">replaceAll <a class="header-anchor" href="#replaceall" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">replaceAll</span><span style="color:#A6ACCD;">(pattern</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> replacement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>pattern</code>： <ul><li>字符串或拥有 <code>Symbol.replace</code> 方法的对象 (比如 <code>RegExp</code>)</li><li>否则转为字符串</li><li>正则必须有 <code>g</code> 修饰符，否则 <code>TypeError</code></li></ul></li><li><code>replacement</code>： <ul><li>字符串：用于代替匹配结果，支持一些转义序列</li><li>函数：每次匹配成功时调用，返回值作为替换结果</li></ul></li></ul><h2 id="split" tabindex="-1">split <a class="header-anchor" href="#split" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(separator)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(separator</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> limit)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>separator</code>： <ul><li>字符串或拥有 <code>Symbol.split</code> 方法的对象 (比如 <code>RegExp</code>)</li><li><code>undefined</code> 返回包含字符串的单元素数组</li></ul></li><li><code>limit</code>： <ul><li>返回结果的最多数量，多出的部分会被忽略</li></ul></li></ul><p>返回结果：</p><ul><li>字符串数组，在 <code>separator</code> 出现的地方进行分割</li></ul>`,31),n=[c];function t(p,i,d,r,h,y){return a(),l("div",null,n)}const g=e(o,[["render",t]]);export{A as __pageData,g as default};