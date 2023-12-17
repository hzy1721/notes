import{_ as e,c as a,o as t,U as o}from"./chunks/framework.e548c890.js";const m=JSON.parse('{"title":"回流与重绘","description":"","frontmatter":{},"headers":[],"relativePath":"fe/perf/issue/reflow-repaint.md","filePath":"fe/perf/issue/reflow-repaint.md","lastUpdated":1702821351000}'),r={name:"fe/perf/issue/reflow-repaint.md"},s=o('<h1 id="回流与重绘" tabindex="-1">回流与重绘 <a class="header-anchor" href="#回流与重绘" aria-label="Permalink to &quot;回流与重绘&quot;">​</a></h1><h2 id="translate" tabindex="-1">translate() <a class="header-anchor" href="#translate" aria-label="Permalink to &quot;translate()&quot;">​</a></h2><p><code>translate()</code> 是 <code>transform</code> 的一个值。改变 <code>transform</code> 或 <code>opacity</code> 不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。 <code>transform</code> 使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此 <code>translate()</code> 更高效，可以缩短平滑动画的绘制时间。</p><p>当使用 <code>translate()</code> 时，元素仍然占据其原始空间（有点像 <code>position：relative</code> ），这与改变绝对定位不同。</p>',4),c=[s];function n(d,i,l,p,_,f){return t(),a("div",null,c)}const u=e(r,[["render",n]]);export{m as __pageData,u as default};
