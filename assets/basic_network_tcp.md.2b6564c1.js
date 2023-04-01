import{_ as e,c as a,o as i,d as l}from"./app.60ece37e.js";const t="/assets/three-handshake.d9f3ec6b.png",s="/assets/four-wave.be2e81ab.png",r="/assets/congestion-control.224e9320.png",n="/assets/tcp-header.0d8a95d3.png",f=JSON.parse('{"title":"TCP","description":"","frontmatter":{},"headers":[{"level":2,"title":"连接建立","slug":"连接建立","link":"#连接建立","children":[]},{"level":2,"title":"连接释放","slug":"连接释放","link":"#连接释放","children":[]},{"level":2,"title":"可靠传输","slug":"可靠传输","link":"#可靠传输","children":[]},{"level":2,"title":"流量控制","slug":"流量控制","link":"#流量控制","children":[]},{"level":2,"title":"拥塞控制","slug":"拥塞控制","link":"#拥塞控制","children":[{"level":3,"title":"慢开始","slug":"慢开始","link":"#慢开始","children":[]},{"level":3,"title":"拥塞避免","slug":"拥塞避免","link":"#拥塞避免","children":[]},{"level":3,"title":"快重传","slug":"快重传","link":"#快重传","children":[]},{"level":3,"title":"快恢复","slug":"快恢复","link":"#快恢复","children":[]}]},{"level":2,"title":"首部格式","slug":"首部格式","link":"#首部格式","children":[]}],"relativePath":"basic/network/tcp.md","lastUpdated":1677593810000}'),d={name:"basic/network/tcp.md"},h=l('<h1 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-hidden="true">#</a></h1><h2 id="连接建立" tabindex="-1">连接建立 <a class="header-anchor" href="#连接建立" aria-hidden="true">#</a></h2><p><img src="'+t+'" alt=""></p><p>第 3 个确认报文是为了防止失效的连接请求到达服务器，造成服务器错误地打开连接。比如客户端发送的第 1 个连接请求报文滞留在网络中但没有丢失，客户端未收到确认一段时间后超时重传，但是最初滞留的请求报文最终会到达服务器。</p><p>如果只有两次握手，服务器收到请求就会打开连接，可能打开不需要的连接，造成资源浪费。</p><p>如果需要三次握手，尽管服务器收到了滞留的请求报文，并发回确认报文，但由于此时客户端不需要建立连接，不会发回第 3 个确认报文，TCP 连接就无法建立。</p><h2 id="连接释放" tabindex="-1">连接释放 <a class="header-anchor" href="#连接释放" aria-hidden="true">#</a></h2><p><img src="'+s+'" alt=""></p><p>服务端发送第 2 个确认报文后，进入 <strong>CLOSE-WAIT</strong> 状态。TCP 连接进入半关闭状态，客户端不能向服务端发送数据，但服务端可以向客户端发送数据，便于把还未传送完毕的数据发送完。</p><p>客户端发送第 4 个连接释放响应报文后，进入 <strong>TIME-WAIT</strong> 状态，等待 2 个 MSL (Maximum Segment Lifetime，最大报文存活时间) 的时间后进入 <strong>CLOSED</strong> 状态。原因是：</p><ul><li>确保最后一个确认报文能够到达。 <ul><li>如果 B 没收到 A 发送来的确认报文，就会超时重传。</li><li>A 等待一段时间就是为了处理这种情况的发生，在等待期间如果收到重传的释放请求报文就可以重新发送确认报文。</li></ul></li><li>让本连接持续时间内所产生的所有报文都从网络中消失，使得下一个新的连接不会出现旧的连接请求报文。</li></ul><p>如果客户端请求关闭连接后，服务端没有数据要发送，可以把第二个和第三个报文合并，也就是 “三次挥手” 而不是 “四次挥手”。</p><h2 id="可靠传输" tabindex="-1">可靠传输 <a class="header-anchor" href="#可靠传输" aria-hidden="true">#</a></h2><p>TCP 使用<strong>超时重传</strong>来实现可靠传输，如果已经发送的报文在指定时间内没有收到确认，就重新发送这个报文。</p><p>超时重传的时间称为 RTO (Retransmission TimeOut) = RTTs + 4 * RTTd</p><p>RTTs 是加权平均往返时间，根据每次通信的 RTT 实时更新：RTTs = (1 - a) * RTTs + a * RTT</p><ul><li>初始 RTTs 值为 RTT</li><li>a 是范围 [0, 1) 的参数，a 越大，最新的 RTT 对 RTTs 的影响就越大，推荐值是 1/8</li></ul><p>RTTd 是 RTTs 与 RTT 偏差的加权平均值：RTTd = (1 - b) * RTTd + b * |RTTs - RTT|</p><ul><li>初始 RTTd 值为 RTT 的一半</li><li>b 是范围 [0, 1) 的参数，b 越大，最新的偏差对 RTTd 的影响就越大，推荐值是 1/4</li></ul><p>Karn 算法：发生超时重传，说明网络发生了拥塞，应该把 RTO 的值增大一点，避免更多的超时重传，通常增大为原来的 2 倍。直到不再发生超时重传，继续使用上面的公式计算 RTO。</p><h2 id="流量控制" tabindex="-1">流量控制 <a class="header-anchor" href="#流量控制" aria-hidden="true">#</a></h2><p>控制发送方的发送速率，使接收方来得及接收 (接收缓存不会溢出)。</p><p>通过接收方发送的确认报文中的窗口字段实现 (接收窗口)，发送窗口的大小不能超过接收窗口。</p><h2 id="拥塞控制" tabindex="-1">拥塞控制 <a class="header-anchor" href="#拥塞控制" aria-hidden="true">#</a></h2><p>TCP 通过 4 个算法进行拥塞控制：慢开始、拥塞避免、快重传、快恢复。</p><p><img src="'+r+'" alt=""></p><h3 id="慢开始" tabindex="-1">慢开始 <a class="header-anchor" href="#慢开始" aria-hidden="true">#</a></h3><ul><li>初始 cwnd = 1，每收到一个确认就将 cwnd + 1，可以一次性发送更多的报文，每个轮次 cwnd 变为原来的两倍，呈指数增长速度。</li><li>设置慢开始门限 ssthresh，当 cwnd &gt;= ssthresh 时，转为执行拥塞避免算法。</li></ul><h3 id="拥塞避免" tabindex="-1">拥塞避免 <a class="header-anchor" href="#拥塞避免" aria-hidden="true">#</a></h3><ul><li>每个轮次只将 cwnd + 1，呈线性增长速度。</li><li>如果发生超时，说明网络发生了拥塞，将 ssthresh 设为 cwnd / 2，cwnd 设为 1，重新开始执行慢开始算法。</li></ul><h3 id="快重传" tabindex="-1">快重传 <a class="header-anchor" href="#快重传" aria-hidden="true">#</a></h3><ul><li>每收到一个报文，就对目前按序收到的最后一个报文发回一个确认。</li><li>如果发送方连续收到 3 个对同一个报文的确认 (3-ACK)，说明该报文的下一个报文已经丢失，立即重传下一个报文，而不是等到超时再重传。</li></ul><h3 id="快恢复" tabindex="-1">快恢复 <a class="header-anchor" href="#快恢复" aria-hidden="true">#</a></h3><ul><li>发生快重传，只是部分报文丢失，不能说明网络发生了拥塞，将 ssthresh 也设为 cwnd / 2，但是 cwnd 设为 ssthresh，直接开始执行拥塞避免算法。</li></ul><h2 id="首部格式" tabindex="-1">首部格式 <a class="header-anchor" href="#首部格式" aria-hidden="true">#</a></h2><p><img src="'+n+'" alt=""></p>',36),c=[h];function p(T,o,u,_,g,R){return i(),a("div",null,c)}const b=e(d,[["render",p]]);export{f as __pageData,b as default};
