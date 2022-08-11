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
        ],
      },
      {
        text: "JavaScript",
        items: [
          { text: "let 和 const", link: "/javascript/let-const" },
          { text: "构造函数", link: "/javascript/constructor" },
          { text: "原型", link: "/javascript/prototype" },
          { text: "闭包", link: "/javascript/closure" },
          { text: "ES6 新特性", link: "/javascript/es6" },
        ],
      },
      {
        text: "浏览器",
        items: [
          { text: "跨域", link: "/browser/cross-origin" },
          { text: "输入 URL 后发生了什么", link: "/browser/after-input-url" },
          { text: "事件委托", link: "/browser/event-delegation" },
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
