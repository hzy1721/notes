import{_ as s,c as a,o as e,U as n}from"./chunks/framework.e548c890.js";const u=JSON.parse('{"title":"useRef","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react-stack/react/hooks/use-ref.md","filePath":"fe/react-stack/react/hooks/use-ref.md","lastUpdated":1684401573000}'),l={name:"fe/react-stack/react/hooks/use-ref.md"},o=n(`<h1 id="useref" tabindex="-1">useRef <a class="header-anchor" href="#useref" aria-label="Permalink to &quot;useRef&quot;">​</a></h1><p>渲染之间保留的数据，类似于状态，但是修改不会触发重新渲染。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRef</span><span style="color:#A6ACCD;">(initialValue)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 通过 ref.current 访问值</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(ref</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> newValue</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>通常用于保存定时器 ID、DOM 元素等。</p><h2 id="获取-dom-元素" tabindex="-1">获取 DOM 元素 <a class="header-anchor" href="#获取-dom-元素" aria-label="Permalink to &quot;获取 DOM 元素&quot;">​</a></h2><p>ref 常用来获取组件渲染后的 DOM 元素。</p><ol><li>定义初始值为 <code>null</code> 的 ref</li><li>把 ref 传入组件的 <code>ref</code> 属性</li><li>React 渲染组件为 DOM 元素后，会设置 ref 的值为该元素</li><li>通过 ref 值进行 DOM 操作</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> inputRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRef</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">inputRef</span><span style="color:#89DDFF;">} /&gt;</span></span></code></pre></div>`,9),t=[o];function p(c,r,i,D,y,d){return e(),a("div",null,t)}const C=s(l,[["render",p]]);export{u as __pageData,C as default};