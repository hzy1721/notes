import{_ as s,c as a,o as n,U as l}from"./chunks/framework.e548c890.js";const F=JSON.parse('{"title":"SQL 题目","description":"","frontmatter":{},"headers":[],"relativePath":"fe/server/db/sql-practice.md","filePath":"fe/server/db/sql-practice.md","lastUpdated":1693485820000}'),p={name:"fe/server/db/sql-practice.md"},o=l(`<h1 id="sql-题目" tabindex="-1">SQL 题目 <a class="header-anchor" href="#sql-题目" aria-label="Permalink to &quot;SQL 题目&quot;">​</a></h1><h2 id="重名学生的名字" tabindex="-1">重名学生的名字 <a class="header-anchor" href="#重名学生的名字" aria-label="Permalink to &quot;重名学生的名字&quot;">​</a></h2><ul><li>窗口函数的字段不能用于 where，需要在外面包一层</li></ul><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">student</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  id </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">primary key</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">insert into</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hzy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#F78C6C;">insert into</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hzy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#F78C6C;">insert into</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#F78C6C;">insert into</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#F78C6C;">insert into</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span></span>
<span class="line"><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">select</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">row_number</span><span style="color:#A6ACCD;">() </span><span style="color:#F78C6C;">over</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">partition</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> row_number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> row_number </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- hzy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- react</span></span></code></pre></div>`,4),e=[o];function t(C,c,r,y,A,D){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
