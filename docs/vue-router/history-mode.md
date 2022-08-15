# 历史模式

Vue Router 提供 2 种历史模式 (history mode)。

## Hash 模式

在 URL 开头有一个哈希字符 `#`，不需要服务端做额外处理，对 SEO 有不好的影响。

```js
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
});
```

## HTML5 模式 (推荐)

使用 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) 对象实现路由的跳转。URL 开头没有额外字符，与非 SPA 应用的 URL 一致。需要服务端做额外配置，404 时返回 `index.html`。对 SEO 的影响较小。

```js
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
});
```

### nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 404

由于服务端配置了 404 就返回 `index.html`，所以输入不存在的路径后只会显示空白而不是 404 页面，需要在 Vue Router 中配置一条匹配所有路径的回退路由，当前面的所有路由都不满足时显示 404 页面。

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/:pathMatch(.*)", component: NotFoundComponent }],
});
```
