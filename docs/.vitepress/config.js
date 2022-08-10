export default {
  base: "/",
  title: "Notes",
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/hzy1721/notes" },
    ],
    sidebar: [
      {
        text: '浏览器',
        items: [
          { text: '跨域', link: '/browser/cross-origin' }
        ]
      },
      {
        text: 'Nest',
        items: [
          { text: 'NestJS Fundamentals Course', link: '/nest/fundamentals-course' },
        ]
      }
    ]
  },
};
