export default [
  {
    text: '浏览器',
    items: [
      {
        text: '输入 URL',
        link: '/fe/browser/after-input-url',
      },
      { text: '事件循环', link: '/fe/browser/event-loop' },
      { text: '回流和重绘', link: '/fe/browser/reflow-repaint' },
      {
        text: '不同标签页通信',
        link: '/fe/browser/tab-communication',
      },
      { text: 'Web Worker', link: '/fe/browser/web-worker' },
      { text: 'Service Worker', link: '/fe/browser/service-worker' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'DOM',
    items: [
      { text: 'Node', link: '/fe/browser/dom/node' },
      { text: '查询元素', link: '/fe/browser/dom/query-element' },
      { text: '元素大小', link: '/fe/browser/dom/elem-size' },
      { text: '元素坐标', link: '/fe/browser/dom/coordinates' },
      {
        text: '窗口和文档大小',
        link: '/fe/browser/dom/window-size',
      },
      {
        text: 'HTMLImageElement',
        link: '/fe/browser/dom/html-image-element',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '事件',
    items: [
      { text: '事件', link: '/fe/browser/event' },
      { text: '事件委托', link: '/fe/browser/event-delegation' },
      { text: '拖拽事件', link: '/fe/browser/drag' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '网络',
    items: [
      { text: 'AJAX', link: '/fe/browser/network/ajax' },
      { text: 'XMLHttpRequest', link: '/fe/browser/network/xhr' },
      { text: 'Fetch API', link: '/fe/browser/network/fetch' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '存储',
    items: [
      { text: 'cookie', link: '/fe/browser/cookie' },
      { text: 'localStorage', link: '/fe/browser/localstorage' },
      { text: 'sessionStorage', link: '/fe/browser/sessionstorage' },
      { text: 'IndexedDB', link: '/fe/browser/indexeddb' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Web Worker',
    items: [
      { text: '概述', link: '/fe/browser/worker/intro' },
      {
        text: 'Channel Messaging',
        link: '/fe/browser/worker/channel-messaging',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'WASM',
    items: [],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'Chromium',
    items: [],
    collapsible: true,
    collapsed: true,
  },
];
