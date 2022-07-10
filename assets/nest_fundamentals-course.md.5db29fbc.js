import{_ as s,c as a,o as n,d as p}from"./app.ebd738a9.js";const C=JSON.parse('{"title":"TypeORM \u8FC1\u79FB\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"25 Using Repository to Access Database","slug":"_25-using-repository-to-access-database"},{"level":2,"title":"32 Setting up Migrations","slug":"_32-setting-up-migrations"},{"level":2,"title":"41 Create a Dynamic Module","slug":"_41-create-a-dynamic-module"}],"relativePath":"nest/fundamentals-course.md"}'),l={name:"nest/fundamentals-course.md"},o=p(`<h1 id="typeorm-\u8FC1\u79FB\u6307\u5357" tabindex="-1">TypeORM \u8FC1\u79FB\u6307\u5357 <a class="header-anchor" href="#typeorm-\u8FC1\u79FB\u6307\u5357" aria-hidden="true">#</a></h1><p><a href="https://www.bilibili.com/video/BV1T44y1W7Si" target="_blank" rel="noopener noreferrer">NestJS Fundamentals Course</a> \u4F7F\u7528\u7684\u65E7\u7248 TypeORM \u4E0E\u76EE\u524D\u7684\u6700\u65B0\u7248 (0.3.7) \u8BED\u6CD5\u6709\u8F83\u5927\u5DEE\u5F02\uFF0C\u672C\u6587\u8BB0\u5F55\u4E86\u5982\u4F55\u8FC1\u79FB\u5230 0.3.7 \u8BED\u6CD5\u3002</p><h2 id="_25-using-repository-to-access-database" tabindex="-1">25 Using Repository to Access Database <a class="header-anchor" href="#_25-using-repository-to-access-database" aria-hidden="true">#</a></h2><p><code>coffees.service.ts</code></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">async </span><span style="color:#82AAFF;">findOne</span><span style="color:#A6ACCD;">(id: number) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">coffee</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">coffeeRepository</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findOne</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    where</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    relations</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flavors</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">coffee</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">NotFoundException</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Coffee #</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> not found</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">coffee</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_32-setting-up-migrations" tabindex="-1">32 Setting up Migrations <a class="header-anchor" href="#_32-setting-up-migrations" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx typeorm migration:create src/migrations/CoffeeRefactor</span></span>
<span class="line"></span></code></pre></div><p><code>ormconfig.ts</code></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dataSource </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DataSource</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">postgres</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5432</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">postgres</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pass123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">database</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">postgres</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entities</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist/**/*.entity.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">migrations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist/migrations/*.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx typeorm-ts-node-esm migration:run -d ormconfig.ts</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx typeorm-ts-node-esm migration:revert -d ormconfig.ts</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx typeorm-ts-node-esm migration:generate src/migrations/SchemaSync -d ormconfig.ts</span></span>
<span class="line"></span></code></pre></div><h2 id="_41-create-a-dynamic-module" tabindex="-1">41 Create a Dynamic Module <a class="header-anchor" href="#_41-create-a-dynamic-module" aria-hidden="true">#</a></h2><p><code>database.module.ts</code></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">register</span><span style="color:#A6ACCD;">(options: DataSourceOptions): DynamicModule </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    module</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DatabaseModule</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    providers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        provide</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CONNECTION</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        useValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">DataSource</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initialize</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}var A=s(l,[["render",t]]);export{C as __pageData,A as default};
