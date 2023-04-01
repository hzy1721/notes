import{_ as e,c as t,o,d as r}from"./app.60ece37e.js";const a="/assets/react-lifecycle.238be92a.png",c="/assets/react-lifecycle-hooks.79f98523.png",m=JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[{"level":2,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[]},{"level":2,"title":"卸载","slug":"卸载","link":"#卸载","children":[]}],"relativePath":"fe/framework/react/lifecycle.md","lastUpdated":1680318810000}'),i={name:"fe/framework/react/lifecycle.md"},l=r('<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-hidden="true">#</a></h1><p><img src="'+a+'" alt=""></p><p><img src="'+c+'" alt=""></p><h2 id="挂载" tabindex="-1">挂载 <a class="header-anchor" href="#挂载" aria-hidden="true">#</a></h2><p>创建组件实例并插入 DOM。</p><ul><li><strong><code>constructor()</code></strong>：构造方法</li><li><code>static getDerivedStateFromProps()</code></li><li><strong><code>render()</code></strong>：渲染函数</li><li><strong><code>componentDidMount()</code></strong>：组件创建好并添加到 DOM 后执行</li></ul><h2 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-hidden="true">#</a></h2><p>组件的 props 或 state 变化会触发更新，重新执行渲染函数，更新 DOM。</p><ul><li><code>static getDerivedStateFromProps()</code></li><li><code>shouldComponentUpdate()</code></li><li><strong><code>render()</code></strong>：渲染函数</li><li><code>getSnapshotBeforeUpdate()</code></li><li><strong><code>componentDidUpdate()</code></strong>：DOM 更新完成后执行</li></ul><h2 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-hidden="true">#</a></h2><p>组件从 DOM 中移除。</p><ul><li><strong><code>componentWillUnmount()</code></strong>：组件从 DOM 中移除前执行</li></ul>',12),d=[l];function n(s,p,h,_,g,f){return o(),t("div",null,d)}const D=e(i,[["render",n]]);export{m as __pageData,D as default};
