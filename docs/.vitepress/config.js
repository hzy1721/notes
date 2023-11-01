import mathjax3 from 'markdown-it-mathjax3';

import codeSidebar from './sidebar/code';
import feReactSidebar from './sidebar/fe/react-stack';
import feVueSidebar from './sidebar/fe/vue-stack';
import feFieldSidebar from './sidebar/fe/field';
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
// import dlSidebar from './sidebar/ai/dl';
// import tpSidebar from './sidebar/ai/tp';

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    nav: [
      { text: '算法', link: '/code/' },
      {
        text: '前端',
        items: [
          { text: '研发链路', link: '/fe/library/' },
          { text: '安全', link: '/fe/security/' },
          { text: '优化', link: '/fe/optimization/' },
          { text: 'React', link: '/fe/react-stack/' },
          { text: 'Vue', link: '/fe/vue-stack/' },
          { text: '方向', link: '/fe/field/' },
          { text: '语言', link: '/fe/basic/' },
          // { text: 'V8', link: '/fe/v8/' },
          { text: '浏览器', link: '/fe/browser/' },
          { text: 'Node', link: '/fe/node/' },
          { text: '面试', link: '/fe/interview/' },
        ],
      },
      {
        text: '后端',
        items: [{ text: '服务端', link: '/fe/server/' }],
      },
      { text: '基础', link: '/basic/' },
      // {
      //   text: 'AI',
      //   items: [
      //     { text: '深度学习', link: '/ai/dl/' },
      //     { text: '交通预测', link: '/ai/tp/' },
      //   ],
      // },
    ],
    sidebar: {
      '/code/': codeSidebar,
      '/fe/react-stack/': feReactSidebar,
      '/fe/vue-stack/': feVueSidebar,
      '/fe/field/': feFieldSidebar,
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
      // '/ai/dl/': dlSidebar,
      // '/ai/tp/': tpSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzy1721/notes' },
    ],
  },
  lastUpdated: true,
  appearance: false,
  markdown: {
    config: md => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => customElements.includes(tag),
      },
    },
  },
};
