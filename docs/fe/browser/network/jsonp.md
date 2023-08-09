# JSONP

1. 带上回调函数名的 query param 请求接口地址，比如 `xxx?callback=testFunction`
   - query param key 需要遵循接口提供方的要求，这里是 `callback`
2. 接口地址返回 JS 脚本，里面用请求的数据调用 `testFunction` 函数

```js
testFunction({
  userId: 123,
  accountType: 'main',
});
```

3. `testFunction` 函数内部可以对接收到的数据进行处理，比如传递给外部

## fetchJsonp

手写 JSONP，语法类似 `fetch`，返回 Promise。

```js
function generateCallbackFunction() {
  return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
}

function clearFunction(functionName) {
  try {
    delete window[functionName];
  } catch {
    window[functionName] = undefined;
  }
}

function removeScript(scriptId) {
  const scriptElement = document.getElementById(scriptId);
  if (scriptElement) {
    document.getElementsByTagName('head')[0].removeChild(scriptElement);
  }
}

function fetchJsonp(url, options) {
  const {
    callbackQueryParamKey = 'callback',
    callbackFunctionName = generateCallbackFunction(),
    timeout = 5000,
  } = options;
  const scriptId = `${callbackQueryParamKey}_${callbackFunctionName}`;
  let timer = undefined;

  return new Promise((resolve, reject) => {
    window[callbackFunctionName] = response => {
      resolve({
        ok: true,
        json: () => Promise.resolve(response),
      });
      removeScript(scriptId);
      clearTimeout(timer);
      clearFunction(callbackFunctionName);
    };
    const scriptElement = document.createElement('script');
    const scriptSrc =
      url +
      (url.includes('?') ? '&' : '?') +
      `${callbackQueryParamKey}=${callbackFunctionName}`;
    scriptElement.setAttribute('src', scriptSrc);
    scriptElement.setAttribute('id', scriptId);
    scriptElement.addEventListener('error', () => {
      reject(new Error(`JSONP request to ${url} failed`));
      clearFunction(callbackFunctionName);
      clearTimeout(timer);
      removeScript(scriptId);
    });
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
    timer = setTimeout(() => {
      reject(new Error(`JSONP request to ${url} failed`));
      clearFunction(callbackFunctionName);
      removeScript(scriptId);
      clearTimeout(timer);
    }, timeout);
  });
}
```
