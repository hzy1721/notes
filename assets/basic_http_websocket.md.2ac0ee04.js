import{_ as s,c as a,o as n,U as o}from"./chunks/framework.e548c890.js";const l="/assets/websocket.fd80456e.png",C=JSON.parse('{"title":"WebSocket","description":"","frontmatter":{},"headers":[],"relativePath":"basic/http/websocket.md","filePath":"basic/http/websocket.md","lastUpdated":1697294017000}'),e={name:"basic/http/websocket.md"},p=o(`<h1 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h1><p>WebSocket 用于在客户端和服务端之间建立持久连接、进行全双工通信。</p><p>聊天软件、网络游戏、实时交易系统等应用需要使用 WebSocket。</p><h2 id="websocket-基本使用" tabindex="-1">WebSocket 基本使用 <a class="header-anchor" href="#websocket-基本使用" aria-label="Permalink to &quot;WebSocket 基本使用&quot;">​</a></h2><h3 id="创建-socket" tabindex="-1">创建 socket <a class="header-anchor" href="#创建-socket" aria-label="Permalink to &quot;创建 socket&quot;">​</a></h3><p>socket (套接字) 是数据传输的一个端点，首先需要创建 socket，用于后续的数据交互。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> socket </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WebSocket</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ws://javascript.info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>WebSocket 使用 <code>ws</code> 协议，类似于 HTTP，还有类似于 HTTPS 的 <code>wss</code>。</p><h3 id="监听事件" tabindex="-1">监听事件 <a class="header-anchor" href="#监听事件" aria-label="Permalink to &quot;监听事件&quot;">​</a></h3><p>socket 会触发 4 种事件：</p><ul><li><code>open</code>：连接建立</li><li><code>message</code>：接收到消息</li><li><code>error</code>：发生错误</li><li><code>close</code>：连接关闭</li></ul><p>使用 <code>on&lt;event&gt;</code> 添加事件处理函数，使用 <code>socket.send</code> 发送数据。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onopen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[open] Connection established</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Sending to server</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My name is John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmessage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[message] Data received from server: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclose</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wasClean</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[close] Connection closed cleanly, code=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> reason=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">reason</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 例如服务器进程被杀死或网络中断</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在这种情况下，event.code 通常为 1006</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[close] Connection died</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onerror</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[error] </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h2 id="连接建立" tabindex="-1">连接建立 <a class="header-anchor" href="#连接建立" aria-label="Permalink to &quot;连接建立&quot;">​</a></h2><p>WebSocket 建立连接时，首先使用 HTTP 询问服务端是否支持 WebSocket，如果支持则后续使用 WebSocket 进行通信。</p><img src="`+l+`" style="zoom:50%;"><p>假如要连接到 <code>wss://javascript.info/chat</code>，HTTP 请求报文如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GET /chat</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: javascript.info</span></span>
<span class="line"><span style="color:#A6ACCD;">Origin: https://javascript.info</span></span>
<span class="line"><span style="color:#A6ACCD;">Connection: Upgrade</span></span>
<span class="line"><span style="color:#A6ACCD;">Upgrade: websocket</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-WebSocket-Version: 13</span></span></code></pre></div><ul><li><code>GET</code> 请求</li><li><code>Origin</code>：当前页面 URL，WebSocket 原生支持跨域，不需要服务端做 CORS</li><li><code>Connection: Upgrade</code>：客户端想要更改协议</li><li><code>Upgrade: websocket</code>：更改为 WebSocket 协议</li><li><code>Sec-WebSocket-Key</code>：浏览器随机生成的密钥</li><li><code>Sec-WebSocket-Version</code>：WebSocket 协议版本</li></ul><p>服务端同意切换为 WebSocket 时的响应报文：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">101 Switching Protocols</span></span>
<span class="line"><span style="color:#A6ACCD;">Connection: Upgrade</span></span>
<span class="line"><span style="color:#A6ACCD;">Upgrade: websocket</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g=</span></span></code></pre></div><ul><li><code>Sec-WebSocket-Accept</code>：服务端使用特殊算法将 <code>Sec-WebSocket-Key</code> 重新编码</li></ul><h2 id="数据传输" tabindex="-1">数据传输 <a class="header-anchor" href="#数据传输" aria-label="Permalink to &quot;数据传输&quot;">​</a></h2><p>WebSocket 通信以 frame 为单位，有以下几种类型：</p><ul><li>text：文本数据</li><li>binary data：二进制数据</li><li>ping/pong：服务端检查连接</li><li>connection close：连接关闭</li></ul><p><code>send</code> 只能发送文本或二进制数据，支持 <code>String</code>、<code>Blob</code>、<code>ArrayBuffer</code> 等类型。</p><p><code>socket.binaryType</code> 指定二进制数据的格式，默认是 <code>blob</code>。</p><h2 id="流量控制" tabindex="-1">流量控制 <a class="header-anchor" href="#流量控制" aria-label="Permalink to &quot;流量控制&quot;">​</a></h2><p>如果接收方的网速很慢，需要发送的数据就会大量缓存在发送方的内存中，可以通过检查已缓冲的字节数来调整发送速率，使缓存消耗的内存不至于过多：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 每 100ms 检查一次 socket</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 仅当所有现有的数据都已被发送出去时，再发送更多数据</span></span>
<span class="line"><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bufferedAmount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">moreData</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="连接关闭" tabindex="-1">连接关闭 <a class="header-anchor" href="#连接关闭" aria-label="Permalink to &quot;连接关闭&quot;">​</a></h2><p>通信双方都可以主动关闭连接，发送可选的 code 和 reason。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">([code]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [reason])</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>常见 code：</p><ul><li><code>1000</code>：默认，正常关闭</li><li><code>1001</code>：一方离开，比如浏览器关闭页面</li><li><code>1006</code>：连接丢失时自动发送，无法手动发送</li><li><code>1009</code>：消息太大，无法处理</li><li><code>1011</code>：服务端意外错误</li><li>不能设置小于 <code>1000</code> 的 code</li></ul><h2 id="获取连接状态" tabindex="-1">获取连接状态 <a class="header-anchor" href="#获取连接状态" aria-label="Permalink to &quot;获取连接状态&quot;">​</a></h2><p><code>socket.readyState</code> 表示连接状态：</p><ul><li><code>0</code>：CONNECTING，正在建立连接</li><li><code>1</code>：OPEN，连接建立，通信中</li><li><code>2</code>：CLOSING，正在关闭连接</li><li><code>3</code>：CLOSED，连接已关闭</li></ul>`,38),c=[p];function t(r,i,y,D,F,d){return n(),a("div",null,c)}const h=s(e,[["render",t]]);export{C as __pageData,h as default};