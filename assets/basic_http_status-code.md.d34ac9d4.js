import{_ as t,c as d,o as r,d as e}from"./app.a0163938.js";const _=JSON.parse('{"title":"状态码","description":"","frontmatter":{},"headers":[{"level":2,"title":"1xx：提示信息","slug":"_1xx-提示信息","link":"#_1xx-提示信息","children":[]},{"level":2,"title":"2xx：请求成功","slug":"_2xx-请求成功","link":"#_2xx-请求成功","children":[]},{"level":2,"title":"3xx：重定向","slug":"_3xx-重定向","link":"#_3xx-重定向","children":[]},{"level":2,"title":"4xx：客户端错误","slug":"_4xx-客户端错误","link":"#_4xx-客户端错误","children":[]},{"level":2,"title":"5xx：服务端错误","slug":"_5xx-服务端错误","link":"#_5xx-服务端错误","children":[]}],"relativePath":"basic/http/status-code.md","lastUpdated":1682486230000}'),o={name:"basic/http/status-code.md"},a=e('<h1 id="状态码" tabindex="-1">状态码 <a class="header-anchor" href="#状态码" aria-hidden="true">#</a></h1><h2 id="_1xx-提示信息" tabindex="-1">1xx：提示信息 <a class="header-anchor" href="#_1xx-提示信息" aria-hidden="true">#</a></h2><p>Informational</p><table><thead><tr><th>Code</th><th>Text</th><th>含义</th></tr></thead><tbody><tr><td>100</td><td>Continue</td><td>继续请求或忽略响应</td></tr><tr><td>101</td><td>Switching Protocols</td><td>WebSocket 连接建立时切换协议</td></tr><tr><td>102</td><td>Processing</td><td>接收到请求，正在处理，目前没有响应可以返回</td></tr><tr><td>103</td><td>Early Hints</td><td>预加载资源</td></tr></tbody></table><h2 id="_2xx-请求成功" tabindex="-1">2xx：请求成功 <a class="header-anchor" href="#_2xx-请求成功" aria-hidden="true">#</a></h2><p>Successful</p><table><thead><tr><th>Code</th><th>Text</th><th>含义</th></tr></thead><tbody><tr><td><strong>200</strong></td><td><strong>OK</strong></td><td>请求资源成功</td></tr><tr><td><strong>201</strong></td><td><strong>Created</strong></td><td>创建了新资源</td></tr><tr><td>202</td><td>Accepted</td><td>接收到请求，但没有开始处理</td></tr><tr><td>203</td><td>Non-Authoritative Information</td><td>返回的响应是原始数据的镜像</td></tr><tr><td>204</td><td>No Content</td><td>没有响应体，但是响应头可能有用</td></tr><tr><td>205</td><td>Reset Content</td><td>重置 HTML 文档</td></tr><tr><td>206</td><td>Partial Content</td><td>请求头包含 <code>Range</code>，返回部分内容</td></tr><tr><td>207</td><td>Multi-Status</td><td>多个资源的多个状态信息</td></tr><tr><td>208</td><td>Already-Reported</td><td>在 <code>&lt;dav:propstat&gt;</code> 中使用</td></tr><tr><td>226</td><td>IM Used</td><td>返回响应是在资源上进行若干操作的结果</td></tr></tbody></table><h2 id="_3xx-重定向" tabindex="-1">3xx：重定向 <a class="header-anchor" href="#_3xx-重定向" aria-hidden="true">#</a></h2><p>Redirection</p><table><thead><tr><th>Code</th><th>Text</th><th>含义</th></tr></thead><tbody><tr><td>300</td><td>Multiple Choices</td><td>有多个响应可以选择</td></tr><tr><td>301</td><td>Moved Permanently</td><td>资源永久转移到其他 URL</td></tr><tr><td>302</td><td>Found</td><td>临时跳转</td></tr><tr><td>303</td><td>See Other</td><td>用 GET 请求另一个 URL</td></tr><tr><td><strong>304</strong></td><td><strong>Not Modified</strong></td><td>缓存过期后重新验证，资源未修改</td></tr><tr><td>305</td><td>Use Proxy</td><td>⚠️ 已废弃</td></tr><tr><td>306</td><td>unused</td><td>⚠️ 已废弃</td></tr><tr><td>307</td><td>Temporary Redirect</td><td>与 302 相同，区别是必须用同一方法请求重定向地址</td></tr><tr><td>308</td><td>Permanent Redirect</td><td>与 301 相同，区别是必须用同一方法请求重定向地址</td></tr></tbody></table><h2 id="_4xx-客户端错误" tabindex="-1">4xx：客户端错误 <a class="header-anchor" href="#_4xx-客户端错误" aria-hidden="true">#</a></h2><p>Client error</p><table><thead><tr><th>Code</th><th>Text</th><th>含义</th></tr></thead><tbody><tr><td><strong>400</strong></td><td><strong>Bad Request</strong></td><td>客户端发送的请求有问题</td></tr><tr><td>401</td><td>Unauthorized</td><td>缺少身份验证信息</td></tr><tr><td>402</td><td>Payment Required</td><td>保留给未来使用，目前无相关标准</td></tr><tr><td><strong>403</strong></td><td><strong>Forbidden</strong></td><td>拒绝访问</td></tr><tr><td><strong>404</strong></td><td><strong>Not Found</strong></td><td>资源不存在</td></tr><tr><td>405</td><td>Method Not Allowed</td><td>资源不支持该方法</td></tr><tr><td>406</td><td>Not Acceptable</td><td>内容协商后未找到满足要求的资源</td></tr><tr><td>407</td><td>Proxy Authentication Required</td><td>类似 401，但是由代理要求鉴权</td></tr><tr><td>408</td><td>Request Timeout</td><td>服务端主动发送，表示即将关闭该无用连接</td></tr><tr><td>409</td><td>Conflict</td><td>请求与服务器当前状态冲突</td></tr><tr><td>410</td><td>Gone</td><td>资源被永久删除</td></tr><tr><td>411</td><td>Lenght Required</td><td>请求头缺少服务端要求的 <code>Content-Length</code></td></tr><tr><td>412</td><td>Precondition Failed</td><td>服务端不满足请求头包含的先决条件</td></tr><tr><td>413</td><td>Payload Too Large</td><td>请求体大小超出了服务端限制</td></tr><tr><td>414</td><td>URI Too Long</td><td>请求的 URI 长度超出服务端限制</td></tr><tr><td>415</td><td>Unsupported Media Type</td><td>请求资源的媒体类型不被服务端支持</td></tr><tr><td>416</td><td>Range Not Satisfiable</td><td>请求头 <code>Range</code> 指定的范围无效</td></tr><tr><td>417</td><td>Expectation Failed</td><td>请求头 <code>Expect</code> 无法满足</td></tr><tr><td>418</td><td>I&#39;m a teapot</td><td>服务端拒绝使用茶壶来煮咖啡 ☕️</td></tr><tr><td>421</td><td>Misdirected Request</td><td>服务端无法产生任何请求，可能是定向错误</td></tr><tr><td>422</td><td>Unprocessable Content</td><td>请求有语义错误，格式没问题</td></tr><tr><td>423</td><td>Locked</td><td>资源被锁定</td></tr><tr><td>424</td><td>Failed Dependency</td><td>由于上一个请求失败，导致这次请求也失败</td></tr><tr><td>425</td><td>Too Early</td><td>服务端拒绝处理可能被重放的请求</td></tr><tr><td>426</td><td>Upgrade Required</td><td>服务端要求升级协议为 <code>Upgrade</code> 响应头指定的协议</td></tr><tr><td>428</td><td>Precondition Required</td><td>要求请求满足一定条件，通常为了避免 lost update</td></tr><tr><td>429</td><td>Too Many Requests</td><td>短时间内发送了太多请求</td></tr><tr><td>431</td><td>Request Header Fields Too Large</td><td>请求头太大了</td></tr><tr><td>451</td><td>Unavailable For Legal Reasons</td><td>请求资源违反法律</td></tr></tbody></table><h2 id="_5xx-服务端错误" tabindex="-1">5xx：服务端错误 <a class="header-anchor" href="#_5xx-服务端错误" aria-hidden="true">#</a></h2><p>Server error</p><table><thead><tr><th>Code</th><th>Text</th><th>含义</th></tr></thead><tbody><tr><td><strong>500</strong></td><td><strong>Internal Server Error</strong></td><td>服务端内部错误</td></tr><tr><td>501</td><td>Not Implemented</td><td>不支持请求方法，只有 <code>GET</code> 和 <code>HEAD</code> 必须支持</td></tr><tr><td>502</td><td>Bad Gateway</td><td>服务端作为网关处理请求时，收到了无效的响应</td></tr><tr><td>503</td><td>Server Unavailable</td><td>服务端当前不能处理请求</td></tr><tr><td>504</td><td>Gateway Timeout</td><td>服务端作为网关时，请求超时</td></tr><tr><td>505</td><td>HTTP Version Not Supported</td><td>HTTP 版本不支持</td></tr><tr><td>506</td><td>Variant Also Negotiates</td><td>内部配置错误，资源应该用于透明内容协商</td></tr><tr><td>507</td><td>Unsufficient Storage</td><td>存储空间不足</td></tr><tr><td>508</td><td>Loop Detected</td><td>处理请求时检测到死循环</td></tr><tr><td>510</td><td>Not Extended</td><td>请求需要更多扩展才能被服务端处理</td></tr><tr><td>511</td><td>Network Authentication Required</td><td>客户端需要进行网络认证来访问网络</td></tr></tbody></table>',16),n=[a];function i(s,h,l,c,x,g){return r(),d("div",null,n)}const p=t(o,[["render",i]]);export{_ as __pageData,p as default};