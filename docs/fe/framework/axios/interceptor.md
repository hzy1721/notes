# 拦截器

支持在 `axios` 和自定义实例上添加拦截器：

- 请求发送之前处理配置对象
- 发生请求错误之前处理错误对象
- 成功响应被 resolve 之前处理响应对象
- 响应错误被 reject 之前处理错误对象

```js
axios.interceptors.request.use(
  function (config) {
    // 请求配置
    return config;
  },
  function (error) {
    // 发生请求错误
    return Promise.reject(error);
  }
);

const responseInterceptor = axios.interceptors.response.use(
  function (response) {
    // 响应对象
    return response;
  },
  function (error) {
    // 响应错误对象
    return Promise.reject(error);
  }
);

// 移除拦截器
axios.interceptors.response.eject(responseInterceptor);
```
