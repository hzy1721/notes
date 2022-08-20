import{_ as s,c as e,o,a}from"./app.8b432662.js";const C=JSON.parse('{"title":"Proxy","description":"","frontmatter":{},"headers":[{"level":2,"title":"get","slug":"get"},{"level":2,"title":"set","slug":"set"},{"level":2,"title":"proxy !== target","slug":"proxy-target"}],"relativePath":"vue/proxy.md"}'),n={name:"vue/proxy.md"},l=a(`<h1 id="proxy" tabindex="-1">Proxy <a class="header-anchor" href="#proxy" aria-hidden="true">#</a></h1><p>\u5305\u88C5\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u62E6\u622A\u5C5E\u6027\u7684\u8BFB\u53D6\u548C\u5199\u5165\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Proxy</span><span style="color:#A6ACCD;">(target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>\u5185\u90E8\u65B9\u6CD5</th><th>Handler \u65B9\u6CD5</th><th>\u4F55\u65F6\u89E6\u53D1</th></tr></thead><tbody><tr><td><code>[[Get]]</code></td><td><code>get</code></td><td>\u8BFB\u53D6\u5C5E\u6027</td></tr><tr><td><code>[[Set]]</code></td><td><code>set</code></td><td>\u5199\u5165\u5C5E\u6027</td></tr><tr><td><code>[[HasProperty]]</code></td><td><code>has</code></td><td><code>in</code>\xA0 \u64CD\u4F5C\u7B26</td></tr><tr><td><code>[[Delete]]</code></td><td><code>deleteProperty</code></td><td><code>delete</code>\xA0 \u64CD\u4F5C\u7B26</td></tr><tr><td><code>[[Call]]</code></td><td><code>apply</code></td><td>\u51FD\u6570\u8C03\u7528</td></tr><tr><td><code>[[Construct]]</code></td><td><code>construct</code></td><td><code>new</code>\xA0 \u64CD\u4F5C\u7B26</td></tr><tr><td><code>[[GetPrototypeOf]]</code></td><td><code>getPrototypeOf</code></td><td><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" target="_blank" rel="noopener noreferrer">Object.getPrototypeOf</a></td></tr><tr><td><code>[[SetPrototypeOf]]</code></td><td><code>setPrototypeOf</code></td><td><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank" rel="noopener noreferrer">Object.setPrototypeOf</a></td></tr><tr><td><code>[[IsExtensible]]</code></td><td><code>isExtensible</code></td><td><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" target="_blank" rel="noopener noreferrer">Object.isExtensible</a></td></tr><tr><td><code>[[PreventExtensions]]</code></td><td><code>preventExtensions</code></td><td><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions" target="_blank" rel="noopener noreferrer">Object.preventExtensions</a></td></tr><tr><td><code>[[DefineOwnProperty]]</code></td><td><code>defineProperty</code></td><td><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">Object.defineProperty</a>,\xA0<a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" target="_blank" rel="noopener noreferrer">Object.defineProperties</a></td></tr><tr><td><code>[[GetOwnProperty]]</code></td><td><code>getOwnPropertyDescriptor</code></td><td><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" target="_blank" rel="noopener noreferrer">Object.getOwnPropertyDescriptor</a>,\xA0<code>for..in</code>,\xA0<code>Object.keys/values/entries</code></td></tr><tr><td><code>[[OwnPropertyKeys]]</code></td><td><code>ownKeys</code></td><td><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" target="_blank" rel="noopener noreferrer">Object.getOwnPropertyNames</a>,\xA0<a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols" target="_blank" rel="noopener noreferrer">Object.getOwnPropertySymbols</a>,\xA0<code>for..in</code>,\xA0<code>Object.keys/values/entries</code></td></tr></tbody></table><h2 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-hidden="true">#</a></h2><p><code>get(target, property, receiver)</code></p><ul><li><code>target</code>\uFF1A\u88AB\u5305\u88C5\u7684\u5BF9\u8C61</li><li><code>property</code>\uFF1A\u88AB\u8BBF\u95EE\u7684\u5C5E\u6027</li><li><code>receiver</code>\uFF1A\u5982\u679C\u88AB\u8BBF\u95EE\u5C5E\u6027\u662F getter\uFF0C\u8FD9\u4E2A\u503C\u662F <code>this</code> \u5BF9\u8C61\uFF0C\u901A\u5E38\u5C31\u662F proxy \u5BF9\u8C61</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Proxy</span><span style="color:#A6ACCD;">(numbers</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prop</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">prop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">prop</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(numbers[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(numbers[</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0\uFF08\u6CA1\u6709\u8FD9\u4E2A\u6570\u7EC4\u9879\uFF09</span></span>
<span class="line"></span></code></pre></div><h2 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h2><p><code>set(target, property, value, receiver)</code></p><ul><li><code>target</code>\uFF1A\u88AB\u5305\u88C5\u7684\u5BF9\u8C61</li><li><code>property</code>\uFF1A\u88AB\u8BBE\u7F6E\u7684\u5C5E\u6027</li><li><code>value</code>\uFF1A\u5C5E\u6027\u7684\u65B0\u503C</li><li><code>receiver</code>\uFF1A\u5982\u679C\u88AB\u8BBF\u95EE\u5C5E\u6027\u662F setter\uFF0C\u8FD9\u4E2A\u503C\u662F <code>this</code> \u5BF9\u8C61\uFF0C\u901A\u5E38\u5C31\u662F proxy \u5BF9\u8C61</li></ul><p>\u5199\u5165\u6210\u529F\u8FD4\u56DE <code>true</code>\uFF0C\u5931\u8D25\u8FD4\u56DE <code>false</code> (\u4F1A\u89E6\u53D1 <code>TypeError</code>)\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Proxy</span><span style="color:#A6ACCD;">(numbers</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">prop</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6DFB\u52A0\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6DFB\u52A0\u6210\u529F</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Length is: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> numbers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// TypeError\uFF08proxy \u7684 &#39;set&#39; \u8FD4\u56DE false\uFF09</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This line is never reached (error in the line above)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="proxy-target" tabindex="-1">proxy !== target <a class="header-anchor" href="#proxy-target" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u5BF9\u8C61\u53EA\u4E25\u683C\u7B49\u4E8E\u5B83\u81EA\u8EAB\uFF0C\u6240\u4EE5 <code>proxy === target</code> \u6C38\u8FDC\u4E3A <code>false</code>\u3002</p>`,15),t=[l];function p(r,c,y,d,D,F){return o(),e("div",null,t)}var A=s(n,[["render",p]]);export{C as __pageData,A as default};
