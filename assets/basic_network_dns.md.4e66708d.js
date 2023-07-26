import{_ as l,c as a,o as e,U as i}from"./chunks/framework.e548c890.js";const t="/assets/domain-level.df8161ee.jpeg",s="/assets/dns_name_server.9f87cdb1.jpg",o="/assets/dns_query.338e4cc7.jpg",r="/assets/dns_resolving.d092e9f5.png",f=JSON.parse('{"title":"DNS","description":"","frontmatter":{},"headers":[],"relativePath":"basic/network/dns.md","filePath":"basic/network/dns.md","lastUpdated":1677593481000}'),n={name:"basic/network/dns.md"},p=i('<h1 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-label="Permalink to &quot;DNS&quot;">​</a></h1><p>DNS (Domain Name System) 是将域名转换为 IP 地址的分布式数据库。</p><h2 id="域名" tabindex="-1">域名 <a class="header-anchor" href="#域名" aria-label="Permalink to &quot;域名&quot;">​</a></h2><p>域名可以分为：根域名 (<code>.</code>)、顶级域名、二级域名等。</p><p><img src="'+t+'" alt=""></p><p>比如 mail.buaa.edu.cn 就是一个域名 (Domain Name)，由 4 个域 (Domain) 组成，每个域都有一个标号 (Label)，分别是：</p><ul><li>顶级域名 com</li><li>二级域名 edu</li><li>三级域名 buaa</li><li>四级域名 mail</li></ul><p>每一个 Label 不超过 63 个字符，只能由字母、数字、连字符组成，字母不区分大小写，完整域名不超过 255 个字符。</p><p>各级域名由上一级的域名管理机构管理，顶级域名由 ICANN 管理。</p><p>顶级域名 TLD (Top Level Domain) 分为 4 类：</p><ul><li>国家顶级域名 nTLD/ccTLD <ul><li>cn, us, uk ...</li></ul></li><li>通用顶级域名 gTLD <ul><li>com, net, org, edu, gov ...</li></ul></li><li>基础结构域名 (infrastructure domain) <ul><li>arpa</li></ul></li><li>新顶级域名 New gTLD <ul><li>商城, 公司, 新闻 ...</li></ul></li></ul><p>中国把二级域名分为 2 类：</p><ul><li>类别域名：ac, com, edu, gov, mil, net, org (7 个)</li><li>行政区域名：bj, js ... (34 个)</li></ul><h2 id="域名服务器" tabindex="-1">域名服务器 <a class="header-anchor" href="#域名服务器" aria-label="Permalink to &quot;域名服务器&quot;">​</a></h2><p>主机通过请求域名服务器 (name server) 来获取对应的 IP 地址，域名服务器分为 4 类：</p><ul><li>根域名服务器 (root name server)</li><li>顶级域名服务器 (TLD server)</li><li>权限域名服务器 (authoritative name server) <ul><li>以区 (zone) 为单位</li></ul></li><li>本地域名服务器 (local name server) <ul><li>ISP/大学/系，不超过几个路由器的距离</li></ul></li></ul><p><img src="'+s+'" alt=""></p><p>由于域名到 IP 地址的映射不经常变化，可以在主机和域名服务器上设置高速缓存 (cache)，存储最近查询过的域名和 IP 信息。</p><h2 id="解析过程" tabindex="-1">解析过程 <a class="header-anchor" href="#解析过程" aria-label="Permalink to &quot;解析过程&quot;">​</a></h2><p>域名解析过程：</p><ol><li>查询主机缓存。</li><li>递归查询本地域名服务器。</li><li>迭代查询根域名服务器。</li><li>迭代查询顶级域名服务器。</li><li>迭代查询权限域名服务器。</li><li>得到 IP 地址并返回。</li></ol><p><img src="'+o+'" alt=""></p><p><img src="'+r+'" alt=""></p><p>如果之前查询过的服务器缓存中有当前需要查询服务器的 IP，则可以跳过相应服务器的查询。</p><p>比如本地域名服务器缓存中没有完整域名的 IP，但是有顶级域名服务器的 IP，则无需查询根域名服务器，可以直接查询顶级域名服务器。</p><h2 id="传输" tabindex="-1">传输 <a class="header-anchor" href="#传输" aria-label="Permalink to &quot;传输&quot;">​</a></h2><p>DNS 可以使用 UDP 和 TCP 传输，大部分情况下使用 UDP。</p><p>以下情况会使用 TCP：</p><ul><li>返回的响应超过 512 字节</li><li>区域传送：主域名服务器向辅助域名服务器传送变化的数据</li></ul>',29),c=[p];function d(u,m,_,h,P,b){return e(),a("div",null,c)}const g=l(n,[["render",d]]);export{f as __pageData,g as default};
