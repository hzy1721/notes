# React Router

组成部分：

1. 路由表数组 `routes`
   - 支持用 JSX 写路由 `createRoutesFromElements`
   - path
   - element
   - children
   - loader
   - action
2. 路由对象 `router`
3. 路由组件 `<RouterProvider />`
4. 链接组件
   - `<Link />`
   - `<NavLink />`
5. 访问路径参数、查询参数
   - `useParams`
   - `useMatch`
6. 跳转、重定向
   - `redirect`
   - `useNavigate`
   - `useNavigation`

```js
// 数组写法
const routes = [{ path: '/', element: <HomePage /> }];
// JSX 写法
const routes = createRoutesFromElements(
  <Route path="/" element={<HomePage />} />
);
const router = createXXXRouter(routes);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

## 嵌套路由

`children` 指定子路由。可以不指定 `path` 来表示布局组件。

## 动态路由

`path` 中使用 `:` 开头指定动态 URL 片段。

```jsx
<Route path="projects/:projectId/tasks/:taskId" />
```

访问方式：

- loader params 参数
- action params 参数
- useParams
- useMatch、match.params
