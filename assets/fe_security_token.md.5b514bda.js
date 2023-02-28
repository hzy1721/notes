import{_ as e,c as s,o as t,a as n}from"./app.e3dff596.js";const o="/assets/token.ac549e6b.png",r="/assets/refresh-token.eb686674.png",m=JSON.parse('{"title":"Token","description":"","frontmatter":{},"headers":[{"level":2,"title":"Access Token","slug":"access-token","link":"#access-token","children":[]},{"level":2,"title":"Refresh Token","slug":"refresh-token","link":"#refresh-token","children":[]}],"relativePath":"fe/security/token.md"}'),a={name:"fe/security/token.md"},c=n('<h1 id="token" tabindex="-1">Token <a class="header-anchor" href="#token" aria-hidden="true">#</a></h1><p>Token 是一种<strong>无状态</strong>的认证和授权机制，相比 Session 对服务器的负担更小。</p><h2 id="access-token" tabindex="-1">Access Token <a class="header-anchor" href="#access-token" aria-hidden="true">#</a></h2><p>Access Token 用于请求接口时的身份认证。</p><p><img src="'+o+'" alt=""></p><ol><li>登录后从服务端获取 token，保存在浏览器中。</li><li>后续请求接口都带上 token。</li><li>服务端解析 token，检查是否为有效 token，有效则返回响应。</li></ol><h2 id="refresh-token" tabindex="-1">Refresh Token <a class="header-anchor" href="#refresh-token" aria-hidden="true">#</a></h2><p>Access Token 的有效期通常较短，Refresh Token 用于重新获取 Access Token (刷新)，通常有效期较长。</p><p><img src="'+r+'" alt=""></p><p>如果 Refresh Token 也过期了，就只能重新登录了。</p>',10),i=[c];function k(h,l,_,d,p,f){return t(),s("div",null,i)}const u=e(a,[["render",k]]);export{m as __pageData,u as default};
