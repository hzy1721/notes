import{_ as i,c as e,o as s,a1 as l}from"./chunks/framework.mNpZ2GHZ.js";const g=JSON.parse('{"title":"JSON","description":"","frontmatter":{},"headers":[],"relativePath":"fe/lang/js/json.md","filePath":"fe/lang/js/json.md","lastUpdated":1702822707000}'),a={name:"fe/lang/js/json.md"},t=l('<h1 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h1><h2 id="json-stringify" tabindex="-1">JSON.stringify <a class="header-anchor" href="#json-stringify" aria-label="Permalink to &quot;JSON.stringify&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value));</span></span></code></pre></div><p>JSON 是 JS 的子集，只支持基础类型：</p><ul><li>只支持：有限数值、字符串、布尔值、<code>null</code>、普通对象、数组</li><li><code>Number</code>： <ul><li>支持普通数值</li><li><code>NaN</code>、<code>Infinity</code>、<code>-Infinity</code> 序列化为 <code>null</code></li></ul></li><li><code>BigInt</code>：报错</li><li><code>String</code>：支持</li><li><code>Boolean</code>：支持</li><li><code>null</code>：支持</li><li><code>undefined</code>： <ul><li>单值或对象属性：忽略</li><li>数组元素：序列化为 <code>null</code></li></ul></li><li><code>Symbol</code>： <ul><li>单值或对象属性：忽略</li><li>数组元素：序列化为 <code>null</code></li></ul></li><li><code>Object</code>： <ul><li>只支持可枚举字符串数据属性，意味着无法携带类型信息</li><li><code>Date</code> 对象会被序列化为 ISO 字符串，但 <code>JSON.parse</code> 无法解析回 <code>Date</code> 对象，只会保持原来的字符串类型</li></ul></li></ul>',5),n=[t];function o(d,c,h,r,p,k){return s(),e("div",null,n)}const _=i(a,[["render",o]]);export{g as __pageData,_ as default};
