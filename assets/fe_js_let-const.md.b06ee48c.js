import{_ as e,c as t,o as l,d as a}from"./app.c431fedc.js";const f=JSON.parse('{"title":"let 和 const","description":"","frontmatter":{},"headers":[{"level":2,"title":"let","slug":"let","link":"#let","children":[]},{"level":2,"title":"const","slug":"const","link":"#const","children":[]},{"level":2,"title":"6 种声明变量的方法","slug":"_6-种声明变量的方法","link":"#_6-种声明变量的方法","children":[]},{"level":2,"title":"顶层变量","slug":"顶层变量","link":"#顶层变量","children":[]}],"relativePath":"fe/js/let-const.md"}'),n={name:"fe/js/let-const.md"},i=a('<h1 id="let-和-const" tabindex="-1">let 和 const <a class="header-anchor" href="#let-和-const" aria-hidden="true">#</a></h1><h2 id="let" tabindex="-1">let <a class="header-anchor" href="#let" aria-hidden="true">#</a></h2><p>let 用于声明变量，具有块作用域。</p><p>for 循环中的循环变量与循环体内部的变量有各自单独的作用域。</p><p>与 var 不同，let 只能在声明后使用。</p><p>在块作用域内一旦有 let 和 const 声明，在声明之前都不可以访问对应的变量，即使存在同名的全局变量。声明之间的区域称为 Temporal Dead Zone (TDZ)。这也是为了确保不在变量声明之前使用变量。</p><p>let 不允许在同一作用域内重复声明。</p><p>ES5 没有块作用域的弊端：</p><ul><li>内层变量覆盖外层变量</li><li>循环变量泄漏为全局变量</li></ul><p>块作用域使得 IIFE (Immediately Invoked Function Expression) 不再有必要使用。</p><p>避免在块作用域内声明函数，尽量使用函数表达式，因为浏览器为了兼容旧代码与标准的实现不同。</p><p>块作用域必须加花括号，没有花括号就不存在块作用域，因此编写 ES6 代码应避免省略花括号。</p><h2 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-hidden="true">#</a></h2><p>const 用于声明常量，必须立即初始化。let 的大部分规则也适用于 const。</p><p>const 保证常量所在内存地址的数据不被修改。对于简单类型 (number、string、boolean) 表示值不会改变，对于复合类型 (Array、Object) 表示指向的数组或对象不会改变，但数组和对象内部的数据是可以修改的。</p><p>如果想让对象的属性也不可修改，可以使用 Object.freeze，冻结后的对象不能新增和删除属性，已有的属性也不能修改。如果对象的属性也有可能是对象，为了完全冻结，可以递归应用 Object.freeze。</p><h2 id="_6-种声明变量的方法" tabindex="-1">6 种声明变量的方法 <a class="header-anchor" href="#_6-种声明变量的方法" aria-hidden="true">#</a></h2><ul><li>var</li><li>function</li><li>let</li><li>const</li><li>import</li><li>class</li></ul><h2 id="顶层变量" tabindex="-1">顶层变量 <a class="header-anchor" href="#顶层变量" aria-hidden="true">#</a></h2><p>ES5 中顶层变量的属性与全局变量等价。顶层变量在浏览器中是 window，在 Node 中是 global。</p><p>ES6 中 var 和 function 声明的全局变量与顶层变量的属性等价，let、const、class 声明的全局变量不属于顶层变量的属性。</p><p>很难找到一种方法在所有情况下都取到顶层对象，ES2020 引入了 globalThis，在所有环境下都能取到，并且指向全局环境下的 this。</p>',22),s=[i];function o(r,c,d,p,h,_){return l(),t("div",null,s)}const m=e(n,[["render",o]]);export{f as __pageData,m as default};
