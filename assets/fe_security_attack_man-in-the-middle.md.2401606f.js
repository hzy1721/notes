import{_ as t,c as e,o as a,d as i}from"./app.32a4a0ab.js";const f=JSON.parse('{"title":"中间人攻击 (Man-in-the-middle attack)","description":"","frontmatter":{},"headers":[],"relativePath":"fe/security/attack/man-in-the-middle.md","lastUpdated":1683906111000}'),n={name:"fe/security/attack/man-in-the-middle.md"},c=i('<h1 id="中间人攻击-man-in-the-middle-attack" tabindex="-1">中间人攻击 (Man-in-the-middle attack) <a class="header-anchor" href="#中间人攻击-man-in-the-middle-attack" aria-hidden="true">#</a></h1><p>恶意 WebView、路由器、ISP 等充当浏览器和客户端之间的中间人，转发并修改双方的通信内容，造成通信被窃听、篡改、冒充。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cdf775e29a74f6b9fbf3e5119578440~tplv-k3u1fbpfcp-watermark.image?" alt="截屏2022-08-01 09.56.57.png"></p><p>防御措施：</p><ul><li>HTTPS <ul><li>防窃听</li><li>防篡改</li><li>防冒充</li></ul></li><li>HTTP/3</li><li>HSTS (HTTP Strict-Transport-Security)</li><li>SRI (SubResource Integrity)</li></ul>',5),l=[c];function d(r,s,o,p,_,m){return a(),e("div",null,l)}const u=t(n,[["render",d]]);export{f as __pageData,u as default};