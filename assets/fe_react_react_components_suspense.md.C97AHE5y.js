import{_ as e,c as s,o as i,a1 as l}from"./chunks/framework.mNpZ2GHZ.js";const g=JSON.parse('{"title":"Suspense","description":"","frontmatter":{},"headers":[],"relativePath":"fe/react/react/components/suspense.md","filePath":"fe/react/react/components/suspense.md","lastUpdated":1702822707000}'),a={name:"fe/react/react/components/suspense.md"},t=l(`<h1 id="suspense" tabindex="-1">Suspense <a class="header-anchor" href="#suspense" aria-label="Permalink to &quot;Suspense&quot;">​</a></h1><p>组件加载完成之前显示替代内容。</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Suspense</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fallback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SomeComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>参数：</p><ul><li><code>children</code>：真正要渲染的内容</li><li><code>fallback</code>：替代内容 <ul><li>类型是 <code>ReactNode</code>，通常比较轻量</li><li>如果 <code>children</code> 渲染时挂起，会显示最近的 <code>fallback</code></li><li>如果 <code>fallback</code> 也挂起了，会显示下一个最近的 <code>fallback</code></li></ul></li></ul><p>警告：</p><ul><li>组件第一次渲染时挂起，已有的渲染会被丢弃，React 等待组件加载完毕后重新开始渲染</li><li>组件后续渲染时挂起也会触发 <code>fallback</code><ul><li><code>startTransition</code> 和 <code>useDeferredValue</code> 例外</li><li>transition 标记更新操作是可中断的，通常用于框架和路由库</li><li>deferred value 标记状态是可以推迟更新的，通常用于应用代码</li></ul></li><li>隐藏已显示的内容时会清除 layout effect，再次显示时重新执行</li></ul><p>用途：</p><ul><li>组件加载完成之前显示替代内容 <ul><li>目前 <code>&lt;Suspense&gt;</code> 只支持 2 种场景： <ul><li>支持 <code>Suspense</code> 进行数据请求的框架，比如 <code>Next</code> 和 <code>Relay</code></li><li>使用 <code>lazy</code> 懒加载组件代码</li></ul></li><li>React 官方目前还不支持能触发 <code>&lt;Suspense&gt;</code> 的数据请求方法</li></ul></li><li>同时隐藏和显示多个内容 <ul><li>被 <code>&lt;Suspense&gt;</code> 包裹的多个组件，只要其中一个挂起，就会显示 <code>fallback</code></li><li>只有所有组件都加载完毕，才会同时显示所有加载好的内容</li></ul></li><li>分阶段显示内容 <ul><li>不同组件的挂起时间不同，可以嵌套和组合多个 <code>&lt;Suspense&gt;</code> 来优先显示加载好的内容</li><li>内层 <code>&lt;Suspense&gt;</code> 只要 <code>fallback</code> 不挂起，就不会影响外层其他内容的显示</li></ul></li></ul>`,9),c=[t];function n(o,d,p,h,r,k){return i(),s("div",null,c)}const E=e(a,[["render",n]]);export{g as __pageData,E as default};