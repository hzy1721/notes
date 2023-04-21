export default [
  {
    text: 'React',
    items: [
      { text: '生命周期', link: '/fe/framework/react/lifecycle' },
      { text: 'hooks', link: '/fe/framework/react/hooks' },
      { text: 'context', link: '/fe/framework/react/context' },
      { text: '缓存', link: '/fe/framework/react/cache' },
      { text: 'ref', link: '/fe/framework/react/ref' },
      {
        text: 'useLayoutEffect',
        link: '/fe/framework/react/use-layout-effect',
      },
      { text: 'lazy', link: '/fe/framework/react/lazy' },
      { text: 'Suspense', link: '/fe/framework/react/suspense' },
      { text: '减少渲染次数', link: '/fe/framework/react/reduce-render' },
      { text: 'React/Vue 对比', link: '/fe/framework/react/react-vs-vue' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'React - 原理',
    items: [
      {
        text: 'build your own react',
        link: '/fe/framework/react/build-your-own-react',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'webpack',
    items: [
      { text: 'entry', link: '/fe/framework/webpack/entry' },
      { text: 'output', link: '/fe/framework/webpack/output' },
      { text: 'module', link: '/fe/framework/webpack/module' },
      { text: 'resolve', link: '/fe/framework/webpack/resolve' },
      { text: 'optimization', link: '/fe/framework/webpack/optimization' },
      { text: 'plugins', link: '/fe/framework/webpack/plugins' },
      { text: 'package.json', link: '/fe/framework/webpack/package-json' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '工具函数',
    items: [
      { text: 'clone/cloneDeep', link: '/fe/framework/util/clone' },
      { text: 'once', link: '/fe/framework/util/once' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Koa',
    items: [],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '其他',
    items: [
      { text: '组件封装注意事项', link: '/fe/framework/misc/component' },
      { text: '上线流程', link: '/fe/framework/misc/deploy' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Rspack',
    items: [],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Vue',
    items: [
      { text: '生命周期', link: '/fe/framework/vue/lifecycle' },
      { text: '内置指令', link: '/fe/framework/vue/built-in-directives' },
      { text: 'Slot', link: '/fe/framework/vue/slot' },
      { text: '依赖注入', link: '/fe/framework/vue/dependency-injection' },
      { text: '组件通信', link: '/fe/framework/vue/communication' },
      { text: '动态组件', link: '/fe/framework/vue/dynamic-component' },
      { text: 'nextTick', link: '/fe/framework/vue/nexttick' },
      { text: 'TS 支持', link: '/fe/framework/vue/fe/framework/ts' },
      { text: '编译过程', link: '/fe/framework/vue/compile' },
      { text: '模板编译', link: '/fe/framework/vue/template-compile' },
      { text: '渲染', link: '/fe/framework/vue/render' },
      { text: '首屏渲染优化', link: '/fe/framework/vue/first-paint' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Vue - 响应式',
    items: [
      {
        text: 'Object.defineProperty',
        link: '/fe/framework/vue/defineproperty',
      },
      { text: '内部方法', link: '/fe/framework/vue/internal-methods' },
      { text: 'Proxy', link: '/fe/framework/vue/proxy' },
      { text: 'Reflect', link: '/fe/framework/vue/reflect' },
      {
        text: '注册副作用函数',
        link: '/fe/framework/vue/register-effect',
      },
      { text: '响应式对象', link: '/fe/framework/vue/reactive-object' },
      { text: '响应式数组', link: '/fe/framework/vue/reactive-array' },
      {
        text: '响应式集合',
        link: '/fe/framework/vue/reactive-collection',
      },
      {
        text: '响应式原始值',
        link: '/fe/framework/vue/reactive-primitive',
      },
      { text: '计算属性实现', link: '/fe/framework/vue/computed' },
      { text: 'watch 实现', link: '/fe/framework/vue/watch' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Vite',
    items: [
      { text: '前端构建工具', link: '/fe/framework/vite/build-tool' },
      { text: 'Vite 简介', link: '/fe/framework/vite/intro' },
      { text: 'Vite 架构', link: '/fe/framework/vite/arch' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Vue Router',
    items: [
      { text: '历史模式', link: '/fe/framework/vue-router/history-mode' },
      {
        text: '实现原理',
        link: '/fe/framework/vue-router/implementation',
      },
      {
        text: 'window.location',
        link: '/fe/framework/vue-router/window-location',
      },
      {
        text: 'window.history',
        link: '/fe/framework/vue-router/window-history',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
];
