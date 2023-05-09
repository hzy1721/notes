import codeSidebar from './sidebar/code';
import feReactSidebar from './sidebar/fe-react';
import feFrameworkSidebar from './sidebar/fe-framework';
import feOptimizationSidebar from './sidebar/fe-optimization';
import feBasicSidebar from './sidebar/fe-basic';
import basicSidebar from './sidebar/basic';
import feFieldSidebar from './sidebar/fe-field';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    nav: [
      { text: '算法', link: '/code/' },
      {
        text: '前端',
        items: [
          { text: 'React', link: '/fe/react/' },
          { text: '框架', link: '/fe/framework/' },
          { text: '优化', link: '/fe/optimization/' },
          { text: '基础', link: '/fe/basic/' },
          { text: '领域', link: '/fe/field/' },
        ],
      },
      { text: '基础', link: '/basic/' },
    ],
    sidebar: {
      '/code/': codeSidebar,
      '/fe/react': feReactSidebar,
      '/fe/framework/': feFrameworkSidebar,
      '/fe/optimization/': feOptimizationSidebar,
      '/fe/basic/': feBasicSidebar,
      '/fe/field': feFieldSidebar,
      '/basic/': basicSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzy1721/notes' },
    ],
  },
  lastUpdated: true,
};
