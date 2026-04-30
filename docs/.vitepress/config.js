import mathjax3 from 'markdown-it-mathjax3';
import customElements from './customElements';

import feHtmlcssSidebar from './sidebar/fe/htmlcss';
import feJstsSidebar from './sidebar/fe/jsts';
import feBrowserSidebar from './sidebar/fe/browser';
import feEngineerSidebar from './sidebar/fe/engineer';
import feReactSidebar from './sidebar/fe/react';
import feVueSidebar from './sidebar/fe/vue';
import feFieldSidebar from './sidebar/fe/field';
import feSecuritySidebar from './sidebar/fe/security';
import fePerfSidebar from './sidebar/fe/perf';
import feMobileSidebar from './sidebar/fe/mobile';
import feElectronSidebar from './sidebar/fe/electron';
import feTauriSidebar from './sidebar/fe/tauri';
import feAiSidebar from './sidebar/fe/ai';
import feTestSidebar from './sidebar/fe/test';

import serverJavaSidebar from './sidebar/server/java';
import serverGoSidebar from './sidebar/server/go';
import serverPythonSidebar from './sidebar/server/python';
import serverNodeSidebar from './sidebar/server/node';
import serverStorageSidebar from './sidebar/server/storage';

import clientHarmonySidebar from './sidebar/client/harmony';
import clientAndroidSidebar from './sidebar/client/android';
import clientIosSidebar from './sidebar/client/ios';
import clientH5Sidebar from './sidebar/client/h5';
import clientMiniappSidebar from './sidebar/client/miniapp';
import clientRnSidebar from './sidebar/client/rn';
import clientFlutterSidebar from './sidebar/client/flutter';

import basicSidebar from './sidebar/basic';

import codeSidebar from './sidebar/code';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    nav: [
      {
        text: 'AI',
        items: [
          { text: 'Agent', link: '/fe/ai/agent/' },
        ],
      },
      {
        text: '前端',
        items: [
          { text: 'HTML / CSS', link: '/fe/lang/html/common-elements' },
          { text: 'JS / TS', link: '/fe/lang/js/data-type' },
          { text: '浏览器', link: '/fe/browser/' },
          { text: '工程化', link: '/fe/engineer/' },
          { text: 'React', link: '/fe/react/' },
          // { text: 'Vue', link: '/fe/vue/' },
          { text: '方向', link: '/fe/field/' },
          // { text: '安全', link: '/fe/security/' },
          // { text: '性能', link: '/fe/perf/' },
          // { text: '移动端', link: '/fe/mobile/' },
          { text: '测试', link: '/fe/test/' },
        ],
      },
      {
        text: '桌面端',
        items: [
          { text: 'Electron', link: '/fe/desktop/electron/' },
          { text: 'Tauri', link: '/fe/desktop/tauri/' },
        ],
      },
      {
        text: '移动端',
        items: [
          { text: 'H5', link: '/client/h5/' },
          { text: '小程序', link: '/client/miniapp/' },
          { text: 'RN', link: '/client/rn/' },
          { text: 'Flutter', link: '/client/flutter/' },
          { text: 'iOS', link: '/client/ios/' },
          { text: 'Android', link: '/client/android/' },
        ],
      },
      {
        text: '后端',
        items: [
          { text: 'Node.js', link: '/server/node/' },
          { text: 'Python', link: '/server/python/' },
          { text: 'Go', link: '/server/go/' },
          { text: 'Java', link: '/server/java/' },
          { text: '存储', link: '/server/storage/' },
        ],
      },
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
      '/fe/lang/html/': feHtmlcssSidebar,
      '/fe/lang/css/': feHtmlcssSidebar,
      '/fe/lang/js/': feJstsSidebar,
      '/fe/lang/ts/': feJstsSidebar,
      '/fe/lang/regexp/': feJstsSidebar,
      '/fe/lang/': feHtmlcssSidebar,
      '/fe/browser/': feBrowserSidebar,
      '/fe/engineer/': feEngineerSidebar,
      '/fe/react/': feReactSidebar,
      '/fe/vue/': feVueSidebar,
      '/fe/field/': feFieldSidebar,
      '/fe/security': feSecuritySidebar,
      '/fe/perf/': fePerfSidebar,
      '/fe/mobile/': feMobileSidebar,
      '/fe/desktop/electron/': feElectronSidebar,
      '/fe/desktop/tauri/': feTauriSidebar,
      '/fe/desktop/': feElectronSidebar,
      '/fe/ai/': feAiSidebar,
      '/fe/test/': feTestSidebar,

      '/server/java/': serverJavaSidebar,
      '/server/go/': serverGoSidebar,
      '/server/python/': serverPythonSidebar,
      '/server/node/': serverNodeSidebar,
      '/server/storage/': serverStorageSidebar,

      '/client/harmony/': clientHarmonySidebar,
      '/client/android/': clientAndroidSidebar,
      '/client/ios/': clientIosSidebar,
      '/client/h5/': clientH5Sidebar,
      '/client/miniapp/': clientMiniappSidebar,
      '/client/rn/': clientRnSidebar,
      '/client/flutter/': clientFlutterSidebar,

      '/basic/': basicSidebar,

      '/code/': codeSidebar,
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/hzy1721/notes' }],
  },
  lastUpdated: true,
  appearance: true,
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
