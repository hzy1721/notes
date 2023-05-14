import{_ as l,c as e,o as t,d as i}from"./app.32a4a0ab.js";const r="/assets/react-lifecycle-hooks.79f98523.png",h=JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react-stack/react/lifecycle.md","lastUpdated":1684034003000}'),a={name:"fe/react-stack/react/lifecycle.md"},c=i('<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-hidden="true">#</a></h1><p><img src="'+r+'" alt=""></p><ol><li><strong>trigger</strong><ul><li>应用启动触发第一次渲染</li><li>组件状态变化触发重新渲染</li></ul></li><li><strong>render</strong><ul><li>第一次渲染调用根组件 <ul><li>创建浏览器元素的 DOM 节点</li></ul></li><li>后续渲染调用触发重新渲染的组件 <ul><li>计算 prop 差异和更新所需的最少操作</li></ul></li></ul></li><li><strong>commit</strong><ul><li>第一次渲染只添加 DOM 节点 <ul><li>使用 <code>appendChild</code></li></ul></li><li>后续渲染应用这些最少操作 <ul><li>只会更新有变化的 DOM 节点</li></ul></li></ul></li><li><strong>repaint</strong>* <ul><li>React 更新 DOM 节点后触发浏览器重绘</li></ul></li></ol>',3),o=[c];function s(n,_,d,u,p,f){return t(),e("div",null,o)}const m=l(a,[["render",s]]);export{h as __pageData,m as default};