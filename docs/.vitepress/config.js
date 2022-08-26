export default {
  base: "/",
  title: "Notes",
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: "https://github.com/hzy1721/notes" }],
    sidebar: [
      {
        text: "Vue",
        items: [
          { text: "生命周期", link: "/vue/lifecycle" },
          { text: "内置指令", link: "/vue/built-in-directives" },
          { text: "组件通信", link: "/vue/communication" },
          { text: "动态组件", link: "/vue/dynamic-component" },
          { text: "Object.defineProperty", link: "/vue/defineproperty" },
          { text: "内部方法", link: "/vue/internal-methods" },
          { text: "Proxy", link: "/vue/proxy" },
          { text: "Reflect", link: "/vue/reflect" },
          { text: "响应式实现", link: "/vue/reactive" },
          { text: "计算属性实现", link: "/vue/computed" },
          { text: "watch 实现", link: "/vue/watch" },
          { text: "对象响应式方案", link: "/vue/object-reactivity" },
          { text: "原始值响应式方案", link: "/vue/primitive-reactivity" },
          { text: "渲染", link: "/vue/render" },
          { text: "首屏渲染优化", link: "/vue/first-paint" },
          { text: "手写题", link: "/vue/code" },
        ],
      },
      {
        text: "算法",
        items: [
          { text: "排序", link: "/algorithm/sort" },
          { text: "Timsort", link: "/algorithm/timsort" },
          { text: "字符串", link: "/algorithm/string" },
          { text: "链表", link: "/algorithm/list" },
          { text: "栈队", link: "/algorithm/stack-queue" },
          { text: "二叉树", link: "/algorithm/binary-tree" },
          {
            text: "二叉树层序遍历",
            link: "/algorithm/binary-tree-level-order",
          },
          { text: "二叉树 DFS", link: "/algorithm/binary-tree-dfs" },
          { text: "平衡二叉树", link: "/algorithm/avl" },
        ],
      },
      {
        text: "LeetCode",
        items: [
          { text: "1. 两数之和", link: "/leetcode/1" },
          { text: "买卖股票的最佳时机", link: "/leetcode/stock" },
        ],
      },
      {
        text: "手写题",
        items: [
          { text: "防抖和节流", link: "/code/debounce-throttle" },
          { text: "Promise 静态方法", link: "/code/promise-static" },
          { text: "手写 Promise", link: "/code/promise" },
          { text: "柯里化", link: "/code/currying" },
          { text: "并发请求", link: "/code/concurrent-requests" },
          { text: "数组扁平化", link: "/code/array-flat" },
          { text: "有序数组去重", link: "/code/sorted-array-unique" },
          { text: "EventBus", link: "/code/eventbus" },
          { text: "深拷贝和浅拷贝", link: "/code/copy" },
          { text: "手写 new", link: "/code/new" },
          { text: "JSON 节点路径", link: "/code/json-node-path" },
          { text: "手写 setInterval", link: "/code/setinterval" },
          { text: "轮播图", link: "/code/slideshow" },
        ],
      },
      {
        text: "智力题",
        items: [
          { text: "智力题 (1)", link: "/iq/1" },
          { text: "智力题 (2)", link: "/iq/2" },
        ],
      },
      {
        text: "安全",
        items: [
          { text: "Web 安全", link: "/security/web" },
          { text: "加密", link: "/security/encryption" },
          { text: "JWT", link: "/security/jwt" },
        ],
      },
      {
        text: "Vite",
        items: [
          { text: "前端构建工具", link: "/vite/build-tool" },
          { text: "Vite 简介", link: "/vite/intro" },
          { text: "Vite 架构", link: "/vite/arch" },
        ],
      },
      {
        text: "HTML",
        items: [{ text: "SVG", link: "/html/svg" }],
      },
      {
        text: "CSS",
        items: [
          { text: "选择器", link: "/css/selector" },
          { text: "优先级", link: "/css/priority" },
          { text: "position", link: "/css/position" },
          { text: "BFC/IFC", link: "/css/bfc-ifc" },
          { text: "flex 布局", link: "/css/flex" },
          { text: "grid 布局", link: "/css/grid" },
          { text: "table 布局", link: "/css/table" },
          { text: "隐藏元素", link: "/css/hide" },
          { text: "calc()", link: "/css/calc" },
          { text: "水平/垂直居中", link: "/css/center" },
          { text: "几何图形", link: "/css/shape" },
          { text: "文本溢出省略", link: "/css/text-overflow" },
          { text: "三栏布局", link: "/css/three-column" },
          { text: "transform", link: "/css/transform" },
          { text: "单位", link: "/css/unit" },
          { text: "自适应", link: "/css/responsive" },
          { text: "CSS 动画", link: "/css/animation" },
        ],
      },
      {
        text: "JavaScript",
        items: [
          { text: "let 和 const", link: "/javascript/let-const" },
          { text: "数据类型", link: "/javascript/data-type" },
          { text: "可迭代对象", link: "/javascript/iterable" },
          { text: "构造函数", link: "/javascript/constructor" },
          { text: "class", link: "/javascript/class" },
          { text: "原型", link: "/javascript/prototype" },
          { text: "判断类型", link: "/javascript/check-type" },
          { text: "闭包", link: "/javascript/closure" },
          { text: "this", link: "/javascript/this" },
          { text: "箭头函数", link: "/javascript/arrow" },
          { text: "ES6 新特性", link: "/javascript/es6" },
          { text: "WebSocket", link: "/javascript/websocket" },
          { text: "BigInt", link: "/javascript/bigint" },
          { text: "Symbol", link: "/javascript/symbol" },
          { text: "对象", link: "/javascript/object" },
          { text: "数组", link: "/javascript/array" },
          { text: "Set", link: "/javascript/set" },
          { text: "Map", link: "/javascript/map" },
          { text: "性能优化", link: "/javascript/performance" },
          { text: "事件循环", link: "/javascript/event-loop" },
          { text: "Promise", link: "/javascript/promise" },
          { text: "手撕题", link: "/javascript/code" },
          { text: "fetch", link: "/javascript/fetch" },
        ],
      },
      {
        text: "浏览器",
        items: [
          { text: "跨域", link: "/browser/cross-origin" },
          { text: "输入 URL 后发生了什么", link: "/browser/after-input-url" },
          { text: "Cookie", link: "/browser/cookie" },
          { text: "localStorage", link: "/browser/localstorage" },
          { text: "IndexedDB", link: "/browser/indexeddb" },
          { text: "事件", link: "/browser/event" },
          { text: "事件委托", link: "/browser/event-delegation" },
          { text: "回流和重绘", link: "/browser/reflow-repaint" },
          { text: "拖拽事件", link: "/browser/drag" },
          { text: "不同标签页通信", link: "/browser/tab-communication" },
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
          { text: "DNS", link: "/network/dns" },
        ],
      },
      {
        text: "操作系统基础",
        items: [
          { text: "进程和线程", link: "/os/process-thread" },
          { text: "进程通信", link: "/os/ipc" },
          { text: "线程通信", link: "/os/thread-communication" },
        ],
      },
      {
        text: "Vue Router",
        items: [
          { text: "历史模式", link: "/vue-router/history-mode" },
          { text: "实现原理", link: "/vue-router/implementation" },
          { text: "window.location", link: "/vue-router/window-location" },
          { text: "window.history", link: "/vue-router/window-history" },
        ],
      },
      {
        text: "Vuex",
        items: [{ text: "原理", link: "/vuex/principle" }],
      },
      {
        text: "Dexie",
        items: [{ text: "liveQuery", link: "/dexie/livequery" }],
      },
      {
        text: "设计",
        items: [{ text: "高并发", link: "/design/high-concurrency" }],
      },
      {
        text: "软件工程",
        items: [{ text: "TDD", link: "/se/tdd" }],
      },
      {
        text: "杂项",
        items: [{ text: "UTF-8", link: "/misc/utf-8" }],
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
