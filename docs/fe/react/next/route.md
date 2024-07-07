# 路由

Next 有 2 种路由模式，都是基于文件系统的路由：

- App Router
  - v13 引入，基于 React 服务端组件
  - 使用 `app` 目录
  - 支持共享布局、嵌套路由、加载状态、错误处理等
- Pages Router
  - v13 之前的路由，不推荐使用

本文只介绍 App Router。

## 目录

从根目录到叶子目录的路径构成路由。

| 目录             | 含义                    |
| ---------------- | ----------------------- |
| `folder`         | 普通路由                |
| `folder/folder`  | 嵌套路由                |
| `[folder]`       | 动态路由                |
| `[...folder]`    | catch-all 动态路由      |
| `[[...folder]]`  | 可选 catch-all 动态路由 |
| `(folder)`       | 路由组                  |
| `@folder`        | 并行路由                |
| `(.)folder`      | 同层拦截路由            |
| `(..)folder`     | 向上一层拦截路由        |
| `(..)(..)folder` | 向上两层拦截路由        |
| `(...)folder`    | 根拦截路由              |
| `_folder`        | 私有路由                |

### 动态路由

添加 path param，作为 layout、page、route、generateMetadata 的 params 参数。

使用 generateStaticParams 在编译时生成所有可能的动态路由，函数内部的 fetch 会自动缓存，从而减少编译时间。

### 路由组

将目录名排除在路由路径外。

- 创建逻辑上的目录来整理路由
- 共享 layout、template 等文件
- 创建多个根布局，每个 layout 包含自己的 `<html>` 和 `<body>`
  - 如果顶层有 page，需要移动到其中一个路由组下
  - 在不同根布局的路由组之间导航会导致页面的完全刷新

由于路由组不参与路径，需要注意避免路由冲突。

### 并行路由

单个路由下展示多个页面，并且这些页面有自己独立的路由。

用 `@folder` 定义的 slot 会作为 layout 的属性传入，从而能够与 `children` 一起渲染。

`useSelectedLayoutSegment` 和 `useSelectedLayoutSegments` 用于获取 slot 的当前路由。

并行路由可以用于实现弹出层、条件路由等。

### 拦截路由

在当前页面之上展示另一个路由内容，比如查看图片对话框、登录注册对话框、购物车对话框。

## 文件

路由展示的内容。

| 文件         | 含义             |
| ------------ | ---------------- |
| layout       | 布局             |
| template     | 模板             |
| error        | 错误处理         |
| loading      | 加载中           |
| not-found    | 404              |
| page         | 页面             |
| global-error | 全局错误处理     |
| default      | 并行路由默认页面 |
| route        | 接口函数         |

```jsx
import Layout from './layout';
import Template from './template';
// Layout 和 Template 需要接收并渲染 children 属性
import Error from './error';
import Loading from './loading';
import NotFound from './not-found';
// 以上组件会被子路由共享，导航到子路由时 <Page /> 替换为子路由内容
import Page from './page';

<Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<NotFound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>;
```

### layout

子路由共享的布局组件，导航时不会重新渲染。

根路由 layout 必须有，并且必须包括 `<html>` 和 `<body>`。其他路由的 layout 可选。

根路由 layout 不要包含 `<head>` 相关元素，而是用 Metadata API 来管理。

根路由只能是服务端组件，不能是客户端组件。

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

无法在 layout 和 children 之间传递数据，可以多次请求相同数据，React 会做优化。

### template

类似 layout，区别是导航时会重新创建（初始化 state、执行 effect）。

```tsx
<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>
```

### error

下层组件抛出错误时，展示距离最近的 `<Error>` 内容，页面其他部分不受影响，从而使错误控制在较小的范围，也方便在不刷新页面的前提下从错误中恢复。

`<Error>` 组件接收 error 和 reset 属性：

- error：错误对象
  - 生产环境下，出于安全考虑，只包括 message 和 digest 属性
  - message：标准格式的错误信息
  - digest：自动生成的 hash，用于匹配服务端日志的详细报错信息
  - 开发环境下，为了调试方便，会包含完整的错误对象
- reset：重新渲染组件的函数

### global-error

由于 error 在 layout 和 template 的下层，为了处理顶层 layout 和 template 的错误，使用 global-error。

由于 global-error 会在报错时替换整个页面，因此必须包含 `<html>` 和 `<body>`。

### loading

基于 Suspense 的加载提示内容，用于路由加载时立即展示，优化用户体验。

不同路由间导航时，首先进行 URL 跳转，然后展示 loading 内容，最后等到路由加载完成后替换为路由内容。

导航是可中断的，在路由加载期间可以立即导航到其他路由，不必等待当前路由加载完成。

除了路由内置的 loading Suspense，开发者也可以手动添加 Suspense 来实现流式传输，将页面分为多个 chunk 来并行 SSR，从而使内容尽早展现给用户，优化 TTFB、FCP、TTI 等指标。

### default

并行路由 slot 在路由不存在时的默认展示内容。

并行路由也可以包含子路由，如果 slot 没有定义导航的目标路由，会保持导航前的页面，如果刷新页面，会尝试渲染相应 slot 的 default，如果不存在则展示 404。

### route

接口函数，不能与 page 共存。

支持 7 种主流 HTTP 方法：GET、POST、PUT、PATCH、DELETE、HEAD、OPTIONS。

返回 Response 对象的 GET 函数会自动缓存。以下情况不会缓存：

- 使用 Request 对象
- 使用除 GET 外的其他 HTTP 方法
- 使用 cookies、headers 等动态函数
- 在 segment config option 中指定不缓存

## 中间件

在根目录的 middleware 中命名导出 middleware 函数来定义中间件。

- 重定向
- 重写响应
- 设置请求头
- 设置响应 cookie
- 设置响应头

```ts
export function middleware(request: NextRequest) {
  // 针对不同的路由做不同的处理
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url));
  }
}

export const config = {
  matcher: [
    // 只对满足要求的路由执行中间件，支持正则
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      // 跳过 prefetch 请求
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
```

## 元数据

| 文件              | 含义              |
| ----------------- | ----------------- |
| `favicon`         | 浏览器端 icon     |
| `icon`            | App icon          |
| `apple-icon`      | Apple App icon    |
| `opengraph-image` | Open Graph 协议图 |
| `twitter-image`   | Twitter 图        |
| `sitemap`         | SEO sitemap       |
| `robots`          | 爬虫 robots       |

## 其他文件

不包含 `page.tsx` 或 `route.tsx` 的目录是不可路由的，不会包含在路由内。

因此可以自由地组织目录结构，只要不包含上面两个文件即可，比如组件目录 `components`、接口目录 `services`。

其他文件有 3 种放置位置：

- 项目根目录
- app 根目录
- 各个路由的目录

## 导航

在不同路由之间导航有 2 种方法：

- `<Link>` 组件
- `useRouter` hook

### Link

超链接组件，封装 `<a>` 元素，提供 prefetch 和客户端路由跳转的功能。

```tsx
<Link href="/dashboard" replace={true} scroll={false} prefetch={false} />
```

- scroll：跳转后是否滚动到顶部，默认 true
- prefetch：是否自动 prefetch，默认 true

### useRouter

编程式跳转路由。只能在客户端组件使用。

```tsx
'use client';

const router = useRouter();
```

尽量用 Link，除非必须才用 useRouter。

### usePathname

完整路径。

```tsx
const pathname = usePathname();
```

## 原理

服务端将应用代码进行路由分割，客户端 prefetch 并缓存每个路由的资源。

路由跳转时，只请求和重新渲染变化的路由部分，其他部分保持不变，能够减少开销、提高性能。

### prefetch

在后台提前加载路由对应的资源。开发环境关闭，只在生产环境开启。

- Link 链接的路由：在 Link 对用户可见时自动 prefetch
  - 静态路由：整个路由都会被 prefetch 和缓存
  - 动态路由：从 layout 向下到第一个 loading 的共享部分会被 prefetch 和缓存 30 秒
    - 减少 prefetch 完整路由的开销
    - 能够快速展示 loading 部分
- router.prefetch() 编程式 prefetch 指定路由

### 缓存

访问过路由和 prefetch 路由的 RSC Payload 会被缓存在客户端的内存中，并在后续导航中尽可能复用缓存，以减少请求数。

回退、前进时会复用缓存，并保留滚动的位置。

## 国际化

locale：语言和相关格式偏好的 ID，比如 `en-US`、`zh-CN`。

定义动态路由 `app/[lang]`，然后在中间件中根据路由参数中的 locale 展示不同的内容。
