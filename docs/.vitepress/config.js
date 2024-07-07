import mathjax3 from 'markdown-it-mathjax3';
import customElements from './customElements';

import feLangSidebar from './sidebar/fe/lang';
import feBrowserSidebar from './sidebar/fe/browser';
import feEngineerSidebar from './sidebar/fe/engineer';
import feReactSidebar from './sidebar/fe/react';
import feVueSidebar from './sidebar/fe/vue';
import feFieldSidebar from './sidebar/fe/field';
import feSecuritySidebar from './sidebar/fe/security';
import fePerfSidebar from './sidebar/fe/perf';
import feMobileSidebar from './sidebar/fe/mobile';
import fePcClientSidebar from './sidebar/fe/desktop';

import serverJavaSidebar from './sidebar/server/java';
import serverGoSidebar from './sidebar/server/go';
import serverNodeSidebar from './sidebar/server/node';
import serverStorageSidebar from './sidebar/server/storage';

import clientHarmonySidebar from './sidebar/client/harmony';
import clientAndroidSidebar from './sidebar/client/android';
import clientIosSidebar from './sidebar/client/ios';

import basicSidebar from './sidebar/basic';

import codeSidebar from './sidebar/code';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    nav: [
      {
        text: '前端',
        items: [
          { text: '语言', link: '/fe/lang/' },
          { text: '浏览器', link: '/fe/browser/' },
          { text: '工程化', link: '/fe/engineer/' },
          { text: 'React', link: '/fe/react/' },
          // { text: 'Vue', link: '/fe/vue/' },
          { text: '方向', link: '/fe/field/' },
          // { text: '安全', link: '/fe/security/' },
          // { text: '性能', link: '/fe/perf/' },
          // { text: '移动端', link: '/fe/mobile/' },
          { text: 'PC 客户端', link: '/fe/desktop/' },
        ],
      },
      // {
      //   text: '后端',
      //   items: [
      //     { text: 'Java', link: '/server/java/' },
      //     { text: 'Go', link: '/server/go/' },
      //     { text: 'Node', link: '/server/node/' },
      //     { text: '存储', link: '/server/storage/' },
      //   ],
      // },
      // {
      //   text: '客户端',
      //   items: [
      //     { text: '鸿蒙', link: '/client/harmony/' },
      //     { text: '安卓', link: '/client/android/' },
      //     { text: 'iOS', link: '/client/ios/' },
      //   ],
      // },
      { text: '基础', link: '/basic/' },
      { text: '算法', link: '/code/' },
    ],
    sidebar: {
      '/fe/lang/': feLangSidebar,
      '/fe/browser/': feBrowserSidebar,
      '/fe/engineer/': feEngineerSidebar,
      '/fe/react/': feReactSidebar,
      '/fe/vue/': feVueSidebar,
      '/fe/field/': feFieldSidebar,
      '/fe/security': feSecuritySidebar,
      '/fe/perf/': fePerfSidebar,
      '/fe/mobile/': feMobileSidebar,
      '/fe/desktop/': fePcClientSidebar,

      '/server/java/': serverJavaSidebar,
      '/server/go/': serverGoSidebar,
      '/server/node/': serverNodeSidebar,
      '/server/storage/': serverStorageSidebar,

      '/client/harmony/': clientHarmonySidebar,
      '/client/android/': clientAndroidSidebar,
      '/client/ios/': clientIosSidebar,

      '/basic/': basicSidebar,

      '/code/': codeSidebar,
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/hzy1721/notes' }],
  },
  lastUpdated: true,
  appearance: false,
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  vite: {
    assetsInclude: ['**/*.awebp'],
  },
};
