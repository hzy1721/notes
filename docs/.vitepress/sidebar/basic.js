export default [
  {
    text: '网络',
    items: [
      { text: '协议栈', link: '/basic/network/stack' },
      { text: 'TCP', link: '/basic/network/tcp' },
      { text: 'UDP', link: '/basic/network/udp' },
      { text: 'TCP 和 UDP 的区别', link: '/basic/network/tcp-udp-diff' },
      { text: 'DNS', link: '/basic/network/dns' },
      { text: '常用命令', link: '/basic/network/commands' },
      { text: 'WebSocket', link: '/fe/basic/js/websocket' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'HTTP',
    items: [
      { text: '报文结构', link: '/basic/http/message' },
      { text: '方法', link: '/basic/http/method' },
      { text: '版本', link: '/basic/http/http-version' },
      { text: 'header', link: '/basic/http/headers' },
      { text: '状态码', link: '/basic/http/status-code' },
      { text: '缓存', link: '/basic/http/cache' },
      { text: 'HTTPS', link: '/basic/http/https' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '操作系统',
    items: [
      { text: '进程和线程', link: '/basic/os/process-thread' },
      { text: '进程调度', link: '/basic/os/process-scheduling' },
      { text: '进程通信', link: '/basic/os/ipc' },
      { text: '线程通信', link: '/basic/os/thread-communication' },
      { text: '内存管理', link: '/basic/os/memory-management' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '数据库',
    items: [{ text: 'SQL 与 NoSQL', link: '/basic/db/sql-nosql' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'CSAPP',
    items: [{ text: '浮点数标准', link: '/basic/csapp/floating-point' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '设计模式',
    items: [{ text: '设计模式', link: '/basic/design-pattern/overview' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '测试',
    items: [{ text: '测试方法', link: '/basic/test/test-method' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '安全',
    items: [{ text: '加密', link: '/basic/security/encryption' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '杂项',
    items: [
      {
        text: '动态/静态/弱/强类型',
        link: '/basic/misc/type-category',
      },
      { text: 'UTF-8', link: '/basic/misc/utf-8' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '智力题',
    items: [
      { text: '智力题 (1)', link: '/basic/iq/1' },
      { text: '智力题 (2)', link: '/basic/iq/2' },
      { text: '智力题 (3)', link: '/basic/iq/3' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
