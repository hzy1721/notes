import{_ as a,c as n,o as e,U as l}from"./chunks/framework.e548c890.js";const h=JSON.parse('{"title":"background-image","description":"","frontmatter":{},"headers":[],"relativePath":"fe/lang/css/background-image.md","filePath":"fe/lang/css/background-image.md","lastUpdated":1704115023000}'),s={name:"fe/lang/css/background-image.md"},t=l(`<h1 id="background-image" tabindex="-1">background-image <a class="header-anchor" href="#background-image" aria-label="Permalink to &quot;background-image&quot;">​</a></h1><p>背景图片。</p><ul><li><code>none</code></li><li><code>&lt;image&gt;</code></li></ul><h2 id="image" tabindex="-1">&lt;image&gt; <a class="header-anchor" href="#image" aria-label="Permalink to &quot;\\&lt;image\\&gt;&quot;">​</a></h2><ul><li><code>url()</code></li><li><code>&lt;gradient&gt;</code></li><li><code>element()</code></li><li><code>image()</code></li><li><code>cross-fade()</code></li><li><code>image-set()</code></li></ul><h2 id="gradient" tabindex="-1">&lt;gradient&gt; <a class="header-anchor" href="#gradient" aria-label="Permalink to &quot;\\&lt;gradient\\&gt;&quot;">​</a></h2><p>渐变，属于 <code>&lt;image&gt;</code>。</p><ul><li><code>linear-gradient()</code></li><li><code>radial-gradient()</code></li><li><code>repeating-linear-gradient()</code></li><li><code>repeating-radial-gradient()</code></li><li><code>conic-gradient()</code></li></ul><h2 id="linear-gradient" tabindex="-1">linear-gradient() <a class="header-anchor" href="#linear-gradient" aria-label="Permalink to &quot;linear-gradient()&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;linear-gradient()&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  linear-gradient( [ &lt;linear-gradient-syntax&gt; ] )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;linear-gradient-syntax&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ &lt;angle&gt; | to &lt;side-or-corner&gt; ]? , &lt;color-stop-list&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;side-or-corner&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ left | right ]  ||</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ top | bottom ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;color-stop-list&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;linear-color-stop&gt; , [ &lt;linear-color-hint&gt;? , &lt;linear-color-stop&gt; ]#</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;linear-color-stop&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;color&gt; &lt;length-percentage&gt;?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;linear-color-hint&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;length-percentage&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;length-percentage&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;length&gt;      |</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;percentage&gt;</span></span></code></pre></div>`,10),o=[t];function i(c,r,p,d,g,C){return e(),n("div",null,o)}const m=a(s,[["render",i]]);export{h as __pageData,m as default};
