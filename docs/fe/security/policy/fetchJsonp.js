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
