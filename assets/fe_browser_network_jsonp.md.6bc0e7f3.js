import{_ as s,c as n,o as a,U as l}from"./chunks/framework.e548c890.js";const i=JSON.parse('{"title":"JSONP","description":"","frontmatter":{},"headers":[],"relativePath":"fe/browser/network/jsonp.md","filePath":"fe/browser/network/jsonp.md","lastUpdated":1691589043000}'),p={name:"fe/browser/network/jsonp.md"},o=l(`<h1 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h1><ol><li>带上回调函数名的 query param 请求接口地址，比如 <code>xxx?callback=testFunction</code><ul><li>query param key 需要遵循接口提供方的要求，这里是 <code>callback</code></li></ul></li><li>接口地址返回 JS 脚本，里面用请求的数据调用 <code>testFunction</code> 函数</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">testFunction</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">userId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">accountType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="3"><li><code>testFunction</code> 函数内部可以对接收到的数据进行处理，比如传递给外部</li></ol><h2 id="fetchjsonp" tabindex="-1">fetchJsonp <a class="header-anchor" href="#fetchjsonp" aria-label="Permalink to &quot;fetchJsonp&quot;">​</a></h2><p>手写 JSONP，语法类似 <code>fetch</code>，返回 Promise。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateCallbackFunction</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">jsonp_</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">_</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ceil</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">clearFunction</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">functionName</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">delete</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">functionName</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">functionName</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeScript</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">scriptId</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scriptId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementsByTagName</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">head</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fetchJsonp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">callbackQueryParamKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">callbackFunctionName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">generateCallbackFunction</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">timeout</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scriptId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">callbackQueryParamKey</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">_</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">callbackFunctionName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">callbackFunctionName</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        ok</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">json</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">removeScript</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scriptId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearFunction</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callbackFunctionName</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scriptSrc</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#F07178;">      (</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&amp;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">callbackQueryParamKey</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">callbackFunctionName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scriptSrc</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scriptId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">JSONP request to </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> failed</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearFunction</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callbackFunctionName</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">removeScript</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scriptId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementsByTagName</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">head</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scriptElement</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">JSONP request to </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> failed</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearFunction</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callbackFunctionName</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">removeScript</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scriptId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timeout</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,7),e=[o];function t(c,r,F,y,D,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
