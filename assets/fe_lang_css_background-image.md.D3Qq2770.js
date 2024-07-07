import{_ as a,c as n,o as e,a1 as s}from"./chunks/framework.mNpZ2GHZ.js";const u=JSON.parse('{"title":"background-image","description":"","frontmatter":{},"headers":[],"relativePath":"fe/lang/css/background-image.md","filePath":"fe/lang/css/background-image.md","lastUpdated":1704115023000}'),l={name:"fe/lang/css/background-image.md"},t=s(`<h1 id="background-image" tabindex="-1">background-image <a class="header-anchor" href="#background-image" aria-label="Permalink to &quot;background-image&quot;">​</a></h1><p>背景图片。</p><ul><li><code>none</code></li><li><code>&lt;image&gt;</code></li></ul><h2 id="image" tabindex="-1">&lt;image&gt; <a class="header-anchor" href="#image" aria-label="Permalink to &quot;\\&lt;image\\&gt;&quot;">​</a></h2><ul><li><code>url()</code></li><li><code>&lt;gradient&gt;</code></li><li><code>element()</code></li><li><code>image()</code></li><li><code>cross-fade()</code></li><li><code>image-set()</code></li></ul><h2 id="gradient" tabindex="-1">&lt;gradient&gt; <a class="header-anchor" href="#gradient" aria-label="Permalink to &quot;\\&lt;gradient\\&gt;&quot;">​</a></h2><p>渐变，属于 <code>&lt;image&gt;</code>。</p><ul><li><code>linear-gradient()</code></li><li><code>radial-gradient()</code></li><li><code>repeating-linear-gradient()</code></li><li><code>repeating-radial-gradient()</code></li><li><code>conic-gradient()</code></li></ul><h2 id="linear-gradient" tabindex="-1">linear-gradient() <a class="header-anchor" href="#linear-gradient" aria-label="Permalink to &quot;linear-gradient()&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;linear-gradient()&gt; =</span></span>
<span class="line"><span>  linear-gradient( [ &lt;linear-gradient-syntax&gt; ] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;linear-gradient-syntax&gt; =</span></span>
<span class="line"><span>  [ &lt;angle&gt; | to &lt;side-or-corner&gt; ]? , &lt;color-stop-list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;side-or-corner&gt; =</span></span>
<span class="line"><span>  [ left | right ]  ||</span></span>
<span class="line"><span>  [ top | bottom ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;color-stop-list&gt; =</span></span>
<span class="line"><span>  &lt;linear-color-stop&gt; , [ &lt;linear-color-hint&gt;? , &lt;linear-color-stop&gt; ]#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;linear-color-stop&gt; =</span></span>
<span class="line"><span>  &lt;color&gt; &lt;length-percentage&gt;?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;linear-color-hint&gt; =</span></span>
<span class="line"><span>  &lt;length-percentage&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;length-percentage&gt; =</span></span>
<span class="line"><span>  &lt;length&gt;      |</span></span>
<span class="line"><span>  &lt;percentage&gt;</span></span></code></pre></div>`,10),i=[t];function p(o,c,r,d,g,h){return e(),n("div",null,i)}const _=a(l,[["render",p]]);export{u as __pageData,_ as default};
