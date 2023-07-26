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
import feInterviewSidebar from './sidebar/fe/interview';
import feMobileSidebar from './sidebar/fe/mobile';
import basicSidebar from './sidebar/basic';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    nav: [
      { text: '算法', link: '/code/' },
      {
        text: '前端应用',
        items: [
          { text: 'React 基础', link: '/fe/react-stack/' },
          { text: 'React 框架', link: '/fe/library/' },
          { text: '微前端', link: '/fe/mfe/' },
          { text: '移动端', link: '/fe/mobile/' },
          { text: '服务端', link: '/fe/server/' },
        ],
      },
      {
        text: '前端优化',
        items: [
          { text: '安全', link: '/fe/security/' },
          { text: '优化', link: '/fe/optimization/' },
        ],
      },
      {
        text: '前端基础',
        items: [
          { text: '语言', link: '/fe/basic/' },
          { text: 'V8', link: '/fe/v8/' },
          { text: '浏览器', link: '/fe/browser/' },
          { text: 'Node', link: '/fe/node/' },
          { text: '面试', link: '/fe/interview/' },
        ],
      },
      { text: '计算机基础', link: '/basic/' },
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
      '/fe/interview/': feInterviewSidebar,
      '/fe/mobile/': feMobileSidebar,
      '/basic/': basicSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzy1721/notes' },
    ],
  },
  lastUpdated: true,
  appearance: false,
};
