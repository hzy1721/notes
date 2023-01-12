import{_ as l,c as e,o as s,a as n}from"./app.68ea3551.js";const h=JSON.parse('{"title":"Object","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建对象","slug":"创建对象","link":"#创建对象","children":[]},{"level":2,"title":"对象属性 (property)","slug":"对象属性-property","link":"#对象属性-property","children":[]},{"level":2,"title":"属性特性 (attribute)","slug":"属性特性-attribute","link":"#属性特性-attribute","children":[]},{"level":2,"title":"访问属性","slug":"访问属性","link":"#访问属性","children":[]},{"level":2,"title":"设置属性","slug":"设置属性","link":"#设置属性","children":[]},{"level":2,"title":"删除属性","slug":"删除属性","link":"#删除属性","children":[]},{"level":2,"title":"测试属性","slug":"测试属性","link":"#测试属性","children":[]},{"level":2,"title":"枚举属性","slug":"枚举属性","link":"#枚举属性","children":[]},{"level":2,"title":"判断空对象","slug":"判断空对象","link":"#判断空对象","children":[]}],"relativePath":"js/object.md"}'),o={name:"js/object.md"},a=n(`<h1 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h1><p>对象是原始类型的<strong>键值对</strong>，键只能是 <code>String</code> 或 <code>Symbol</code>，值可以是任意类型。</p><h2 id="创建对象" tabindex="-1">创建对象 <a class="header-anchor" href="#创建对象" aria-hidden="true">#</a></h2><p>对象的创建有 3 种方法：</p><ul><li>字面量 <code>{}</code><ul><li>最常用、最直观的方法</li><li>继承自 <code>Object.prototype</code></li></ul></li><li><code>new Object()</code><ul><li>与字面量等效，用得比较少</li></ul></li><li><code>Object.create(proto)</code><ul><li>用于手动指定继承的原型，而不是继承默认的 <code>Object.prototype</code></li></ul></li></ul><h2 id="对象属性-property" tabindex="-1">对象属性 (property) <a class="header-anchor" href="#对象属性-property" aria-hidden="true">#</a></h2><p>根据属性的来源，可以分为<strong>继承属性</strong>和<strong>自有属性</strong> (own)。</p><p>根据属性的本质，可以分为<strong>数据属性</strong>和<strong>访问器属性</strong> (accessor)。</p><ul><li>数据属性：一个名字对应一个值</li><li>访问器属性：一个名字对应一个或两个方法 (getter/setter)</li></ul><h2 id="属性特性-attribute" tabindex="-1">属性特性 (attribute) <a class="header-anchor" href="#属性特性-attribute" aria-hidden="true">#</a></h2><p>对象属性有 3 个属性特性：</p><ul><li><code>writable</code> (可写)：是否可以修改属性</li><li><code>enumerable</code> (可枚举)：是否可以在 <code>for/in</code> 循环中枚举属性</li><li><code>configurable</code> (可配置)：是否可以删除属性和修改特性</li></ul><p>创建的对象默认是可写、可枚举、可配置。</p><p>很多内置对象的属性是不可写、不可枚举、不可配置，只能直接访问。</p><h2 id="访问属性" tabindex="-1">访问属性 <a class="header-anchor" href="#访问属性" aria-hidden="true">#</a></h2><p>访问属性有 2 种方法：</p><ul><li>点语法：<code>object.property</code></li><li>方括号语法：<code>object[&quot;property&quot;]</code></li></ul><p>首先查找自有属性，然后查找继承属性，都不存在则返回 <code>undefined</code>。</p><ul><li>存在自有属性 <ul><li>数据属性 <ul><li>返回自有属性的值</li></ul></li><li>访问器属性 <ul><li>调用 getter</li></ul></li></ul></li><li>存在继承属性 <ul><li>数据属性 <ul><li>返回继承属性的值</li></ul></li><li>访问器属性 <ul><li>调用 getter</li></ul></li></ul></li><li>都不存在 <ul><li>返回 <code>undefined</code></li></ul></li></ul><h2 id="设置属性" tabindex="-1">设置属性 <a class="header-anchor" href="#设置属性" aria-hidden="true">#</a></h2><p>同样可以使用<strong>点语法</strong>或<strong>方括号语法</strong>设置属性，不过是放在等号左侧。</p><ul><li>存在自有属性 <ul><li>数据属性 <ul><li>可写：修改属性的值</li><li>只读：<code>TypeError</code></li></ul></li><li>访问器属性 <ul><li>调用 setter</li></ul></li></ul></li><li>存在继承属性 <ul><li>数据属性 <ul><li>可写：创建新属性，隐藏继承属性</li><li>只读：<code>TypeError</code></li></ul></li><li>访问器属性 <ul><li>调用 setter</li></ul></li></ul></li><li>都不存在 <ul><li>创建新属性</li></ul></li></ul><p>设置属性无法修改或新增原型链上的属性。</p><h2 id="删除属性" tabindex="-1">删除属性 <a class="header-anchor" href="#删除属性" aria-hidden="true">#</a></h2><p><code>delete</code> 操作符用于删除属性，只能删除自有属性。</p><ul><li>存在自有属性 <ul><li>数据属性 <ul><li>可配置：删除成功，返回 <code>true</code></li><li>不可配置：<code>TypeError</code></li></ul></li></ul></li><li>存在继承属性 <ul><li>什么都不做，返回 <code>true</code></li></ul></li><li>都不存在 <ul><li>什么都不做，返回 <code>true</code></li></ul></li></ul><h2 id="测试属性" tabindex="-1">测试属性 <a class="header-anchor" href="#测试属性" aria-hidden="true">#</a></h2><p>测试属性是否存在，有 4 种方法：</p><ul><li><code>in</code> 操作符 <ul><li>自有属性和继承属性</li></ul></li><li><code>object.hasOwnProperty()</code><ul><li>自有属性</li></ul></li><li><code>object.propertyIsEnumerable()</code><ul><li>自有属性且 <code>enumerable</code></li></ul></li><li><code>object.property !== undefined</code><ul><li>自有属性和继承属性，且值不为 <code>undefined</code></li><li>无法区分不存在的属性和存在但值为 <code>undefined</code> 的属性</li></ul></li></ul><h2 id="枚举属性" tabindex="-1">枚举属性 <a class="header-anchor" href="#枚举属性" aria-hidden="true">#</a></h2><p>开发中经常需要枚举对象的属性，有以下几种方法：</p><ul><li><code>for...in</code> 循环：字符串可枚举属性</li><li><code>Object.keys()</code>：字符串可枚举自有属性</li><li><code>Object.getOwnPropertyNames()</code>：字符串自有属性</li><li><code>Obejct.getOwnPropertySymbols()</code>：Symbol 自有属性</li><li><code>Reflect.ownKeys()</code>：自有属性</li></ul><p>枚举顺序：</p><ul><li>语法符合非负整数的字符串属性，按照数值顺序从小到大</li><li>剩余字符串属性，按照添加的先后顺序</li><li>符号属性，按照添加的先后顺序</li></ul><h2 id="判断空对象" tabindex="-1">判断空对象 <a class="header-anchor" href="#判断空对象" aria-hidden="true">#</a></h2><p><strong>空对象</strong>可以理解为没有<strong>自有属性</strong>的对象，而不关注继承属性。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">checkEmptyObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Reflect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ownKeys</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加上了剪枝</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">checkEmptyObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hasOwnProperty</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Reflect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ownKeys</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,37),t=[a];function p(i,c,r,d,u,y){return s(),e("div",null,t)}const D=l(o,[["render",p]]);export{h as __pageData,D as default};
