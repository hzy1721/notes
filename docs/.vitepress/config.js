import codeSidebar from './sidebar/code';
import feSidebar from './sidebar/fe';
import basicSidebar from './sidebar/basic';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '算法', link: '/code/' },
      { text: '前端', link: '/fe/' },
      { text: '基础', link: '/basic/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzy1721/notes' },
    ],
    sidebar: {
      '/code/': codeSidebar,
      '/fe': feSidebar,
      '/basic/': basicSidebar,
    },
  },
};
