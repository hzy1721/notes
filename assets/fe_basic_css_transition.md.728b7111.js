import{_ as e,c as i,o,U as t}from"./chunks/framework.e548c890.js";const m=JSON.parse('{"title":"transition","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/css/transition.md","filePath":"fe/basic/css/transition.md","lastUpdated":1680318810000}'),l={name:"fe/basic/css/transition.md"},c=t('<h1 id="transition" tabindex="-1">transition <a class="header-anchor" href="#transition" aria-label="Permalink to &quot;transition&quot;">​</a></h1><p>属性值改变的动画。有 4 个相关属性：</p><ul><li><code>transition-property</code>：应用动画的属性 <ul><li>大部分 CSS 属性可以应用动画，但不是全部</li><li><code>all</code> 表示应用于所有属性</li></ul></li><li><code>transition-duration</code>：动画时长 <ul><li>单位为 s 或 ms</li></ul></li><li><code>transition-timing-function</code>：动画函数 <ul><li>描述动画进程在时间上的分布，比如先慢后快还是先快后慢</li><li>接受 2 种值：三阶贝塞尔曲线 (cubic bezier curve)、阶跃函数 (steps function)</li></ul></li><li><code>transition-delay</code>：动画开始前的延迟时间 <ul><li>单位为 s 或 ms</li><li>设为负数表示跳过一段时间的动画，从中间开始播放动画</li></ul></li></ul><p>简写属性：<code>transition: property duration timing-function delay</code></p><h2 id="三阶贝塞尔曲线" tabindex="-1">三阶贝塞尔曲线 <a class="header-anchor" href="#三阶贝塞尔曲线" aria-label="Permalink to &quot;三阶贝塞尔曲线&quot;">​</a></h2><p>贝塞尔曲线的阶次等于控制点的个数减一，因此三阶贝塞尔曲线需要 4 个控制点。</p><p>第 1 个点固定为 <code>(0, 0)</code>，第 4 个点固定为 <code>(1, 1)</code>，只需要指定中间的两个点。</p><p>语法：<code>transition-timing-function: cubic-bezier(x2, y2, x3, y3)</code></p><p>x 表示时间，y 表示过程的完成度。</p><p>x 必须在 <code>[0, 1]</code> 之间，y 的取值没有限制，因此可以使动画超出起点和终点之间的范围。</p><p>CSS 提供几条内建的曲线：</p><ul><li><code>ease</code> (默认)：<code>(0.25, 0.1, 0.25, 1.0)</code><ul><li>稍慢=&gt;快=&gt;慢</li></ul></li><li><code>ease-in</code>：<code>(0.42, 0, 1.0, 1.0)</code><ul><li>慢=&gt;快</li></ul></li><li><code>ease-out</code>：<code>(0, 0, 0.58, 1.0)</code><ul><li>快=&gt;慢</li></ul></li><li><code>ease-in-out</code>：<code>(0.42, 0, 0.58, 1.0)</code><ul><li>慢=&gt;快=&gt;慢</li></ul></li></ul><p><img src="https://s2.loli.net/2022/07/19/4SJNUPiTwGzAY5K.png" alt="图片"></p><h2 id="阶跃函数" tabindex="-1">阶跃函数 <a class="header-anchor" href="#阶跃函数" aria-label="Permalink to &quot;阶跃函数&quot;">​</a></h2><p>把动画过程分成若干个等长的间隔，进行离散的变化。</p><p>语法：<code>transition-timing-function: steps(number of steps[, start/end])</code></p><p><code>start</code> 表示变化发生在每一段的开始，<code>end</code> 表示变化发生在每一段的结尾。</p><p>简写值：</p><ul><li><code>step-start</code>：<code>steps(1, start)</code><ul><li>只有 1 段且立即开始，相当于没有动画</li></ul></li><li><code>step-end</code>：<code>steps(1, end)</code><ul><li>只有 1 段，<code>duration</code> 时长后发生变化，相当于只延时</li></ul></li></ul><h2 id="transitionend" tabindex="-1">transitionend <a class="header-anchor" href="#transitionend" aria-label="Permalink to &quot;transitionend&quot;">​</a></h2><p>动画完成后，会触发 <code>transitionend</code> 事件。</p><p><code>TransitionEvent</code> 有几个特定属性：</p><ul><li><code>propertyName</code>：完成动画的属性名。</li><li><code>elapsedTime</code>：动画完成的时间 (s)，不包括 <code>delay</code></li><li><code>pseudoElement</code>：动画应用的伪元素的名称 <ul><li><code>::</code> 开头的字符串</li><li>如果不是在伪元素上应用，为空串</li></ul></li></ul>',23),d=[c];function a(n,s,r,p,u,h){return o(),i("div",null,d)}const f=e(l,[["render",a]]);export{m as __pageData,f as default};
