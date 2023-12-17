import{_ as a,c as s,o as e,U as l}from"./chunks/framework.e548c890.js";const d=JSON.parse('{"title":"@ 规则","description":"","frontmatter":{},"headers":[],"relativePath":"fe/lang/css/at-rule.md","filePath":"fe/lang/css/at-rule.md","lastUpdated":1702821351000}'),o={name:"fe/lang/css/at-rule.md"},t=l(`<h1 id="规则" tabindex="-1">@ 规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;@ 规则&quot;">​</a></h1><h2 id="import" tabindex="-1">@import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;@import&quot;">​</a></h2><p>导入其他 CSS 规则。必须放在文件顶部、其他 @ 规则之前。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url layer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url layer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">layer-name</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url layer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">layer-name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> supports</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">supports-condition</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url layer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">layer-name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> supports</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">supports-condition</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> list-of-media-queries</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url layer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">layer-name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> list-of-media-queries</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url supports</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">supports-condition</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url supports</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">supports-condition</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> list-of-media-queries</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> url list-of-media-queries</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="charset" tabindex="-1">@charset <a class="header-anchor" href="#charset" aria-label="Permalink to &quot;@charset&quot;">​</a></h2><h2 id="color-profile" tabindex="-1">@color-profile <a class="header-anchor" href="#color-profile" aria-label="Permalink to &quot;@color-profile&quot;">​</a></h2><h2 id="container" tabindex="-1">@container <a class="header-anchor" href="#container" aria-label="Permalink to &quot;@container&quot;">​</a></h2><h2 id="counter-style" tabindex="-1">@counter-style <a class="header-anchor" href="#counter-style" aria-label="Permalink to &quot;@counter-style&quot;">​</a></h2><h2 id="font-face" tabindex="-1">@font-face <a class="header-anchor" href="#font-face" aria-label="Permalink to &quot;@font-face&quot;">​</a></h2><h2 id="font-feature-values" tabindex="-1">@font-feature-values <a class="header-anchor" href="#font-feature-values" aria-label="Permalink to &quot;@font-feature-values&quot;">​</a></h2><h2 id="font-palette-values" tabindex="-1">@font-palette-values <a class="header-anchor" href="#font-palette-values" aria-label="Permalink to &quot;@font-palette-values&quot;">​</a></h2><h2 id="keyframes" tabindex="-1">@keyframes <a class="header-anchor" href="#keyframes" aria-label="Permalink to &quot;@keyframes&quot;">​</a></h2><h2 id="layer" tabindex="-1">@layer <a class="header-anchor" href="#layer" aria-label="Permalink to &quot;@layer&quot;">​</a></h2><h2 id="media" tabindex="-1">@media <a class="header-anchor" href="#media" aria-label="Permalink to &quot;@media&quot;">​</a></h2><h2 id="namespace" tabindex="-1">@namespace <a class="header-anchor" href="#namespace" aria-label="Permalink to &quot;@namespace&quot;">​</a></h2><h2 id="page" tabindex="-1">@page <a class="header-anchor" href="#page" aria-label="Permalink to &quot;@page&quot;">​</a></h2><h2 id="property" tabindex="-1">@property <a class="header-anchor" href="#property" aria-label="Permalink to &quot;@property&quot;">​</a></h2><h2 id="supports" tabindex="-1">@supports <a class="header-anchor" href="#supports" aria-label="Permalink to &quot;@supports&quot;">​</a></h2>`,18),n=[t];function r(p,c,i,h,y,D){return e(),s("div",null,n)}const f=a(o,[["render",r]]);export{d as __pageData,f as default};
