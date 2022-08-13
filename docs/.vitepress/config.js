export default {
  base: "/",
  title: "Notes",
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: "https://github.com/hzy1721/notes" }],
    sidebar: [
      {
        text: "CSS",
        items: [
          { text: "优先级", link: "/css/priority" },
          { text: "水平/垂直居中", link: "/css/center" },
          { text: "BFC/IFC", link: "/css/bfc-ifc" },
          { text: "flex 布局", link: "/css/flex" },
          { text: "隐藏元素", link: "/css/hide" },
          { text: "calc()", link: "/css/calc" },
        ],
      },
      {
        text: "JavaScript",
        items: [
          { text: "let 和 const", link: "/javascript/let-const" },
          { text: "Object", link: "/javascript/object" },
          { text: "对象拷贝", link: "/javascript/copy" },
          { text: "构造函数", link: "/javascript/constructor" },
          { text: "原型", link: "/javascript/prototype" },
          { text: "闭包", link: "/javascript/closure" },
          { text: "this", link: "/javascript/this" },
          { text: "箭头函数", link: "/javascript/arrow" },
          { text: "Promise", link: "/javascript/promise" },
          { text: "防抖和节流", link: "/javascript/debounce-throttle" },
          { text: "ES6 新特性", link: "/javascript/es6" },
          { text: "WebSocket", link: "/javascript/websocket" },
        ],
      },
      {
        text: "浏览器",
        items: [
          { text: "事件循环", link: "/browser/event-loop" },
          { text: "跨域", link: "/browser/cross-origin" },
          { text: "输入 URL 后发生了什么", link: "/browser/after-input-url" },
          { text: "事件委托", link: "/browser/event-delegation" },
        ],
      },
      {
        text: "HTTP",
        items: [
          { text: "报文结构", link: "/http/message" },
          { text: "请求头", link: "/http/request-headers" },
          { text: "状态码", link: "/http/status-code" },
        ],
      },
      {
        text: "网络基础",
        items: [{ text: "TCP", link: "/network/tcp" }],
      },
      {
        text: "Vue",
        items: [
          { text: "生命周期", link: "/vue/lifecycle" },
          { text: "组件通信", link: "/vue/communication" },
          { text: "响应式系统", link: "/vue/reactive" },
        ],
      },
      {
        text: "Nest",
        items: [
          {
            text: "NestJS Fundamentals Course",
            link: "/nest/fundamentals-course",
          },
        ],
      },
    ],
  },
};
