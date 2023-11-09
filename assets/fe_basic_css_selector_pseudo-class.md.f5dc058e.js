import{_ as e,c as o,o as l,U as a}from"./chunks/framework.e548c890.js";const f=JSON.parse('{"title":"伪类选择器","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/css/selector/pseudo-class.md","filePath":"fe/basic/css/selector/pseudo-class.md","lastUpdated":1695698588000}'),c={name:"fe/basic/css/selector/pseudo-class.md"},i=a('<h1 id="伪类选择器" tabindex="-1">伪类选择器 <a class="header-anchor" href="#伪类选择器" aria-label="Permalink to &quot;伪类选择器&quot;">​</a></h1><ul><li>语法：<code>selector:pseudo-classname</code></li><li>附加在其他选择器后，基于元素的状态应用样式</li><li>元素的状态不包含在 DOM 树中</li></ul><h2 id="表单伪类-input" tabindex="-1">表单伪类 (Input) <a class="header-anchor" href="#表单伪类-input" aria-label="Permalink to &quot;表单伪类 (Input)&quot;">​</a></h2><ul><li><code>:checked</code>：单选框或多选框被选中</li><li><code>:required</code>：必填的表单元素</li><li><code>:optional</code>：非必填的表单元素</li></ul><h2 id="链接伪类-location" tabindex="-1">链接伪类 (Location) <a class="header-anchor" href="#链接伪类-location" aria-label="Permalink to &quot;链接伪类 (Location)&quot;">​</a></h2><ul><li><code>:link</code>：没被访问过的链接</li><li><code>:visited</code>：已被访问的链接</li></ul><h2 id="位置伪类-tree-structural" tabindex="-1">位置伪类 (Tree-structural) <a class="header-anchor" href="#位置伪类-tree-structural" aria-label="Permalink to &quot;位置伪类 (Tree-structural)&quot;">​</a></h2><ul><li><code>:root</code>：根元素 <code>&lt;html&gt;</code></li><li><code>:nth-child(An+B)</code>：从一组同级的元素中选，n 从 0 开始</li><li><code>:nth-last-child(An+B)</code>：从后往前数</li><li><code>:first-child</code>：同级元素中的第一个</li><li><code>:last-child</code>：同级元素中的最后一个</li></ul><h2 id="用户操作-user-action" tabindex="-1">用户操作 (User action) <a class="header-anchor" href="#用户操作-user-action" aria-label="Permalink to &quot;用户操作 (User action)&quot;">​</a></h2><ul><li><code>:hover</code>：鼠标悬停</li><li><code>:active</code>：元素被激活，比如点击一个链接，按下不松开</li><li><code>:focus</code>：元素被聚焦</li></ul><h2 id="scope" tabindex="-1">:scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;:scope&quot;">​</a></h2><p>当前元素范围。</p><ul><li>CSS 中使用：等价于 <code>:root</code></li><li>查询元素的 DOM 方法中使用：匹配调用的元素 <ul><li>比如 <code>querySelector</code>、<code>querySelectorAll</code> 等</li></ul></li></ul>',13),t=[i];function d(r,s,n,u,h,p){return l(),o("div",null,t)}const m=e(c,[["render",d]]);export{f as __pageData,m as default};