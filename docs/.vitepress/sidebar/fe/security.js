export default [
  {
    text: '攻击手段',
    items: [
      { text: 'XSS', link: '/fe/security/attack/xss' },
      { text: 'CSRF', link: '/fe/security/attack/csrf' },
      { text: 'SSRF', link: '/fe/security/attack/ssrf' },
      { text: 'DoS', link: '/fe/security/attack/dos' },
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
