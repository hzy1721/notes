interface IFetchJsonpOptions {
  callbackQueryParamKey?: string;
  callbackFunctionName?: string;
  timeout?: number;
}

function generateCallbackFunction(): string {
  return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
}

function clearFunction(functionName: string): void {
  try {
    delete window[functionName];
  } catch {
    window[functionName] = undefined;
  }
}

function removeScript(scriptId: string): void {
  const scriptElement = document.getElementById(scriptId);
  if (scriptElement) {
    document.getElementsByTagName('head')[0].removeChild(scriptElement);
  }
}

function fetchJsonp(
  url: string,
  options: IFetchJsonpOptions
): Promise<any> {
  const {
    callbackQueryParamKey = 'callback',
    callbackFunctionName = generateCallbackFunction(),
    timeout = 5000,
  } = options;
  const scriptId = `${callbackQueryParamKey}_${callbackFunctionName}`;
  let timer: number | undefined = undefined;

  return new Promise((resolve, reject) => {
    // 定义全局回调函数
    window[callbackFunctionName] = (response: any) => {
      resolve({
        ok: true,
        json: () => Promise.resolve(response),
      });
      removeScript(scriptId);
      clearTimeout(timer);
      clearFunction(callbackFunctionName);
    };
    // 创建并插入 script 元素
    const scriptElement = document.createElement('script');
    const scriptSrc =
      url +
      (url.includes('?') ? '&' : '?') +
      `${callbackQueryParamKey}=${callbackFunctionName}`;
    scriptElement.setAttribute('src', scriptSrc);
    scriptElement.setAttribute('id', scriptId);
    // 错误处理
    scriptElement.addEventListener('error', () => {
      reject(new Error(`JSONP request to ${url} failed`));
      clearFunction(callbackFunctionName);
      clearTimeout(timer);
      removeScript(scriptId);
    });
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
    // 超时报错
    timer = setTimeout(() => {
      reject(new Error(`JSONP request to ${url} timeout`));
      clearFunction(callbackFunctionName);
      removeScript(scriptId);
      clearTimeout(timer);
    }, timeout);
  });
}

export default fetchJsonp;
