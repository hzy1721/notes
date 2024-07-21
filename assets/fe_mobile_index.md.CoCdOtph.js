import{_ as e,c as i,o as l,a1 as a}from"./chunks/framework.mNpZ2GHZ.js";const f=JSON.parse('{"title":"移动端","description":"","frontmatter":{},"headers":[],"relativePath":"fe/mobile/index.md","filePath":"fe/mobile/index.md","lastUpdated":1704115023000}'),t={name:"fe/mobile/index.md"},o=a('<h1 id="移动端" tabindex="-1">移动端 <a class="header-anchor" href="#移动端" aria-label="Permalink to &quot;移动端&quot;">​</a></h1><p>前端的跨端方案可以分为浏览器和原生 2 部分：</p><ul><li>浏览器：用于渲染页面、执行脚本，内置浏览器或调用系统浏览器</li><li>原生：系统 API 的 JS 绑定，比如 Android 的 Java、iOS 的 OC</li></ul><p>前端应用于跨端主要是因为浏览器是跨平台的，可以实现浏览器、移动端、PC 客户端多端统一，降低开发成本，缺点是包体积大、性能有所降低、JS 绑定不支持部分 API。</p><p>按照依赖原生能力的程度，前端移动端开发可以分为 3 类：</p><ol><li>H5：普通的移动端网页，相比 PC 端适配了移动端布局和交互，不依赖原生能力 <ul><li>不依赖原生能力的套壳 App 也归为此类</li><li>PWA 可作为独立应用打开，提供了缓存、后台请求等基本能力，本质还是浏览器页面</li></ul></li><li>小程序：最早由微信提出，提供了基于宿主 App 的部分原生能力，语法需要转译</li><li>Web App：移动端框架封装和提供了绝大部分原生能力，使开发者的能力更加全面 <ul><li>更多的是 Hybrid App，但此处只关注前端部分</li></ul></li></ol>',6),_=[o];function n(p,r,d,s,c,m){return l(),i("div",null,_)}const h=e(t,[["render",n]]);export{f as __pageData,h as default};