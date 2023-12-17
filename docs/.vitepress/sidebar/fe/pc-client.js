export default [
  {
    text: 'PWA',
    items: [
      { text: '概述', link: '/fe/pc-client/pwa/overview' },
      { text: '改造流程', link: '/fe/pc-client/pwa/how-to' },
      { text: 'manifest', link: '/fe/pc-client/pwa/manifest' },
      {
        text: '应用商店',
        link: '/fe/pc-client/pwa/app-store',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Electron',
    items: [
      { text: '概述', link: '/fe/pc-client/electron/intro' },
      { text: '进程模型', link: '/fe/pc-client/electron/process' },
      { text: 'IPC', link: '/fe/pc-client/electron/ipc' },
      { text: 'MessagePort', link: '/fe/pc-client/electron/message-port' },
      { text: '进程沙箱', link: '/fe/pc-client/electron/sandbox' },
      { text: '调试', link: '/fe/pc-client/electron/debug' },
      { text: '无障碍', link: '/fe/pc-client/electron/a11y' },
      { text: '安全', link: '/fe/pc-client/electron/security' },
      { text: '性能', link: '/fe/pc-client/electron/performance' },
      { text: '测试', link: '/fe/pc-client/electron/test' },
      { text: '发布', link: '/fe/pc-client/electron/publish' },
      { text: '更新', link: '/fe/pc-client/electron/update' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Electron Forge',
    items: [
      { text: '概述', link: '/fe/pc-client/electron/forge/intro' },
      { text: '打包-构建-发布', link: '/fe/pc-client/electron/forge/build' },
      { text: '签名', link: '/fe/pc-client/electron/forge/sign' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
