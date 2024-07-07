# Axios

调用 `axios` 函数发送请求，传入配置对象 `config`，返回 promise。

```js
axios(config)
  .then((res) => {
    // 请求成功
  })
  .catch((err) => {
    // 请求失败
  });
```

## config

```js
{
  // 默认 GET
  method: 'get',

  // 添加在 url 前面
  baseURL: 'https://some-domain.com/api',

  // 唯一必传参数，其他参数都可以不传
  url: '/user',

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // query param，普通对象或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // 序列化 query param 的函数，默认用 qs
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // 请求体数据，只用于 POST/PUT/PATCH/DELETE
  // 如果没有 transformRequest，只能是以下类型：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // 请求数据和 header 处理的函数列表，从左到右依次执行
  // 仅用于 POST/PUT/PATCH/DELETE 方法
  // 最后一个函数的返回值必须满足 data 的类型
  transformRequest: [(data, headers) => {
    // ...
    return data;
  }],

  // 响应数据处理的函数列表
  transformResponse: [(data) => {
    // ...
    return data;
  }],

  // syntax alternative to send data into the body
  // method post
  // only the value is sent, not the key
  data: 'Country=Brasil&City=Belo Horizonte',

  // 请求超时毫秒数，默认是 0（永远不会超时）
  timeout: 1000,

  // 跨域请求是否带上 cookie，默认 false
  withCredentials: false,

  // 使用 HTTP Basic auth，设置 Authorization 请求头，会覆盖 headers 里的
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // 响应数据类型，默认 json
  // options: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // browser only: 'blob'
  responseType: 'json',

  // 解码响应数据时的编码格式 (Node.js only)
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // CSRF token 的 cookie 名
  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // CSRF token 的 header 名
  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // 上传时的进度事件
  // `onUploadProgress` allows handling of progress events for uploads
  // browser only
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // 下载时的进度事件
  // `onDownloadProgress` allows handling of progress events for downloads
  // browser only
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // 响应数据的最大字节数（Node）
  // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
  maxContentLength: 2000,

  // 请求数据的最大字节数
  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 2000,

  // 根据状态码判断 promise 是 resolve 还是 reject
  // 函数返回 true 则 resolve，否则 reject
  // 默认 2xx 才 resolve
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // 最大重定向数（Node）
  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `proxy` defines the hostname, port, and protocol of the proxy server.
  // You can also define your proxy using the conventional `http_proxy` and
  // `https_proxy` environment variables. If you are using environment variables
  // for your proxy configuration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  // If the proxy server uses HTTPS, then you must set the protocol to `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicates whether or not the response body should be decompressed
  // automatically. If set to `true` will also remove the 'content-encoding' header
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // default

  // 自定义请求处理，通常用于测试，接收配置对象，返回 promise
  adapter: function (config) {
    /* ... */
  },
}
```

## response

resolve 后 result 的类型。

```js
{
  // status code
  status: 200,

  // status message
  statusText: 'OK',

  // 响应头，header 都是小写的
  headers: {},

  // 响应数据
  data: {},

  // 请求的 config
  config: {},

  // 请求对象，XHR 对象或 ClientRequest 对象
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: {}
}
```

## error

reject 后 error 的类型。

- `response`：响应对象
  - 接收到响应
  - `validateStatus` 没有返回 `true` 导致 reject
  - 可以拿到响应对象
- `request`：请求对象
  - 请求对象创建成功
  - 可以拿到请求对象
- `message`：错误信息
- `config`：请求配置
- `toJSON()`：转为 JSON 字符串
