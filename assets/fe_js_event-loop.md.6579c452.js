import{_ as e,c as i,o as l,d as a}from"./app.e4b9fdbe.js";const t="/assets/event-loop.9c3261d5.png",m=JSON.parse('{"title":"事件循环","description":"","frontmatter":{},"headers":[{"level":2,"title":"宏任务 (Macrotask)","slug":"宏任务-macrotask","link":"#宏任务-macrotask","children":[]},{"level":2,"title":"微任务 (Microtask)","slug":"微任务-microtask","link":"#微任务-microtask","children":[]},{"level":2,"title":"事件循环","slug":"事件循环-1","link":"#事件循环-1","children":[]},{"level":2,"title":"Web Workers","slug":"web-workers","link":"#web-workers","children":[]}],"relativePath":"fe/js/event-loop.md"}'),r={name:"fe/js/event-loop.md"},o=a('<h1 id="事件循环" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环" aria-hidden="true">#</a></h1><p>浏览器和 Node 中 JS 的执行都遵循<strong>事件循环 (event loop)</strong> 的模式。</p><h2 id="宏任务-macrotask" tabindex="-1">宏任务 (Macrotask) <a class="header-anchor" href="#宏任务-macrotask" aria-hidden="true">#</a></h2><ul><li><code>&lt;script&gt;</code> 脚本</li><li>事件处理程序</li><li><code>setTimeout(func)</code></li><li><code>setInterval(func)</code></li></ul><h2 id="微任务-microtask" tabindex="-1">微任务 (Microtask) <a class="header-anchor" href="#微任务-microtask" aria-hidden="true">#</a></h2><ul><li>Promise 的 <code>then/catch/finally</code> 处理程序</li><li><code>queueMicrotask(func)</code></li></ul><h2 id="事件循环-1" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环-1" aria-hidden="true">#</a></h2><p>基本的事件循环算法：</p><ol><li>执行宏任务队列队头的第一个宏任务</li><li>执行所有微任务</li><li>渲染 DOM 变更</li><li>如果宏任务队列为空，则休眠直到出现下一个宏任务</li><li>转到步骤 1</li></ol><img src="'+t+'" style="zoom:50%;"><h2 id="web-workers" tabindex="-1">Web Workers <a class="header-anchor" href="#web-workers" aria-hidden="true">#</a></h2><ul><li>适用于不应该阻塞事件循环的耗时长的计算任务</li><li>在另一个<strong>并行</strong>线程中运行代码</li><li>具有自己的变量和事件循环，可以与主线程交换消息</li><li>没有访问 DOM 的权限</li><li>适用于多核计算</li></ul>',12),s=[o];function c(n,d,h,_,u,k){return l(),i("div",null,s)}const f=e(r,[["render",c]]);export{m as __pageData,f as default};