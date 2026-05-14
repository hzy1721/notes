export default [
  {
    text: '语言',
    items: [
      { text: '模块系统', link: '/server/node/module-system' },
      { text: '文件系统', link: '/server/node/file-system' },
    ],
    collapsible: true,
    collapsed: false,
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
