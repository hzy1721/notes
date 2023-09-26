import{_ as e,c as t,o as l,U as a}from"./chunks/framework.e548c890.js";const x=JSON.parse('{"title":"选择器","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/css/selector.md","filePath":"fe/basic/css/selector.md","lastUpdated":1695698588000}'),i={name:"fe/basic/css/selector.md"},d=a('<h1 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-label="Permalink to &quot;选择器&quot;">​</a></h1><h2 id="id-选择器-id" tabindex="-1">ID 选择器 (ID) <a class="header-anchor" href="#id-选择器-id" aria-label="Permalink to &quot;ID 选择器 (ID)&quot;">​</a></h2><ul><li>语法：<code>#idname</code></li><li>基于元素的 <code>id</code> 属性，文档中一个 id 只能对应一个元素</li></ul><h2 id="类选择器-class" tabindex="-1">类选择器 (Class) <a class="header-anchor" href="#类选择器-class" aria-label="Permalink to &quot;类选择器 (Class)&quot;">​</a></h2><ul><li>语法：<code>.classname</code></li><li>基于元素的 <code>class</code> 属性，一个类名可以应用于多个元素</li></ul><h2 id="属性选择器-attribute" tabindex="-1">属性选择器 (Attribute) <a class="header-anchor" href="#属性选择器-attribute" aria-label="Permalink to &quot;属性选择器 (Attribute)&quot;">​</a></h2><ul><li>语法： <ul><li><code>[attr]</code>：属性存在</li><li><code>[attr=value]</code>：属性的值为 <code>value</code></li><li><code>[attr~=value]</code>：属性是空格分隔的多个值，其中一个是 <code>value</code></li><li><code>[attr|=value]</code>：属性的值等于 <code>value</code> 或者以 <code>value-</code> 为前缀</li><li><code>[attr^=value]</code>：属性的值以 <code>value</code> 为前缀</li><li><code>[attr$=value]</code>：属性的值以 <code>value</code> 为后缀</li><li><code>[attr*=value]</code>：属性的值包含 <code>value</code></li></ul></li><li>基于元素的属性应用样式，支持多种匹配方法</li></ul><h2 id="标签选择器-type" tabindex="-1">标签选择器 (Type) <a class="header-anchor" href="#标签选择器-type" aria-label="Permalink to &quot;标签选择器 (Type)&quot;">​</a></h2><ul><li>语法：<code>elementname</code></li><li>基于 HTML 标签类型应用样式</li></ul><h2 id="伪元素选择器-pseudo-elements" tabindex="-1">伪元素选择器 (Pseudo elements) <a class="header-anchor" href="#伪元素选择器-pseudo-elements" aria-label="Permalink to &quot;伪元素选择器 (Pseudo elements)&quot;">​</a></h2><ul><li>语法：<code>selector::pseudo-elementname</code></li><li>附加在其他选择器后，匹配或添加元素的特定部分</li><li>伪元素也不在 DOM 中</li></ul><p>字母顺序：</p><ul><li><code>::after (:after)</code><ul><li>添加元素的最后一个子元素</li></ul></li><li><code>::before (:before)</code><ul><li>添加元素的第一个子元素</li></ul></li><li><code>::first-line (:first-line)</code><ul><li>匹配块级元素的第一行</li></ul></li></ul><h2 id="通配选择器-universal" tabindex="-1">通配选择器 (Universal) <a class="header-anchor" href="#通配选择器-universal" aria-label="Permalink to &quot;通配选择器 (Universal)&quot;">​</a></h2><ul><li>语法：<code>*</code></li><li>匹配所有元素</li></ul><h2 id="组合-combinator" tabindex="-1">组合 (Combinator) <a class="header-anchor" href="#组合-combinator" aria-label="Permalink to &quot;组合 (Combinator)&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">语法</th><th style="text-align:center;">中文</th><th style="text-align:center;">英文</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code></code></td><td style="text-align:center;">后代</td><td style="text-align:center;">Descendant</td><td style="text-align:center;">元素的后代</td></tr><tr><td style="text-align:center;"><code>&gt;</code></td><td style="text-align:center;">子元素</td><td style="text-align:center;">Child</td><td style="text-align:center;">直接子元素</td></tr><tr><td style="text-align:center;"><code>~</code></td><td style="text-align:center;">后面元素</td><td style="text-align:center;">General sibling</td><td style="text-align:center;">同级，在后面，不要求相邻</td></tr><tr><td style="text-align:center;"><code>+</code></td><td style="text-align:center;">相邻元素</td><td style="text-align:center;">Adjacent sibling</td><td style="text-align:center;">同级，相邻，紧跟在后面</td></tr></tbody></table><h2 id="列表-list" tabindex="-1">列表 (List) <a class="header-anchor" href="#列表-list" aria-label="Permalink to &quot;列表 (List)&quot;">​</a></h2><ul><li>语法：<code>selector, selector, ...</code></li><li>多个选择器应用同一组规则</li></ul>',19),o=[d];function c(r,n,s,u,h,b){return l(),t("div",null,o)}const _=e(i,[["render",c]]);export{x as __pageData,_ as default};
