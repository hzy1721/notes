import codeSidebar from './sidebar/code';
import feReactSidebar from './sidebar/fe/react-stack';
import feLibrarySidebar from './sidebar/fe/library';
import feSecuritySidebar from './sidebar/fe/security';
import feOptimizationSidebar from './sidebar/fe/optimization';
import feServerSidebar from './sidebar/fe/server';
import feBasicSidebar from './sidebar/fe/basic';
import feV8Sidebar from './sidebar/fe/v8';
import feBrowserSidebar from './sidebar/fe/browser';
import feNodeSidebar from './sidebar/fe/node';
import basicSidebar from './sidebar/basic';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    nav: [
      { text: '算法', link: '/code/' },
      {
        text: '前端',
        items: [
          { text: 'React', link: '/fe/react-stack/' },
          { text: '各种库', link: '/fe/library/' },
          { text: '安全', link: '/fe/security/' },
          { text: '优化', link: '/fe/optimization/' },
          { text: '服务端', link: '/fe/server/' },
          { text: '基础', link: '/fe/basic/' },
          { text: 'V8', link: '/fe/v8/' },
          { text: '浏览器', link: '/fe/browser/' },
          { text: 'Node', link: '/fe/node/' },
        ],
      },
      { text: '基础', link: '/basic/' },
    ],
    sidebar: {
      '/code/': codeSidebar,
      '/fe/react-stack/': feReactSidebar,
      '/fe/library/': feLibrarySidebar,
      '/fe/security': feSecuritySidebar,
      '/fe/optimization/': feOptimizationSidebar,
      '/fe/server/': feServerSidebar,
      '/fe/basic/': feBasicSidebar,
      '/fe/v8/': feV8Sidebar,
      '/fe/browser/': feBrowserSidebar,
      '/fe/node/': feNodeSidebar,
      '/basic/': basicSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzy1721/notes' },
    ],
  },
  lastUpdated: true,
  appearance: false,
};
