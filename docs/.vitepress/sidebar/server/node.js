export default [
  {
    text: 'Node.js',
    items: [
      { text: '模块系统', link: '/server/node/module-system' },
      { text: '文件系统', link: '/server/node/file-system' },
    ],
    collapsible: true,
    collapsed: false,
  },
  {
    text: 'Nest',
    items: [
      { text: '概述', link: '/server/node/nest/' },
      { text: 'controller', link: '/server/node/nest/controller' },
      { text: 'provider/service', link: '/server/node/nest/provider' },
      { text: 'module', link: '/server/node/nest/module' },
      { text: 'entity', link: '/server/node/nest/entity' },
      { text: 'TypeORM', link: '/server/node/nest/typeorm' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'ORM',
    items: [{ text: 'TypeORM', link: '/server/node/orm/typeorm' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '存储',
    items: [{ text: 'mysql2', link: '/server/node/storage/mysql2' }],
    collapsible: true,
    collapsed: true,
  },
];
