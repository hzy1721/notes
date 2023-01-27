import{_ as l,c as e,o as i,a as r}from"./app.7747c6a9.js";const g=JSON.parse('{"title":"状态码","description":"","frontmatter":{},"headers":[{"level":2,"title":"1xx：Informational","slug":"_1xx-informational","link":"#_1xx-informational","children":[]},{"level":2,"title":"2xx：Successful","slug":"_2xx-successful","link":"#_2xx-successful","children":[]},{"level":2,"title":"3xx：Redirection","slug":"_3xx-redirection","link":"#_3xx-redirection","children":[]},{"level":2,"title":"4xx：Client error","slug":"_4xx-client-error","link":"#_4xx-client-error","children":[]},{"level":2,"title":"5xx：Server error","slug":"_5xx-server-error","link":"#_5xx-server-error","children":[]}],"relativePath":"http/status-code.md"}'),t={name:"http/status-code.md"},o=r('<h1 id="状态码" tabindex="-1">状态码 <a class="header-anchor" href="#状态码" aria-hidden="true">#</a></h1><p>HTTP 状态码可以分为 5 类：</p><h2 id="_1xx-informational" tabindex="-1">1xx：Informational <a class="header-anchor" href="#_1xx-informational" aria-hidden="true">#</a></h2><p>指示一些信息</p><ul><li>100 Continue <ul><li>继续请求或忽略响应</li></ul></li><li><strong>101 Switching Protocols</strong><ul><li>WebSocket 连接建立时会用到</li></ul></li><li>103 Early Hints <ul><li>预加载资源</li></ul></li></ul><h2 id="_2xx-successful" tabindex="-1">2xx：Successful <a class="header-anchor" href="#_2xx-successful" aria-hidden="true">#</a></h2><p>请求成功</p><ul><li><strong>200 OK</strong><ul><li>请求资源成功</li></ul></li><li><strong>201 Created</strong><ul><li>创建了新资源</li></ul></li><li>204 No Content <ul><li>没有响应体可以发送，但是响应头可能有用</li></ul></li></ul><h2 id="_3xx-redirection" tabindex="-1">3xx：Redirection <a class="header-anchor" href="#_3xx-redirection" aria-hidden="true">#</a></h2><p>重定向</p><ul><li>300 Multiple Choices <ul><li>有多个响应可以选择</li></ul></li><li><strong>301 Moved Permanently</strong><ul><li>资源永久转移到其他 URL</li></ul></li><li><strong>302 Found</strong><ul><li>临时跳转</li></ul></li><li><strong>304 Not Modified</strong><ul><li>缓存过期后向服务端验证，资源未修改，可以继续使用本地缓存</li></ul></li></ul><h2 id="_4xx-client-error" tabindex="-1">4xx：Client error <a class="header-anchor" href="#_4xx-client-error" aria-hidden="true">#</a></h2><p>客户端的请求有问题</p><ul><li><strong>400 Bad Request</strong><ul><li>客户端发送的请求有问题</li></ul></li><li><strong>401 Unauthorized</strong><ul><li>缺少身份验证信息，与 <code>WWW-Authenticate</code> 一起使用</li></ul></li><li><strong>403 Forbidden</strong><ul><li>拒绝访问</li></ul></li><li><strong>404 Not Found</strong><ul><li>资源不存在</li></ul></li><li>405 Method Not Allowed <ul><li>资源不支持该方法</li></ul></li><li>410 Gone <ul><li>资源被永久删除</li></ul></li></ul><h2 id="_5xx-server-error" tabindex="-1">5xx：Server error <a class="header-anchor" href="#_5xx-server-error" aria-hidden="true">#</a></h2><p>服务端处理合法请求中出错</p><ul><li><strong>500 Internal Server Error</strong><ul><li>服务端内部错误</li></ul></li><li><strong>501 Not Implemented</strong><ul><li>服务端不支持请求方法，只有 <code>GET</code> 和 <code>HEAD</code> 服务端必须支持</li></ul></li><li><strong>502 Bad Gateway</strong><ul><li>服务端作为网关处理请求时，收到了无效的响应</li></ul></li><li>503 Server Unavailable <ul><li>服务端当前不能处理请求</li></ul></li><li>504 Gateway Timeout <ul><li>服务端作为网关时，请求超时</li></ul></li></ul>',17),n=[o];function a(s,u,d,c,x,h){return i(),e("div",null,n)}const p=l(t,[["render",a]]);export{g as __pageData,p as default};