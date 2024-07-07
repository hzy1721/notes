import{_ as t,c as e,o as a,a1 as i}from"./chunks/framework.mNpZ2GHZ.js";const l="/assets/cache-vary.Ct-YClA3.png",m=JSON.parse('{"title":"缓存","description":"","frontmatter":{},"headers":[],"relativePath":"basic/http/cache.md","filePath":"basic/http/cache.md","lastUpdated":1682299657000}'),s={name:"basic/http/cache.md"},d=i('<h1 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h1><h2 id="expires" tabindex="-1">Expires <a class="header-anchor" href="#expires" aria-label="Permalink to &quot;Expires&quot;">​</a></h2><p>HTTP/1.0 用 <code>Expires</code> 指定缓存过期的时间字符串。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expires</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Wed, 21 Oct 2015 07:28:00 GMT</span></span></code></pre></div><p>缺点：</p><ul><li>基于客户端系统时间判断缓存的有效性，不够可靠</li><li>缓存过期后只能重新传输一份数据，对于数据没有改变的情况是多余的</li></ul><h2 id="cache-control" tabindex="-1">Cache-Control <a class="header-anchor" href="#cache-control" aria-label="Permalink to &quot;Cache-Control&quot;">​</a></h2><p>HTTP/1.1 新增 <code>Cache-Control</code> 指定缓存策略。</p><table tabindex="0"><thead><tr><th>Request</th><th>Response</th></tr></thead><tbody><tr><td>max-age</td><td>max-age</td></tr><tr><td>max-stale</td><td></td></tr><tr><td>min-fresh</td><td></td></tr><tr><td></td><td>s-maxage</td></tr><tr><td>no-cache</td><td>no-cache</td></tr><tr><td>no-store</td><td>no-store</td></tr><tr><td>no-transform</td><td>no-transform</td></tr><tr><td>only-if-cached</td><td></td></tr><tr><td></td><td>must-revalidate</td></tr><tr><td></td><td>proxy-revalidate</td></tr><tr><td></td><td>must-understand</td></tr><tr><td></td><td>private</td></tr><tr><td></td><td>public</td></tr><tr><td></td><td>immutable</td></tr><tr><td></td><td>stale-while-revalidate</td></tr><tr><td>stale-if-error</td><td>stale-if-error</td></tr></tbody></table><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><code>max-age=xxx</code>：缓存有效期，以秒为单位 <ul><li>从资源产生时开始计算，浏览器存储时会减去 <code>Age</code></li><li>优先级高于 <code>Expires</code></li></ul></li><li><code>s-maxage=xxx</code>：类似 <code>max-age</code>，只用于共享缓存 <ul><li>共享缓存 (shared)：在代理服务器、CDN 上存储</li><li>优先级高于 <code>max-age</code></li></ul></li><li><code>no-cache</code>：允许缓存，但是每次请求都必须重新验证，无论缓存是否过期</li><li><code>must-revalidate</code>：当缓存过期时必须重新验证 <ul><li>当无法连接服务器时，HTTP 默认允许使用过期的缓存，加上该指令可以禁止这种行为</li></ul></li><li><code>proxy-revalidate</code>：类似 <code>must-revalidate</code>，只用于共享缓存</li><li><code>no-store</code>：禁止缓存 <ul><li>禁止缓存新响应，但不禁止旧缓存的使用</li></ul></li><li><code>private</code>：只能在浏览器缓存</li><li><code>public</code>：允许作为共享缓存</li><li><code>must-understand</code>：只有当理解基于状态码的缓存要求时才缓存资源</li><li><code>no-transform</code>：禁止修改资源</li><li><code>immutable</code>：缓存有效期内资源不会发生修改</li><li><code>stale-while-revalidate=xxx</code>：缓存过期后的一段时间内，允许使用过期的缓存，同时在后台重新验证 <ul><li>减少响应时间，提升用户体验</li></ul></li><li><code>stale-if-error</code>：缓存过期后重新验证时，如果遇到错误 (<code>500/502/503/504</code>)，在指定时间段内允许使用过期的缓存</li></ul><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><ul><li><code>no-cache</code>：强制重新验证，尽管缓存还没过期 <ul><li>当用户<strong>强制刷新</strong>页面时，浏览器会带上这个指令</li></ul></li><li><code>no-store</code>：避免缓存请求和响应 <ul><li>⚠️ 大部分浏览器不支持</li></ul></li><li><code>max-age=xxx</code>：允许使用缓存的有效期要求 <ul><li>很多浏览器用 <code>max-age=0</code> 代替 <code>no-cache</code> 来<strong>刷新</strong>页面</li></ul></li><li><code>max-stale=xxx</code>：允许使用过期一段时间的缓存 <ul><li>⚠️ 大部分浏览器不支持</li></ul></li><li><code>min-fresh=xxx</code>：禁止使用剩余有效期过短的缓存 <ul><li>⚠️ 大部分浏览器不支持</li></ul></li><li><code>no-transform</code>：与响应报文的指令含义相同</li><li><code>only-if-cached</code>：只返回缓存，即使已经过期，如果没有缓存返回 504</li></ul><h2 id="vary" tabindex="-1">Vary <a class="header-anchor" href="#vary" aria-label="Permalink to &quot;Vary&quot;">​</a></h2><ul><li>缓存默认通过 URL 区分，相同的 URL 会返回相同的缓存，但有一些例外</li><li>通过 <code>Accept</code>、<code>Accept-Language</code>、<code>Accept-Encoding</code> 进行内容协商，不同的请求头会返回不同的内容，应该分开缓存</li><li>可以在 <code>Vary</code> 中指定缓存的 key，比如：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vary: Accept-Language</span></span></code></pre></div><p>缓存查找时就会同时考虑 URL 和 <code>Accept-Language</code> 的值：</p><p><img src="'+l+`" alt=""></p><h2 id="last-modified" tabindex="-1">Last-Modified <a class="header-anchor" href="#last-modified" aria-label="Permalink to &quot;Last-Modified&quot;">​</a></h2><p>资源的最后修改时间。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Last-Modified</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;day-name&gt;, &lt;day&gt; &lt;month&gt; &lt;year&gt; &lt;hour&gt;:&lt;minute&gt;:&lt;second&gt; GMT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Last-Modified</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Wed, 21 Oct 2015 07:28:00 GMT</span></span></code></pre></div><p>过期缓存重新验证时，发送包含 <code>If-Modified-Since</code> 的报文，值为缓存的生成时间。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">If-Modified-Since</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;day-name&gt;, &lt;day&gt; &lt;month&gt; &lt;year&gt; &lt;hour&gt;:&lt;minute&gt;:&lt;second&gt; GMT</span></span></code></pre></div><p><code>Last-Modified</code> 也用于爬虫、CMS 等应用。</p><p>缺点：</p><ul><li>部分文件会周期性修改，但是内容不一定变化，会造成缓存不必要的失效</li><li>部分文件修改非常频繁，以秒为粒度的 <code>Last-Modified</code> 无法准确描述</li><li>一些文件系统无法精确得到文件的修改时间，可能影响缓存的准确性</li></ul><h2 id="etag" tabindex="-1">ETag <a class="header-anchor" href="#etag" aria-label="Permalink to &quot;ETag&quot;">​</a></h2><ul><li>服务端生成、区分资源是否修改的字符串，比如哈希值、版本号等</li><li>优先级高于 <code>Last-Modified</code></li></ul><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ETag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> W/&quot;&lt;etag_value&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ETag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;etag_value&gt;&quot;</span></span></code></pre></div><ul><li>缓存过期重新验证时，把 <code>ETag</code> 的值放入 <code>If-None-Match</code>，请求服务端资源是否被修改</li><li>优先级高于 <code>If-Modified-Since</code></li></ul><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">If-None-Match</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;etag_value&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">If-None-Match</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;etag_value&gt;&quot;, &quot;&lt;etag_value&gt;&quot;, …</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">If-None-Match</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> *</span></span></code></pre></div><h2 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h2><p>本地缓存命中且未过期，直接使用本地缓存的资源。</p><h2 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h2><ol><li>缓存过期，带上 <code>If-Modified-Since</code> 或 <code>If-None-Match</code> 请求服务端</li><li>资源未修改，返回 <code>304 Not Modified</code>，重新设置缓存有效时间，使用本地缓存</li><li>资源已修改，返回 <code>200 OK</code> 和资源的最新版本 <ul><li>服务端 <code>Last-Modified</code> 晚于 <code>If-Modified-Since</code></li><li>服务端 <code>ETag</code> 与 <code>If-None-Match</code> 不同</li></ul></li></ol><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ul><li>减少响应时间</li><li>降低服务器负载</li><li>节省带宽</li></ul>`,37),o=[d];function c(n,h,r,p,u,g){return a(),e("div",null,o)}const b=t(s,[["render",c]]);export{m as __pageData,b as default};
