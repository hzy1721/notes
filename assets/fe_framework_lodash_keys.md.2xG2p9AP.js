import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.mNpZ2GHZ.js";const o=JSON.parse('{"title":"keys","description":"","frontmatter":{},"headers":[],"relativePath":"fe/framework/lodash/keys.md","filePath":"fe/framework/lodash/keys.md","lastUpdated":1680742589000}'),e={name:"fe/framework/lodash/keys.md"},l=n(`<h1 id="keys" tabindex="-1">keys <a class="header-anchor" href="#keys" aria-label="Permalink to &quot;keys&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Creates an array of the own enumerable property names of \`object\`. 自有/数据/字符串/可枚举</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * **Note:** Non-object values are coerced to objects. See the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * for more details.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@since</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 0.1.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@category</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Object</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> object</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> The object to query.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Array}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Returns the array of property names.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@see</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> values,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> valuesIn</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * function Foo() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *   this.a = 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *   this.b = 2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Foo.prototype.c = 3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * keys(new Foo)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * // =&gt; [&#39;a&#39;, &#39;b&#39;] (iteration order is not guaranteed)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * keys(&#39;hi&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * // =&gt; [&#39;0&#39;, &#39;1&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isArrayLike</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(object)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> arrayLikeKeys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(object)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(object));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2),p=[l];function t(h,k,r,d,y,c){return a(),i("div",null,p)}const D=s(e,[["render",t]]);export{o as __pageData,D as default};
