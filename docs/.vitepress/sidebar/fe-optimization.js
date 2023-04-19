export default [
  {
    text: '安全',
    items: [
      { text: 'XSS', link: '/fe/optimization/security/xss' },
      { text: 'CSRF', link: '/fe/optimization/security/csrf' },
      { text: 'SSRF', link: '/fe/optimization/security/ssrf' },
      { text: 'DoS', link: '/fe/optimization/security/dos' },
      { text: '注入', link: '/fe/optimization/security/injection' },
      {
        text: '中间人',
        link: '/fe/optimization/security/man-in-the-middle',
      },
      { text: '加密', link: '/fe/optimization/security/encryption' },
      { text: 'Session', link: '/fe/optimization/security/session' },
      { text: 'Token', link: '/fe/optimization/security/token' },
      { text: 'JWT', link: '/fe/optimization/security/jwt' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '首屏 - 体积优化',
    items: [
      {
        text: 'Tree Shaking',
        link: '/fe/optimization/first-screen/tree-shaking',
      },
      {
        text: '图片格式',
        link: '/fe/optimization/first-screen/image-format',
      },
      {
        text: '图片压缩',
        link: '/fe/optimization/first-screen/image-compression',
      },
      {
        text: 'CSS 压缩',
        link: '/fe/optimization/first-screen/css-compression',
      },
      {
        text: 'JS 压缩',
        link: '/fe/optimization/first-screen/js-compression',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '首屏 - 加载优化',
    items: [
      {
        text: '路由懒加载',
        link: '/fe/optimization/first-screen/page-lazy-loading',
      },
      {
        text: '预加载',
        link: '/fe/optimization/first-screen/preload-prefetch',
      },
      {
        text: 'OSS',
        link: '/fe/optimization/first-screen/oss',
      },
      {
        text: 'CDN',
        link: '/fe/optimization/first-screen/cdn',
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
    text: '交互',
    items: [
      {
        text: '高频事件',
        link: '/fe/optimization/interaction/frequent-event',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '系统设计',
    items: [
      { text: 'Web 性能指标', link: '/fe/optimization/design/web-vitals' },
      { text: '前端性能优化', link: '/fe/optimization/design/perf' },
      { text: 'CDN', link: '/fe/optimization/design/cdn' },
      {
        text: 'IaaS/PaaS/SaaS',
        link: '/fe/optimization/design/iaas-paas-saas',
      },
      { text: 'RBAC', link: '/fe/optimization/design/rbac' },
      { text: '高并发', link: '/fe/optimization/design/high-concurrency' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
