import{_ as e,c as s,o as i,a1 as t}from"./chunks/framework.mNpZ2GHZ.js";const g=JSON.parse('{"title":"TextDecoder","description":"","frontmatter":{},"headers":[],"relativePath":"fe/lang/js/binary/text-decoder.md","filePath":"fe/lang/js/binary/text-decoder.md","lastUpdated":1702822707000}'),a={name:"fe/lang/js/binary/text-decoder.md"},d=t('<h1 id="textdecoder" tabindex="-1">TextDecoder <a class="header-anchor" href="#textdecoder" aria-label="Permalink to &quot;TextDecoder&quot;">​</a></h1><p><code>TextDecoder</code> 把 buffer 解码为字符串。</p><p>创建 <code>TextDecoder</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> decoder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TextDecoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([label], [options]);</span></span></code></pre></div><ul><li><code>label</code>：编码格式，默认 <code>utf-8</code></li><li><code>options</code>： <ul><li><code>fatal</code>：设为 <code>true</code> 碰到无效字符抛出异常，否则用 <code>\\uFFFD</code> 替换无效字符</li><li><code>ignoreBOM</code>：设为 <code>true</code> 忽略 BOM</li></ul></li></ul><p>解码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> decoder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([input], [options]);</span></span></code></pre></div><ul><li><code>input</code>：被解码的 buffer</li><li><code>options</code>： <ul><li><code>stream</code>：适用于解码流，上一个 buffer 末尾解码不完全的字节会被拼接到下一个 buffer</li></ul></li></ul>',8),o=[d];function l(c,n,p,r,h,k){return i(),s("div",null,o)}const _=e(a,[["render",l]]);export{g as __pageData,_ as default};
