# 防抖和节流

## 每隔一段时间执行一次

```js
var outerPane = $details.find(".details-pane-outer"),
    didScroll = false;
 
$(window).scroll(function() {
    didScroll = true;
});
 
setInterval(function() {
    if ( didScroll ) {
        didScroll = false;
        // Check your page position and then
        // Load in more results
    }
}, 250);
```

## 防抖 (debounce)

如果一个事件短时间内连续多次触发，则只执行一次处理函数。

有两种执行模式：
- `leading`：第一个事件触发时立即执行处理函数，直到足够长的停顿后再次触发事件才会重新执行处理函数
- `trailing`：如果距离上一次触发事件的时间过短，则重置间隔时间，直到足够长的停顿后才执行处理函数

```js
Function.prototype.debounce = function (threshold, execAsap) {
    var func = this, // reference to original function
        timeout; // handle to setTimeout async task (detection period)
    // return the new debounced function which executes the original function only once
    // until the detection period expires
    return function debounced () {
        var obj = this, // reference to original context object
            args = arguments; // arguments at execution time
        // this is the detection function. it will be executed if/when the threshold expires
        function delayed () {
            // if we're executing at the end of the detection period
            if (!execAsap)
                func.apply(obj, args); // execute now
            // clear timeout handle
            timeout = null; 
        };
        // stop any current detection period
        if (timeout)
            clearTimeout(timeout);
        // otherwise, if we're not already waiting and we're executing at the beginning of the detection period
        else if (execAsap)
            func.apply(obj, args); // execute now
        // reset the detection period
        timeout = setTimeout(delayed, threshold || 100); 
    };
}
```

最常用的是 Lodash 提供的 `_.debounce`：

```js
_.debounce(func, [wait=0], [options={}])
```

还可以取消防抖：

```js
var debounced_version = _.debounce(doSomething, 200);
$(window).on('scroll', debounced_version);
// 如果需要的话
debounced_version.cancel();
```

## 节流 (throttle)

无论事件触发频繁与否，保证每隔一段时间执行一次 (最少一次，最多一次)。

与防抖类似，有 `leading` 和 `trailing` 两种模式。

可以使用 Lodash 的 `_.throttle`：

```js
_.throttle(func, [wait=0], [options={}])
```

## requestAnimationFrame

等价于 `_.throttle(func, 16)`，但是精确度更高。

需要重新计算和渲染元素，并且想要保证变化的平滑性，可以使用该方法。
