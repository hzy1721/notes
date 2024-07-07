import{_ as t,c as e,o as a,a1 as d}from"./chunks/framework.mNpZ2GHZ.js";const _=JSON.parse('{"title":"output","description":"","frontmatter":{},"headers":[],"relativePath":"fe/engineer/bundler/webpack/output.md","filePath":"fe/engineer/bundler/webpack/output.md","lastUpdated":1720354129000}'),o={name:"fe/engineer/bundler/webpack/output.md"},h=d('<h1 id="output" tabindex="-1">output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;output&quot;">​</a></h1><p>打包结果的输出路径。</p><h2 id="output-path" tabindex="-1">output.path <a class="header-anchor" href="#output-path" aria-label="Permalink to &quot;output.path&quot;">​</a></h2><p>输出目录。</p><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>string</code></td><td>输出目录的绝对路径</td><td><code>path.join(process.cwd(), &#39;dist&#39;)</code></td></tr></tbody></table><h2 id="output-filename" tabindex="-1">output.filename <a class="header-anchor" href="#output-filename" aria-label="Permalink to &quot;output.filename&quot;">​</a></h2><p>输出 bundle 的路径。</p><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>string</code></td><td>bundle 路径，支持动态字符串</td><td></td></tr><tr><td><code>(pathData, assetInfo) =&gt; string</code></td><td></td><td></td></tr></tbody></table><h3 id="动态字符串" tabindex="-1">动态字符串 <a class="header-anchor" href="#动态字符串" aria-label="Permalink to &quot;动态字符串&quot;">​</a></h3><table tabindex="0"><thead><tr><th>动态字符串</th><th>含义</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>entry 名</td></tr><tr><td><code>[id]</code></td><td>webpack 内部的 chunk id</td></tr><tr><td><code>[contenthash]</code></td><td>文件内容的哈希值</td></tr></tbody></table><h2 id="output-publicpath" tabindex="-1">output.publicPath <a class="header-anchor" href="#output-publicpath" aria-label="Permalink to &quot;output.publicPath&quot;">​</a></h2><p><code>output.path</code> 对应的 URL。会影响引用资源的路径，比如 <code>&lt;link&gt;</code>、<code>url()</code> 等。</p><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>string</code></td><td>输出目录对应的 URL</td><td><code>&#39;auto&#39;</code></td></tr></tbody></table><h2 id="output-clean" tabindex="-1">output.clean <a class="header-anchor" href="#output-clean" aria-label="Permalink to &quot;output.clean&quot;">​</a></h2><p>输出打包结果前清空输出目录。</p><table tabindex="0"><thead><tr><th>类型</th><th>含义</th><th>默认值</th></tr></thead><tbody><tr><td><code>boolean</code></td><td>是否清空</td><td><code>false</code></td></tr></tbody></table>',16),r=[h];function u(c,n,l,p,i,b){return a(),e("div",null,r)}const f=t(o,[["render",u]]);export{_ as __pageData,f as default};
