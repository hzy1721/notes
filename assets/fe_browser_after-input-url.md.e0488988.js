import{_ as t,c as l,o as r,d as e}from"./app.89737b9a.js";const i="/assets/chrome_arch.8c7b41c8.png",s="/assets/browser_process.0125dcf5.png",o="/assets/start_render.11680caa.png",n="/assets/renderer_process.b7d4806d.png",a="/assets/dom_tree.dfdf82b0.png",c="/assets/script_load.ba11e100.png",d="/assets/computed_style.7b32b9e9.png",g="/assets/layout_tree.abddf152.png",h="/assets/paint_records.56fb9098.png",p="/assets/layer_tree.81637676.png",R=JSON.parse('{"title":"输入 URL 后发生了什么","description":"","frontmatter":{},"headers":[{"level":2,"title":"流程","slug":"流程","link":"#流程","children":[{"level":3,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":3,"title":"网络","slug":"网络","link":"#网络","children":[]},{"level":3,"title":"校验","slug":"校验","link":"#校验","children":[]},{"level":3,"title":"渲染","slug":"渲染","link":"#渲染","children":[]}]},{"level":2,"title":"Chrome 架构","slug":"chrome-架构","link":"#chrome-架构","children":[]},{"level":2,"title":"导航","slug":"导航","link":"#导航","children":[]},{"level":2,"title":"渲染","slug":"渲染-1","link":"#渲染-1","children":[]}],"relativePath":"fe/browser/after-input-url.md"}'),_={name:"fe/browser/after-input-url.md"},u=e('<h1 id="输入-url-后发生了什么" tabindex="-1">输入 URL 后发生了什么 <a class="header-anchor" href="#输入-url-后发生了什么" aria-hidden="true">#</a></h1><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-hidden="true">#</a></h2><h3 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-hidden="true">#</a></h3><ol><li>判断是 URL 还是搜索字符串 <ul><li>如果是搜索字符串，转换为对应搜索引擎的 URL</li></ul></li><li>如果没有协议，尝试 <code>http</code>，请求失败还会尝试 <code>https</code></li></ol><h3 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-hidden="true">#</a></h3><ol start="3"><li>DNS 查询域名对应的 IP 地址</li><li>三次握手建立 TCP 连接</li><li>向 IP 对应的服务器发起 HTTP 请求 <ul><li>如果是 HTTPS 需要进行 TLS 握手</li></ul></li><li>服务端处理请求，生成响应发回浏览器</li><li>如果是重定向，向另一个 URL 发起请求</li></ol><h3 id="校验" tabindex="-1">校验 <a class="header-anchor" href="#校验" aria-hidden="true">#</a></h3><ol start="8"><li>检查响应头是否包含 <code>Content-Type</code>，否则进行 MIME 嗅探</li><li>如果 URL 和响应匹配浏览器已知的恶意网站，会显示警告页面</li><li>如果是 HTML 则进行渲染，其他类型触发下载</li><li>检查是否为合法跨域，不是则拒绝响应</li></ol><h3 id="渲染" tabindex="-1">渲染 <a class="header-anchor" href="#渲染" aria-hidden="true">#</a></h3><ol start="12"><li>解析 HTML，转换为 DOM 树</li><li>加载图片、CSS、JS 等资源文件</li><li>解析 CSS 得到计算样式 (computed style)</li><li>遍历 DOM 树和计算样式，得到每个元素的尺寸和位置信息，生成布局树</li><li>遍历布局树，构造绘制记录，明确绘制顺序</li><li>构造分层树，分层渲染，保存在显存中</li><li>可视区域移动时，把所有层合成为一帧，发送给 GPU 显示在屏幕上</li></ol><h2 id="chrome-架构" tabindex="-1">Chrome 架构 <a class="header-anchor" href="#chrome-架构" aria-hidden="true">#</a></h2><p>有 5 种进程：</p><ul><li>浏览器进程 (browser)</li><li>渲染器进程 (renderer)</li><li>GPU 进程</li><li>实用工具进程 (utility)</li><li>插件进程 (plugin)</li></ul><p><img src="'+i+'" alt=""></p><h2 id="导航" tabindex="-1">导航 <a class="header-anchor" href="#导航" aria-hidden="true">#</a></h2><p>浏览器进程 (browser process) 包含以下 3 种线程： <img src="'+s+'" alt=""></p><ol><li>在浏览器的地址栏输入 URL，按下回车</li><li><strong>UI 线程</strong>判断输入的是 URL 还是搜索字符串 <ul><li>如果是搜索字符串，改写为搜索引擎的 URL</li><li>比如 <code>https://www.google.com/search?q=keyword</code></li></ul></li><li>如果没有协议名，<strong>UI 线程</strong>默认补充为 <code>http://</code>，然后通知<strong>网络线程</strong>发起请求 <ul><li>如果请求失败还会尝试 <code>https://</code></li></ul></li><li>如果主机名是域名，<strong>网络线程</strong>进行 DNS 查询获取 IP 地址</li><li><strong>网络线程</strong>向该 IP 地址的服务器发送 HTTP 请求报文</li><li>服务器上的 Web Server (nginx、Apache 等) 根据配置文件和请求的 URL，定位静态文件或将请求转发给其他进程 (Node、Java 等)，得到 HTTP 响应报文并发回给浏览器</li><li>如果服务器要求重定向 (301)，<strong>网络线程</strong>通知 <strong>UI 线程</strong>将进行重定向，然后发起对另一个 URL 的请求</li><li><strong>网络线程</strong>接收到响应报文后，检查是否存在 <code>Content-Type</code> 头部，否则进行 MIME 嗅探</li><li>如果响应类型是 <code>HTML</code>，将会把数据交给<strong>渲染器进程</strong>，如果是其他类型文件，意味着是一个下载请求，把数据交给<strong>下载管理器</strong></li><li>如果 URL 和响应报文匹配已知的<strong>恶意网站</strong>，<strong>网络线程</strong>会显示警告页面 ⚠️</li><li><strong>网络线程</strong>进行 CORB (Cross Origin Read Blocking) 检查，避免非法跨站请求数据被渲染</li><li>安全检查通过后，<strong>网络线程</strong>通知 <strong>UI 线程</strong>数据接收完毕，<strong>UI 线程</strong>通知<strong>渲染器进程</strong>开始渲染页面，并通过<strong>网络线程</strong>向<strong>渲染器进程</strong>传输数据</li><li><strong>浏览器进程</strong>收到<strong>渲染器进程</strong>的确认后，导航阶段 (Navigation) 完成，浏览器地址栏的 UI 更新，<strong>渲染器进程</strong>负责加载资源和渲染页面</li></ol><p><img src="'+o+'" alt=""></p><h2 id="渲染-1" tabindex="-1">渲染 <a class="header-anchor" href="#渲染-1" aria-hidden="true">#</a></h2><p>渲染器进程 (renderer process) 包含以下 4 种线程： <img src="'+n+'" alt=""></p><ol><li><strong>主线程</strong>解析 HTML 字符串，转换为 DOM <img src="'+a+'" alt=""></li><li>解析时并发运行 “预加载扫描器”，发现 <code>&lt;img&gt;</code>、<code>&lt;link&gt;</code> 等外部资源后，提交给<strong>网络线程</strong>发起请求</li><li><code>&lt;script&gt;</code> 资源比较特殊，有多种加载模式，默认会暂停解析 HTML 并请求、执行 JS 脚本 <img src="'+c+'" alt=""></li><li><strong>主线程</strong>解析 CSS 并得到计算样式 (computed) <img src="'+d+'" alt=""></li><li><strong>主线程</strong>遍历 DOM 树和计算样式，构造一棵<strong>布局树</strong> (Layout Tree) <ul><li>每个节点有坐标和尺寸信息</li><li>只包含可见元素的信息，不包括 <code>display: none</code> 的元素 <img src="'+g+'" alt=""></li></ul></li><li><strong>主线程</strong>遍历布局树，构造<strong>绘制记录</strong>，从而明确绘制顺序，正确处理 <code>z-index</code> 等问题 <img src="'+h+'" alt=""></li><li><strong>主线程</strong>遍历布局树，构造<strong>分层树</strong> (Layer Tree)，实现页面的分层 <img src="'+p+'" alt=""></li><li>每一帧使用<strong>合成器线程</strong>把层转换为像素，保存在显存中</li><li>创建好的<strong>合成器帧</strong>通过 IPC 发给<strong>浏览器进程</strong>，然后转发给 GPU 进程</li></ol>',21),m=[u];function f(T,b,U,L,S,I){return r(),l("div",null,m)}const x=t(_,[["render",f]]);export{R as __pageData,x as default};
