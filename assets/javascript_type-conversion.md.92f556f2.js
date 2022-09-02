import{_ as e,c as o,o as l,a as c}from"./app.048909d3.js";const D=JSON.parse('{"title":"\u7C7B\u578B\u8F6C\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32","slug":"\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32"},{"level":2,"title":"\u8F6C\u6362\u4E3A\u6570\u5B57","slug":"\u8F6C\u6362\u4E3A\u6570\u5B57"},{"level":2,"title":"\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C","slug":"\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C"},{"level":2,"title":"\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u59CB\u503C","slug":"\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u59CB\u503C"}],"relativePath":"javascript/type-conversion.md"}'),d={name:"javascript/type-conversion.md"},a=c(`<h1 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1">\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h1><h2 id="\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32" tabindex="-1">\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32 <a class="header-anchor" href="#\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h2><p>\u9700\u8981\u5B57\u7B26\u4E32\u7684\u5730\u65B9\uFF0C\u4F1A\u9690\u5F0F\u8F6C\u6362\u4E3A <code>String</code> \u7C7B\u578B\u3002\u6BD4\u5982 <code>alert</code>\u3002</p><p>\u663E\u5F0F\u8F6C\u6362\uFF1A<code>String(value)</code></p><h2 id="\u8F6C\u6362\u4E3A\u6570\u5B57" tabindex="-1">\u8F6C\u6362\u4E3A\u6570\u5B57 <a class="header-anchor" href="#\u8F6C\u6362\u4E3A\u6570\u5B57" aria-hidden="true">#</a></h2><p>\u4E0D\u540C\u7C7B\u578B\u539F\u59CB\u503C\u4E4B\u95F4\u7684\u7B97\u672F\u8FD0\u7B97\u3001\u6BD4\u8F83\u5927\u5C0F\u65F6\uFF0C\u4F1A\u9690\u5F0F\u628A\u64CD\u4F5C\u6570\u8F6C\u6362\u4E3A <code>Number</code> \u7C7B\u578B\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span></code></pre></div><p>\u663E\u5F0F\u8F6C\u6362\uFF1A<code>Number(value)</code></p><p>\u8F6C\u6362\u89C4\u5219\uFF1A</p><ul><li><code>String</code>\uFF1A <ul><li>\u53BB\u6389\u9996\u5C3E\u7A7A\u767D\u7B26\uFF0C\u5269\u4F59\u7EAF\u6570\u5B57\u5B57\u7B26\u4E32\u542B\u6709\u7684\u6570\u5B57</li><li>\u5982\u679C\u5269\u4F59\u5B57\u7B26\u4E32\u4E3A\u7A7A\uFF0C\u7ED3\u679C\u4E3A 0</li><li>\u5982\u679C\u5269\u4F59\u5B57\u7B26\u4E32\u4E0D\u7B26\u5408\u6570\u5B57\u7684\u683C\u5F0F\uFF0C\u7ED3\u679C\u4E3A NaN</li></ul></li><li><code>Boolean</code>\uFF1A<code>true</code> \u4E3A 1\uFF0C<code>false</code> \u4E3A 0</li><li><code>null</code>\uFF1A0</li><li><code>undefined</code>\uFF1ANaN</li></ul><h2 id="\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C" tabindex="-1">\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C <a class="header-anchor" href="#\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C" aria-hidden="true">#</a></h2><p>\u903B\u8F91\u8FD0\u7B97\u7B49\u9700\u8981\u5E03\u5C14\u503C\u7684\u5730\u65B9\uFF0C\u4F1A\u9690\u5F0F\u8F6C\u6362\u4E3A <code>Boolean</code> \u7C7B\u578B\u3002</p><p>\u663E\u5F0F\u8F6C\u6362\uFF1A<code>Boolean(value)</code></p><p>\u8F6C\u6362\u89C4\u5219\uFF1A</p><ul><li><code>0</code>\u3001<code>NaN</code>\u3001\u7A7A\u5B57\u7B26\u4E32\u3001<code>null</code>\u3001<code>undefined</code> \u8F6C\u6362\u4E3A <code>false</code></li><li>\u5176\u4ED6\u503C\u8F6C\u6362\u4E3A <code>true</code></li></ul><h2 id="\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u59CB\u503C" tabindex="-1">\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u59CB\u503C <a class="header-anchor" href="#\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u59CB\u503C" aria-hidden="true">#</a></h2><p>JS \u5BF9\u8C61\u4E0D\u652F\u6301\u8FD0\u7B97\u7B26\u91CD\u8F7D\uFF0C\u7B97\u672F\u8FD0\u7B97\u4E2D\u7684\u5BF9\u8C61\u4F1A\u9690\u5F0F\u8F6C\u6362\u4E3A\u539F\u59CB\u503C\u3002\u8FD8\u6709\u4E00\u4E9B\u9700\u8981\u539F\u59CB\u503C\u7684\u5730\u65B9\uFF0C\u4F20\u5165\u5BF9\u8C61\u4E5F\u4F1A\u8FDB\u884C\u9690\u5F0F\u8F6C\u6362\u3002</p><p>\u6240\u6709\u9700\u8981\u5E03\u5C14\u503C\u7684\u4E0A\u4E0B\u6587\uFF0C\u4F20\u5165\u5BF9\u8C61\u5747\u8F6C\u6362\u4E3A <code>true</code>\u3002</p><p>\u5BF9\u8C61\u5411\u539F\u59CB\u503C\u7684\u8F6C\u6362\u89C4\u5219\u4F9D\u636E\u7684\u662F \u201C<strong>hint</strong>\u201D\uFF0C\u6709 3 \u79CD\u7C7B\u578B\uFF1A</p><ul><li><code>string</code>\uFF1A\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li><li><code>number</code>\uFF1A\u8F6C\u6362\u4E3A\u6570\u5B57</li><li><code>default</code>\uFF1A\u5F53\u8FD0\u7B97\u7B26\u4E0D\u786E\u5B9A\u671F\u671B\u503C\u7684\u7C7B\u578B\u65F6\uFF0C\u5C11\u6570\u60C5\u51B5\u4E0B\u53D1\u751F <ul><li>\u4E8C\u5143\u52A0\u6CD5 <code>+</code> \u65E2\u53EF\u4EE5\u76F8\u52A0\u6570\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u62FC\u63A5\u5B57\u7B26\u4E32\uFF0C\u76F8\u52A0\u5BF9\u8C61\u65F6\u4E0D\u77E5\u9053\u5E94\u8BE5\u8F6C\u6362\u4E3A\u54EA\u79CD\u7C7B\u578B</li><li>\u5BF9\u8C61\u4E0E\u539F\u59CB\u503C\u8FDB\u884C <code>==</code> \u6BD4\u8F83\u65F6\uFF0C\u4E5F\u4E0D\u77E5\u9053\u5E94\u8BE5\u8F6C\u6362\u4E3A\u54EA\u79CD\u7C7B\u578B</li><li>\u4F46\u662F <code>&lt;</code> \u548C <code>&gt;</code> \u4F7F\u7528 <code>number</code> hint\uFF0C\u8FD9\u662F\u5386\u53F2\u539F\u56E0</li><li>\u9664\u4E86 <code>Date</code>\uFF0C\u6240\u6709\u5185\u5EFA\u5BF9\u8C61\u5BF9 <code>default</code> \u7684\u5B9E\u73B0\u4E0E <code>number</code> \u76F8\u540C</li></ul></li></ul><p>\u8F6C\u6362\u8FC7\u7A0B\uFF1A</p><ul><li>\u5C1D\u8BD5\u8C03\u7528 <code>[Symbol.toPrimitive](hint)</code><ul><li>\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u539F\u59CB\u503C\uFF0C\u5426\u5219\u62A5\u9519</li></ul></li><li>\u5982\u679C hint \u662F <code>string</code>\uFF0C\u5C1D\u8BD5\u8C03\u7528 <code>toString()</code> \u548C <code>valueOf()</code></li><li>\u5982\u679C hint \u662F <code>number</code> \u6216 <code>default</code>\uFF0C\u5C1D\u8BD5\u8C03\u7528 <code>valueOf()</code> \u548C <code>toString()</code><ul><li>\u666E\u901A\u5BF9\u8C61\u7684 <code>toString()</code> \u9ED8\u8BA4\u8FD4\u56DE <code>[object Object]</code>\uFF0C<code>valueOf()</code> \u9ED8\u8BA4\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB</li><li>\u5982\u679C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u975E\u539F\u59CB\u503C\uFF0C\u8FD4\u56DE\u503C\u4F1A\u88AB\u5FFD\u7565</li><li>\u5982\u679C <code>valueOf()</code> \u8FD4\u56DE\u7684\u4E0D\u662F\u539F\u59CB\u503C\uFF0C<code>toString()</code> \u4F1A\u88AB\u4F7F\u7528\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6700\u7EC8\u5F97\u5230\u7684\u503C\u4E0D\u4E00\u5B9A\u4E0E hint \u5BF9\u5E94\uFF0C\u53EA\u8981\u6C42\u662F\u539F\u59CB\u503C</li></ul></li></ul><p>\u4ECE\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u59CB\u503C\u540E\uFF0C\u53EF\u80FD\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u8F6C\u6362\uFF0C\u6839\u636E\u4E0A\u8FF0\u7684\u89C4\u5219\u8FDB\u884C\u3002</p>`,23),n=[a];function i(s,t,r,p,u,h){return l(),o("div",null,n)}var f=e(d,[["render",i]]);export{D as __pageData,f as default};