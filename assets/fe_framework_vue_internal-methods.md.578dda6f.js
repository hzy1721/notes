import{_ as t,c as e,o as d,d as o}from"./app.a0163938.js";const h=JSON.parse('{"title":"内部方法","description":"","frontmatter":{},"headers":[],"relativePath":"fe/framework/vue/internal-methods.md","lastUpdated":1680318810000}'),r={name:"fe/framework/vue/internal-methods.md"},c=o('<h1 id="内部方法" tabindex="-1">内部方法 <a class="header-anchor" href="#内部方法" aria-hidden="true">#</a></h1><p><strong>内部方法</strong>是操作对象时在 JS 引擎内部调用的方法，对于开发者不可见。</p><table><thead><tr><th>内部方法</th><th>签名</th></tr></thead><tbody><tr><td><code>[[GetPrototypeOf]]</code></td><td><code>() -&gt; Object | null</code></td></tr><tr><td><code>[[SetPrototypeOf]]</code></td><td><code>(Object | null) -&gt; Boolean</code></td></tr><tr><td><code>[[IsExtensible]]</code></td><td><code>() -&gt; Boolean</code></td></tr><tr><td><code>[[PreventExtensions]]</code></td><td><code>() -&gt; Boolean</code></td></tr><tr><td><code>[[GetOwnProperty]]</code></td><td><code>(propertyKey) -&gt; Undefined | Property Descriptor</code></td></tr><tr><td><code>[[DefineOwnProperty]]</code></td><td><code>(propertyKey, propertyDescriptor) -&gt; Boolean</code></td></tr><tr><td><code>[[HasProperty]]</code></td><td><code>(propertyKey) -&gt; Boolean</code></td></tr><tr><td><code>[[Get]]</code></td><td><code>(propertyKey, Receiver) -&gt; any</code></td></tr><tr><td><code>[[Set]]</code></td><td><code>(propertyKey, value, Receiver) -&gt; Boolean</code></td></tr><tr><td><code>[[Delete]]</code></td><td><code>(propertyKey) -&gt; Boolean</code></td></tr><tr><td><code>[[OwnPropertyKeys]]</code></td><td><code>() -&gt; List of propertyKey</code></td></tr><tr><td><code>[[Call]]</code></td><td><code>(any, a List of any) -&gt; any</code></td></tr><tr><td><code>[[Construct]]</code></td><td><code>(a List of any, Object) -&gt; Object</code></td></tr></tbody></table><p>内部方法具有多态性，不同的对象部署相同的内部方法，但是行为可能不同。</p><p>JS 对象分为两种：<strong>常规对象 (ordinary object)</strong> 和<strong>异质对象 (exotic object)</strong>。</p><p>满足以下三点要求的是常规对象：</p><ul><li>前 11 种必要的内部方法，必须使用 ECMA 规范 10.1.x 节给出的定义实现</li><li>内部方法 <code>[[Call]]</code>，必须使用 ECMA 规范 10.2.1 节给出的定义实现</li><li>内部方法 <code>[[Construct]]</code>，必须使用 ECMA 规范 10.2.2 节给出的定义实现</li></ul><p>不符合这三点要求的对象都是异质对象，也就是说异质对象为了实现与常规对象不同的行为，在某些内部方法上有自己独特的实现。</p>',8),a=[c];function n(p,s,l,i,y,_){return d(),e("div",null,a)}const f=t(r,[["render",n]]);export{h as __pageData,f as default};