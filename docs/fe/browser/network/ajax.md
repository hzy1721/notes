# AJAX

**AJAX** (Asynchronous JavaScript And XML，异步 JS 和 XML)，指的是 JavaScript 发出的异步网络请求，可以实现页面的局部更新，使用户与页面的交互更顺畅。

最早实现 AJAX 技术的是 `XMLHttpRequest` (简称 XHR)，是一个浏览器的内建对象，尽管名字中有 _XML_，但可以操作的数据不仅限于 XML，目前开发者更多地使用 _JSON_ 作为数据交互的格式。

现代 JavaScript 提供了 `fetch` API，是一种更简洁通用的 JS 异步网络请求方式，缺点是不支持旧版浏览器、不提供 XHR 的所有功能。尽管开发者应该多使用现代的 fetch API，但是目前 fetch 还无法完全代替 XHR，仍存在一些问题和局限性，比如不支持进度事件、请求超时和中止需要额外的支持等。

目前 fetch 还不是 XHR 的完美替代品，在部分情况下仍必须使用 XHR，而且 XHR 也不比 fetch 差太多，已有的使用 XHR 的应用数量也很多，比如 Vue 技术栈推荐的网络请求库 `Axios` 在浏览器端就是基于 XHR 的。对于开发者来说，`XMLHttpRequest` 和 `fetch` 这两种 **AJAX** 技术都应该掌握，根据实际情况确定使用哪一种。
