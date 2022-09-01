import{_ as t,c as e,o as a,a as d}from"./app.e29b80a0.js";var r="/assets/three-handshake.d9f3ec6b.png",l="/assets/four-wave.be2e81ab.png",i="/assets/congestion-control.224e9320.png",s="/assets/tcp-header.0d8a95d3.png";const f=JSON.parse('{"title":"TCP","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FDE\u63A5\u5EFA\u7ACB","slug":"\u8FDE\u63A5\u5EFA\u7ACB"},{"level":2,"title":"\u8FDE\u63A5\u91CA\u653E","slug":"\u8FDE\u63A5\u91CA\u653E"},{"level":2,"title":"\u53EF\u9760\u4F20\u8F93","slug":"\u53EF\u9760\u4F20\u8F93"},{"level":2,"title":"\u6D41\u91CF\u63A7\u5236","slug":"\u6D41\u91CF\u63A7\u5236"},{"level":2,"title":"\u62E5\u585E\u63A7\u5236","slug":"\u62E5\u585E\u63A7\u5236"},{"level":3,"title":"\u6162\u5F00\u59CB","slug":"\u6162\u5F00\u59CB"},{"level":3,"title":"\u62E5\u585E\u907F\u514D","slug":"\u62E5\u585E\u907F\u514D"},{"level":3,"title":"\u5FEB\u91CD\u4F20","slug":"\u5FEB\u91CD\u4F20"},{"level":3,"title":"\u5FEB\u6062\u590D","slug":"\u5FEB\u6062\u590D"},{"level":2,"title":"\u9996\u90E8\u683C\u5F0F","slug":"\u9996\u90E8\u683C\u5F0F"},{"level":2,"title":"TCP \u548C UDP \u7684\u533A\u522B","slug":"tcp-\u548C-udp-\u7684\u533A\u522B"}],"relativePath":"network/tcp.md"}'),h={name:"network/tcp.md"},n=d('<h1 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-hidden="true">#</a></h1><h2 id="\u8FDE\u63A5\u5EFA\u7ACB" tabindex="-1">\u8FDE\u63A5\u5EFA\u7ACB <a class="header-anchor" href="#\u8FDE\u63A5\u5EFA\u7ACB" aria-hidden="true">#</a></h2><p><img src="'+r+'" alt=""></p><p>\u7B2C 3 \u4E2A\u786E\u8BA4\u62A5\u6587\u662F\u4E3A\u4E86\u9632\u6B62\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u5230\u8FBE\u670D\u52A1\u5668\uFF0C\u9020\u6210\u670D\u52A1\u5668\u9519\u8BEF\u5730\u6253\u5F00\u8FDE\u63A5\u3002\u6BD4\u5982\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u7B2C 1 \u4E2A\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6EDE\u7559\u5728\u7F51\u7EDC\u4E2D\u4F46\u6CA1\u6709\u4E22\u5931\uFF0C\u5BA2\u6237\u7AEF\u672A\u6536\u5230\u786E\u8BA4\u4E00\u6BB5\u65F6\u95F4\u540E\u8D85\u65F6\u91CD\u4F20\uFF0C\u4F46\u662F\u6700\u521D\u6EDE\u7559\u7684\u8BF7\u6C42\u62A5\u6587\u6700\u7EC8\u4F1A\u5230\u8FBE\u670D\u52A1\u5668\u3002</p><p>\u5982\u679C\u53EA\u6709\u4E24\u6B21\u63E1\u624B\uFF0C\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\u5C31\u4F1A\u6253\u5F00\u8FDE\u63A5\uFF0C\u53EF\u80FD\u6253\u5F00\u4E0D\u9700\u8981\u7684\u8FDE\u63A5\uFF0C\u9020\u6210\u8D44\u6E90\u6D6A\u8D39\u3002</p><p>\u5982\u679C\u9700\u8981\u4E09\u6B21\u63E1\u624B\uFF0C\u5C3D\u7BA1\u670D\u52A1\u5668\u6536\u5230\u4E86\u6EDE\u7559\u7684\u8BF7\u6C42\u62A5\u6587\uFF0C\u5E76\u53D1\u56DE\u786E\u8BA4\u62A5\u6587\uFF0C\u4F46\u7531\u4E8E\u6B64\u65F6\u5BA2\u6237\u7AEF\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u4E0D\u4F1A\u53D1\u56DE\u7B2C 3 \u4E2A\u786E\u8BA4\u62A5\u6587\uFF0CTCP \u8FDE\u63A5\u5C31\u65E0\u6CD5\u5EFA\u7ACB\u3002</p><h2 id="\u8FDE\u63A5\u91CA\u653E" tabindex="-1">\u8FDE\u63A5\u91CA\u653E <a class="header-anchor" href="#\u8FDE\u63A5\u91CA\u653E" aria-hidden="true">#</a></h2><p><img src="'+l+'" alt=""></p><p>\u670D\u52A1\u7AEF\u53D1\u9001\u7B2C 2 \u4E2A\u786E\u8BA4\u62A5\u6587\u540E\uFF0C\u8FDB\u5165 <strong>CLOSE-WAIT</strong> \u72B6\u6001\u3002TCP \u8FDE\u63A5\u8FDB\u5165\u534A\u5173\u95ED\u72B6\u6001\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u80FD\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u6570\u636E\uFF0C\u4F46\u670D\u52A1\u7AEF\u53EF\u4EE5\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6570\u636E\uFF0C\u4FBF\u4E8E\u628A\u8FD8\u672A\u4F20\u9001\u5B8C\u6BD5\u7684\u6570\u636E\u53D1\u9001\u5B8C\u3002</p><p>\u5BA2\u6237\u7AEF\u53D1\u9001\u7B2C 4 \u4E2A\u8FDE\u63A5\u91CA\u653E\u54CD\u5E94\u62A5\u6587\u540E\uFF0C\u8FDB\u5165 <strong>TIME-WAIT</strong> \u72B6\u6001\uFF0C\u7B49\u5F85 2 \u4E2A MSL (Maximum Segment Lifetime\uFF0C\u6700\u5927\u62A5\u6587\u5B58\u6D3B\u65F6\u95F4) \u7684\u65F6\u95F4\u540E\u8FDB\u5165 <strong>CLOSED</strong> \u72B6\u6001\u3002\u539F\u56E0\u662F\uFF1A</p><ul><li>\u786E\u4FDD\u6700\u540E\u4E00\u4E2A\u786E\u8BA4\u62A5\u6587\u80FD\u591F\u5230\u8FBE\u3002 <ul><li>\u5982\u679C B \u6CA1\u6536\u5230 A \u53D1\u9001\u6765\u7684\u786E\u8BA4\u62A5\u6587\uFF0C\u5C31\u4F1A\u8D85\u65F6\u91CD\u4F20\u3002</li><li>A \u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u5C31\u662F\u4E3A\u4E86\u5904\u7406\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u5728\u7B49\u5F85\u671F\u95F4\u5982\u679C\u6536\u5230\u91CD\u4F20\u7684\u91CA\u653E\u8BF7\u6C42\u62A5\u6587\u5C31\u53EF\u4EE5\u91CD\u65B0\u53D1\u9001\u786E\u8BA4\u62A5\u6587\u3002</li></ul></li><li>\u8BA9\u672C\u8FDE\u63A5\u6301\u7EED\u65F6\u95F4\u5185\u6240\u4EA7\u751F\u7684\u6240\u6709\u62A5\u6587\u90FD\u4ECE\u7F51\u7EDC\u4E2D\u6D88\u5931\uFF0C\u4F7F\u5F97\u4E0B\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\u4E0D\u4F1A\u51FA\u73B0\u65E7\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u3002</li></ul><p>\u5982\u679C\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5173\u95ED\u8FDE\u63A5\u540E\uFF0C\u670D\u52A1\u7AEF\u6CA1\u6709\u6570\u636E\u8981\u53D1\u9001\uFF0C\u53EF\u4EE5\u628A\u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u62A5\u6587\u5408\u5E76\uFF0C\u4E5F\u5C31\u662F \u201C\u4E09\u6B21\u6325\u624B\u201D \u800C\u4E0D\u662F \u201C\u56DB\u6B21\u6325\u624B\u201D\u3002</p><h2 id="\u53EF\u9760\u4F20\u8F93" tabindex="-1">\u53EF\u9760\u4F20\u8F93 <a class="header-anchor" href="#\u53EF\u9760\u4F20\u8F93" aria-hidden="true">#</a></h2><p>TCP \u4F7F\u7528<strong>\u8D85\u65F6\u91CD\u4F20</strong>\u6765\u5B9E\u73B0\u53EF\u9760\u4F20\u8F93\uFF0C\u5982\u679C\u5DF2\u7ECF\u53D1\u9001\u7684\u62A5\u6587\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u6CA1\u6709\u6536\u5230\u786E\u8BA4\uFF0C\u5C31\u91CD\u65B0\u53D1\u9001\u8FD9\u4E2A\u62A5\u6587\u3002</p><p>\u8D85\u65F6\u91CD\u4F20\u7684\u65F6\u95F4\u79F0\u4E3A RTO (Retransmission TimeOut) = RTTs + 4 * RTTd</p><p>RTTs \u662F\u52A0\u6743\u5E73\u5747\u5F80\u8FD4\u65F6\u95F4\uFF0C\u6839\u636E\u6BCF\u6B21\u901A\u4FE1\u7684 RTT \u5B9E\u65F6\u66F4\u65B0\uFF1ARTTs = (1 - a) * RTTs + a * RTT</p><ul><li>\u521D\u59CB RTTs \u503C\u4E3A RTT</li><li>a \u662F\u8303\u56F4 [0, 1) \u7684\u53C2\u6570\uFF0Ca \u8D8A\u5927\uFF0C\u6700\u65B0\u7684 RTT \u5BF9 RTTs \u7684\u5F71\u54CD\u5C31\u8D8A\u5927\uFF0C\u63A8\u8350\u503C\u662F 1/8</li></ul><p>RTTd \u662F RTTs \u4E0E RTT \u504F\u5DEE\u7684\u52A0\u6743\u5E73\u5747\u503C\uFF1ARTTd = (1 - b) * RTTd + b * |RTTs - RTT|</p><ul><li>\u521D\u59CB RTTd \u503C\u4E3A RTT \u7684\u4E00\u534A</li><li>b \u662F\u8303\u56F4 [0, 1) \u7684\u53C2\u6570\uFF0Cb \u8D8A\u5927\uFF0C\u6700\u65B0\u7684\u504F\u5DEE\u5BF9 RTTd \u7684\u5F71\u54CD\u5C31\u8D8A\u5927\uFF0C\u63A8\u8350\u503C\u662F 1/4</li></ul><p>Karn \u7B97\u6CD5\uFF1A\u53D1\u751F\u8D85\u65F6\u91CD\u4F20\uFF0C\u8BF4\u660E\u7F51\u7EDC\u53D1\u751F\u4E86\u62E5\u585E\uFF0C\u5E94\u8BE5\u628A RTO \u7684\u503C\u589E\u5927\u4E00\u70B9\uFF0C\u907F\u514D\u66F4\u591A\u7684\u8D85\u65F6\u91CD\u4F20\uFF0C\u901A\u5E38\u589E\u5927\u4E3A\u539F\u6765\u7684 2 \u500D\u3002\u76F4\u5230\u4E0D\u518D\u53D1\u751F\u8D85\u65F6\u91CD\u4F20\uFF0C\u7EE7\u7EED\u4F7F\u7528\u4E0A\u9762\u7684\u516C\u5F0F\u8BA1\u7B97 RTO\u3002</p><h2 id="\u6D41\u91CF\u63A7\u5236" tabindex="-1">\u6D41\u91CF\u63A7\u5236 <a class="header-anchor" href="#\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a></h2><p>\u63A7\u5236\u53D1\u9001\u65B9\u7684\u53D1\u9001\u901F\u7387\uFF0C\u4F7F\u63A5\u6536\u65B9\u6765\u5F97\u53CA\u63A5\u6536 (\u63A5\u6536\u7F13\u5B58\u4E0D\u4F1A\u6EA2\u51FA)\u3002</p><p>\u901A\u8FC7\u63A5\u6536\u65B9\u53D1\u9001\u7684\u786E\u8BA4\u62A5\u6587\u4E2D\u7684\u7A97\u53E3\u5B57\u6BB5\u5B9E\u73B0 (\u63A5\u6536\u7A97\u53E3)\uFF0C\u53D1\u9001\u7A97\u53E3\u7684\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7\u63A5\u6536\u7A97\u53E3\u3002</p><h2 id="\u62E5\u585E\u63A7\u5236" tabindex="-1">\u62E5\u585E\u63A7\u5236 <a class="header-anchor" href="#\u62E5\u585E\u63A7\u5236" aria-hidden="true">#</a></h2><p>TCP \u901A\u8FC7 4 \u4E2A\u7B97\u6CD5\u8FDB\u884C\u62E5\u585E\u63A7\u5236\uFF1A\u6162\u5F00\u59CB\u3001\u62E5\u585E\u907F\u514D\u3001\u5FEB\u91CD\u4F20\u3001\u5FEB\u6062\u590D\u3002</p><p><img src="'+i+'" alt=""></p><h3 id="\u6162\u5F00\u59CB" tabindex="-1">\u6162\u5F00\u59CB <a class="header-anchor" href="#\u6162\u5F00\u59CB" aria-hidden="true">#</a></h3><ul><li>\u521D\u59CB cwnd = 1\uFF0C\u6BCF\u6536\u5230\u4E00\u4E2A\u786E\u8BA4\u5C31\u5C06 cwnd + 1\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6027\u53D1\u9001\u66F4\u591A\u7684\u62A5\u6587\uFF0C\u6BCF\u4E2A\u8F6E\u6B21 cwnd \u53D8\u4E3A\u539F\u6765\u7684\u4E24\u500D\uFF0C\u5448\u6307\u6570\u589E\u957F\u901F\u5EA6\u3002</li><li>\u8BBE\u7F6E\u6162\u5F00\u59CB\u95E8\u9650 ssthresh\uFF0C\u5F53 cwnd &gt;= ssthresh \u65F6\uFF0C\u8F6C\u4E3A\u6267\u884C\u62E5\u585E\u907F\u514D\u7B97\u6CD5\u3002</li></ul><h3 id="\u62E5\u585E\u907F\u514D" tabindex="-1">\u62E5\u585E\u907F\u514D <a class="header-anchor" href="#\u62E5\u585E\u907F\u514D" aria-hidden="true">#</a></h3><ul><li>\u6BCF\u4E2A\u8F6E\u6B21\u53EA\u5C06 cwnd + 1\uFF0C\u5448\u7EBF\u6027\u589E\u957F\u901F\u5EA6\u3002</li><li>\u5982\u679C\u53D1\u751F\u8D85\u65F6\uFF0C\u8BF4\u660E\u7F51\u7EDC\u53D1\u751F\u4E86\u62E5\u585E\uFF0C\u5C06 ssthresh \u8BBE\u4E3A cwnd / 2\uFF0Ccwnd \u8BBE\u4E3A 1\uFF0C\u91CD\u65B0\u5F00\u59CB\u6267\u884C\u6162\u5F00\u59CB\u7B97\u6CD5\u3002</li></ul><h3 id="\u5FEB\u91CD\u4F20" tabindex="-1">\u5FEB\u91CD\u4F20 <a class="header-anchor" href="#\u5FEB\u91CD\u4F20" aria-hidden="true">#</a></h3><ul><li>\u6BCF\u6536\u5230\u4E00\u4E2A\u62A5\u6587\uFF0C\u5C31\u5BF9\u76EE\u524D\u6309\u5E8F\u6536\u5230\u7684\u6700\u540E\u4E00\u4E2A\u62A5\u6587\u53D1\u56DE\u4E00\u4E2A\u786E\u8BA4\u3002</li><li>\u5982\u679C\u53D1\u9001\u65B9\u8FDE\u7EED\u6536\u5230 3 \u4E2A\u5BF9\u540C\u4E00\u4E2A\u62A5\u6587\u7684\u786E\u8BA4 (3-ACK)\uFF0C\u8BF4\u660E\u8BE5\u62A5\u6587\u7684\u4E0B\u4E00\u4E2A\u62A5\u6587\u5DF2\u7ECF\u4E22\u5931\uFF0C\u7ACB\u5373\u91CD\u4F20\u4E0B\u4E00\u4E2A\u62A5\u6587\uFF0C\u800C\u4E0D\u662F\u7B49\u5230\u8D85\u65F6\u518D\u91CD\u4F20\u3002</li></ul><h3 id="\u5FEB\u6062\u590D" tabindex="-1">\u5FEB\u6062\u590D <a class="header-anchor" href="#\u5FEB\u6062\u590D" aria-hidden="true">#</a></h3><ul><li>\u53D1\u751F\u5FEB\u91CD\u4F20\uFF0C\u53EA\u662F\u90E8\u5206\u62A5\u6587\u4E22\u5931\uFF0C\u4E0D\u80FD\u8BF4\u660E\u7F51\u7EDC\u53D1\u751F\u4E86\u62E5\u585E\uFF0C\u5C06 ssthresh \u4E5F\u8BBE\u4E3A cwnd / 2\uFF0C\u4F46\u662F cwnd \u8BBE\u4E3A ssthresh\uFF0C\u76F4\u63A5\u5F00\u59CB\u6267\u884C\u62E5\u585E\u907F\u514D\u7B97\u6CD5\u3002</li></ul><h2 id="\u9996\u90E8\u683C\u5F0F" tabindex="-1">\u9996\u90E8\u683C\u5F0F <a class="header-anchor" href="#\u9996\u90E8\u683C\u5F0F" aria-hidden="true">#</a></h2><p><img src="'+s+'" alt=""></p><h2 id="tcp-\u548C-udp-\u7684\u533A\u522B" tabindex="-1">TCP \u548C UDP \u7684\u533A\u522B <a class="header-anchor" href="#tcp-\u548C-udp-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><table><thead><tr><th></th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>\u662F\u5426\u9762\u5411\u8FDE\u63A5</td><td>\u9762\u5411\u8FDE\u63A5</td><td>\u65E0\u8FDE\u63A5</td></tr><tr><td>\u662F\u5426\u53EF\u9760</td><td>\u63D0\u4F9B\u53EF\u9760\u4EA4\u4ED8</td><td>\u5C3D\u6700\u5927\u52AA\u529B\u4EA4\u4ED8</td></tr><tr><td>\u62A5\u6587\u5927\u5C0F</td><td>\u9762\u5411\u5B57\u8282\u6D41\uFF0C\u5927\u5C0F\u4E0D\u7B49</td><td>\u4EA4\u4ED8\u5B8C\u6574\u62A5\u6587</td></tr><tr><td>\u62E5\u585E\u63A7\u5236</td><td>\u6709\uFF0C\u6162\u5F00\u59CB/\u62E5\u585E\u907F\u514D</td><td>\u65E0\uFF0C\u80FD\u591F\u4FDD\u8BC1\u6052\u5B9A\u7684\u53D1\u9001\u901F\u7387</td></tr><tr><td>\u662F\u5426\u652F\u6301\u591A\u65B9\u901A\u4FE1</td><td>\u53EA\u80FD\u662F\u4E00\u5BF9\u4E00</td><td>\u652F\u6301\u4E00\u5BF9\u4E00\u3001\u4E00\u5BF9\u591A\u3001\u591A\u5BF9\u4E00\u3001\u591A\u5BF9\u591A</td></tr><tr><td>\u6027\u80FD</td><td>\u5F00\u9500\u5927</td><td>\u5F00\u9500\u5C0F</td></tr><tr><td>\u5E94\u7528\u5C42\u534F\u8BAE</td><td>HTTP/TLS/FTP/SMTP</td><td>DNS/DHCP</td></tr></tbody></table>',38),T=[n];function c(p,o,u,_,g,R){return a(),e("div",null,T)}var m=t(h,[["render",c]]);export{f as __pageData,m as default};