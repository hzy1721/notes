# XMLHttpRequest

XHR 有两种执行模式：同步 (synchronous)、异步 (asynchronous)。

## 异步 XHR

最常用的是异步模式。

1. 配置请求

```js
const xhr = new XMLHttpRequest();
xhr.open(method, URL, [async, user, password]);
```

- `method`：HTTP 方法
- `URL`：请求的 URL，字符串或 URL 对象。如果有 search param，需要用 `URL` 对象或 `encodeURIComponent` 来确保 param 的正确编码
- `async`：默认是 true (异步模式)
- `user` 和 `password`：HTTP 基本身份验证 (basic authentication) 的用户名和密码

设置超时，以 ms 为单位，请求超时会触发 `timeout` 事件：

```js
xhr.timeout = 10000; // 10 秒
```

设置响应类型：

- `""`：默认，字符串类型
- `text`：字符串类型，与默认相同
- `arraybuffer`：响应类型为 `ArrayBuffer`
- `blob`：响应类型为 `Blob`
- `document`：XML 文档或 HTML 文档
- `json`：响应类型为 `JSON` (自动解析为对象)

```js
xhr.responseType = "json";
```

设置 Request Header：

```js
xhr.setRequestHeader("Content-Type", "application/json");
```

部分 Header 由浏览器管理，不可设置，比如 `Referer`、`Host`。后面设置的同名 Header 不会覆盖前面的，而是添加到值后面，以逗号 `,` 分隔。

```js
xhr.setRequestHeader("X-Auth", "123");
xhr.setRequestHeader("X-Auth", "456");
// X-Auth: 123, 456
```

2. 监听 XHR 事件

XHR 通过设置事件的回调函数来获取请求结果、处理请求错误、获取请求进度等。

XHR 事件列表 (按生命周期排序)：

- `loadstart`：请求开始
- `progress`：收到一个响应数据包
- `abort`：请求中止
- `error`：请求失败，比如网络中断或 URL 错误
- `load`：请求完成 (不考虑状态码)，响应数据下载完成
- `timeout`：请求超时
- `loadend`：在 `abort/error/load/timeout` 之后触发，这 4 个事件只可能触发一个

```js
xhr.onload = function () {
  if (xhr.status !== 200) {
    // 分析响应的 HTTP 状态
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // 例如 404: Not Found
  } else {
    // 显示结果
    alert(`Done, got ${xhr.response.length} bytes`); // response 是服务器响应
  }
};
xhr.onerror = function () {
  alert("Request failed");
};
xhr.onprogress = function (event) {
  // event.loaded —— 已经下载了多少字节
  // event.lengthComputable = true，当服务器发送了 Content-Length header 时
  // event.total —— 总字节数（如果 lengthComputable 为 true）
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // 没有 Content-Length
  }
};
```

在 `onload` 处理程序中，可以访问以下属性：

- `status`：HTTP 状态码，4xx 和 5xx 也会进入 `onload` 而不是 `onerror`
- `statusText`：HTTP 状态消息
- `response`：Response Body

获取除 `Set-Cookie` 和 `Set-Cookie2` 之外的的 Response Header：

```js
xhr.getResponseHeader("Content-Type");
// application/json
xhr.getAllResponseHeaders();
// Cache-Control: max-age=31536000
// Content-Length: 4260
// Content-Type: image/png
// Date: Sat, 08 Sep 2012 16:53:16 GMT
```

Header 的 name 和 value 之间严格为一个冒号一个空格 `: `，换行符统一为 `\r\n`。

**readyState**

早期没有 `load/error/progress` 事件，只能使用 `readystatechange` 事件来处理请求过程，目前已经没有必要使用。

通过 `xhr.readyState` 访问请求状态：

- `UNSENT = 0`：初始状态
- `OPENED = 1`：open 被调用
- `HEADERS_RECEIVED = 2`：接收到 Response Header
- `LOADING = 3`：正在下载响应，每接收到一个数据包重复一次状态 `3`
- `DONE = 4`：请求完成

XHR 状态变化过程：`0` → `1` → `2` → `3` → … → `3` → `4`

```js
xhr.onreadystatechange = function () {
  if (xhr.readyState === 3) {
    // 加载中
  }
  if (xhr.readyState === 4) {
    // 请求完成
  }
};
```

3. 发送请求

```js
xhr.send([body]);
```

- `body`：Request Body

`open` 函数不会建立连接，仅配置请求，`send` 函数真正建立连接并发送请求。

`POST` 请求的 Body 可以用 `FormData`，`Content-Type` 是 `multipart/form-data`：

```html
<form name="person">
  <input name="name" value="John" />
  <input name="surname" value="Smith" />
</form>

<script>
  // 从表单预填充 FormData
  let formData = new FormData(document.forms.person);
  // 附加一个字段
  formData.append("middle", "Lee");

  // 发送出去
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/article/xmlhttprequest/post/user");
  xhr.onload = () => alert(xhr.response);
  xhr.send(formData);
</script>
```

或者用 `JSON` 字符串，`Content-Type` 是 `application/json`：

```js
let xhr = new XMLHttpRequest();
let json = JSON.stringify({
  name: "John",
  surname: "Smith",
});
xhr.open("POST", "/submit");
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.send(json);
```

`send` 也支持 `Blob` 和 `BufferSource` 类型。

4. 中止请求

可以随时中止请求，触发 `abort` 事件，`xhr.status` 变为 `0`。

```js
xhr.abort();
```

## 同步 XHR

`async` 参数设为 `false` 即为同步请求。

```js
xhr.open(method, URL, [async, user, password]);
```

类似于 `await promise`，`send` 后面的代码可以访问请求完成后的 `status`、`statusText`、`response`，需要使用 `try ... catch` 来捕获请求失败的情况。

```js
try {
  xhr.send();
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    alert(xhr.response);
  }
} catch (err) {
  // 代替 onerror
  alert("Request failed");
}
```

同步 XHR 有很多缺点，导致几乎不被使用：

- 会阻塞页面，无法响应用户的其他操作，用户体验很差
  - 阻塞时间过长，浏览器会建议关闭该挂起 (hanging) 的页面
- 很多高级功能无法使用，比如跨域请求、设置超时
- 无法获取请求进度 (progress 事件)

## 上传进度

`progress` 用于获取下载进度，如果需要用 XHR 上传大文件并获取上传进度，可以使用 `xhr.upload` 对象，与 `xhr` 类似提供了若干事件：

- `loadstart`：上传开始
- `progress`：上传了一个数据包
- `abort`：上传中止
- `error`：上传失败，比如网络中断或 URL 错误
- `load`：上传完成 (不考虑状态码)
- `timeout`：上传超时
- `loadend`：上传结束，在 `abort/error/load/timeout` 之后触发

```html
<input type="file" onchange="upload(this.files[0])" />

<script>
  function upload(file) {
    let xhr = new XMLHttpRequest();
    // 跟踪上传进度
    xhr.upload.onprogress = function (event) {
      console.log(`Uploaded ${event.loaded} of ${event.total}`);
    };
    // 跟踪完成：无论成功与否
    xhr.onloadend = function () {
      if (xhr.status == 200) {
        console.log("success");
      } else {
        console.log("error " + this.status);
      }
    };
    xhr.open("POST", "/article/xmlhttprequest/post/upload");
    xhr.send(file);
  }
</script>
```
