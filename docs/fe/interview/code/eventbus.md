# EventBus

## Vue 2

Vue 2 的 `Vue` 对象也提供了这 4 个实例方法：

### vm.$on( event, callback )

- 参数：
  - `{string | Array<string>} event`
  - `{Function} callback`
- 用法：
  - 监听当前实例上的自定义事件。
  - 事件可以由 `vm.$emit` 触发。
  - 回调函数会接收所有传入事件触发函数的额外参数。

### vm.$once( event, callback )

- 参数：
  - `{string} event`
  - `{Function} callback`
- 用法：
  - 监听一个自定义事件，但是只触发一次。
  - 一旦触发之后，监听器就会被移除。

### vm.$off( [event, callback] )

- 参数：
  - `{string | Array<string>} event`
  - `{Function} [callback]`
- 用法：
  - 移除自定义事件监听器。
    - 如果没有提供参数，则移除所有的事件监听器；
    - 如果只提供了事件，则移除该事件所有的监听器；
    - 如果同时提供了事件与回调，则只移除这个回调的监听器。

### vm.$emit( eventName, [...args] )

- 参数：
  - `{string} eventName`
  - `[...args]`
- 用法：
  - 触发当前实例上的事件。
  - 附加参数都会传给监听器回调。
