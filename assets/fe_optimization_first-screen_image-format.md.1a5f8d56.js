import{_ as t,c as a,o as e,U as d}from"./chunks/framework.e548c890.js";const u=JSON.parse('{"title":"图片格式","description":"","frontmatter":{},"headers":[],"relativePath":"fe/optimization/first-screen/image-format.md","filePath":"fe/optimization/first-screen/image-format.md","lastUpdated":1682050462000}'),i={name:"fe/optimization/first-screen/image-format.md"},l=d('<h1 id="图片格式" tabindex="-1">图片格式 <a class="header-anchor" href="#图片格式" aria-label="Permalink to &quot;图片格式&quot;">​</a></h1><p>根据实现原理，图片分为 2 类：</p><ul><li>位图：像素矩阵 <ul><li>gif/jpg/png/webp/avif</li></ul></li><li>矢量图：几何形状 <ul><li>svg</li></ul></li></ul><table><thead><tr><th>图片格式</th><th>诞生时间</th><th>支持率</th><th>特点</th></tr></thead><tbody><tr><td>gif</td><td>1987</td><td>100%</td><td></td></tr><tr><td>jpg</td><td>1992</td><td>100%</td><td></td></tr><tr><td>png</td><td>1996</td><td>99.35%</td><td></td></tr><tr><td>svg</td><td>1999</td><td>99.22%</td><td>缩放不失真</td></tr><tr><td>webp</td><td>2010</td><td>97.03%</td><td>体积小</td></tr><tr><td>avif</td><td>2019</td><td>83.96%</td><td>体积最小</td></tr></tbody></table><h2 id="svg" tabindex="-1">SVG <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;SVG&quot;">​</a></h2><ul><li>缩放不会影响质量</li><li>体积小</li><li>支持动画</li><li>渲染成本高</li></ul><h2 id="webp" tabindex="-1">WebP <a class="header-anchor" href="#webp" aria-label="Permalink to &quot;WebP&quot;">​</a></h2><ul><li>同时支持有损压缩和无损压缩</li><li>类似视觉效果下，体积比 jpg/png 小</li></ul><h2 id="avif" tabindex="-1">AVIF <a class="header-anchor" href="#avif" aria-label="Permalink to &quot;AVIF&quot;">​</a></h2><ul><li>体积比 webp 更小</li><li>支持率较低</li></ul>',10),r=[l];function o(s,n,h,c,p,f){return e(),a("div",null,r)}const m=t(i,[["render",o]]);export{u as __pageData,m as default};