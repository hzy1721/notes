import{_ as e,c as i,o as d,d as l}from"./app.e6616afd.js";const b=JSON.parse('{"title":"BigInt","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建 BigInt","slug":"创建-bigint","link":"#创建-bigint","children":[]},{"level":2,"title":"数学运算","slug":"数学运算","link":"#数学运算","children":[]},{"level":2,"title":"比较运算","slug":"比较运算","link":"#比较运算","children":[]},{"level":2,"title":"布尔运算","slug":"布尔运算","link":"#布尔运算","children":[]}],"relativePath":"fe/js/bigint.md"}'),t={name:"fe/js/bigint.md"},n=l('<h1 id="bigint" tabindex="-1">BigInt <a class="header-anchor" href="#bigint" aria-hidden="true">#</a></h1><p><code>BigInt</code> 支持任意长度的整数。</p><h2 id="创建-bigint" tabindex="-1">创建 BigInt <a class="header-anchor" href="#创建-bigint" aria-hidden="true">#</a></h2><ul><li>整数字面量后面加 <code>n</code><ul><li><code>123n</code></li></ul></li><li>调用 <code>BigInt()</code> 函数，从 Number、String 类型转换 <ul><li><code>BigInt(123)</code></li><li><code>BigInt(&#39;123&#39;)</code></li></ul></li></ul><h2 id="数学运算" tabindex="-1">数学运算 <a class="header-anchor" href="#数学运算" aria-hidden="true">#</a></h2><ul><li>支持大部分数学运算符</li><li>计算结果仍是 <code>BigInt</code></li><li>不支持 <code>BigInt</code> 和 <code>Number</code> 直接运算，需要进行显式类型转换</li></ul><h2 id="比较运算" tabindex="-1">比较运算 <a class="header-anchor" href="#比较运算" aria-hidden="true">#</a></h2><ul><li>支持 <code>BigInt</code> 和 <code>Number</code> 直接比较</li><li>值相同的 <code>BigInt</code> 和 Number，<code>==</code> 为 true，<code>===</code> 为 false</li></ul><h2 id="布尔运算" tabindex="-1">布尔运算 <a class="header-anchor" href="#布尔运算" aria-hidden="true">#</a></h2><ul><li>行为与 Number 类似，非 <code>0n</code> 是 true，<code>0n</code> 是 false</li></ul>',10),c=[n];function a(o,r,h,s,u,g){return d(),i("div",null,c)}const f=e(t,[["render",a]]);export{b as __pageData,f as default};
