export default [
  {
    text: 'Vue',
    items: [
      { text: '生命周期', link: '/fe/vue-stack/vue/lifecycle' },
      { text: '内置指令', link: '/fe/vue-stack/vue/built-in-directives' },
      { text: 'Slot', link: '/fe/vue-stack/vue/slot' },
      { text: '依赖注入', link: '/fe/vue-stack/vue/dependency-injection' },
      { text: '组件通信', link: '/fe/vue-stack/vue/communication' },
      { text: '动态组件', link: '/fe/vue-stack/vue/dynamic-component' },
      { text: 'nextTick', link: '/fe/vue-stack/vue/nexttick' },
      { text: 'TS 支持', link: '/fe/vue-stack/vue/fe/vue-stack/ts' },
      { text: '编译过程', link: '/fe/vue-stack/vue/compile' },
      { text: '模板编译', link: '/fe/vue-stack/vue/template-compile' },
      { text: '渲染', link: '/fe/vue-stack/vue/render' },
      { text: '首屏渲染优化', link: '/fe/vue-stack/vue/first-paint' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Vue：响应式',
    items: [
      {
        text: 'Object.defineProperty',
        link: '/fe/vue-stack/vue/defineproperty',
      },
      { text: '内部方法', link: '/fe/vue-stack/vue/internal-methods' },
      { text: 'Proxy', link: '/fe/vue-stack/vue/proxy' },
      { text: 'Reflect', link: '/fe/vue-stack/vue/reflect' },
      {
        text: '注册副作用函数',
        link: '/fe/vue-stack/vue/register-effect',
      },
      { text: '响应式对象', link: '/fe/vue-stack/vue/reactive-object' },
      { text: '响应式数组', link: '/fe/vue-stack/vue/reactive-array' },
      {
        text: '响应式集合',
        link: '/fe/vue-stack/vue/reactive-collection',
      },
      {
        text: '响应式原始值',
        link: '/fe/vue-stack/vue/reactive-primitive',
      },
      { text: '计算属性实现', link: '/fe/vue-stack/vue/computed' },
      { text: 'watch 实现', link: '/fe/vue-stack/vue/watch' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Vue Router',
    items: [
      { text: '历史模式', link: '/fe/vue-stack/vue-router/history-mode' },
      {
        text: '实现原理',
        link: '/fe/vue-stack/vue-router/implementation',
      },
      {
        text: 'window.location',
        link: '/fe/vue-stack/vue-router/window-location',
      },
      {
        text: 'window.history',
        link: '/fe/vue-stack/vue-router/window-history',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Vite',
    items: [
      { text: '前端构建工具', link: '/fe/vue-stack/vite/build-tool' },
      { text: 'Vite 简介', link: '/fe/vue-stack/vite/intro' },
      { text: 'Vite 架构', link: '/fe/vue-stack/vite/arch' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
