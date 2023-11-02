export default [
  {
    text: '调试',
    items: [
      {
        text: 'Chrome DevTools',
        link: '/fe/optimization/debug/chrome-devtools',
      },
      {
        text: 'Performance',
        link: '/fe/optimization/debug/devtools/performance',
      },
      {
        text: 'VSCode',
        link: '/fe/optimization/debug/vscode',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '首屏优化',
    items: [
      {
        text: '图片格式',
        link: '/fe/optimization/first-screen/image-format',
      },
      {
        text: '图片压缩',
        link: '/fe/optimization/first-screen/image-compression',
      },
      {
        text: 'Tree Shaking',
        link: '/fe/optimization/first-screen/tree-shaking',
      },
      {
        text: '代码压缩',
        link: '/fe/optimization/first-screen/code-compression',
      },
      {
        text: '图片加载',
        link: '/fe/optimization/first-screen/image-loading',
      },
      {
        text: '数据加载',
        link: '/fe/optimization/first-screen/data-loading',
      },
      {
        text: '代码加载',
        link: '/fe/optimization/first-screen/code-loading',
      },
      {
        text: '骨架屏',
        link: '/fe/optimization/first-screen/skeleton',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '性能问题',
    items: [
      { text: '内存泄漏', link: '/fe/optimization/issue/memory-leak' },
      {
        text: '回流与重绘',
        link: '/fe/optimization/issue/reflow-repaint',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '前端监控',
    items: [
      { text: '性能指标', link: '/fe/optimization/monitor/web-vitals' },
    ],
    collapsible: true,
    collapsed: true,
  },
  // {
  //   text: '系统设计',
  //   items: [
  //     { text: '前端性能优化', link: '/fe/optimization/design/perf' },
  //     { text: 'CDN', link: '/fe/optimization/design/cdn' },
  //     {
  //       text: 'IaaS/PaaS/SaaS',
  //       link: '/fe/optimization/design/iaas-paas-saas',
  //     },
  //     { text: 'RBAC', link: '/fe/optimization/design/rbac' },
  //     { text: '高并发', link: '/fe/optimization/design/high-concurrency' },
  //   ],
  //   collapsible: true,
  //   collapsed: true,
  // },
];
