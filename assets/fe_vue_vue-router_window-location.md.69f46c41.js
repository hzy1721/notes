import{_ as e,c as t,o,U as l}from"./chunks/framework.e548c890.js";const a="/assets/HashChangeEvent.1f2d118e.png",x=JSON.parse('{"title":"window.location","description":"","frontmatter":{},"headers":[],"relativePath":"fe/vue/vue-router/window-location.md","filePath":"fe/vue/vue-router/window-location.md","lastUpdated":1702821351000}'),c={name:"fe/vue/vue-router/window-location.md"},n=l('<h1 id="window-location" tabindex="-1">window.location <a class="header-anchor" href="#window-location" aria-label="Permalink to &quot;window.location&quot;">​</a></h1><p><code>window.location</code> 是一个 <code>Location</code> 对象，用于控制文档的当前 URL。</p><p>URL 由以下部分组成：</p><ul><li><code>href</code>：完整 URL <ul><li><code>origin</code>：源 <ul><li><code>protocol</code>：协议</li><li><code>host</code>：主机 <ul><li><code>hostname</code>：主机名，域名或 IP</li><li><code>port</code>：端口</li></ul></li></ul></li><li><code>pathname</code>：路径</li><li><code>search</code>：query param</li><li><code>hash</code>：hash ID</li></ul></li></ul><table><thead><tr><th style="text-align:center;">href</th><th style="text-align:center;"><code>https://example.org:8080/foo/bar?q=baz#bang</code></th></tr></thead><tbody><tr><td style="text-align:center;">origin</td><td style="text-align:center;"><code>https://example.org:8080</code></td></tr><tr><td style="text-align:center;">protocol</td><td style="text-align:center;"><code>https:</code></td></tr><tr><td style="text-align:center;">host</td><td style="text-align:center;"><code>example.org:8080</code></td></tr><tr><td style="text-align:center;">hostname</td><td style="text-align:center;"><code>example.org</code></td></tr><tr><td style="text-align:center;">port</td><td style="text-align:center;"><code>8080</code></td></tr><tr><td style="text-align:center;">pathname</td><td style="text-align:center;"><code>/foo/bar</code></td></tr><tr><td style="text-align:center;">search</td><td style="text-align:center;"><code>?q=baz</code></td></tr><tr><td style="text-align:center;">hash</td><td style="text-align:center;"><code>#bang</code></td></tr></tbody></table><p>属性：</p><ul><li>上面提到的 URL 的每个部分都有对应的属性</li><li><code>location = &#39;xxx&#39;</code> 等价于 <code>location.href = &#39;xxx&#39;</code></li></ul><p>方法：</p><ul><li><code>assign(url)</code>：导航到另一个 URL</li><li><code>reload()</code>：刷新当前页面，相当于点击浏览器的刷新按钮</li><li><code>replace(url)</code>：用另一个 URL 替换当前页面</li><li><code>toString()</code>：返回 <code>href</code> 属性的值</li></ul><p><code>hashchange</code> 事件：</p><ul><li>当页面 <code>hash</code> 改变时触发</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hashchange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><img src="'+a+'" width="50%"><p><code>HashChangeEvent</code>：</p><ul><li><code>newURL</code>：导航后的新 URL</li><li><code>oldURL</code>：导航前的旧 URL</li></ul>',15),d=[n];function s(i,r,p,h,g,u){return o(),t("div",null,d)}const _=e(c,[["render",s]]);export{x as __pageData,_ as default};
