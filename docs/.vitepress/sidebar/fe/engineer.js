export default [
  {
    text: 'Node',
    items: [
      { text: 'nvm', link: '/fe/engineer/node/nvm' },
      { text: '进程', link: '/fe/engineer/node/process' },
      { text: 'npm', link: '/fe/engineer/node/npm' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '打包',
    items: [
      { text: 'webpack', link: '/fe/engineer/bundler/webpack/' },
      { text: 'vite', link: '/fe/engineer/bundler/vite/' },
      { text: 'tsup', link: '/fe/engineer/bundler/tsup/' },
      // { text: 'esbuild', link: '/fe/engineer/bundler/esbuild/' },
      // { text: 'rollup', link: '/fe/engineer/bundler/rollup/' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '语法检查',
    items: [
      { text: 'ESLint', link: '/fe/engineer/lint/eslint' },
      { text: 'Prettier', link: '/fe/engineer/lint/prettier' },
      { text: 'tsc', link: '/fe/engineer/lint/tsc' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'SWC',
    items: [],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'CSS 方案',
    items: [
      { text: '预处理器', link: '/fe/engineer/css-solution/preprocessor' },
      { text: 'Tailwind', link: '/fe/engineer/css-solution/tailwind' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Git',
    items: [{ text: 'husky', link: '/fe/engineer/git/husky' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'monorepo',
    items: [
      { text: 'pnpm workspace', link: '/fe/engineer/monorepo/pnpm-workspace' },
      { text: 'turborepo', link: '/fe/engineer/monorepo/turborepo' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
