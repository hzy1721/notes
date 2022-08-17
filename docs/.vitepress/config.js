export default {
  base: "/",
  title: "Notes",
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: "https://github.com/hzy1721/notes" }],
    sidebar: [
      {
        text: "HTML",
        items: [{ text: "SVG", link: "/html/svg" }],
      },
      {
        text: "CSS",
        items: [
          { text: "选择器", link: "/css/selector" },
          { text: "优先级", link: "/css/priority" },
          { text: "定位", link: "/css/position" },
          { text: "BFC/IFC", link: "/css/bfc-ifc" },
          { text: "flex 布局", link: "/css/flex" },
          { text: "隐藏元素", link: "/css/hide" },
          { text: "calc()", link: "/css/calc" },
          { text: "水平/垂直居中", link: "/css/center" },
          { text: "几何图形", link: "/css/shape" },
          { text: "文本溢出省略", link: "/css/text-overflow" },
          { text: "三栏布局", link: "/css/three-column" },
          { text: "transform", link: "/css/transform" },
          { text: "单位", link: "/css/unit" },
          { text: "自适应", link: "/css/responsive" },
        ],
      },
      {
        text: "JavaScript",
        items: [
          { text: "let 和 const", link: "/javascript/let-const" },
          { text: "数据类型", link: "/javascript/data-type" },
          { text: "Object", link: "/javascript/object" },
          { text: "可迭代对象", link: "/javascript/iterable" },
          { text: "对象拷贝", link: "/javascript/copy" },
          { text: "构造函数", link: "/javascript/constructor" },
          { text: "原型", link: "/javascript/prototype" },
          { text: "判断类型", link: "/javascript/check-type" },
          { text: "闭包", link: "/javascript/closure" },
          { text: "this", link: "/javascript/this" },
          { text: "箭头函数", link: "/javascript/arrow" },
          { text: "ES6 新特性", link: "/javascript/es6" },
          { text: "WebSocket", link: "/javascript/websocket" },
          { text: "数组", link: "/javascript/array" },
          { text: "性能优化", link: "/javascript/performance" },
          { text: "防抖和节流", link: "/javascript/debounce-throttle" },
          { text: "EventBus", link: "/javascript/eventbus" },
          { text: "Promise", link: "/javascript/promise" },
          { text: "手写 Promise 静态方法", link: "/javascript/promise-static" },
          { text: "手撕题", link: "/javascript/code" },
        ],
      },
      {
        text: "浏览器",
        items: [
          { text: "事件循环", link: "/browser/event-loop" },
          { text: "跨域", link: "/browser/cross-origin" },
          { text: "输入 URL 后发生了什么", link: "/browser/after-input-url" },
          { text: "Cookie", link: "/browser/cookie" },
          { text: "localStorage", link: "/browser/localstorage" },
          { text: "IndexedDB", link: "/browser/indexeddb" },
          { text: "事件", link: "/browser/event" },
          { text: "事件委托", link: "/browser/event-delegation" },
          { text: "回流和重绘", link: "/browser/reflow-repaint" },
        ],
      },
      {
        text: "HTTP",
        items: [
          { text: "版本", link: "/http/version" },
          { text: "报文结构", link: "/http/message" },
          { text: "方法", link: "/http/method" },
          { text: "请求头", link: "/http/request-headers" },
          { text: "状态码", link: "/http/status-code" },
          { text: "缓存", link: "/http/cache" },
          { text: "HTTPS", link: "/http/https" },
        ],
      },
      {
        text: "网络基础",
        items: [
          { text: "协议栈", link: "/network/stack" },
          { text: "TCP", link: "/network/tcp" },
        ],
      },
      {
        text: "安全",
        items: [
          { text: "Web 安全", link: "/security/web" },
          { text: "加密", link: "/security/encryption" },
        ],
      },
      {
        text: "Vue",
        items: [
          { text: "生命周期", link: "/vue/lifecycle" },
          { text: "组件通信", link: "/vue/communication" },
          { text: "响应式系统", link: "/vue/reactive" },
          { text: "内置指令", link: "/vue/built-in-directives" },
          { text: "渲染", link: "/vue/render" },
          { text: "首屏渲染优化", link: "/vue/first-paint" },
          { text: "Vite", link: "/vue/vite" },
        ],
      },
      {
        text: "Vue Router",
        items: [
          { text: "历史模式", link: "/vue-router/history-mode" },
          { text: "实现原理", link: "/vue-router/implementation" },
        ],
      },
      {
        text: "算法",
        items: [
          { text: "排序", link: "/algorithm/sort" },
          { text: "二叉树遍历", link: "/algorithm/binary-tree" },
        ],
      },
      {
        text: "LeetCode",
        items: [{ text: "3. 无重复字符的最长子串", link: "/leetcode/3" }],
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
