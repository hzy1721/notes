import{_ as e,c as a,o as s,a as n}from"./app.87442856.js";const u=JSON.parse('{"title":"\u8BF7\u6C42\u5934","description":"","frontmatter":{},"headers":[{"level":2,"title":"Request headers","slug":"request-headers"}],"relativePath":"http/request-headers.md"}'),l={name:"http/request-headers.md"},p=n(`<h1 id="\u8BF7\u6C42\u5934" tabindex="-1">\u8BF7\u6C42\u5934 <a class="header-anchor" href="#\u8BF7\u6C42\u5934" aria-hidden="true">#</a></h1><p>HTTP Header \u662F\u8BF7\u6C42\u548C\u54CD\u5E94\u62A5\u6587\u7684\u9644\u52A0\u4FE1\u606F\uFF0C\u6BCF\u4E2A Header \u4E3A\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684 <code>name: value</code>\u3002</p><p>\u81EA\u5B9A\u4E49 Header \u53EF\u4EE5\u7528 <code>X-</code> \u524D\u7F00\uFF0C\u4F46\u662F\u8FD9\u79CD\u7528\u6CD5\u5728 2012 \u5E74\u88AB IETF \u5F03\u7528\u3002</p><p>\u6839\u636E\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4EE5\u5C06 Header \u5206\u4E3A\uFF1A</p><ul><li>Request headers\uFF1A\u63CF\u8FF0\u8BF7\u6C42\u8D44\u6E90\u7684\u4FE1\u606F\u548C\u5BA2\u6237\u7AEF\u7684\u60C5\u51B5\u3002</li><li>Response headers\uFF1A\u54CD\u5E94\u6570\u636E\u7684\u8865\u5145\u4FE1\u606F\u3002</li><li>Representation headers\uFF1A\u63CF\u8FF0\u4F20\u8F93\u6570\u636E\u7684\u4FE1\u606F\u3002</li><li>Payload headers\uFF1A\u63CF\u8FF0\u4E0E\u4F20\u8F93\u6570\u636E\u7684\u8868\u73B0\u5F62\u5F0F\u65E0\u5173\u7684\u4FE1\u606F\u3002</li></ul><p>\u6839\u636E\u4EE3\u7406\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5C06 Header \u5206\u4E3A\uFF1A</p><ul><li>End-to-end headers\uFF1A\u4EE3\u7406\u53EA\u80FD\u8F6C\u53D1\u3001\u4E0D\u80FD\u4FEE\u6539\u3001\u5FC5\u987B\u7F13\u5B58\u3002</li><li>Hop-by-hop headers\uFF1A\u53EA\u5BF9\u4E00\u8DF3\u8FDE\u63A5\u6709\u610F\u4E49\uFF0C\u4EE3\u7406\u7981\u6B62\u8F6C\u53D1\u548C\u7F13\u5B58\u3002</li></ul><h2 id="request-headers" tabindex="-1">Request headers <a class="header-anchor" href="#request-headers" aria-hidden="true">#</a></h2><p>\u8BF7\u6C42\u5934\u53EA\u80FD\u7528\u4E8E HTTP \u8BF7\u6C42\u62A5\u6587\uFF0C\u4F46\u5E76\u4E0D\u662F\u53EA\u6709\u8BF7\u6C42\u5934\u624D\u80FD\u51FA\u73B0\u5728\u8BF7\u6C42\u62A5\u6587\u4E2D\uFF0C\u8BF7\u6C42\u62A5\u6587\u8FD8\u53EF\u4EE5\u5305\u62EC Representation headers \u548C Payload headers\u3002</p><p>\u4E0B\u9762\u5217\u4E3E\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u8BF7\u6C42\u5934\uFF1A</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /home.html HTTP/1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: developer.mozilla.org</span></span>
<span class="line"><span style="color:#A6ACCD;">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0</span></span>
<span class="line"><span style="color:#A6ACCD;">Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="line"><span style="color:#A6ACCD;">Accept-Language: en-US,en;q=0.5</span></span>
<span class="line"><span style="color:#A6ACCD;">Accept-Encoding: gzip, deflate, br</span></span>
<span class="line"><span style="color:#A6ACCD;">Referer: https://developer.mozilla.org/testpage.html</span></span>
<span class="line"><span style="color:#A6ACCD;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#A6ACCD;">Upgrade-Insecure-Requests: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT</span></span>
<span class="line"><span style="color:#A6ACCD;">If-None-Match: &quot;c561c68d0ba92bbeb8b0fff2a9199f722e3a621a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Cache-Control: max-age=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9 HTTP Headers \u7684\u5B66\u4E60\u6700\u597D\u57FA\u4E8E\u5E94\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u7F13\u5B58\u3001CORS \u7B49\u3002</p>`,12),t=[p];function o(r,c,i,d,h,A){return s(),a("div",null,t)}var _=e(l,[["render",o]]);export{u as __pageData,_ as default};