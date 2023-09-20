import{_ as s,c as e,o as n,U as a}from"./chunks/framework.e548c890.js";const o="/assets/event-phase.9250edab.png",C=JSON.parse('{"title":"事件","description":"","frontmatter":{},"headers":[],"relativePath":"fe/browser/event.md","filePath":"fe/browser/event.md","lastUpdated":1683687303000}'),l={name:"fe/browser/event.md"},p=a('<h1 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h1><h2 id="捕获-capture" tabindex="-1">捕获 (capture) <a class="header-anchor" href="#捕获-capture" aria-label="Permalink to &quot;捕获 (capture)&quot;">​</a></h2><p>事件传播有 3 个阶段：</p><ul><li>捕获 (capturing)</li><li>目标 (target)</li><li>冒泡 (bubbling)</li></ul><img src="'+o+`" width="75%"><p><code>on&lt;event&gt;</code> 和 <code>addEventListener(event, func)</code> 默认在冒泡阶段触发。</p><p><code>addEventListener(event, func, { capture: true })</code> 会使 <code>func</code> 在捕获阶段触发。</p><p>简写：<code>addEventListener(event, func, true)</code></p><p>删除时也需要指定捕获阶段：<code>removeEventListener(event, func, true)</code></p><p>事件对象属性 <code>event.eventPhase</code> 表示当前事件传播的阶段。</p><h2 id="冒泡-bubble" tabindex="-1">冒泡 (bubble) <a class="header-anchor" href="#冒泡-bubble" aria-label="Permalink to &quot;冒泡 (bubble)&quot;">​</a></h2><p>冒泡：首先触发<strong>最深层元素</strong>的处理函数，然后是父元素，依此类推直到根元素。</p><p>几乎所有事件都会冒泡，除了 <code>focus</code> 等少数事件。</p><p>访问触发事件的元素：</p><ul><li><code>event.target</code>：嵌套最深的直接元素</li><li><code>this</code> 或 <code>event.currentTarget</code>：当前冒泡到的元素，当前处理函数所在的元素</li></ul><p>通常冒泡会以 <code>document</code> 对象或 <code>window</code> 对象结束，也可以在处理函数中手动停止冒泡。</p><ul><li><code>event.stopPropagation()</code>：停止冒泡，阻止父元素的处理函数执行</li><li><code>event.stopImmediatePropagation()</code>：停止冒泡，并阻止当前元素在当前事件上的其他处理函数执行</li></ul><h2 id="事件处理程序" tabindex="-1">事件处理程序 <a class="header-anchor" href="#事件处理程序" aria-label="Permalink to &quot;事件处理程序&quot;">​</a></h2><p>事件处理程序 (<strong>event handler</strong>) 是在事件触发时执行的函数，可以有多个。</p><h3 id="addeventlistener" tabindex="-1">addEventListener <a class="header-anchor" href="#addeventlistener" aria-label="Permalink to &quot;addEventListener&quot;">​</a></h3><p>添加处理程序：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> capture])</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ul><li><code>event</code>：事件名，String</li><li><code>handler</code>：处理函数</li><li><code>options</code>： <ul><li><code>once</code>：是否触发 1 次后被移除</li><li><code>capture</code>：是否在捕获阶段执行处理函数</li><li><code>passive</code>：设为 true 表示处理函数不会调用 preventDefault() <ul><li>如果调用了，会被忽略并在控制台打印警告</li></ul></li></ul></li></ul><p>移除处理程序：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeEventListener</span><span style="color:#A6ACCD;">(event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options])</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>每种事件可能绑定了多个处理函数，所以需要传入相同的函数才能正确移除。</p><p>某些事件只能使用 <code>addEventListener</code>，比如 <code>DOMContentLoaded</code> 和 <code>transitionend</code>。</p><p>事件的详细信息会作为 event 对象传入处理程序的第一个参数。</p><p>event 对象属性：</p><ul><li><code>type</code>：事件名，String</li><li><code>target</code>：触发事件的<strong>最内层</strong>元素</li><li><code>currentTarget</code>：执行处理程序的<strong>当前</strong>元素，与 this 相同</li><li>...... (每种类型的事件都有自己独有的一组属性)</li></ul><h3 id="事件处理对象" tabindex="-1">事件处理对象 <a class="header-anchor" href="#事件处理对象" aria-label="Permalink to &quot;事件处理对象&quot;">​</a></h3><p>除了指定一个函数作为处理程序，还可以指定一个具有 <code>handleEvent</code> 方法的对象，对于复杂繁琐、代码量大的处理函数，就可以封装到一个类或对象里，从而提高可读性。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Menu</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleEvent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// mousedown -&gt; onMousedown</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">method</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toUpperCase</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">method</span><span style="color:#F07178;">](</span><span style="color:#A6ACCD;">event</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onMousedown</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mouse button pressed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onMouseup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...and released.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="事件类型" tabindex="-1">事件类型 <a class="header-anchor" href="#事件类型" aria-label="Permalink to &quot;事件类型&quot;">​</a></h2><p>鼠标事件：</p><ul><li><code>click</code></li><li><code>mouseenter</code>/<code>mouseleave</code></li><li><code>mouseover</code>/<code>mouseout</code></li><li><code>mousedown</code>/<code>mouseup</code></li><li><code>contextmenu</code></li></ul><p>键盘事件：</p><ul><li><code>keydown</code>/<code>keyup</code></li></ul><p>表单事件：</p><ul><li><code>submit</code></li><li><code>focus</code></li></ul><p>DOM 事件：</p><ul><li><code>DOMContentLoaded</code></li></ul><p>CSS 事件：</p><ul><li><code>transitionend</code></li></ul>`,44),t=[p];function c(r,d,i,F,D,y){return n(),e("div",null,t)}const A=s(l,[["render",c]]);export{C as __pageData,A as default};