import{_ as t,c as e,o as n,d as l}from"./app.6117d686.js";const m=JSON.parse('{"title":"单位","description":"","frontmatter":{},"headers":[{"level":2,"title":"长度单位","slug":"长度单位","link":"#长度单位","children":[{"level":3,"title":"绝对单位","slug":"绝对单位","link":"#绝对单位","children":[]},{"level":3,"title":"相对单位","slug":"相对单位","link":"#相对单位","children":[]}]}],"relativePath":"fe/basic/css/unit.md","lastUpdated":1680318810000}'),d={name:"fe/basic/css/unit.md"},r=l('<h1 id="单位" tabindex="-1">单位 <a class="header-anchor" href="#单位" aria-hidden="true">#</a></h1><h2 id="长度单位" tabindex="-1">长度单位 <a class="header-anchor" href="#长度单位" aria-hidden="true">#</a></h2><p><code>&lt;length&gt;</code> 是我们最常用的数值类型，有 2 种单位：绝对单位和相对单位。</p><h3 id="绝对单位" tabindex="-1">绝对单位 <a class="header-anchor" href="#绝对单位" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">单位</th><th style="text-align:center;">中文</th><th style="text-align:center;">英文</th><th style="text-align:center;">换算</th></tr></thead><tbody><tr><td style="text-align:center;">cm</td><td style="text-align:center;">厘米</td><td style="text-align:center;">Centimeters</td><td style="text-align:center;">1cm = 37.8px = 25.2/64in</td></tr><tr><td style="text-align:center;">mm</td><td style="text-align:center;">毫米</td><td style="text-align:center;">Millimeters</td><td style="text-align:center;">1mm = 1/10cm</td></tr><tr><td style="text-align:center;">Q</td><td style="text-align:center;">四分之一毫米</td><td style="text-align:center;">Quarter-millimeters</td><td style="text-align:center;">1Q = 1/4mm = 1/40cm</td></tr><tr><td style="text-align:center;">in</td><td style="text-align:center;">英尺</td><td style="text-align:center;">Inches</td><td style="text-align:center;">1in = 96px = 2.54cm</td></tr><tr><td style="text-align:center;">pc</td><td style="text-align:center;">派卡</td><td style="text-align:center;">Picas</td><td style="text-align:center;">1pc = 1/6in</td></tr><tr><td style="text-align:center;">pt</td><td style="text-align:center;">点</td><td style="text-align:center;">Points</td><td style="text-align:center;">1pt = 1/72in</td></tr><tr><td style="text-align:center;">px</td><td style="text-align:center;">像素</td><td style="text-align:center;">Pixels</td><td style="text-align:center;">1px = 1/96in</td></tr></tbody></table><p>大多数绝对单位用于打印而不是屏幕显示，页面开发最常用的只有像素 <code>px</code>。</p><h3 id="相对单位" tabindex="-1">相对单位 <a class="header-anchor" href="#相对单位" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">单位</th><th style="text-align:center;">相对于</th></tr></thead><tbody><tr><td style="text-align:center;">em</td><td style="text-align:center;">父元素的 font-size</td></tr><tr><td style="text-align:center;">rem</td><td style="text-align:center;">根元素的 font-size</td></tr><tr><td style="text-align:center;">vw</td><td style="text-align:center;">窗口宽度的 1%</td></tr><tr><td style="text-align:center;">vh</td><td style="text-align:center;">窗口高度的 1%</td></tr><tr><td style="text-align:center;">vmin</td><td style="text-align:center;">窗口较短边的 1%</td></tr><tr><td style="text-align:center;">vmax</td><td style="text-align:center;">窗口较长边的 1%</td></tr><tr><td style="text-align:center;">ex</td><td style="text-align:center;">字符 x 的高度</td></tr><tr><td style="text-align:center;">ch</td><td style="text-align:center;">数字 0 的宽度</td></tr><tr><td style="text-align:center;">lh</td><td style="text-align:center;">元素的 line-height</td></tr><tr><td style="text-align:center;">rlh</td><td style="text-align:center;">根元素的 line-height</td></tr></tbody></table>',8),a=[r];function i(c,s,x,g,h,y){return n(),e("div",null,a)}const _=t(d,[["render",i]]);export{m as __pageData,_ as default};