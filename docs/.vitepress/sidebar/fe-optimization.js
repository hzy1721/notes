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
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '鉴权',
    items: [
      { text: 'session', link: '/fe/optimization/auth/session' },
      { text: 'token', link: '/fe/optimization/auth/token' },
      { text: 'JWT', link: '/fe/optimization/auth/jwt' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '首屏：体积优化',
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
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '首屏：加载优化',
    items: [
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
