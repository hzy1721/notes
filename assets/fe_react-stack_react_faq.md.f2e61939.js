import{_ as a,c as e,o as t,U as l}from"./chunks/framework.e548c890.js";const u=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react-stack/react/faq.md","filePath":"fe/react-stack/react/faq.md","lastUpdated":1693485820000}'),r={name:"fe/react-stack/react/faq.md"},i=l('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="什么是单向数据流" tabindex="-1">什么是单向数据流 <a class="header-anchor" href="#什么是单向数据流" aria-label="Permalink to &quot;什么是单向数据流&quot;">​</a></h2><p>父组件直接传递数据给子组件，子组件通过发送消息的方式传递数据给父组件，数据的流动方向始终为从上到下，避免父子组件同时修改数据，造成逻辑混乱，无法排查哪里修改了数据。</p><h2 id="函数组件与类组件的区别" tabindex="-1">函数组件与类组件的区别 <a class="header-anchor" href="#函数组件与类组件的区别" aria-label="Permalink to &quot;函数组件与类组件的区别&quot;">​</a></h2><p>设计思想：</p><ul><li>函数组件：函数式、immutable、没有副作用</li><li>类组件：面向对象、继承、生命周期</li></ul><p>更推荐组合、而不是继承，继承过多会导致结构臃肿、难以拆分和复用。</p><p>生命周期：</p><ul><li>函数组件：无生命周期函数，使用 useEffect 代替</li><li>类组件：使用生命周期函数</li></ul><p>状态：</p><ul><li>函数组件：使用 useState 等 hooks 声明状态</li><li>类组件：状态作为类的属性 state</li></ul>',11),o=[i];function c(s,n,_,d,f,h){return t(),e("div",null,o)}const m=a(r,[["render",c]]);export{u as __pageData,m as default};
