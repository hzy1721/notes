import{_ as e,c as l,o as t,a as i}from"./app.68ea3551.js";const x=JSON.parse('{"title":"选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"ID 选择器 (ID)","slug":"id-选择器-id","link":"#id-选择器-id","children":[]},{"level":2,"title":"类选择器 (Class)","slug":"类选择器-class","link":"#类选择器-class","children":[]},{"level":2,"title":"伪类选择器 (Pseudo classes)","slug":"伪类选择器-pseudo-classes","link":"#伪类选择器-pseudo-classes","children":[{"level":3,"title":"表单伪类 (Input)","slug":"表单伪类-input","link":"#表单伪类-input","children":[]},{"level":3,"title":"链接伪类 (Location)","slug":"链接伪类-location","link":"#链接伪类-location","children":[]},{"level":3,"title":"位置伪类 (Tree-structural)","slug":"位置伪类-tree-structural","link":"#位置伪类-tree-structural","children":[]},{"level":3,"title":"用户操作 (User action)","slug":"用户操作-user-action","link":"#用户操作-user-action","children":[]}]},{"level":2,"title":"属性选择器 (Attribute)","slug":"属性选择器-attribute","link":"#属性选择器-attribute","children":[]},{"level":2,"title":"标签选择器 (Type)","slug":"标签选择器-type","link":"#标签选择器-type","children":[]},{"level":2,"title":"伪元素选择器 (Pseudo elements)","slug":"伪元素选择器-pseudo-elements","link":"#伪元素选择器-pseudo-elements","children":[]},{"level":2,"title":"通配选择器 (Universal)","slug":"通配选择器-universal","link":"#通配选择器-universal","children":[]},{"level":2,"title":"组合 (Combinator)","slug":"组合-combinator","link":"#组合-combinator","children":[]},{"level":2,"title":"列表 (List)","slug":"列表-list","link":"#列表-list","children":[]}],"relativePath":"css/selector.md"}'),d={name:"css/selector.md"},a=i('<h1 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-hidden="true">#</a></h1><h2 id="id-选择器-id" tabindex="-1">ID 选择器 (ID) <a class="header-anchor" href="#id-选择器-id" aria-hidden="true">#</a></h2><ul><li>语法：<code>#idname</code></li><li>基于元素的 <code>id</code> 属性，文档中一个 id 只能对应一个元素</li></ul><h2 id="类选择器-class" tabindex="-1">类选择器 (Class) <a class="header-anchor" href="#类选择器-class" aria-hidden="true">#</a></h2><ul><li>语法：<code>.classname</code></li><li>基于元素的 <code>class</code> 属性，一个类名可以应用于多个元素</li></ul><h2 id="伪类选择器-pseudo-classes" tabindex="-1">伪类选择器 (Pseudo classes) <a class="header-anchor" href="#伪类选择器-pseudo-classes" aria-hidden="true">#</a></h2><ul><li>语法：<code>selector:pseudo-classname</code></li><li>附加在其他选择器后，基于元素的状态应用样式</li><li>元素的状态不包含在 DOM 树中</li></ul><h3 id="表单伪类-input" tabindex="-1">表单伪类 (Input) <a class="header-anchor" href="#表单伪类-input" aria-hidden="true">#</a></h3><ul><li><code>:checked</code>：单选框或多选框被选中</li><li><code>:required</code>：必填的表单元素</li><li><code>:optional</code>：非必填的表单元素</li></ul><h3 id="链接伪类-location" tabindex="-1">链接伪类 (Location) <a class="header-anchor" href="#链接伪类-location" aria-hidden="true">#</a></h3><ul><li><code>:link</code>：没被访问过的链接</li><li><code>:visited</code>：已被访问的链接</li></ul><h3 id="位置伪类-tree-structural" tabindex="-1">位置伪类 (Tree-structural) <a class="header-anchor" href="#位置伪类-tree-structural" aria-hidden="true">#</a></h3><ul><li><code>:root</code>：根元素 <code>&lt;html&gt;</code></li><li><code>:nth-child(An+B)</code>：从一组同级的元素中选，n 从 0 开始</li><li><code>:nth-last-child(An+B)</code>：从后往前数</li><li><code>:first-child</code>：同级元素中的第一个</li><li><code>:last-child</code>：同级元素中的最后一个</li></ul><h3 id="用户操作-user-action" tabindex="-1">用户操作 (User action) <a class="header-anchor" href="#用户操作-user-action" aria-hidden="true">#</a></h3><ul><li><code>:hover</code>：鼠标悬停</li><li><code>:active</code>：元素被激活，比如点击一个链接，按下不松开</li><li><code>:focus</code>：元素被聚焦</li></ul><h2 id="属性选择器-attribute" tabindex="-1">属性选择器 (Attribute) <a class="header-anchor" href="#属性选择器-attribute" aria-hidden="true">#</a></h2><ul><li>语法： <ul><li><code>[attr]</code>：属性存在</li><li><code>[attr=value]</code>：属性的值为 <code>value</code></li><li><code>[attr~=value]</code>：属性是空格分隔的多个值，其中一个是 <code>value</code></li><li><code>[attr|=value]</code>：属性的值等于 <code>value</code> 或者以 <code>value-</code> 为前缀</li><li><code>[attr^=value]</code>：属性的值以 <code>value</code> 为前缀</li><li><code>[attr$=value]</code>：属性的值以 <code>value</code> 为后缀</li><li><code>[attr*=value]</code>：属性的值包含 <code>value</code></li></ul></li><li>基于元素的属性应用样式，支持多种匹配方法</li></ul><h2 id="标签选择器-type" tabindex="-1">标签选择器 (Type) <a class="header-anchor" href="#标签选择器-type" aria-hidden="true">#</a></h2><ul><li>语法：<code>elementname</code></li><li>基于 HTML 标签类型应用样式</li></ul><h2 id="伪元素选择器-pseudo-elements" tabindex="-1">伪元素选择器 (Pseudo elements) <a class="header-anchor" href="#伪元素选择器-pseudo-elements" aria-hidden="true">#</a></h2><ul><li>语法：<code>selector::pseudo-elementname</code></li><li>附加在其他选择器后，匹配或添加元素的特定部分</li><li>伪元素也不在 DOM 中</li></ul><p>字母顺序：</p><ul><li><code>::after (:after)</code><ul><li>添加元素的最后一个子元素</li></ul></li><li><code>::before (:before)</code><ul><li>添加元素的第一个子元素</li></ul></li><li><code>::first-line (:first-line)</code><ul><li>匹配块级元素的第一行</li></ul></li></ul><h2 id="通配选择器-universal" tabindex="-1">通配选择器 (Universal) <a class="header-anchor" href="#通配选择器-universal" aria-hidden="true">#</a></h2><ul><li>语法：<code>*</code></li><li>匹配所有元素</li></ul><h2 id="组合-combinator" tabindex="-1">组合 (Combinator) <a class="header-anchor" href="#组合-combinator" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">语法</th><th style="text-align:center;">中文</th><th style="text-align:center;">英文</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code></code></td><td style="text-align:center;">后代</td><td style="text-align:center;">Descendant</td><td style="text-align:center;">元素的后代</td></tr><tr><td style="text-align:center;"><code>&gt;</code></td><td style="text-align:center;">子元素</td><td style="text-align:center;">Child</td><td style="text-align:center;">直接子元素</td></tr><tr><td style="text-align:center;"><code>~</code></td><td style="text-align:center;">后面元素</td><td style="text-align:center;">General sibling</td><td style="text-align:center;">同级，在后面，不要求相邻</td></tr><tr><td style="text-align:center;"><code>+</code></td><td style="text-align:center;">相邻元素</td><td style="text-align:center;">Adjacent sibling</td><td style="text-align:center;">同级，相邻，紧跟在后面</td></tr></tbody></table><h2 id="列表-list" tabindex="-1">列表 (List) <a class="header-anchor" href="#列表-list" aria-hidden="true">#</a></h2><ul><li>语法：<code>selector, selector, ...</code></li><li>多个选择器应用同一组规则</li></ul>',29),c=[a];function r(o,n,s,u,h,g){return t(),l("div",null,c)}const p=e(d,[["render",r]]);export{x as __pageData,p as default};
