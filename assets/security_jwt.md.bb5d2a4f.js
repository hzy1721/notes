import{_ as s,c as a,o as e,a as l}from"./app.15131e7b.js";var o="/assets/jwt.d6f949d0.jpeg";const h=JSON.parse('{"title":"JWT","description":"","frontmatter":{},"headers":[{"level":2,"title":"Header","slug":"header"},{"level":2,"title":"Payload","slug":"payload"},{"level":2,"title":"Signature","slug":"signature"},{"level":2,"title":"Base64 URL \u7B97\u6CD5","slug":"base64-url-\u7B97\u6CD5"},{"level":2,"title":"\u4F7F\u7528\u65B9\u5F0F","slug":"\u4F7F\u7528\u65B9\u5F0F"},{"level":2,"title":"\u7279\u70B9","slug":"\u7279\u70B9"}],"relativePath":"security/jwt.md"}'),n={name:"security/jwt.md"},p=l('<h1 id="jwt" tabindex="-1">JWT <a class="header-anchor" href="#jwt" aria-hidden="true">#</a></h1><p>JWT (JSON Web Tokens) \u662F\u76EE\u524D\u6700\u6D41\u884C\u7684\u8DE8\u57DF\u8BA4\u8BC1\u89E3\u51B3\u65B9\u6848\u3002</p><p>JWT \u6709\u4E09\u4E2A\u90E8\u5206\uFF1A</p><ul><li>Header</li><li>Payload</li><li>Signature</li></ul><p>\u5199\u6210\u4E00\u884C\uFF0C\u7528\u70B9 <code>.</code> \u5206\u9694\uFF1A<code>Header.Payload.Signature</code></p><p><img src="'+o+`" alt=""></p><h2 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-hidden="true">#</a></h2><p>Header \u662F\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u63CF\u8FF0 JWT \u7684\u5143\u6570\u636E\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">alg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HS256</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typ</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JWT</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><code>alg</code>\uFF1A\u7B7E\u540D\u7B97\u6CD5 (algorithm)\uFF0C\u9ED8\u8BA4\u662F HMAC SHA256 (<code>HS256</code>)</li><li><code>typ</code>\uFF1Atoken \u7C7B\u578B (type)\uFF0C\u7EDF\u4E00\u5199\u4E3A <code>JWT</code></li></ul><p>\u6700\u540E\u4F7F\u7528 Base64 URL \u7B97\u6CD5\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002</p><h2 id="payload" tabindex="-1">Payload <a class="header-anchor" href="#payload" aria-hidden="true">#</a></h2><p>Payload \u4E5F\u662F\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u7528\u6765\u5B58\u653E\u5B9E\u9645\u9700\u8981\u4F20\u9001\u7684\u6570\u636E\u3002</p><p>JWT \u89C4\u5B9A\u4E86 7 \u4E2A\u5B98\u65B9\u5B57\u6BB5\uFF1A</p><ul><li><code>iss</code> (issuer)\uFF1A\u7B7E\u53D1\u4EBA</li><li><code>exp</code> (expiration time)\uFF1A\u8FC7\u671F\u65F6\u95F4</li><li><code>sub</code> (subject)\uFF1A\u4E3B\u9898</li><li><code>aud</code> (audience)\uFF1A\u53D7\u4F17</li><li><code>nbf</code> (Not Before)\uFF1A\u751F\u6548\u65F6\u95F4</li><li><code>iat</code> (Issued At)\uFF1A\u7B7E\u53D1\u65F6\u95F4</li><li><code>jti</code> (JWT ID)\uFF1A\u7F16\u53F7</li></ul><p>\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u79C1\u6709\u5B57\u6BB5\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">sub</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234567890</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John Doe</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">admin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>JWT \u9ED8\u8BA4\u4E0D\u52A0\u5BC6\uFF0C\u4E0D\u80FD\u653E\u79C1\u5BC6\u4FE1\u606F\u3002</p><p>\u6700\u540E\u4F7F\u7528 Base64 URL \u7B97\u6CD5\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002</p><h2 id="signature" tabindex="-1">Signature <a class="header-anchor" href="#signature" aria-hidden="true">#</a></h2><p>Signature \u662F\u5BF9 Header \u548C Payload \u7684\u7B7E\u540D\uFF0C\u9632\u6B62\u6570\u636E\u88AB\u7BE1\u6539\u3002</p><p>\u9996\u5148\u6307\u5B9A\u4E00\u4E2A<strong>\u53EA\u6709\u670D\u52A1\u7AEF\u77E5\u9053</strong>\u7684\u5BC6\u94A5 (<code>secret</code>)\uFF0C\u7136\u540E\u4F7F\u7528 Header \u6307\u5B9A\u7684\u7B7E\u540D\u7B97\u6CD5 <code>alg</code> \u751F\u6210 Signature\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">HMACSHA256</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">base64UrlEncode</span><span style="color:#A6ACCD;">(header) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">base64UrlEncode</span><span style="color:#A6ACCD;">(payload)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> secret)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="base64-url-\u7B97\u6CD5" tabindex="-1">Base64 URL \u7B97\u6CD5 <a class="header-anchor" href="#base64-url-\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>Base64 URL \u7B97\u6CD5\u57FA\u4E8E Base64 \u7B97\u6CD5\u505A\u4E86\u4E00\u4E9B\u4FEE\u6539\uFF1A</p><ul><li><code>/</code> \u66FF\u6362\u4E3A <code>_</code></li><li><code>+</code> \u66FF\u6362\u4E3A <code>-</code></li><li><code>=</code> \u7701\u7565</li></ul><p>\u56E0\u4E3A token \u6709\u53EF\u80FD\u4F5C\u4E3A query param\u3002</p><h2 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h2><ul><li>\u5BA2\u6237\u7AEF\u6536\u5230\u7684 JWT \u53EF\u4EE5\u653E\u5728 Cookie \u91CC\u81EA\u52A8\u53D1\u9001\uFF0C\u4F46\u4E0D\u80FD\u8DE8\u57DF</li><li>\u66F4\u597D\u7684\u529E\u6CD5\u662F\u653E\u5728\u8BF7\u6C42\u5934\u7684 <code>Authorization</code> \u91CC</li><li>\u4E5F\u53EF\u4EE5\u653E\u5728 POST \u8BF7\u6C42\u7684\u8BF7\u6C42\u4F53\u91CC\u3002</li></ul><h2 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>\u9ED8\u8BA4\u4E0D\u52A0\u5BC6\uFF0C\u670D\u52A1\u7AEF\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u505A\u52A0\u5BC6</li><li>\u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u8BA4\u8BC1\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u4EA4\u6362\u4FE1\u606F</li><li>\u670D\u52A1\u7AEF\u65E0\u72B6\u6001\uFF0C\u65E0\u6CD5\u5728\u5230\u671F\u65F6\u95F4\u524D\u6536\u56DE token \u6216\u4FEE\u6539 token \u6743\u9650</li><li>\u672C\u8EAB\u5305\u542B\u4E86\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u6CC4\u6F0F\u540E\u95EE\u9898\u6BD4\u8F83\u4E25\u91CD\uFF0C\u56E0\u6B64\u6709\u6548\u671F\u5E94\u8BE5\u8BBE\u7F6E\u5F97\u6BD4\u8F83\u77ED</li><li>JWT \u5E94\u8BE5\u4F7F\u7528 HTTPS \u4F20\u8F93\uFF0C\u800C\u4E0D\u662F HTTP</li></ul>`,31),t=[p];function c(r,i,d,D,y,F){return e(),a("div",null,t)}var A=s(n,[["render",c]]);export{h as __pageData,A as default};
