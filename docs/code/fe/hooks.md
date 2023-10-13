# hooks

## useLocalStorage

```js
function useLocalStorage(key, initialValue) {
  /**
   * 读取一次 key 对应的值，默认返回 initialValue
   */
  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [localState, setLocalState] = useState(readValue);

  /**
   * 当前标签页修改值
   */
  const handleSetState = useCallback(
    value => {
      try {
        const nextState =
          typeof value === 'function' ? value(localState) : value;
        // 自动触发 storage 事件
        window.localStorage.setItem(key, JSON.stringify(nextState));
        // 更新状态
        setLocalState(nextState);
        // 手动触发自定义事件
        window.dispatchEvent(new Event('local-storage'));
      } catch (error) {
        console.warn(error);
      }
    },
    [key, localState]
  );

  const handleStorageChange = useCallback(
    event => {
      // 自定义 local-storage 事件 key 为 undefined
      // storage 事件只有 key 一致才更新状态，避免冗余计算
      if (event.key === key) {
        setLocalState(readValue());
      }
    },
    [readValue]
  );

  useEffect(() => {
    // 监听值变化，包括其他标签页和当前标签页
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('local-storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage', handleStorageChange);
    };
  }, []);

  return [localState, handleSetState];
}
```

## useEventListener

```js
function useEventListener(eventName, handler, elementRef, options) {
  const latestHandlerRef = useRef(handler);

  useEffect(() => {
    latestHandlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = elementRef?.current ?? window;
    const listener = event => latestHandlerRef.current(event);
    element.addEventListener(eventName, listener, options);
    return () => element.removeEventListener(eventName, listener, options);
  }, [eventName, elementRef, options]);
}
```

## useClickAnyWhere

```js
function useClickAnywhere(handler) {
  useEventListener('click', handler);
}
```

## useInterval

```js
function useInterval(callback, delay) {
  const latestCallbackRef = useRef(callback);

  useEffect(() => {
    latestCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    const intervalId = setInterval(
      () => latestCallbackRef.current(),
      delay
    );
    return () => clearInterval(intervalId);
  }, [delay]);
}
```

## useTimeout

```js
function useTimeout(callback, delay) {
  const latestCallbackRef = useRef(callback);

  useEffect(() => {
    latestCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    const timeoutId = setTimeout(() => latestCallbackRef.current(), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);
}
```

## useCountdown

```js
function useCountdown(options) {
  const {
    countStart,
    countStop = 0,
    intervalMs = 1000,
    isIncrement = false,
  } = options;

  const [stateCount, setStateCount] = useState(countStart);
  const [stateIsRunning, setStateIsRunning] = useState(false);

  const startCountdown = () => {
    setStateIsRunning(true);
  };

  const stopCountdown = () => {
    setStateIsRunning(false);
  };

  const resetCountdown = () => {
    setStateIsRunning(false);
    setStateCount(countStart);
  };

  const countdownCallback = useCallback(() => {
    if (stateCount === countStop) {
      stopCountdown();
      return;
    }
    if (isIncrement) {
      setStateCount(prev => prev + 1);
    } else {
      setStateCount(prev => prev - 1);
    }
  }, [stateCount, countStop, isIncrement]);

  useInterval(countdownCallback, stateIsRunning ? intervalMs : undefined);

  return [stateCount, { startCountdown, stopCountdown, resetCountdown }];
}
```
