# 动态组件

有时候需要在多个组件之间来回切换，比如 Tab 页面。

## `<component>`

可以用内置元素 `<component>` 实现：

```html
<component :is="tabs[currentTab]"></component>
```

- `is` 如果是字符串，可以是原生标签名或**注册**的组件名
- `is` 也可以是 `Component` 对象

```ts
interface DynamicComponentProps {
  is: string | Component;
}
```

使用 `<component>` 在多个组件之间来回切换时，被切换掉的组件会被卸载。

## `<KeepAlive>`

可以用内置组件 `<KeepAlive>` 缓存被切换掉的组件，从而保留组件的状态。

```html
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```

`<KeepAlive>` 默认缓存内部的所有组件，可以通过 `include` 和 `exclude` 属性来显式指定缓存和不缓存的组件。

```ts
interface KeepAliveProps {
  /**
   * 如果指定，则只有与 `include` 名称
   * 匹配的组件才会被缓存。
   */
  include?: MatchPattern;
  /**
   * 任何名称与 `exclude`
   * 匹配的组件都不会被缓存。
   */
  exclude?: MatchPattern;
  /**
   * 最多可以缓存多少组件实例。
   */
  max?: number | string;
}

type MatchPattern = string | RegExp | (string | RegExp)[];
```

`include` 和 `exclude` 的值可以是：

- 以英文逗号分隔的组件名字符串
- 匹配组件名的正则表达式
- 字符串或正则的数组

可以使用 `max` 属性限制可以被缓存的最大组件数量，如果指定缓存的组件数大于 `max`，则会执行类似 LRU 的策略。

组件在 `<KeepAlive>` 中被切换时，`activated` 和 `deactivated` 钩子会代替 `mounted` 和 `unmounted`。

```vue
<script setup>
import { onActivated, onDeactivated } from "vue";

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
});

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
});
</script>
```

- `activated` 在组件挂载时也会触发，`deactivated` 在组件卸载时也会触发
- 不仅适用于根组件，也适用于所有后代组件
