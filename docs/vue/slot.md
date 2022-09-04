# Slot

让子组件接收父组件传入的模板片段。

- FancyButton.vue

```html
<button class="fancy-btn">
  <slot>
    <!-- 默认内容 -->
    Fancy Button
  </slot>
</button>
```

- 父组件

```html
<FancyButton> Click me! </FancyButton>
```

- 渲染结果

```html
<button class="fancy-btn">Click me!</button>
```

## 命名插槽

- BaseLayout.vue

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

- 父组件

```html
<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>
  <!-- 隐式的默认插槽 -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

- 渲染结果

```html
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

插槽名可以是变量。

```html
<template v-slot:[dynamicSlotName]> ... </template>
<!-- 缩写为 -->
<template #[dynamicSlotName]> ... </template>
```

## 作用域插槽

有时插槽想同时使用父组件和子组件的数据，子组件可以在 `<slot>` 上设置属性来向父组件的插槽传递数据。

- MyComponent.vue

```html
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

- 父组件

```html
<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
<!-- 使用解构 -->
<MyComponent v-slot="{ text, count }">
  {{ text }} {{ count }}
</MyComponent>
```

命名插槽的用法类似。

```html
<!-- MyComponent.vue -->
<slot name="header" message="hello"></slot>
<!-- 父组件 -->
<MyComponent>
  <template #header="headerProps"> {{ headerProps }} </template>
  <template #default="defaultProps"> {{ defaultProps }} </template>
  <template #footer="footerProps"> {{ footerProps }} </template>
</MyComponent>
```

### 高级列表组件

子组件 `<FancyList>` 封装了以下功能：

- 通过接口请求数据
- 渲染列表
- 分页
- 无限滚动

但是每个组件项由 `<FancyList>` 的父组件提供，通过作用域插槽传递组件项数据，由父组件决定组件项的样式。

- FancyList.vue

```html
<ul>
  <li v-for="item in items">
    <slot name="item" v-bind="item"></slot>
  </li>
</ul>
```

- 父组件

```html
<FancyList :api-url="url" :per-page="10">
  <template #item="{ body, username, likes }">
    <div class="item">
      <p>{{ body }}</p>
      <p>by {{ username }} | {{ likes }} likes</p>
    </div>
  </template>
</FancyList>
```

### 无状态组件

只包括逻辑而不渲染内容，视图全部通过插槽由父组件提供，使用作用域插槽向父组件传递数据。

```html
<MouseTracker v-slot="{ x, y }">
  Mouse is at: {{ x }}, {{ y }}
</MouseTracker>
```
