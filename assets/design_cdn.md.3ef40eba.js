import{_ as l,c as i,o as e,a}from"./app.68ea3551.js";const t="/assets/cdn-1.ff9c16df.png",n="/assets/cnd-2.082178de.png",C=JSON.parse('{"title":"CDN","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":2,"title":"调度模式","slug":"调度模式","link":"#调度模式","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"relativePath":"design/cdn.md"}'),r={name:"design/cdn.md"},d=a('<h1 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h1><p><strong>CDN (Content Delivery Network，内容分发网络)</strong> 是分布在不同位置的一组服务器，每个服务器都有资源的一份拷贝，用户请求资源时从距离最近的服务器获取资源，从而实现降低响应时间、提高网站性能的效果。</p><p><img src="'+t+'" alt=""></p><p>CDN 通常用于分发静态资源，包括 CSS、JS、图片、视频文件等。</p><p>对于动态资源，可以实现最优回源路径的选择。</p><h2 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-hidden="true">#</a></h2><p><img src="'+n+'" alt=""></p><ol><li>浏览器发起图片 URL 请求，经过本地 DNS 解析，会将域名解析权交给域名 CNAME 指向的 CDN 专用 DNS 服务器。</li><li>CDN 的 DNS 服务器将 CDN 的全局负载均衡设备 IP 地址返回给浏览器。</li><li>浏览器向 CDN 全局负载均衡设备发起 URL 请求。</li><li>CDN 全局负载均衡设备根据用户 IP 地址，以及用户请求的 URL，选择一台用户所属区域的区域负载均衡设备，向其发起请求。</li><li>区域负载均衡设备会为用户选择最合适的 CDN 缓存服务器（考虑的依据包括：服务器负载情况，距离用户的距离等），并返回给全局负载均衡设备。</li><li>全局负载均衡设备将选中的 CDN 缓存服务器 IP 地址返回给用户。</li><li>用户向 CDN 缓存服务器发起请求，缓存服务器响应用户请求，最终将用户所需要偶的内容返回给浏览器。</li></ol><h2 id="调度模式" tabindex="-1">调度模式 <a class="header-anchor" href="#调度模式" aria-hidden="true">#</a></h2><ul><li>DNS <ul><li>权威 DNS 服务器 -&gt; 专用 DNS 调度服务器 -&gt; 全局负载均衡服务器 -&gt; 区域负载均衡服务器</li><li>区域负载均衡服务器根据地理距离、资源情况、节点负载选出一个最优的节点返回 IP</li><li>如果 CDN 没有这个资源，请求源站获取资源并缓存下来</li></ul></li><li>HTTPDNS <ul><li>用 HTTP 代替 DNS 传递解析结果</li><li>可以避免多种原因导致的 DNS 解析失败问题</li><li>适用于客户端</li></ul></li><li>302 <ul><li>DNS 解析得到 GSLB 集群的 IP，发送请求返回 302，重定向到最优的节点</li><li>用于流媒体加速</li><li>增加了重定向过程，时延较长</li></ul></li></ul><h2 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-hidden="true">#</a></h2><p>优点：</p><ul><li>用户能够从距离最近的服务器获取资源，提高网站的响应速度 <ul><li>解决了跨运营商、跨地域访问的问题</li></ul></li><li>降低网站自有服务器的负载，无需提供静态资源</li><li>CDN 已经配置好了资源的缓存策略，无需网站自己维护</li></ul><p>缺点：</p><ul><li>请求数量增加</li></ul><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h2><p>实现技术：</p><ul><li>负载均衡</li><li>内容分发与复制</li><li>缓存</li></ul><p>常用 CDN：</p><ul><li>unpkg</li><li>jsDelivr</li><li>BootCDN</li><li>自建 CDN</li></ul>',20),s=[d];function c(h,o,p,u,N,D){return e(),i("div",null,s)}const S=l(r,[["render",c]]);export{C as __pageData,S as default};
