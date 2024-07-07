import{_ as i,c as e,o as l,a1 as a}from"./chunks/framework.mNpZ2GHZ.js";const S=JSON.parse('{"title":"前端性能优化","description":"","frontmatter":{},"headers":[],"relativePath":"fe/perf/design/perf.md","filePath":"fe/perf/design/perf.md","lastUpdated":1702822707000}'),r={name:"fe/perf/design/perf.md"},t=a('<h1 id="前端性能优化" tabindex="-1">前端性能优化 <a class="header-anchor" href="#前端性能优化" aria-label="Permalink to &quot;前端性能优化&quot;">​</a></h1><h2 id="加载优化" tabindex="-1">加载优化 <a class="header-anchor" href="#加载优化" aria-label="Permalink to &quot;加载优化&quot;">​</a></h2><p>更快地把资源从服务端加载到浏览器。</p><ol><li>使用 CDN 分发静态资源</li><li>使用 HTTP/2 协议</li><li>充分利用缓存，静态资源强缓存，动态资源协商缓存</li><li>分包加载，避免部分代码改动导致整个包的缓存失效</li><li>使用 gzip/brotli 压缩 HTML/CSS/JS 等文本资源</li><li>小图片内联为 Data URI，减少请求数量</li><li>图片懒加载，处于可视区域内才加载</li><li>使用 Terser/esbuild 进行 JS 代码混淆</li><li>路由懒加载，首屏无需加载全部资源</li><li>Tree Shaking，生产环境打包时消除无用代码</li><li>尽量使用 avif/webp 格式的图片，把图片缩放到合适大小，并对图片进行适当压缩</li><li>合并静态资源，合并小图片</li></ol><h2 id="渲染优化" tabindex="-1">渲染优化 <a class="header-anchor" href="#渲染优化" aria-label="Permalink to &quot;渲染优化&quot;">​</a></h2><p>更快地把资源在浏览器上进行渲染。</p><ol><li>使用 preload 加载当前路由必需的资源</li><li>使用 prefetch 加载页面链接的其他路由资源</li><li>使用 dns-prefetch 进行 DNS 预解析</li><li>使用防抖和节流避免不必要的函数执行以及可能引起的重新渲染</li><li>使用虚拟列表优化无限滚动列表</li><li>本地资源缓存，短时间的重复请求直接从缓存中获取资源</li><li>使用 Web Worker 处理 CPU 密集型任务</li><li>使用 WASM 处理 JS 不适合的任务，比如图像处理</li><li>合并 DOM 操作，减少 DOM 操作次数</li><li>减少事件处理程序的数量</li></ol>',7),o=[t];function s(n,d,p,c,_,f){return l(),e("div",null,o)}const m=i(r,[["render",s]]);export{S as __pageData,m as default};
