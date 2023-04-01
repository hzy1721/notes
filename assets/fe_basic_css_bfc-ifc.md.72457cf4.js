import{_ as i,c as l,o as e,d as c}from"./app.60ece37e.js";const _=JSON.parse('{"title":"BFC/IFC","description":"","frontmatter":{},"headers":[{"level":2,"title":"块级/行级盒子","slug":"块级-行级盒子","link":"#块级-行级盒子","children":[]},{"level":2,"title":"BFC","slug":"bfc","link":"#bfc","children":[]},{"level":2,"title":"IFC","slug":"ifc","link":"#ifc","children":[]}],"relativePath":"fe/basic/css/bfc-ifc.md","lastUpdated":1680318810000}'),o={name:"fe/basic/css/bfc-ifc.md"},d=c('<h1 id="bfc-ifc" tabindex="-1">BFC/IFC <a class="header-anchor" href="#bfc-ifc" aria-hidden="true">#</a></h1><p>CSS 有 3 种定位方式：</p><ul><li>常规流 (Normal flow) <ul><li>BFC (Block Formatting Context，块级排版上下文)</li><li>IFC (Inline Formatting Context，行级排版上下文)</li><li>相对定位 (Relative positioning)</li><li>table 排版上下文</li><li>flex 排版上下文</li><li>grid 排版上下文</li></ul></li><li>浮动 (Floats)</li><li>绝对定位 (Absolute positioning) <ul><li><code>absolute</code></li><li><code>fixed</code></li></ul></li></ul><h2 id="块级-行级盒子" tabindex="-1">块级/行级盒子 <a class="header-anchor" href="#块级-行级盒子" aria-hidden="true">#</a></h2><p><code>display</code> 与 BFC/IFC 相关的取值：</p><ul><li><code>block</code>：生成块级盒子 (block-level box)，一个盒子占一行</li><li><code>inline</code>：生成行级盒子 (inline-level box)，与其他行级盒子摆放在一行 <ul><li>不能设置 <code>width</code> 和 <code>height</code></li></ul></li><li><code>inline-block</code>：生成行级盒子，可以设置宽高，作为一个整体不会被拆成多行</li><li><code>none</code>：排版时被忽略</li></ul><h2 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-hidden="true">#</a></h2><p>以下元素会创建一个 BFC：</p><ul><li>根元素</li><li><code>inline-block</code>、浮动、绝对定位</li><li>flex 子项和 grid 子项</li><li><code>overflow</code> 不是 <code>visible</code> 的块级盒子</li><li><code>display: flow-root;</code></li></ul><p>排版规则：</p><ul><li>盒子从上到下排列</li><li>垂直 margin 合并</li><li>BFC 内 margin 不会与外界 margin 合并</li><li>不会与浮动元素重叠</li></ul><h2 id="ifc" tabindex="-1">IFC <a class="header-anchor" href="#ifc" aria-hidden="true">#</a></h2><p>只包含行级盒子的容器元素会创建一个 IFC。</p><p>排版规则：</p><ul><li>盒子在一行内水平排列，一行放不下时换行显示</li><li><code>text-align</code> 决定一行内盒子的水平对齐</li><li><code>vertical-align</code> 决定一个盒子在行内的垂直对齐</li><li>环绕浮动元素</li></ul>',15),a=[d];function t(n,r,s,f,h,u){return e(),l("div",null,a)}const b=i(o,[["render",t]]);export{_ as __pageData,b as default};
