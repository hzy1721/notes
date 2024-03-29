# 内置指令

## v-if 和 v-show

- v-if：切换会导致组件的销毁和重建，懒加载。
- v-show：始终渲染，切换 `display: none`。

频繁切换用 v-show 更好。

## v-for

### key

没有 `key` 的情况下，Vue 会尽可能复用 DOM 元素，然后执行 “就地更新”，在剩余元素的位置渲染新值。

如果数组变化频繁，最好给每个元素设置一个 ID，使用 `key` 属性标识，字符串或数字类型。

有了 `key`，Vue 就可以**最高效**地重新排列元素、新增/删除元素，避免不必要的操作。

在组件上设置 `key` 也可以用于强制重新创建组件，触发生命周期钩子，或者触发过渡效果。

## v-model

表单输入元素：绑定 `value` 属性和 `input` 事件。

- `<input>`
- `<select>`
- `<textarea>`

组件：绑定 `modelValue` 属性和 `update:modelValue` 事件。
