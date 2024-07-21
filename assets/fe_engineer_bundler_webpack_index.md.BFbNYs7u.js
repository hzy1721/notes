import{_ as s,c as i,o as a,a1 as l}from"./chunks/framework.mNpZ2GHZ.js";const g=JSON.parse('{"title":"webpack","description":"","frontmatter":{},"headers":[],"relativePath":"fe/engineer/bundler/webpack/index.md","filePath":"fe/engineer/bundler/webpack/index.md","lastUpdated":1720354129000}'),n={name:"fe/engineer/bundler/webpack/index.md"},e=l(`<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h1><p>基于 JS 的主流打包器（bundler），通过 loader 和 plugin 支持语法转译、混淆、压缩等功能。</p><p>有 2 种方式使用 webpack：</p><ul><li>webpack CLI：编写配置文件 webpack.config.js，执行 webpack 命令打包</li><li>webpack API：编写自己的打包程序，调用 webpack 提供的 API</li></ul><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><ul><li>module：每个文件都是一个 module</li><li>chunk：分为 initial 和 non-initial <ul><li>initial：主 chunk，包括入口文件和所有依赖文件</li><li>non-initial：懒加载的依赖文件</li></ul></li><li>asset：输出的打包文件，每个 chunk 对应一个 asset</li><li>chunk group：每个 entry 对应一个 chunk group</li></ul><h2 id="打包流程" tabindex="-1">打包流程 <a class="header-anchor" href="#打包流程" aria-label="Permalink to &quot;打包流程&quot;">​</a></h2><p>从 entry 开始遍历依赖文件，通过 loader 处理为 JS 代码，每个 chunk 合并为一个 asset 文件，作为最终的打包产物，根据 output 赋予文件名放到指定目录下。</p><h2 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-label="Permalink to &quot;entry&quot;">​</a></h2><p>每个 entry 可以有一个或多个入口文件，项目可以有一个或多个 entry。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 一个 entry</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/index.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/index.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/index2.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 多个 entry</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    index: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/index.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/app.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="output" tabindex="-1">output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;output&quot;">​</a></h2><ul><li>path 指定产物目录</li><li>filename 指定 initial chunk asset 文件名</li><li>chunkFilename 指定 non-initial chunk asset 文件名</li><li>支持三种插值写法： <ul><li><code>[id]</code>：唯一 ID</li><li><code>[name]</code>：chunk name</li><li><code>[contenthash]</code>：asset md4 hash</li></ul></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[name].js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunkFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[contenthash].js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="target" tabindex="-1">target <a class="header-anchor" href="#target" aria-label="Permalink to &quot;target&quot;">​</a></h2><p>产物部署的目标环境。</p><ul><li>web (默认)：浏览器</li><li>esX：指定 ES 版本，比如 es5、es2020，默认 es2015</li><li><code>node[[X].Y]</code>：Node，可以指定版本</li></ul><h2 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h2><p>module 是 webpack 的一个核心概念，支持以下类型：</p><ul><li>ES module</li><li>CJS module</li><li>AMD module</li><li>Asset module：webpack 内置的关于字体、icon 等资源文件的支持</li><li>WASM module</li></ul><p>支持以下引用依赖的方式：</p><ul><li>ES6 import</li><li>CJS require</li><li>AMD define/require</li><li>CSS/Less/Sass @import</li><li><code>&lt;img src=&quot;xxx&quot; /&gt;</code>、<code>url(&#39;xxx&#39;)</code></li></ul><p>模块路径：</p><ul><li>绝对路径</li><li>相对路径</li><li>模块路径 <ul><li>搜索目录：resolve.modules</li><li>别名：resolve.alias</li><li>允许的扩展名：resolve.extensions</li><li>目录： <ul><li>有 package.json：resolve.mainFields</li><li>无 package.json：resolve.mainFiles</li></ul></li></ul></li></ul><h2 id="loader" tabindex="-1">loader <a class="header-anchor" href="#loader" aria-label="Permalink to &quot;loader&quot;">​</a></h2><p>如何处理非 JS 的 module，比如 TS、TSX、CSS、Less 等。</p><p>loader 可以指定多个，从右向左 (从后往前) 依次执行。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;style-loader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;css-loader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              modules: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sass-loader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="plugin" tabindex="-1">plugin <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;plugin&quot;">​</a></h2><p>拥有 apply 方法的对象，封装若干逻辑，参数是 compiler 对象，打包时被 webpack 编译器调用。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./public/index.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,31),t=[e];function p(h,k,E,d,r,o){return a(),i("div",null,t)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};