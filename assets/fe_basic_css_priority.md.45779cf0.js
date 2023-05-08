import{_ as t,c as l,o as e,d as i}from"./app.6117d686.js";const f=JSON.parse('{"title":"优先级","description":"","frontmatter":{},"headers":[{"level":2,"title":"特异性","slug":"特异性","link":"#特异性","children":[]}],"relativePath":"fe/basic/css/priority.md","lastUpdated":1682050462000}'),o={name:"fe/basic/css/priority.md"},d=i('<h1 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-hidden="true">#</a></h1><p>有 3 种方式使用 CSS：</p><ul><li>内联：<code>&lt;p style=&quot;...&quot;&gt;&lt;/p&gt;</code></li><li>外链：<code>&lt;link ref=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;</code></li><li>嵌入：<code>&lt;style&gt; ... &lt;/style&gt;</code></li></ul><p>优先级从高到低：</p><ul><li><code>!important</code>：优先级最高，可以覆盖其他所有样式</li><li>内联样式：优先级高于选择器样式</li><li>外链和嵌入样式：计算特异性 (specificity) 确定优先级</li></ul><h2 id="特异性" tabindex="-1">特异性 <a class="header-anchor" href="#特异性" aria-hidden="true">#</a></h2><p>根据描述元素的具体程度，将 7 种选择器分为 4 类：</p><ol><li><strong>ID</strong><ul><li>ID 选择器</li></ul></li><li><strong>CLASS</strong><ul><li>类选择器</li><li>伪类选择器</li><li>属性选择器</li></ul></li><li><strong>TYPE</strong><ul><li>标签选择器</li><li>伪元素选择器</li></ul></li><li>No value <ul><li>通配选择器 <code>*</code></li><li>伪类选择器 <code>where()</code></li></ul></li></ol><table><thead><tr><th></th><th>ID</th><th>CLASS</th><th>TYPE</th><th>No value</th></tr></thead><tbody><tr><td>权重</td><td>100</td><td>10</td><td>1</td><td>0</td></tr></tbody></table><p>多个选择器组合，不考虑组合方式，只计算个数。</p><p>特异性：分别计算 ID、CLASS、TYPE 三类选择器的个数，乘上对应的权重再相加。</p>',11),r=[d];function a(s,c,n,h,p,u){return e(),l("div",null,r)}const g=t(o,[["render",a]]);export{f as __pageData,g as default};