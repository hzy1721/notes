import{_ as a,c as s,o as l,U as t}from"./chunks/framework.e548c890.js";const h=JSON.parse('{"title":"路由","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react/next/route.md","filePath":"fe/react/next/route.md","lastUpdated":1704115023000}'),o={name:"fe/react/next/route.md"},e=t(`<h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h1><p>Next 有 2 种路由模式，都是基于文件系统的路由：</p><ul><li>App Router <ul><li>v13 引入，基于 React 服务端组件</li><li>使用 <code>app</code> 目录</li><li>支持共享布局、嵌套路由、加载状态、错误处理等</li></ul></li><li>Pages Router <ul><li>v13 之前的路由，不推荐使用</li></ul></li></ul><p>本文只介绍 App Router。</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>从根目录到叶子目录的路径构成路由。</p><table><thead><tr><th>目录</th><th>含义</th></tr></thead><tbody><tr><td><code>folder</code></td><td>普通路由</td></tr><tr><td><code>folder/folder</code></td><td>嵌套路由</td></tr><tr><td><code>[folder]</code></td><td>动态路由</td></tr><tr><td><code>[...folder]</code></td><td>catch-all 动态路由</td></tr><tr><td><code>[[...folder]]</code></td><td>可选 catch-all 动态路由</td></tr><tr><td><code>(folder)</code></td><td>路由组</td></tr><tr><td><code>_folder</code></td><td>私有路由</td></tr><tr><td><code>@folder</code></td><td>并行路由</td></tr><tr><td><code>(.)folder</code></td><td>同层拦截路由</td></tr><tr><td><code>(..)folder</code></td><td>向上一层拦截路由</td></tr><tr><td><code>(..)(..)folder</code></td><td>向上两层拦截路由</td></tr><tr><td><code>(...)folder</code></td><td>向上拦截到根路由</td></tr></tbody></table><h3 id="动态路由" tabindex="-1">动态路由 <a class="header-anchor" href="#动态路由" aria-label="Permalink to &quot;动态路由&quot;">​</a></h3><p>添加 path param，作为 layout、page、route、generateMetadata 的 params 参数。</p><p>使用 generateStaticParams 在编译时生成所有可能的动态路由，函数内部的 fetch 会自动缓存，从而减少编译时间。</p><h3 id="路由组" tabindex="-1">路由组 <a class="header-anchor" href="#路由组" aria-label="Permalink to &quot;路由组&quot;">​</a></h3><p>将目录名排除在路由路径外。</p><ul><li>创建逻辑上的目录来整理路由</li><li>共享 layout、template 等文件</li><li>创建多个根布局，每个 layout 包含自己的 <code>&lt;html&gt;</code> 和 <code>&lt;body&gt;</code><ul><li>如果顶层有 page，需要移动到其中一个路由组下</li><li>在不同根布局的路由组之间导航会导致页面的完全刷新</li></ul></li></ul><p>由于路由组不参与路径，需要注意避免路由冲突。</p><h3 id="并行路由" tabindex="-1">并行路由 <a class="header-anchor" href="#并行路由" aria-label="Permalink to &quot;并行路由&quot;">​</a></h3><p>单个路由下展示多个页面，并且这些页面有自己独立的路由。</p><p>用 <code>@folder</code> 定义的 slot 会作为 layout 的属性传入，从而能够与 <code>children</code> 一起渲染。</p><p><code>useSelectedLayoutSegment</code> 和 <code>useSelectedLayoutSegments</code> 用于获取 slot 的当前路由。</p><p>并行路由可以用于实现弹出层、条件路由等。</p><h3 id="拦截路由" tabindex="-1">拦截路由 <a class="header-anchor" href="#拦截路由" aria-label="Permalink to &quot;拦截路由&quot;">​</a></h3><p>在另一个路由之上展示当前页面。</p><h2 id="文件" tabindex="-1">文件 <a class="header-anchor" href="#文件" aria-label="Permalink to &quot;文件&quot;">​</a></h2><p>路由展示的内容。</p><table><thead><tr><th>文件</th><th>含义</th></tr></thead><tbody><tr><td>layout</td><td>布局</td></tr><tr><td>template</td><td>模板</td></tr><tr><td>error</td><td>错误处理</td></tr><tr><td>loading</td><td>加载中</td></tr><tr><td>not-found</td><td>404</td></tr><tr><td>page</td><td>页面</td></tr><tr><td>global-error</td><td>全局错误处理</td></tr><tr><td>default</td><td>并行路由默认页面</td></tr><tr><td>route</td><td>服务端接口</td></tr></tbody></table><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Layout </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./layout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Template </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./template</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Layout 和 Template 需要接收并渲染 children 属性</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Error </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Loading </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./loading</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> NotFound </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./not-found</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 以上组件会被子路由共享，导航到子路由时 &lt;Page /&gt; 替换为子路由内容</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Page </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./page</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ErrorBoundary</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;"> /&gt;}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">Loading</span><span style="color:#89DDFF;"> /&gt;}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ErrorBoundary</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">NotFound</span><span style="color:#89DDFF;"> /&gt;}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Page</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ErrorBoundary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ErrorBoundary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h3 id="layout" tabindex="-1">layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;layout&quot;">​</a></h3><p>子路由共享的布局组件，导航时不会重新渲染。</p><p>根路由 layout 必须有，并且必须包括 <code>&lt;html&gt;</code> 和 <code>&lt;body&gt;</code>。其他路由的 layout 可选。</p><p>根路由 layout 不要包含 <code>&lt;head&gt;</code> 相关元素，而是用 Metadata API 来管理。</p><p>根路由只能是服务端组件，不能是客户端组件。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RootLayout</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">children</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>无法在 layout 和 children 之间传递数据，可以多次请求相同数据，React 会做优化。</p><h3 id="template" tabindex="-1">template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;template&quot;">​</a></h3><p>类似 layout，区别是导航时会重新创建（初始化 state、执行 effect）。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">/* Note that the template is given a unique key. */</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">routeParam</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">Template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h3><p>下层组件抛出错误时，展示距离最近的 <code>&lt;Error&gt;</code> 内容，页面其他部分不受影响，从而使错误控制在较小的范围，也方便在不刷新页面的前提下从错误中恢复。</p><p><code>&lt;Error&gt;</code> 组件接收 error 和 reset 属性：</p><ul><li>error：错误对象 <ul><li>生产环境下，出于安全考虑，只包括 message 和 digest 属性</li><li>message：标准格式的错误信息</li><li>digest：自动生成的 hash，用于匹配服务端日志的详细报错信息</li><li>开发环境下，为了调试方便，会包含完整的错误对象</li></ul></li><li>reset：重新渲染组件的函数</li></ul><h3 id="global-error" tabindex="-1">global-error <a class="header-anchor" href="#global-error" aria-label="Permalink to &quot;global-error&quot;">​</a></h3><p>由于 error 在 layout 和 template 的下层，为了处理顶层 layout 和 template 的错误，使用 global-error。</p><p>由于 global-error 会在报错时替换整个页面，因此必须包含 <code>&lt;html&gt;</code> 和 <code>&lt;body&gt;</code>。</p><h3 id="loading" tabindex="-1">loading <a class="header-anchor" href="#loading" aria-label="Permalink to &quot;loading&quot;">​</a></h3><p>基于 Suspense 的加载提示内容，用于路由加载时立即展示，优化用户体验。</p><p>不同路由间导航时，首先进行 URL 跳转，然后展示 loading 内容，最后等到路由加载完成后替换为路由内容。</p><p>导航是可中断的，在路由加载期间可以立即导航到其他路由，不必等待当前路由加载完成。</p><p>除了路由内置的 loading Suspense，开发者也可以手动添加 Suspense 来实现流式传输，将页面分为多个 chunk 来并行 SSR，从而使内容尽早展现给用户，优化 TTFB、FCP、TTI 等指标。</p><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>并行路由 slot 在路由不存在时的默认展示内容。</p><p>并行路由也可以包含子路由，如果 slot 没有定义导航的目标路由，会保持导航前的页面，如果刷新页面，会尝试渲染相应 slot 的 default，如果不存在则展示 404。</p><h2 id="元数据" tabindex="-1">元数据 <a class="header-anchor" href="#元数据" aria-label="Permalink to &quot;元数据&quot;">​</a></h2><table><thead><tr><th>文件</th><th>含义</th></tr></thead><tbody><tr><td><code>favicon</code></td><td>浏览器端 icon</td></tr><tr><td><code>icon</code></td><td>App icon</td></tr><tr><td><code>apple-icon</code></td><td>Apple App icon</td></tr><tr><td><code>opengraph-image</code></td><td>Open Graph 协议图</td></tr><tr><td><code>twitter-image</code></td><td>Twitter 图</td></tr><tr><td><code>sitemap</code></td><td>SEO sitemap</td></tr><tr><td><code>robots</code></td><td>爬虫 robots</td></tr></tbody></table><h2 id="其他文件" tabindex="-1">其他文件 <a class="header-anchor" href="#其他文件" aria-label="Permalink to &quot;其他文件&quot;">​</a></h2><p>不包含 <code>page.tsx</code> 或 <code>route.tsx</code> 的目录是不可路由的，不会包含在路由内。</p><p>因此可以自由地组织目录结构，只要不包含上面两个文件即可，比如组件目录 <code>components</code>、接口目录 <code>services</code>。</p><h2 id="导航" tabindex="-1">导航 <a class="header-anchor" href="#导航" aria-label="Permalink to &quot;导航&quot;">​</a></h2><p>在不同路由之间导航有 2 种方法：</p><ul><li><code>&lt;Link&gt;</code> 组件</li><li><code>useRouter</code> hook</li></ul><h3 id="link" tabindex="-1">Link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;Link&quot;">​</a></h3><p>超链接组件，封装 <code>&lt;a&gt;</code> 元素，提供 prefetch 和客户端路由跳转的功能。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dashboard</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">replace</span><span style="color:#89DDFF;">={</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">scroll</span><span style="color:#89DDFF;">={</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">prefetch</span><span style="color:#89DDFF;">={</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">} /&gt;</span></span></code></pre></div><ul><li>scroll：跳转后是否滚动到顶部，默认 true</li><li>prefetch：是否自动 prefetch，默认 true</li></ul><h3 id="userouter" tabindex="-1">useRouter <a class="header-anchor" href="#userouter" aria-label="Permalink to &quot;useRouter&quot;">​</a></h3><p>编程式跳转路由。只能在客户端组件使用。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use client</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRouter</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>尽量用 Link，除非必须才用 useRouter。</p><h3 id="usepathname" tabindex="-1">usePathname <a class="header-anchor" href="#usepathname" aria-label="Permalink to &quot;usePathname&quot;">​</a></h3><p>完整路径。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pathname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">usePathname</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>服务端将应用代码进行路由分割，客户端 prefetch 并缓存每个路由的资源。</p><p>路由跳转时，只请求和重新渲染变化的路由部分，其他部分保持不变，能够减少开销、提高性能。</p><h3 id="prefetch" tabindex="-1">prefetch <a class="header-anchor" href="#prefetch" aria-label="Permalink to &quot;prefetch&quot;">​</a></h3><p>在后台提前加载路由对应的资源。开发环境关闭，只在生产环境开启。</p><ul><li>Link 链接的路由：在 Link 对用户可见时自动 prefetch <ul><li>静态路由：整个路由都会被 prefetch 和缓存</li><li>动态路由：从 layout 向下到第一个 loading 的共享部分会被 prefetch 和缓存 30 秒 <ul><li>减少 prefetch 完整路由的开销</li><li>能够快速展示 loading 部分</li></ul></li></ul></li><li>router.prefetch() 编程式 prefetch 指定路由</li></ul><h3 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h3><p>访问过路由和 prefetch 路由的 RSC Payload 会被缓存在客户端的内存中，并在后续导航中尽可能复用缓存，以减少请求数。</p><p>回退、前进时会复用缓存，并保留滚动的位置。</p>`,78),n=[e];function p(r,c,d,i,y,F){return l(),s("div",null,n)}const u=a(o,[["render",p]]);export{h as __pageData,u as default};
