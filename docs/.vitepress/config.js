import codeSidebar from './sidebar/code';
import feFrameworkSidebar from './sidebar/fe-framework';
import feOptimizationSidebar from './sidebar/fe-optimization';
import feBasicSidebar from './sidebar/fe-basic';
import basicSidebar from './sidebar/basic';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '算法', link: '/code/' },
      {
        text: '前端',
        items: [
          { text: '框架', link: '/fe/framework/' },
          { text: '优化', link: '/fe/optimization/' },
          { text: '基础', link: '/fe/basic/' },
        ],
      },
      { text: '基础', link: '/basic/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzy1721/notes' },
    ],
    sidebar: {
      '/code/': codeSidebar,
      '/fe/framework/': feFrameworkSidebar,
      '/fe/optimization/': feOptimizationSidebar,
      '/fe/basic/': feBasicSidebar,
      '/basic/': basicSidebar,
    },
  },
  lastUpdated: true,
};
