export default [
  {
    text: '攻击手段',
    items: [
      { text: '跨站脚本', link: '/fe/security/attack/xss' },
      { text: '跨站请求伪造', link: '/fe/security/attack/csrf' },
      { text: '服务端请求伪造', link: '/fe/security/attack/ssrf' },
      { text: '拒绝服务', link: '/fe/security/attack/dos' },
      { text: '注入', link: '/fe/security/attack/injection' },
      {
        text: '中间人',
        link: '/fe/security/attack/man-in-the-middle',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '鉴权',
    items: [
      { text: 'session', link: '/fe/security/auth/session' },
      { text: 'token', link: '/fe/security/auth/token' },
      { text: 'JWT', link: '/fe/security/auth/jwt' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
