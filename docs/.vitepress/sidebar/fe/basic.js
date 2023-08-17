export default [
  {
    text: 'HTML',
    items: [
      { text: '语义化标签', link: '/fe/basic/html/semantics' },
      { text: 'iframe', link: '/fe/basic/html/iframe' },
      { text: 'SVG', link: '/fe/basic/html/svg' },
      { text: '&lt;img&gt;', link: '/fe/basic/html/img' },
      { text: '无障碍', link: '/fe/basic/html/accessibility' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'CSS',
    items: [
      { text: '盒子模型', link: '/fe/basic/css/box-model' },
      { text: '选择器', link: '/fe/basic/css/selector' },
      { text: '优先级', link: '/fe/basic/css/priority' },
      { text: 'position', link: '/fe/basic/css/position' },
      { text: 'BFC/IFC', link: '/fe/basic/css/bfc-ifc' },
      { text: '隐藏元素', link: '/fe/basic/css/hide' },
      { text: 'calc()', link: '/fe/basic/css/calc' },
      { text: '水平/垂直居中', link: '/fe/basic/css/center' },
      { text: '几何图形', link: '/fe/basic/css/shape' },
      { text: '文本溢出省略', link: '/fe/basic/css/text-overflow' },
      { text: '单位', link: '/fe/basic/css/unit' },
      { text: '自适应', link: '/fe/basic/css/responsive' },
      { text: 'transform', link: '/fe/basic/css/transform' },
      { text: 'CSS 3 新增内容', link: '/fe/basic/css/css-3' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'CSS：布局',
    items: [
      { text: 'flex 布局', link: '/fe/basic/css/flex' },
      { text: 'grid 布局', link: '/fe/basic/css/grid' },
      { text: '多列布局', link: '/fe/basic/css/column-layout' },
      { text: '三栏布局', link: '/fe/basic/css/three-column' },
      { text: '上中下布局', link: '/fe/basic/css/top-middle-bottom' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'CSS：动画',
    items: [
      { text: 'transition', link: '/fe/basic/css/transition' },
      { text: 'animation', link: '/fe/basic/css/animation' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：原始类型',
    items: [
      { text: '数据类型', link: '/fe/basic/js/data-type' },
      { text: '类型判断', link: '/fe/basic/js/check-type' },
      { text: '类型转换', link: '/fe/basic/js/type-conversion' },
      { text: '值比较', link: '/fe/basic/js/comparison' },
      { text: 'Number', link: '/fe/basic/js/number' },
      { text: 'BigInt', link: '/fe/basic/js/bigint' },
      { text: 'Symbol', link: '/fe/basic/js/symbol' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：对象',
    items: [
      { text: '对象', link: '/fe/basic/js/object' },
      { text: '遍历属性', link: '/fe/basic/js/enumerate-prop' },
      { text: '构造函数', link: '/fe/basic/js/constructor' },
      { text: '原型', link: '/fe/basic/js/prototype' },
      { text: '继承', link: '/fe/basic/js/inheritance' },
      { text: 'class', link: '/fe/basic/js/class' },
      { text: 'Object 方法', link: '/fe/basic/js/object-method' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：函数',
    items: [
      { text: 'Function', link: '/fe/basic/js/function/function' },
      { text: 'this', link: '/fe/basic/js/function/this' },
      { text: '闭包', link: '/fe/basic/js/function/closure' },
      { text: '箭头函数', link: '/fe/basic/js/arrow' },
      { text: '柯里化', link: '/fe/basic/js/function/currying' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：数组/Set/Map',
    items: [
      { text: '数组', link: '/fe/basic/js/array' },
      { text: '数组方法', link: '/fe/basic/js/array-method' },
      { text: 'Timsort', link: '/fe/basic/js/timsort' },
      { text: 'Set', link: '/fe/basic/js/set' },
      { text: 'Map', link: '/fe/basic/js/map' },
      { text: '可迭代对象', link: '/fe/basic/js/iterable' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：Promise',
    items: [
      { text: 'Promise', link: '/fe/basic/js/promise' },
      { text: 'Promise 静态方法', link: '/fe/basic/js/promise-static' },
      { text: '手写 Promise', link: '/fe/basic/js/own-promise' },
      {
        text: '手写 Promise 静态方法',
        link: '/fe/basic/js/own-promise-static',
      },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：正则',
    items: [
      { text: '正则表达式', link: '/fe/basic/regexp/regexp' },
      { text: '字符串方法', link: '/fe/basic/regexp/string-method' },
      { text: 'RegExp 方法', link: '/fe/basic/regexp/regexp-method' },
      { text: '常用正则', link: '/fe/basic/regexp/common-regexp' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：二进制',
    items: [
      { text: 'ArrayBuffer', link: '/fe/basic/js/binary/array-buffer' },
      { text: 'TypedArray', link: '/fe/basic/js/binary/typed-array' },
      { text: 'DataView', link: '/fe/basic/js/binary/data-view' },
      { text: 'TextDecoder', link: '/fe/basic/js/binary/text-decoder' },
      { text: 'TextEncoder', link: '/fe/basic/js/binary/text-encoder' },
      { text: 'Blob', link: '/fe/basic/js/binary/blob' },
      { text: 'File', link: '/fe/basic/js/binary/file' },
      { text: 'FileReader', link: '/fe/basic/js/binary/file-reader' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: 'JS：其他',
    items: [
      { text: '变量声明', link: '/fe/basic/js/variable' },
      { text: 'Date', link: '/fe/basic/js/date' },
      { text: 'JSON', link: '/fe/basic/js/json' },
      { text: 'URL 编码', link: '/fe/basic/js/encode-url' },
      { text: 'URL 对象', link: '/fe/basic/js/url' },
      { text: 'MutationObserver', link: '/fe/basic/js/mutation-observer' },
      { text: 'ES6 新特性', link: '/fe/basic/js/es6' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
