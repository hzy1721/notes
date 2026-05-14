import mathjax3 from 'markdown-it-mathjax3';
import customElements from './customElements';

import feHtmlSidebar from './sidebar/fe/html';
import feCssSidebar from './sidebar/fe/css';
import feJsSidebar from './sidebar/fe/js';
import feTsSidebar from './sidebar/fe/ts';
import feBrowserSidebar from './sidebar/fe/browser';
import feEngineerSidebar from './sidebar/fe/engineer';
import feEngineerBasicsSidebar from './sidebar/fe/engineer-basics';
import feEngineerBundlerSidebar from './sidebar/fe/engineer-bundler';
import feReactSidebar from './sidebar/fe/react';
import feVueSidebar from './sidebar/fe/vue';
import feFieldSidebar from './sidebar/fe/field';
import feCanvasSidebar from './sidebar/fe/canvas';
import feRichTextSidebar from './sidebar/fe/rich-text';
import feSecuritySidebar from './sidebar/fe/security';
import fePerfSidebar from './sidebar/fe/perf';
import feMobileSidebar from './sidebar/fe/mobile';
import feElectronSidebar from './sidebar/fe/electron';
import feTauriSidebar from './sidebar/fe/tauri';
import feAiSidebar from './sidebar/fe/ai';

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
import clientCrossSidebar from './sidebar/client/cross';

import basicSidebar from './sidebar/basic';

import codeSidebar from './sidebar/code';

export default {
  base: '/',
  title: 'Notes',
  themeConfig: {
    nav: [
      {
        text: 'AI',
        items: [{ text: 'Agent', link: '/fe/ai/agent/' }],
      },
      {
        text: '前端',
        items: [
          {
            text: '基础',
            items: [
              { text: 'HTML', link: '/fe/lang/html/common-elements' },
              { text: 'CSS', link: '/fe/lang/css/selector/' },
              { text: 'JavaScript', link: '/fe/lang/js/data-type' },
              { text: 'TypeScript', link: '/fe/lang/ts/intro' },
              { text: '浏览器', link: '/fe/browser/' },
            ],
          },
          {
            text: '框架',
            items: [
              { text: 'React', link: '/fe/react/' },
            ],
          },
          {
            text: '工程化',
            items: [
              { text: '基础', link: '/fe/engineer/basics/' },
              { text: '打包', link: '/fe/engineer/bundler/' },
            ],
          },
          // { text: 'Vue', link: '/fe/vue/' },
          {
            text: '方向',
            items: [
              { text: 'Canvas', link: '/fe/field/canvas/html-canvas' },
              { text: '富文本', link: '/fe/field/rich-text/prose-mirror' },
            ],
          },
          // { text: '安全', link: '/fe/security/' },
          // { text: '性能', link: '/fe/perf/' },
          // { text: '移动端', link: '/fe/mobile/' },
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
      {
        text: '底层',
        items: [{ text: 'Rust', link: '/client/cross/rust' }],
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
      '/fe/lang/html/': feHtmlSidebar,
      '/fe/lang/css/': feCssSidebar,
      '/fe/lang/js/': feJsSidebar,
      '/fe/lang/ts/': feTsSidebar,
      '/fe/lang/regexp/': feJsSidebar,
      '/fe/lang/': feHtmlSidebar,
      '/fe/browser/': feBrowserSidebar,
      '/fe/engineer/basics/': feEngineerBasicsSidebar,
      '/fe/engineer/bundler/': feEngineerBundlerSidebar,
      '/fe/engineer/': feEngineerSidebar,
      '/fe/react/': feReactSidebar,
      '/fe/vue/': feVueSidebar,
      '/fe/field/canvas/': feCanvasSidebar,
      '/fe/field/rich-text/': feRichTextSidebar,
      '/fe/field/': feFieldSidebar,
      '/fe/security': feSecuritySidebar,
      '/fe/perf/': fePerfSidebar,
      '/fe/mobile/': feMobileSidebar,
      '/fe/desktop/electron/': feElectronSidebar,
      '/fe/desktop/tauri/': feTauriSidebar,
      '/fe/desktop/': feElectronSidebar,
      '/fe/ai/': feAiSidebar,

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
      '/client/cross/': clientCrossSidebar,

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
