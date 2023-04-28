import{_ as s,c as n,o as a,d as l}from"./app.19e8d22d.js";const d=JSON.parse('{"title":"axios","description":"","frontmatter":{},"headers":[{"level":2,"title":"config","slug":"config","link":"#config","children":[]},{"level":2,"title":"response","slug":"response","link":"#response","children":[]},{"level":2,"title":"error","slug":"error","link":"#error","children":[]}],"relativePath":"fe/framework/axios/axios.md","lastUpdated":1682650439000}'),p={name:"fe/framework/axios/axios.md"},o=l(`<h1 id="axios" tabindex="-1">axios <a class="header-anchor" href="#axios" aria-hidden="true">#</a></h1><p>调用 <code>axios</code> 函数发送请求，传入配置对象 <code>config</code>，返回 promise。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">axios</span><span style="color:#A6ACCD;">(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 请求成功</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 请求失败</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 默认 GET</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 添加在 url 前面</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">baseURL</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://some-domain.com/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 唯一必传参数，其他参数都可以不传</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 自定义请求头</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">X-Requested-With</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">XMLHttpRequest</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// query param，普通对象或 URLSearchParams 对象</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">ID</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">12345</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 序列化 query param 的函数，默认用 qs</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">paramsSerializer</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Qs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">arrayFormat</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">brackets</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 请求体数据，只用于 POST/PUT/PATCH/DELETE</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 如果没有 transformRequest，只能是以下类型：</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// - Browser only: FormData, File, Blob</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// - Node only: Stream, Buffer</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Fred</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 请求数据和 header 处理的函数列表，从左到右依次执行</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 仅用于 POST/PUT/PATCH/DELETE 方法</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 最后一个函数的返回值必须满足 data 的类型</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">transformRequest</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">headers</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 响应数据处理的函数列表</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">transformResponse</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// syntax alternative to send data into the body</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// method post</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// only the value is sent, not the key</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Country=Brasil&amp;City=Belo Horizonte</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 请求超时毫秒数，默认是 0（永远不会超时）</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 跨域请求是否带上 cookie，默认 false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withCredentials</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 使用 HTTP Basic auth，设置 Authorization 请求头，会覆盖 headers 里的</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">auth</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">username</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">janedoe</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">password</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s00pers3cret</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 响应数据类型，默认 json</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// options: &#39;arraybuffer&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// browser only: &#39;blob&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">responseType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 解码响应数据时的编码格式 (Node.js only)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">responseEncoding</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// CSRF token 的 cookie 名</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`xsrfCookieName\` is the name of the cookie to use as a value for xsrf token</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">xsrfCookieName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">XSRF-TOKEN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// CSRF token 的 header 名</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`xsrfHeaderName\` is the name of the http header that carries the xsrf token value</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">xsrfHeaderName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">X-XSRF-TOKEN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 上传时的进度事件</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`onUploadProgress\` allows handling of progress events for uploads</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// browser only</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">onUploadProgress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">progressEvent</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Do whatever you want with the native progress event</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 下载时的进度事件</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`onDownloadProgress\` allows handling of progress events for downloads</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// browser only</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">onDownloadProgress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">progressEvent</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Do whatever you want with the native progress event</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 响应数据的最大字节数（Node）</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`maxContentLength\` defines the max size of the http response content in bytes allowed in node.js</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">maxContentLength</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 请求数据的最大字节数</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`maxBodyLength\` (Node only option) defines the max size of the http request content in bytes allowed</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">maxBodyLength</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 根据状态码判断 promise 是 resolve 还是 reject</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 函数返回 true 则 resolve，否则 reject</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 默认 2xx 才 resolve</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">validateStatus</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">status</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// default</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 最大重定向数（Node）</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`maxRedirects\` defines the maximum number of redirects to follow in node.js.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// If set to 0, no redirects will be followed.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">maxRedirects</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`httpAgent\` and \`httpsAgent\` define a custom agent to be used when performing http</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// and https requests, respectively, in node.js. This allows options to be added like</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`keepAlive\` that are not enabled by default.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">httpAgent</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Agent</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> keepAlive</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">httpsAgent</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Agent</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> keepAlive</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`socketPath\` defines a UNIX Socket to be used in node.js.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// e.g. &#39;/var/run/docker.sock&#39; to send requests to the docker daemon.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Only either \`socketPath\` or \`proxy\` can be specified.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// If both are specified, \`socketPath\` is used.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">socketPath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`proxy\` defines the hostname, port, and protocol of the proxy server.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// You can also define your proxy using the conventional \`http_proxy\` and</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`https_proxy\` environment variables. If you are using environment variables</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// for your proxy configuration, you can also define a \`no_proxy\` environment</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// variable as a comma-separated list of domains that should not be proxied.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Use \`false\` to disable proxies, ignoring environment variables.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`auth\` indicates that HTTP Basic auth should be used to connect to the proxy, and</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// supplies credentials.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// This will set an \`Proxy-Authorization\` header, overwriting any existing</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`Proxy-Authorization\` custom headers you have set using \`headers\`.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// If the proxy server uses HTTPS, then you must set the protocol to \`https\`.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">protocol</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">host</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">port</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">auth</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">username</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mikeymike</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">password</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rapunz3l</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`cancelToken\` specifies a cancel token that can be used to cancel the request</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// (see Cancellation section below for details)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">cancelToken</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CancelToken</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">cancel</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`decompress\` indicates whether or not the response body should be decompressed</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// automatically. If set to \`true\` will also remove the &#39;content-encoding&#39; header</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// from the responses objects of all decompressed responses</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// - Node only (XHR cannot turn off decompression)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">decompress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 自定义请求处理，通常用于测试，接收配置对象，返回 promise</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">adapter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="response" tabindex="-1">response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h2><p>resolve 后 result 的类型。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// status code</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// status message</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">statusText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OK</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 响应头，header 都是小写的</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 响应数据</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 请求的 config</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">config</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 请求对象，XHR 对象或 ClientRequest 对象</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// It is the last ClientRequest instance in node.js (in redirects)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// and an XMLHttpRequest instance in the browser</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">request</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-hidden="true">#</a></h2><p>reject 后 error 的类型。</p><ul><li><code>response</code>：响应对象 <ul><li>接收到响应</li><li><code>validateStatus</code> 没有返回 <code>true</code> 导致 reject</li><li>可以拿到响应对象</li></ul></li><li><code>request</code>：请求对象 <ul><li>请求对象创建成功</li><li>可以拿到请求对象</li></ul></li><li><code>message</code>：错误信息</li><li><code>config</code>：请求配置</li><li><code>toJSON()</code>：转为 JSON 字符串</li></ul>`,11),e=[o];function t(c,r,F,y,i,D){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
