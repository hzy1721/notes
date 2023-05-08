import{_ as e,c as o,o as s,d as t}from"./app.6117d686.js";const y=JSON.parse('{"title":"Object.defineProperty","description":"","frontmatter":{},"headers":[],"relativePath":"fe/framework/vue/defineproperty.md","lastUpdated":1680318810000}'),a={name:"fe/framework/vue/defineproperty.md"},c=t(`<h1 id="object-defineproperty" tabindex="-1">Object.defineProperty <a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a></h1><p><strong>ES6 之前</strong>拦截对象属性的读取和设置操作的<strong>唯一方法</strong>，被 Vue 2 和 Vue 3 中的 <code>ref</code> 采用。</p><p>创建或修改对象上的属性，返回对象。支持指定属性特性，支持访问器属性。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> descriptor)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>obj</code>：目标对象</li><li><code>prop</code>：目标属性，字符串或 Symbol 类型</li><li><code>descriptor</code>：属性特性 <ul><li><code>value</code>：默认 <code>undefined</code></li><li><code>writable</code>：默认 <code>false</code></li><li><code>enumerable</code>：默认 <code>false</code></li><li><code>configurable</code>：默认 <code>false</code></li><li><code>get</code>：访问器属性的 getter 函数</li><li><code>set</code>：访问器属性的 setter 函数</li></ul></li></ul>`,5),r=[c];function l(n,d,p,i,_,f){return s(),o("div",null,r)}const b=e(a,[["render",l]]);export{y as __pageData,b as default};