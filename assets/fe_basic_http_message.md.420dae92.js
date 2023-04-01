import{_ as e,c as s,o as t,d as a}from"./app.60ece37e.js";const i="/assets/http_message.19963607.png",T=JSON.parse('{"title":"报文结构","description":"","frontmatter":{},"headers":[],"relativePath":"fe/basic/http/message.md","lastUpdated":1680318810000}'),o={name:"fe/basic/http/message.md"},l=a('<h1 id="报文结构" tabindex="-1">报文结构 <a class="header-anchor" href="#报文结构" aria-hidden="true">#</a></h1><p>HTTP 报文主要分为请求报文 (Request) 和响应报文 (Response)。</p><p>请求报文的结构为：</p><ul><li>第一行包含 3 个字段：HTTP 方法 (Method)、请求的路径 (Path)、使用的 HTTP 版本 (Version)，用空格分隔</li><li>请求头 (Request Headers)，每行一个键值对</li><li>一行空行</li><li>请求体 (Request Body)</li></ul><p>响应报文的结构为：</p><ul><li>第一行包含 3 个字段：HTTP 版本 (Version)、状态码 (Status Code)、状态消息 (Status Message)</li><li>响应头 (Response Headers)</li><li>一行空行</li><li>响应头 (Response Body)</li></ul><p><img src="'+i+'" alt=""></p>',7),r=[l];function _(n,p,d,c,h,u){return t(),s("div",null,r)}const f=e(o,[["render",_]]);export{T as __pageData,f as default};
