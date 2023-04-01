export default [
  {
    text: '安全',
    items: [
      { text: 'Web 安全', link: '/fe/optimization/security/web' },
      { text: '加密', link: '/fe/optimization/security/encryption' },
      { text: 'Session', link: '/fe/optimization/security/session' },
      { text: 'Token', link: '/fe/optimization/security/token' },
      { text: 'JWT', link: '/fe/optimization/security/jwt' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '系统设计',
    items: [
      {
        text: '图片加载优化',
        link: '/fe/optimization/design/image-loading',
      },
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
