# 概述

网络请求库用于请求接口函数、获取数据，并提供默认配置、拦截器等功能。

内部的请求机制包括：

- JSONP：使用较少
- XHR：主流
- fetch：较新的库使用

部分库与 UI 库无关，React、Vue 都可以用，比如 Axios，此类库通常也支持 Node。

部分库使用了 UI 库的特性，只局限于指定 UI 库，比如 SWR 只能用于 React。

| 请求库              | 原理     | UI 库 |
| ------------------- | -------- | ----- |
| Axios               | XHR/http | All   |
| useRequest (ahooks) |          | React |
| useFetch (use-http) |          | React |
| useFetch (usehooks) |          | React |
| SWR                 |          | React |
